package com.codeclan.example.quill.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;

@Entity
@Table(name ="profilepictures")
public class ProfilePicture {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "profilepicture")
    @JsonManagedReference
    @Lob
    private byte[] picture;

    @OneToOne(mappedBy = "profilepicture")
    @JsonManagedReference
    private Profile profile;

    public ProfilePicture() {
    }

    public ProfilePicture(byte[] picture) {
        this.picture = picture;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public byte[] getPicture() {
        return picture;
    }

    @JsonBackReference
    public void setPicture(byte[] picture) {
        this.picture = picture;
    }

    public Profile getUserProfile() {
        return profile;
    }

    public void setUserProfile(Profile profile) {
        this.profile = profile;
    }
}
