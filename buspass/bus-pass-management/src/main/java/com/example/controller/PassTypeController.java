package com.example.controller;

import com.example.entity.PassType;
import com.example.repository.PassTypeRepository;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/pass-types")
@CrossOrigin(origins = "http://localhost:4200")
public class PassTypeController {

    private final PassTypeRepository passTypeRepository;

    public PassTypeController(PassTypeRepository passTypeRepository) {
        this.passTypeRepository = passTypeRepository;
    }

    @GetMapping
    public List<PassType> getAllPassTypes() {
        return passTypeRepository.findAll();
    }
}