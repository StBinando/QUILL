package com.codeclan.example.quill.models;

import com.sun.corba.se.spi.legacy.connection.GetEndPointInfoAgainException;

import javax.persistence.*;

@Entity
public abstract class UserProfile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "name", nullable = true)
    private String name;

    @Column(name = "bio", nullable = true)
    private String bio;

    @Column(name = "profilePic", nullable = true)
    private String profilePic;

    public UserProfile() {
    }

    public UserProfile(String name, String bio, String profilePic) {
        this.name = name;
        this.bio = bio;
        this.profilePic = profilePic;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public String getProfilePic() {
        return profilePic;
    }

    public void setProfilePic(String profilePic) {
        this.profilePic = profilePic;
    }
}
