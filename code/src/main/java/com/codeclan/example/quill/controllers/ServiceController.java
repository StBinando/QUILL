package com.codeclan.example.quill.controllers;

import com.codeclan.example.quill.models.Service;
import com.codeclan.example.quill.repositories.ServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ServiceController {
    @Autowired
    ServiceRepository serviceRepository;

    @GetMapping(value = "/services")
    public ResponseEntity<List<Service>> getServices(){
        return new ResponseEntity<>(serviceRepository.findAll(), HttpStatus.OK);
    }
}
