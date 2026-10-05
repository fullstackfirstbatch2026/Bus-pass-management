package com.example.repository;

import com.example.entity.PassType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PassTypeRepository extends JpaRepository<PassType, Long> {

    /*
     * SUBQUERY:
     * Finds pass types that are used by at least one bus pass.
     */
    @Query(value = """
        SELECT *
        FROM pass_types pt
        WHERE pt.pass_type_id IN (
            SELECT bp.pass_type_id
            FROM bus_passes bp
        )
        """, nativeQuery = true)
    List<PassType> findUsedPassTypes();

}