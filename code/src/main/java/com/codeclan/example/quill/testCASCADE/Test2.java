package com.codeclan.example.quill.testCASCADE;

import com.codeclan.example.quill.testCASCADE.Test1;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name = "test2")
public class Test2 {

    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    @Column(name ="id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "test1_id")
    @JsonBackReference
    @JsonIgnoreProperties({"test2"})
    private Test1 test1;

    @Column(name = "txt")
    private String txt;

    public Test2(Test1 test1, String txt) {
        this.test1 = test1;
        this.txt = txt;
    }

    public Test2() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Test1 getTest1() {
        return test1;
    }

    public void setTest1(Test1 test1) {
        this.test1 = test1;
    }

    public String getTxt() {
        return txt;
    }

    public void setTxt(String txt) {
        this.txt = txt;
    }
}
