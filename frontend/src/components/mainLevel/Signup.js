import { Link } from "react-router-dom";
import React, { useState } from 'react';

import QuillSaturated from "../../images/QuillSaturated.png"
import authorimg from "../../images/author.png"
import companyimg from "../../images/company.png"

function Signup ({onSignupSubmit}) {
    const[msg, setMsg] = useState();
    const [formData, setFormData] = useState({
    username: '',
    password: '',
    password2: '',
    email: '',
    userType: ''
    });

    const handleChange = (event) => {
        const newState = {...formData};
        newState[event.target.name] = (event.target.value);
        setFormData(newState);
    }

    const handleSignupSubmit = (event) => {
        event.preventDefault();
        if(formData.username != ""
        & formData.email != ""
        & formData.password != ""
        & formData.password2 != ""
        & formData.userType != ""){
            if(formData.password == formData.password2){
                onSignupSubmit(formData);
            }else{
                setMsg("password doesn't match");
            }
        } else {
            setMsg("mandatory field(s) missing" + formData.userType);
        }
    }


    return (
        <div className="main">
        <img className="logobig" src={QuillSaturated}/>
        <p className="slogan">From Script to Stage</p>


        <form className="signupForm">

            <h2 className="message">{msg}</h2>

            <div className="signupData">
                
                <div className="formfields">
                    <div>
                        <input className="LoginFormField"
                        onChange={handleChange}
                        name="username"
                        id="username"
                        type="text"
                        value={formData.username}
                        placeholder="enter username" />
                    </div>

                    <div>
                        <input className="LoginFormField"
                        onChange={handleChange}
                        name="email"
                        id="email"
                        type="email"
                        value={formData.email}
                        placeholder="enter email" />
                    </div>

                    <div>
                        <input className="LoginFormField"
                        onChange={handleChange}
                        name="password"
                        id="password"
                        type="password"
                        value={formData.password}
                        placeholder="enter password"/>
                    </div>

                    <div>
                        <input className="LoginFormField"
                        onChange={handleChange}
                        name="password2"
                        id="password2"
                        type="password"
                        value={formData.password2}
                        placeholder="re-type password"/>
                    </div>
                </div>

                <div className="signupType">
                    <h2>select type of account</h2>
                    <div className="signupTypeButtons">
                        <label className="userType">
                            <input type="radio" id="userType1" name="userType" value="AUTHOR" onChange={handleChange}/>   
                            <img className="authorType" src={authorimg} height="160px"/>
                        </label>
                        <label className="userType">
                        <input type="radio" id="userType2" name="userType" value="COMPANY" onChange={handleChange}/>
                            <img className="companyType" src={companyimg} height="160px"/>
                        </label>
                    </div>
                </div>

            </div>


            <div className="buttons">
                <input className="submit" onClick={handleSignupSubmit} type="submit" value=""/>
                <Link className="back" to="/" ></Link>
            </div>

        </form>

    </div>
    );
}
    
  export default Signup;