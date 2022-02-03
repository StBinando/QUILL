package com.codeclan.example.quill.controllers;

import com.codeclan.example.quill.models.*;
import com.codeclan.example.quill.repositories.LicenseRepository;
import com.codeclan.example.quill.repositories.ProfilePictureRepository;
import com.codeclan.example.quill.repositories.ScriptRepository;
import com.codeclan.example.quill.repositories.UserProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
public class UserProfileController {

    @Autowired
    UserProfileRepository userProfileRepository;
    @Autowired
    ProfilePictureRepository profilePictureRepository;
    @Autowired
    ScriptRepository scriptRepository;
    @Autowired
    LicenseRepository licenseRepository;

    @GetMapping(value = "/userprofiles")
    public ResponseEntity<List<Profile>> getUserProfiles(){
        return new ResponseEntity<>(userProfileRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/userprofiles/{id}")
    public ResponseEntity<Optional<Profile>> getUserProfiles(@PathVariable(name = "id") Long id){
        return new ResponseEntity<>(userProfileRepository.findById(id), HttpStatus.OK);
    }

    @PutMapping (value = "/userprofiles/{id}")
    public Profile addUser(@PathVariable(name = "id") Long id,
                           @RequestBody Profile _Profile)
            throws IOException {
        Optional<Profile> oldRecord = userProfileRepository.findById(id);
        ProfilePicture profilePicture = oldRecord.get().getProfilepicture();
        Profile profile = _Profile;
        profile.setProfilepicture(profilePicture);
        profile.setId(id);
        userProfileRepository.save(profile);

        return profile;
    }

    @GetMapping(value = "/userprofile/{id}/profilepicture")
    public ResponseEntity<byte[]> getProfilePictureByUserProfileId(@PathVariable Long id) {
        Optional<Profile> userProfile = userProfileRepository.findById(id);
        ProfilePicture profilePicture = userProfile.get().getProfilepicture();

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.IMAGE_JPEG);
        headers.setContentDispositionFormData("output.jpg","output.jpg");
        headers.setCacheControl("must-revalidate, post-check=0,pre-check=0");
        ResponseEntity<byte[]> response = new ResponseEntity<>(profilePicture.getPicture(),headers, HttpStatus.OK);
        return response;
    }

    @GetMapping(value = "/userprofile/{id}/scripts")
    public ResponseEntity<List<Script>> getScriptsByUserProfileId(@PathVariable Long id) {
        List<Script> scriptList = scriptRepository.getByProfileId(id);
        System.out.println(scriptList.size());


        return new ResponseEntity<>(scriptList,HttpStatus.OK);
    }

    @GetMapping(value = "/userprofile/{id}/licenses")
    public ResponseEntity<List<License>> getLicensesByUserProfileId(@PathVariable Long id){
        List<License> licenseList = licenseRepository.getByProfileId(id);
       return new ResponseEntity<>(licenseList, HttpStatus.OK);
    }

    @GetMapping(value = "/userprofile/{id}/licenses/scripts")
    public ResponseEntity<List<Script>> getScriptsByUserProfileIdAndlicense(@PathVariable Long id){
        List<Script> returnList = new ArrayList<>();
        List<License> licenseList = licenseRepository.getByProfileId(id);
        for(License l : licenseList){
            returnList.add(l.getScript());
        }
        return new ResponseEntity<>(returnList, HttpStatus.OK);
    }

}
