package com.example.repository;

import com.example.dto.AboveAverageRouteView;
import com.example.entity.Route;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface RouteRepository extends JpaRepository<Route, Long> {

    @Query(value = """
        SELECT
            r.route_id AS routeId,
            r.route_name AS routeName,
            r.source AS source,
            r.destination AS destination,
            COUNT(bp.pass_id) AS passCount
        FROM routes r
        JOIN bus_passes bp
            ON bp.route_id = r.route_id
        GROUP BY
            r.route_id,
            r.route_name,
            r.source,
            r.destination
        HAVING COUNT(bp.pass_id) >
        (
            SELECT AVG(route_count)
            FROM
            (
                SELECT COUNT(*) AS route_count
                FROM bus_passes
                GROUP BY route_id
            ) x
        )
        """, nativeQuery = true)
    List<AboveAverageRouteView> findAboveAverageRoutes();
}