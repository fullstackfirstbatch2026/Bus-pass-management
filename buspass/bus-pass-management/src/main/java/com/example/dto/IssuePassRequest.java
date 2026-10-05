package com.example.dto;

public class IssuePassRequest {

    private Long passengerId;
    private Long routeId;
    private Long passTypeId;

    public IssuePassRequest() {
    }

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
}