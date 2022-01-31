package com.codeclan.example.quill.controllers;

import com.codeclan.example.quill.models.Test1;
import com.codeclan.example.quill.repositories.Test1Repo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class Test1Controller {
    @Autowired
    Test1Repo test1Repo;

    @GetMapping(value = "/test")
        public List<Test1> getTest(){
        return test1Repo.findAll();
    }
    @DeleteMapping(value = "/test/{id}")
        public List<Test1> deleteById(@PathVariable Long id){
        test1Repo.deleteById(id);
        return test1Repo.findAll();
    }
}
