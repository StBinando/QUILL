package com.codeclan.example.quill.models;


import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "licenses")
public class License {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name="creationdate", columnDefinition="TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private Date creationDate;

//    @Column(name = "creationdate", updatable = false)
//    @Temporal(javax.persistence.TemporalType.TIMESTAMP)
//    private Date creationDate = new Date();

    @Column(name = "test")
    private String test;

    public License() {
    }

    public License(String test) {
        this.test = test;
    }

    public Date getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(Date creationDate) {
        this.creationDate = creationDate;
    }

    public String getTest() {
        return test;
    }

    public void setTest(String test) {
        this.test = test;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


}
