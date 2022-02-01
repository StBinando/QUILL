package com.codeclan.example.quill.models;


import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "authors")
public class Author{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "bank_accounts")
    private String bankAccount;

    @OneToOne(mappedBy = "author")
    private UserProfile userProfile;

    @OneToMany(cascade = CascadeType.REMOVE)
    private List<Script> scripts;


//    *********************************
//              constructors
//    *********************************
    public Author() {
    }

    public Author(String bankAccount) {
        this.bankAccount = bankAccount;
        this.scripts = new ArrayList<>();
    }


//    **********************************
//             getters and setters
//    **********************************
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBankAccount() {
        return bankAccount;
    }

    public void setBankAccount(String bankAccount) {
        this.bankAccount = bankAccount;
    }

    public List<Script> getScripts() {
        return scripts;
    }

    public void setScripts(List<Script> scripts) {
        this.scripts = scripts;
    }
}
