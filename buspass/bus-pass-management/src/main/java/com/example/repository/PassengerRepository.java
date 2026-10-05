package com.example.repository;

import com.example.entity.Passenger;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PassengerRepository extends JpaRepository<Passenger, Long> {

    /*
     * SUBQUERY:
     * Finds passengers who have at least one bus pass.
     */
    @Query(value = """
        SELECT *
        FROM passengers p
        WHERE p.passenger_id IN (
            SELECT bp.passenger_id
            FROM bus_passes bp
        )
        """, nativeQuery = true)
    List<Passenger> findPassengersWithBusPasses();

}