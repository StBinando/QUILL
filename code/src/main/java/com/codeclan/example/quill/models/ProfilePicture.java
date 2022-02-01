package com.codeclan.example.quill.models;

import javax.persistence.*;

@Entity
@Table(name ="profilepictures")
public class ProfilePicture {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "profilepicture")
    @Lob
    private byte[] picture;

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

    public void setPicture(byte[] picture) {
        this.picture = picture;
    }
}
