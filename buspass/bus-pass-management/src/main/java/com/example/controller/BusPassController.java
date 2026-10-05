package com.example.controller;

import com.example.dto.BusPassView;
import com.example.repository.BusPassRepository;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/bus-passes")
@CrossOrigin(origins = "http://localhost:4200")
public class BusPassController {

    private final BusPassRepository busPassRepository;

    @PersistenceContext
    private EntityManager entityManager;

    public BusPassController(BusPassRepository busPassRepository) {
        this.busPassRepository = busPassRepository;
    }

    @GetMapping
    public List<BusPassView> getAllBusPasses() {
        return busPassRepository.findAllWithDetails();
    }

    @PostMapping("/issue")
    public ResponseEntity<?> issueBusPass(
            @RequestBody IssuePassRequest request) {

        try {

            if (request.getPassengerId() == null ||
                request.getRouteId() == null ||
                request.getPassTypeId() == null ||
                request.getIssueDate() == null) {

                return ResponseEntity.badRequest().body(
                        Map.of(
                                "error",
                                "Passenger, route, pass type and issue date are required"
                        )
                );
            }

            Object result = entityManager
                    .createNativeQuery(
                            "CALL issue_bus_pass(?, ?, ?, ?)"
                    )
                    .setParameter(1, request.getPassengerId())
                    .setParameter(2, request.getRouteId())
                    .setParameter(3, request.getPassTypeId())
                    .setParameter(
                            4,
                            Date.valueOf(request.getIssueDate())
                    )
                    .getSingleResult();

            Long passId = ((Number) result).longValue();

            entityManager.clear();

            List<BusPassView> passes =
                    busPassRepository.findAllWithDetails();

            BusPassView createdPass = passes.stream()
                    .filter(pass -> pass.getPassId().equals(passId))
                    .findFirst()
                    .orElse(null);

            if (createdPass == null) {
                return ResponseEntity
                        .status(HttpStatus.CREATED)
                        .body(
                                Map.of(
                                        "message",
                                        "Bus pass issued successfully",
                                        "passId",
                                        passId
                                )
                        );
            }

            return ResponseEntity
                    .status(HttpStatus.CREATED)
                    .body(createdPass);

        } catch (Exception e) {

            e.printStackTrace();

            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(
                            Map.of(
                                    "error",
                                    "Failed to issue bus pass",
                                    "message",
                                    e.getMessage()
                            )
                    );
        }
    }

    public static class IssuePassRequest {

        private Long passengerId;
        private Long routeId;
        private Long passTypeId;
        private LocalDate issueDate;

        public Long getPassengerId() {
            return passengerId;
        }

        public void setPassengerId(Long passengerId) {
            this.passengerId = passengerId;
        }

        public Long getRouteId() {
            return routeId;
        }

        public void setRouteId(Long routeId) {
            this.routeId = routeId;
        }

        public Long getPassTypeId() {
            return passTypeId;
        }

        public void setPassTypeId(Long passTypeId) {
            this.passTypeId = passTypeId;
        }

        public LocalDate getIssueDate() {
            return issueDate;
        }

        public void setIssueDate(LocalDate issueDate) {
            this.issueDate = issueDate;
        }
    }
}