package com.codeclan.example.quill.models;

import javax.persistence.*;

@Entity
public class PDF {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "pdf")
    @Lob
    private byte[] pdfdata;

    @OneToOne(mappedBy = "pdf")
    private ScriptsData scriptsData;

    public PDF() {
    }

    public PDF(byte[] pdf) {
        this.pdfdata = pdf;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public byte[] getPdfdata() {
        return pdfdata;
    }

    public void setPdfdata(byte[] pdfdata) {
        this.pdfdata = pdfdata;
    }
}
