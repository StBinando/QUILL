package com.codeclan.example.quill.controllers;

import com.codeclan.example.quill.models.ProfilePicture;
import com.codeclan.example.quill.models.User;
import com.codeclan.example.quill.models.UserProfile;
import com.codeclan.example.quill.repositories.ProfilePictureRepository;
import com.codeclan.example.quill.repositories.UserProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
public class UserProfileController {

    @Autowired
    UserProfileRepository userProfileRepository;
    @Autowired
    ProfilePictureRepository profilePictureRepository;

    @GetMapping(value = "/userprofiles")
    public ResponseEntity<List<UserProfile>> getUserProfiles(){
        return new ResponseEntity<>(userProfileRepository.findAll(), HttpStatus.OK);
    }

    @PutMapping (value = "/userprofiles/{id}")
    public UserProfile addUser(@PathVariable(name = "id") Long id,
                               @RequestBody UserProfile _userProfile)
            throws IOException {
        Optional<UserProfile> oldRecord = userProfileRepository.findById(id);
        ProfilePicture profilePicture = oldRecord.get().getProfilepicture();
        UserProfile userProfile = _userProfile;
        userProfile.setProfilepicture(profilePicture);
        userProfile.setId(id);
        userProfileRepository.save(userProfile);

        return userProfile;
    }

    @GetMapping(value = "userprofile/{id}/profilepicture")
    public ResponseEntity<byte[]> getProfilePictureByUserProfileId(@PathVariable Long id) {
        Optional<UserProfile> userProfile = userProfileRepository.findById(id);
        ProfilePicture profilePicture = userProfile.get().getProfilepicture();
//        Optional<ProfilePicture> profilePicture = profilePictureRepository.findById(picture_id);

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.IMAGE_JPEG);
        headers.setContentDispositionFormData("output.jpg","output.jpg");
        headers.setCacheControl("must-revalidate, post-check=0,pre-check=0");
        ResponseEntity<byte[]> response = new ResponseEntity<>(profilePicture.getPicture(),headers, HttpStatus.OK);
        return response;
    }

//        @GetMapping (value = "userprofile/{id}/profilepicture")
}
