package com.codeclan.example.quill.models;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "licenses")
@JsonIgnoreProperties({"userprofile", "script"})
public class License {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name="creationdate", columnDefinition="TIMESTAMP DEFAULT CURRENT_TIMESTAMP", insertable = false)
    private Date creationDate;

    @ManyToOne
    @JoinColumn(name = "userprofileid")
    private UserProfile userProfile;

//    @ManyToOne
//    @JoinColumn(name = "script_id")
//    private Script script;


//    ******************      Constructors      ******************

    public License() {
    }

    public License(UserProfile userProfile, Script script) {
        this.userProfile = userProfile;
//        this.script = script;
    }

    //    ******************      Getters and Setters      ******************
    public Date getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(Date creationDate) {
        this.creationDate = creationDate;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public UserProfile getUserprofile() {
        return userProfile;
    }

    public void setUserprofile(UserProfile userprofile) {
        this.userProfile = userprofile;
    }

//    public Script getScript() {
//        return script;
//    }
//
//    public void setScript(Script script) {
//        this.script = script;
//    }
}
