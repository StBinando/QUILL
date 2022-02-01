package com.codeclan.example.quill.controllers;

import com.codeclan.example.quill.models.User;
import com.codeclan.example.quill.models.UserProfile;
import com.codeclan.example.quill.repositories.UserProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
public class UserProfileController {

    @Autowired
    UserProfileRepository userProfileRepository;

    @GetMapping(value = "/userprofiles")
    public ResponseEntity<List<UserProfile>> getUserProfiles(){
        return new ResponseEntity<>(userProfileRepository.findAll(), HttpStatus.OK);
    }

    @PutMapping (value = "/userprofiles/{id}")
    public UserProfile addUser(@PathVariable(name = "id") Long id,
                               @RequestBody UserProfile _userProfile)
            throws IOException {
        UserProfile userProfile = _userProfile;
        userProfile.setId(id);
        userProfileRepository.save(userProfile);

        return userProfile;
    }
}
