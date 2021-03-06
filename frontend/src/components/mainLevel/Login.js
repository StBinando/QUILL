import { Link } from "react-router-dom";
import React, { useState } from 'react';

import back from "../../images/back.png"
import submit from "../../images/submit.png"
import QuillSaturated from "../../images/QuillSaturated.png"

function Login ({onLoginSubmit, setMsg, msg}) {
    // const[msg, setMsg] = useState();
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

    const clearMsg = () => {
        setMsg(null);
    }

    return (
        <div className="main">
        <img className="logobig" src={QuillSaturated}/>
        <p className="slogan">From Script to Stage</p>

                {msg==null ? null : <h3 className="message">{msg}</h3>}

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


            <div className="buttons">
                <img className="submit hover" onClick={handleLoginSubmit} type="submit" value="" src={submit} height="100"/>
                <Link onClick={clearMsg} className="back hover" to="/" ><img src={back} height="100"/></Link>
            </div>

        </form>

    </div>
    );
}
  
  export default Login;

