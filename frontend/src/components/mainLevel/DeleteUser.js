import { Link , Outlet, useParams} from "react-router-dom";
import React, { useState } from 'react';

import home from "../../images/home.png"
import deleteprofile from "../../images/deleteprofile.png"
import edit from "../../images/edit.png"

import cancel from "../../images/cancel.png"
import del from "../../images/delete.png"


function DeleteUser ({profile}) {
    let {id} = useParams();

    const handleConfirm = () => {
        fetch("http://localhost:8080/user/"+id,
        {method: 'DELETE'}
        )
        window.location.href = `http://localhost:3000`
    }


    return (
        <div className="flexiColumn">
            <div className="iconsTop">
                <Link className="home" to="../main"><img src={home} height="140"/></Link>
                <p className="spacer"></p>
                <Link className="profile" to="../profile"><img src={edit} height="140"/></Link>
                <p className="spacer"></p>
                <img className="active" src={deleteprofile} height="140"/>
            </div>

            <h2 className="info3">do you confirm you want to DELETE your account?</h2>

            <div className="buttons">
                    <img className="confirm" onClick={handleConfirm} src={del} width="130px"/>
                <Link className="cancel" to="../profile" >
                    <img className="cancel" src={cancel} width="130px"/>
                </Link>
            </div>

        </div>

    );
  }
  
  export default DeleteUser;