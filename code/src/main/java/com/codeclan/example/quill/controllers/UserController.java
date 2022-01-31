package com.codeclan.example.quill.controllers;

import com.codeclan.example.quill.models.ScriptsData;
import com.codeclan.example.quill.models.User;
import com.codeclan.example.quill.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {
    @Autowired
    UserRepository userRepository;

    @GetMapping(value = "/users")
    public ResponseEntity<List<User>> getScripts(){
        return new ResponseEntity<>(userRepository.findAll(), HttpStatus.OK);
    }
}
