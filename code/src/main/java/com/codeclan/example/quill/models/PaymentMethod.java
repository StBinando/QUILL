package com.codeclan.example.quill.models;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "paying_methods")
public class PaymentMethod {

    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    @Column(name = "id", nullable = true)
    private Long id;

    @Column(name = "card_holder")
    private String cardHolder;

    @Column(name = "number")
    private int number;

    @Column(name = "exp_date")
    private Date exp_date;

    @Column(name = "cvv")
    private int cvv;



//  *****************    CONSTRUCTORS    ***********************
    public PaymentMethod() {
    }

    public PaymentMethod(String cardHolder, int number, Date exp_date, int cvv) {
        this.cardHolder = cardHolder;
        this.number = number;
        this.exp_date = exp_date;
        this.cvv = cvv;
    }



//  *****************    GETTERS AND SETTERS    ***********************

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCardHolder() {
        return cardHolder;
    }

    public void setCardHolder(String cardHolder) {
        this.cardHolder = cardHolder;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    public Date getExp_date() {
        return exp_date;
    }

    public void setExp_date(Date exp_date) {
        this.exp_date = exp_date;
    }

    public int getCvv() {
        return cvv;
    }

    public void setCvv(int cvv) {
        this.cvv = cvv;
    }
}
