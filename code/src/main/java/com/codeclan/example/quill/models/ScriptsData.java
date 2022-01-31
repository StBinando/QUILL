package com.codeclan.example.quill.models;

import javax.persistence.*;


@Entity
@Table(name = "scriptsdata")
public class ScriptsData {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = true)
    private Long id;

    @Column(name = "title", nullable = true)
    private String title;

    @Column(name = "Author", nullable = true)
    private String author;

    @Column(name = "genre", nullable = true)
    private String genre;

    @Column(name = "length", nullable = true)
    private int length;

    @Column(name = "m", nullable = true)
    private int m;
    @Column(name = "f", nullable = true)
    private int f;
    @Column(name = "n", nullable = true)
    private int n;

    @Column(name = "language", nullable = true)
    private String language;

    @Column(name = "royaltyfree", nullable = true)
    private Boolean royaltyfree;

    @Column(name = "description", nullable = true)
    private String description;

    @Column(name = "tags")
    private String tags;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "pdf_id", referencedColumnName = "id")
    private PDF pdf;

    public ScriptsData(String title,PDF pdf){
        this.title = title;
        this.pdf = pdf;
    }

    public ScriptsData(String title,
                       String author,
                       String genre,
                       int length,
                       int m, int f, int n,
                       String language,
                       Boolean royaltyfree,
                       String description,
                       String tags,
                       PDF pdf) {
        this.title = title;
        this.author = author;
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
    }

    public ScriptsData() {
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

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
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

    public PDF getPdf() {
        return pdf;
    }

    public void setPdf(PDF pdf) {
        this.pdf = pdf;
    }
}

