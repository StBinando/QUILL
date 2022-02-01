package com.codeclan.example.quill.controllers;

import com.codeclan.example.quill.models.ProfilePicture;
import com.codeclan.example.quill.repositories.ProfilePictureRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
public class ProfilePictureController {
    @Autowired
    ProfilePictureRepository profilePictureRepository;

    @GetMapping(value = "/profilepictures")
    public ResponseEntity<List<ProfilePicture>> getProfilePictures(){
        return new ResponseEntity<>(profilePictureRepository.findAll(), HttpStatus.OK);
    }

    @PostMapping(value = "/profilepicture/add")
    public String addProfilePicture(@RequestParam("profilepicture") MultipartFile pic, Model model)
            throws IOException {
        ProfilePicture picToSave = new ProfilePicture();
        picToSave.setPicture(pic.getBytes());

        profilePictureRepository.save(picToSave);

        return "redirect:/profilepictures/" + picToSave.getId();
    }

    @GetMapping(value = "/profilepictures/{id}")
    public ResponseEntity<byte[]> getProfilePictureById(@PathVariable Long id) {
        Optional<ProfilePicture> profilePicture = profilePictureRepository.findById(id);

        System.out.println(System.getProperty("user.dir"));  // print working directory on console

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.IMAGE_JPEG);
        headers.setContentDispositionFormData("output.jpg","output.jpg");
        headers.setCacheControl("must-revalidate, post-check=0,pre-check=0");
        ResponseEntity<byte[]> response = new ResponseEntity<>(profilePicture.get().getPicture(),headers, HttpStatus.OK);
        return response;
    }
}
