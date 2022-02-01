package com.codeclan.example.quill.testCASCADE;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "test1")
public class Test1 {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @JsonBackReference
    @JsonIgnoreProperties({"list"})
    @OneToMany(mappedBy = "test1", cascade={CascadeType.REMOVE})
    private List<Test2> test2;

    @Column(name = "no")
    private int no;

    public Test1() {
    }

    public Test1(int no) {
        this.no = no;
        this.test2 = new ArrayList<>();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<Test2> getTest2() {
        return test2;
    }

    public void setTest2(List<Test2> test2) {
        this.test2 = test2;
    }
}
