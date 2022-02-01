package com.codeclan.example.quill.controllers;

import com.codeclan.example.quill.models.PaymentMethod;
import com.codeclan.example.quill.models.User;
import com.codeclan.example.quill.repositories.PayingMethodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PayingMethodController {
    @Autowired
    PayingMethodRepository payingMethodRepository;

    @GetMapping(value = "/payingmethods")
    public ResponseEntity<List<PaymentMethod>> getPayingMethod(){
        return new ResponseEntity<>(payingMethodRepository.findAll(), HttpStatus.OK);
    }

}
