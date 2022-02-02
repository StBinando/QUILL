package com.codeclan.example.quill.controllers;

import com.codeclan.example.quill.models.*;
import com.codeclan.example.quill.repositories.LicenseRepository;
import com.codeclan.example.quill.repositories.ScriptRepository;
import com.codeclan.example.quill.repositories.UserProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
public class LicenseController {
    @Autowired
    LicenseRepository licenseRepository;
    @Autowired
    UserProfileRepository userProfileRepository;
    @Autowired
    ScriptRepository scriptRepository;

    @PostMapping(value = "/license/add/user/{id1}/script/{id2}")
    public License addLicense(@PathVariable Long id1,
                              @PathVariable Long id2)
            throws IOException {
        UserProfile userProfile = userProfileRepository.getById(id1);
        Script script = scriptRepository.getById(id2);
        License license = new License(userProfile, script);

        licenseRepository.save(license);
        return licenseRepository.getById(license.getId());
//        return "license created";
    }

    @GetMapping(value = "/licenses")
    public ResponseEntity<List<License>> getLicenses(){
        return new ResponseEntity<>(licenseRepository.findAll(), HttpStatus.OK);
    }
}
