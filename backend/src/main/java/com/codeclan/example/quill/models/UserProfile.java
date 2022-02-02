package com.codeclan.example.quill.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.List;


@Entity
@Table(name = "userprofiles")
@JsonIgnoreProperties({"user", "profilepicture", "scripts"})
public class UserProfile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @OneToOne(mappedBy = "userProfile")
    private User user;


    @Column(name = "name")
    private String name;

    @Column(name = "bio")
    private String bio;

    @Column(name = "user_type")
    @Enumerated(value = EnumType.STRING)
    private UserType userType;


    @OneToOne(cascade = CascadeType.REMOVE)
//    @JsonBackReference
    private ProfilePicture profilepicture;

    @OneToMany(mappedBy = "userProfile", cascade = CascadeType.REMOVE)
//    @JsonBackReference
    private List<Script> scripts;



//    @OneToOne(cascade = CascadeType.ALL)
//    @JoinColumn(name = "company_id", referencedColumnName = "id")
//    private Company company;
//
//    @ManyToMany(mappedBy = "author", cascade = CascadeType.REMOVE)
//    @JsonBackReference
//    private List<Script> scripts;


//    *******************************************************
//                       CONSTRUCTORS
//    *******************************************************

    public UserProfile() {
    }

    public UserProfile(String name,
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
}
