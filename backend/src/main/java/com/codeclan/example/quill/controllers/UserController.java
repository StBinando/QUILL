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
    public Profile addUser(@PathVariable(name = "usertype") UserType usertype,
                          @RequestBody User _user)
    throws IOException {
        Profile newProfile = new Profile();
        newProfile.setUserType(usertype);
        userProfileRepository.save(newProfile);
        User newUser = _user;
        newUser.setProfile(newProfile);
        userRepository.save(newUser);

        return newProfile;
    }

    @DeleteMapping(value = "/user/{id}")
    public List<User> deleteUserById(@PathVariable(name = "id") Long id){
        userRepository.deleteById(id);
        return userRepository.findAll();
    }

    @GetMapping(value = "/user/validate")
    public ResponseEntity<Profile> validateUser(@RequestParam(name = "user") String _user,
                                                   @RequestParam(name = "pwd") String _pwd){
        List<User> users = userRepository.validateLogin(_user,_pwd);
        if (users.size() > 0){
            return new ResponseEntity<>(users.get(0).getProfile(), HttpStatus.OK);
        }
        Profile notFound = new Profile();
        return new ResponseEntity<>(notFound, HttpStatus.OK);
    }

}
