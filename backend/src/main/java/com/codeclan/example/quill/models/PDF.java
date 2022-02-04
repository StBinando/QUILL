package com.codeclan.example.quill.models;

import javax.persistence.*;

@Entity
@Table (name = "pdfs")
public class PDF {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "pdf")
    @Lob
    private byte[] pdfFile;

    @OneToOne(mappedBy = "pdf")
    private Script script;

//    *******************************************************
//                       CONSTRUCTORS
//    *******************************************************

    public PDF() {
    }

    public PDF(byte[] pdf) {
        this.pdfFile = pdf;
    }

//    *******************************************************
//                    GETTERS AND SETTERS
//    *******************************************************

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public byte[] getPdfFile() {
        return pdfFile;
    }

    public void setPdfFile(byte[] pdfFile) {
        this.pdfFile = pdfFile;
    }
}
