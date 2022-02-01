package com.codeclan.example.quill.controllers;

import com.codeclan.example.quill.models.BankAccount;
import com.codeclan.example.quill.repositories.BankAccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class BankAccountController {
    @Autowired
    BankAccountRepository bankAccountRepository;

    @GetMapping(value = "/bankAccounts")
    public ResponseEntity<List<BankAccount>> getBankAccounts(){
        return new ResponseEntity<>(bankAccountRepository.findAll(), HttpStatus.OK);
    }
}
