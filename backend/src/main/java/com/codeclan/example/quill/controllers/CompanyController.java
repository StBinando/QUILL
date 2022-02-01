package com.codeclan.example.quill.controllers;

import com.codeclan.example.quill.models.Company;
import com.codeclan.example.quill.repositories.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CompanyController {
    @Autowired
    CompanyRepository companyRepository;

    @GetMapping(value = "/companies")
    public ResponseEntity<List<Company>> getCompanies(){
        return new ResponseEntity<>(companyRepository.findAll(), HttpStatus.OK);
    }

}
