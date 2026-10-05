package com.example.dto;

import java.time.LocalDate;

public interface BusPassView {

    Long getPassId();

    String getPassengerName();

    String getRouteName();

    String getSource();

    String getDestination();

    String getPassTypeName();

    Double getPrice();

    LocalDate getIssueDate();

    LocalDate getExpiryDate();

    String getStatus();
}