package com.codeclan.example.quill.controllers;

import com.codeclan.example.quill.models.Author;
import com.codeclan.example.quill.repositories.AuthorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class AuthorController {
    @Autowired
    AuthorRepository authorRepository;

    @GetMapping(value = "/authors")
    public ResponseEntity<List<Author>> getAuthors(){
        return new ResponseEntity<>(authorRepository.findAll(), HttpStatus.OK);
    }
}
