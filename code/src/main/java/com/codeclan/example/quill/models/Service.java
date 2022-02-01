package com.codeclan.example.quill.models;

import javax.persistence.*;

@Entity
@Table(name = "services")
public class Service{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "name", nullable = true)
    private String name;

    @Column(name = "bio", nullable = true)
    private String bio;

    @Column(name = "profilepic", nullable = true)
    private String profilePic;


    public Service() {
    }

    public Service(String name, String bio, String profilePic) {
        this.name = name;
        this.bio = bio;
        this.profilePic = profilePic;
    }
}
