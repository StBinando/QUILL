package com.codeclan.example.quill.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.List;


@Entity
@Table(name = "profiles")
@JsonIgnoreProperties({"user", "profilepicture", "scripts", "licenses"})
public class Profile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @OneToOne(mappedBy = "profile")
    private User user;


    @Column(name = "name")
    private String name;

    @Column(name = "bio", length = 10000)
    private String bio;

    @Column(name = "user_type")
    @Enumerated(value = EnumType.STRING)
    private UserType userType;


    @OneToOne(cascade = CascadeType.REMOVE)
    private ProfilePicture profilepicture;

    @OneToMany(mappedBy = "profile")//, cascade = CascadeType.REMOVE)
    //@OneToMany
    private List<Script> scripts;

    @OneToMany(mappedBy = "profile")//, cascade = CascadeType.REMOVE)
    private List<License> licenses;


//    *******************************************************
//                       CONSTRUCTORS
//    *******************************************************

    public Profile() {
    }

    public Profile(String name,
                   String bio,
                   UserType userType) {
        this.name = name;
        this.bio = bio;
        this.userType = userType;
    }

//    *******************************************************
//                   GETTERS AND SETTERS
//    *******************************************************

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


    public ProfilePicture getProfilepicture() {
        return profilepicture;
    }

    public void setProfilepicture(ProfilePicture profilepicture) {
        this.profilepicture = profilepicture;
    }

    public UserType getUserType() {
        return userType;
    }

    public void setUserType(UserType userType) {
        this.userType = userType;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public List<Script> getScripts() {
        return scripts;
    }

    public void setScripts(List<Script> scripts) {
        this.scripts = scripts;
    }

    public List<License> getLicenses() {
        return licenses;
    }

    public void setLicenses(List<License> licenses) {
        this.licenses = licenses;
    }
}
