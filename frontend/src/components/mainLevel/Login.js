import { Link } from "react-router-dom";
import React, { useState } from 'react';

import submit from "../../images/submit.png"
import QuillSaturated from "../../images/QuillSaturated.png"

function Login ({onLoginSubmit}) {
    const[msg, setMsg] = useState();
    const [formData, setFormData] = useState({
    username: '',
    password: '',
    });

    const handleChange = (event) => {
        const newState = {...formData};
        newState[event.target.name] = (event.target.value);
        setFormData(newState);
    }

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        if(formData.username != ""
        & formData.password != ""){
            onLoginSubmit(formData);
        } else {
            setMsg("mandatory field(s) missing");
        }
    }


    return (
        <div className="main">
        <img className="logobig" src={QuillSaturated}/>
        <p className="slogan">...making new theatre easier...</p>


        <form className="loginForm">
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
                name="password"
                id="password"
                type="password"
                value={formData.password}
                placeholder="enter password"/>
            </div>

            <h2 className="message">{msg}</h2>

            <div className="buttons">
                <input className="submit" onClick={handleLoginSubmit} type="submit" value=""/>
                <Link className="back" to="/" ></Link>
            </div>

        </form>

    </div>
    );
}
  
  export default Login;

