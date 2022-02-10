import { Link , useParams} from "react-router-dom";
import React, { useState } from 'react';

import submit from "../../images/submit.png"
import picture from "../../images/picture.png"


function Picture({profile, onSubmitPicture}){
    let {id} = useParams();
    const [selectedFile, setSelectedFile] = useState();


    const handleChangeFile = (event) => {
		setSelectedFile(event.target.files[0]);
	}; 

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmitPicture(selectedFile, id);
    }


    return (
        <div className="uploadpicture">
            <img className="picture2" src={picture} width="170px"/>
                <form id={profile.userType=="AUTHOR" ? "updatePictureFormA" : "updatePictureFormC"}>
                    <div class="uplLinelastheigh">
                        <input class="pickfileimg" type="file" name="file" onChange={handleChangeFile} />
                    </div>
                        <div className="buttons2">
                            <img className="confirm hover" onClick={handleSubmit} src={submit} width="130px"/>
                        </div>
                </form>

            </div>

    );
  }
  
  export default Picture;