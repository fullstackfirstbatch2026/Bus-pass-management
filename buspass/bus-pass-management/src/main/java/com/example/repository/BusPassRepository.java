package com.example.repository;

import com.example.dto.BusPassView;
import com.example.entity.BusPass;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface BusPassRepository extends JpaRepository<BusPass, Long> {

    @Query(value = """
        SELECT
            bp.pass_id AS passId,
            p.name AS passengerName,
            r.route_name AS routeName,
            r.source AS source,
            r.destination AS destination,
            pt.pass_type_name AS passTypeName,
            pt.price AS price,
            bp.issue_date AS issueDate,
            bp.expiry_date AS expiryDate,
            bp.status AS status
        FROM bus_passes bp
        JOIN passengers p
            ON bp.passenger_id = p.passenger_id
        JOIN routes r
            ON bp.route_id = r.route_id
        JOIN pass_types pt
            ON bp.pass_type_id = pt.pass_type_id
        ORDER BY bp.pass_id DESC
        """, nativeQuery = true)
    List<BusPassView> findAllWithDetails();
}