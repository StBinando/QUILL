package com.codeclan.example.quill.controllers;

import com.codeclan.example.quill.models.*;
//import com.codeclan.example.quill.repositories.AuthorRepository;
//import com.codeclan.example.quill.repositories.CompanyRepository;
import com.codeclan.example.quill.repositories.UserProfileRepository;
import com.codeclan.example.quill.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@RestController
public class UserController {
    @Autowired
    UserRepository userRepository;
    @Autowired
    UserProfileRepository userProfileRepository;

    @GetMapping(value = "/users")
    public ResponseEntity<List<User>> getUsers(){
        return new ResponseEntity<>(userRepository.findAll(), HttpStatus.OK);
    }

    @PostMapping(value = "/user/create/{usertype}")
    public User addUser(@PathVariable(name = "usertype") UserType usertype,
                          @RequestBody User _user)
    throws IOException {
        UserProfile newUserProfile = new UserProfile();

//        if (usertype == UserType.AUTHOR){
//        } else {
//        }

        newUserProfile.setUserType(usertype);
        userProfileRepository.save(newUserProfile);
        User newUser = _user;
        newUser.setUserprofile(newUserProfile);
        userRepository.save(newUser);

        return newUser;
    }

    @DeleteMapping(value = "/user/{id}")
    public List<User> deleteUserById(@PathVariable(name = "id") Long id){
        userRepository.deleteById(id);
        return userRepository.findAll();
    }


}
