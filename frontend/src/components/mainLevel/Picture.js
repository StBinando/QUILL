import { Link , useParams} from "react-router-dom";
import React, { useState } from 'react';

import submit from "../../images/submit.png"


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
        <div className="uploadScript">
                <form id="updatePictureForm">
                    <div class="uplLinelastheigh">
                        <input class="pickfileimg" type="file" name="file" onChange={handleChangeFile} />
                    </div>
                        <div className="buttons2">
                            <img className="confirm" onClick={handleSubmit} src={submit} width="130px"/>
                        </div>
                </form>

            </div>

    );
  }
  
  export default Picture;