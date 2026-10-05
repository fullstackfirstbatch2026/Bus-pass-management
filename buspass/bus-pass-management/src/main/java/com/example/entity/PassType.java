package com.example.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "pass_types")
public class PassType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long passTypeId;

    private String passTypeName;
    private Integer durationDays;
    private Double price;

    public PassType() {
    }

    public Long getPassTypeId() {
        return passTypeId;
    }

    public void setPassTypeId(Long passTypeId) {
        this.passTypeId = passTypeId;
    }

    public String getPassTypeName() {
        return passTypeName;
    }

    public void setPassTypeName(String passTypeName) {
        this.passTypeName = passTypeName;
    }

    public Integer getDurationDays() {
        return durationDays;
    }

    public void setDurationDays(Integer durationDays) {
        this.durationDays = durationDays;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }
}