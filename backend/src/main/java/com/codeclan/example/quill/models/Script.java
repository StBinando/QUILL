package com.codeclan.example.quill.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;


@Entity
@Table(name = "scripts")
@JsonIgnoreProperties({"pdfRecord", "userProfile", "licenses"})
public class Script {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "authorname")
    private String authorname;

    @Column(name = "genre")
    private String genre;

    @Column(name = "length")
    private int length;

    @Column(name = "m")
    private int m;
    @Column(name = "f")
    private int f;
    @Column(name = "n")
    private int n;

    @Column(name = "language")
    private String language;

    @Column(name = "royaltyfree")
    private Boolean royaltyfree;

    @Column(name = "description")
    private String description;

    @Column(name = "tags")
    private String tags;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "pdf_id", referencedColumnName = "id")
    private PDF pdf;

    @Column(name = "uploadtime")
    private LocalDateTime uploadTime;

    @ManyToOne
    @JoinColumn(name = "userprofileid")
    private UserProfile userProfile;

//    @OneToMany
//    private List<License> licenses;


    public Script(String title,
                  String authorname,
                  String genre,
                  int length,
                  int m,
                  int f,
                  int n,
                  String language,
                  Boolean royaltyfree,
                  String description,
                  String tags,
                  PDF pdf) {
        this.title = title;
        this.authorname = authorname;
        this.genre = genre;
        this.length = length;
        this.m = m;
        this.f = f;
        this.n = n;
        this.language = language;
        this.royaltyfree = royaltyfree;
        this.description = description;
        this.tags = tags;
        this.pdf = pdf;
        this.uploadTime = null;
    }

    public Script() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthorname() {
        return authorname;
    }

    public void setAuthorname(String authorname) {
        this.authorname = authorname;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public int getLength() {
        return length;
    }

    public void setLength(int length) {
        this.length = length;
    }

    public int getM() {
        return m;
    }

    public void setM(int m) {
        this.m = m;
    }

    public int getF() {
        return f;
    }

    public void setF(int f) {
        this.f = f;
    }

    public int getN() {
        return n;
    }

    public void setN(int n) {
        this.n = n;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public Boolean getRoyaltyfree() {
        return royaltyfree;
    }

    public void setRoyaltyfree(Boolean royaltyfree) {
        this.royaltyfree = royaltyfree;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getTags() {
        return tags;
    }

    public void setTags(String tags) {
        this.tags = tags;
    }

    public PDF getPdfRecord() {
        return pdf;
    }

    public void setPdfRecord(PDF pdf) {
        this.pdf = pdf;
    }

    public LocalDateTime getUploadTime() {
        return uploadTime;
    }

    public void setUploadTime(LocalDateTime uploadTime) {
        this.uploadTime = uploadTime;
    }

    public UserProfile getUserProfile() {
        return userProfile;
    }

    public void setUserProfile(UserProfile userProfile) {
        this.userProfile = userProfile;
    }

//    public List<License> getLicenses() {
//        return licenses;
//    }
//
//    public void setLicenses(List<License> licenses) {
//        this.licenses = licenses;
//    }
}

