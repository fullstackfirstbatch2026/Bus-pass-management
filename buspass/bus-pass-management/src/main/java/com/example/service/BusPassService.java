package com.example.service;

import com.example.dto.IssuePassRequest;
import com.example.entity.BusPass;
import com.example.repository.BusPassRepository;

import jakarta.persistence.EntityManager;
import jakarta.persistence.ParameterMode;
import jakarta.persistence.StoredProcedureQuery;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class BusPassService {

    private final BusPassRepository busPassRepository;
    private final EntityManager entityManager;

    public BusPassService(
            BusPassRepository busPassRepository,
            EntityManager entityManager) {

        this.busPassRepository = busPassRepository;
        this.entityManager = entityManager;
    }

    @Transactional
    public BusPass issueBusPass(IssuePassRequest request) {

        StoredProcedureQuery query =
                entityManager.createStoredProcedureQuery("issue_bus_pass");

        query.registerStoredProcedureParameter(
                "p_passenger_id",
                Long.class,
                ParameterMode.IN
        );

        query.registerStoredProcedureParameter(
                "p_route_id",
                Long.class,
                ParameterMode.IN
        );

        query.registerStoredProcedureParameter(
                "p_pass_type_id",
                Long.class,
                ParameterMode.IN
        );

        query.registerStoredProcedureParameter(
                "p_new_pass_id",
                Long.class,
                ParameterMode.OUT
        );

        query.setParameter(
                "p_passenger_id",
                request.getPassengerId()
        );

        query.setParameter(
                "p_route_id",
                request.getRouteId()
        );

        query.setParameter(
                "p_pass_type_id",
                request.getPassTypeId()
        );

        query.execute();

        Long newPassId =
                ((Number) query
                        .getOutputParameterValue("p_new_pass_id"))
                        .longValue();

        return busPassRepository
                .findById(newPassId)
                .orElseThrow();
    }
}