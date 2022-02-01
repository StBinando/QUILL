package com.codeclan.example.quill.models;

import javax.persistence.*;

@Entity
@Table(name = "BankAccounts")
public class BankAccount {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "account_holder")
    private String accountHolder;

    @Column(name = "branch")
    private String branch;

    @Column(name = "sortcode")
    private String sortcode;

    public BankAccount() {
    }

    public BankAccount(String accountHolder, String branch, String sortcode) {
        this.accountHolder = accountHolder;
        this.branch = branch;
        this.sortcode = sortcode;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAccountHolder() {
        return accountHolder;
    }

    public void setAccountHolder(String accountHolder) {
        this.accountHolder = accountHolder;
    }

    public String getBranch() {
        return branch;
    }

    public void setBranch(String branch) {
        this.branch = branch;
    }

    public String getSortcode() {
        return sortcode;
    }

    public void setSortcode(String sortcode) {
        this.sortcode = sortcode;
    }
}
