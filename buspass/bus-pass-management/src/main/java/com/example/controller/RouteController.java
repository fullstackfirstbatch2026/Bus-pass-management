package com.example.controller;

import com.example.dto.AboveAverageRouteView;
import com.example.entity.Route;
import com.example.repository.RouteRepository;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/routes")
@CrossOrigin(origins = "http://localhost:4200")
public class RouteController {

    private final RouteRepository routeRepository;

    public RouteController(RouteRepository routeRepository) {
        this.routeRepository = routeRepository;
    }

    // Get all routes
    @GetMapping
    public List<Route> getAllRoutes() {
        return routeRepository.findAll();
    }

    // Get routes having registrations above average
    @GetMapping("/above-average")
    public List<AboveAverageRouteView> getAboveAverageRoutes() {
        return routeRepository.findAboveAverageRoutes();
    }
}