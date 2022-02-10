import { Link , Outlet, useParams} from "react-router-dom";
import React, { useState, useEffect } from 'react';

import Picture from "./Picture";

import submit from "../../images/submit.png"
import home from "../../images/home.png"
import deleteprofile from "../../images/deleteprofile.png"
import edit from "../../images/edit.png"



function Profile ({onUpdateProfileSubmit, profile, onSubmitPicture}) {
    let {id} = useParams();

    const [formData, setFormData] = useState({
        name: profile.name,
        bio: profile.bio
    });
    
    const handleChange = (event) => {
        const newState = {...formData};
        newState[event.target.name] = (event.target.value);
        setFormData(newState);
    }
    useEffect(() => {
        setFormData({
            name: profile.name,
            bio: profile.bio
        })
    }, [profile])

    const handleSubmit = (event) => {
        event.preventDefault();
        formData.userType = profile.userType;
        formData.id = profile.id;
        onUpdateProfileSubmit(formData, id);
    }



    return (
        <div className="flexiColumn">
            <div className="iconsTop">
                <Link className="home hover desaturate" to="../main"><img src={home} height="140"/></Link>
                <p className="spacer"> </p>
                <img className="edit hover" src={edit} height="140"/>
                <p className="spacer"> </p>
                <Link className="delete hover desaturate" to="../delete"><img src={deleteprofile} height="140"/></Link>
            </div>

            <h2 className="info">edit profile info</h2>

            <div className="udpateprofile">
            <form id={profile.userType=="AUTHOR" ? "updateProfileFormA" : "updateProfileFormC"}>
                    <div class="updLine">
                        <div class="updForm" id="updname">
                            <label htmlFor="name">name</label>
                            <input className="udpA" onChange={handleChange}
                            name="name" id="name" type="text"
                            value={formData.name} placeholder={profile.name} />
                        </div>
                    </div>

                    <div class="updLine">
                        <div className="updForm">
                            <label htmlFor="bio">bio</label>
                            <textarea className="textarea" onChange={handleChange}
                            name="bio" id="bio" type="text"
                            rows="7" cols="43"
                            value={formData.bio} placeholder={profile.bio} />
                        </div>
                    </div>
                    <div className="buttons2">
                        <img className="confirm hover" onClick={handleSubmit} src={submit} width="130px"/>
                    </div>
                </form>

                <div>
                    <Picture profile={profile} onSubmitPicture={onSubmitPicture}/>

                    <Outlet/>
                </div>
            </div>



        </div>

    );
  }
  
  export default Profile;