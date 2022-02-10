import { Link, useParams } from "react-router-dom";
import React, { useState } from 'react';

import allscripts from "../../images/allscripts.png"
import sendscript from "../../images/sendscript.png"
import licenses from "../../images/licenses.png"
import home from "../../images/home.png"
import submit from "../../images/submit.png"

function NewScript ({onNewScriptSubmit}) {
    let {id} = useParams();
    const[msg, setMsg] = useState();


    const [formData, setFormData] = useState({
        genre: '',
        title: '',
        language: '',
        length: '',
        m: '',
        f: '',
        n: '',
        description: '',
    });



    const [selectedFile, setSelectedFile] = useState();
    
    const handleChange = (event) => {
        const newState = {...formData};
        newState[event.target.name] = (event.target.value);
        setFormData(newState);
    }

    const handleChangeFile = (event) => {
		setSelectedFile(event.target.files[0]);
	};

    const handleSubmit = (event) => {
        event.preventDefault();
        if(formData.genre != ""
        & formData.title != ""
        & formData.language != ""
        & formData.m != ""
        & formData.f != ""
        & formData.n != ""
        & formData.description != ""
        & typeof selectedFile != "undefined"){
            if(formData.password == formData.password2){
                onNewScriptSubmit(formData, selectedFile, id);
            }else{
                setMsg("password doesn't match");
            }
        } else {
            setMsg("all fields and PDF file are mandatory");
        }
    }


    return (
        <div className="flexiColumn">
            <div className="iconsTop">
                <Link className="home hover desaturate" to="../main"><img src={home} height="180"/></Link>
                <p className="spacer"></p>
                <Link className="sendscript hover" to="../addnew"><img src={sendscript} height="180"/></Link>
                <p className="spacer"></p>
                <Link className="scripts hover desaturate" to="../scripts"><img src={allscripts} height="180"/></Link>
                <p className="spacer"></p>
                <Link className="licenses hover desaturate" to="../licenses"><img src={licenses} height="180"/></Link>
            </div>

            <h2 className="info">upload new script</h2>

            {msg ==null ? null : <h3 className="message">{msg}</h3>}
                

            <div className="uploadScript">

                <form id="uploadScriptForm">
                    <div class="uplLine">
                        <div class="uplForm" id="upltitle">
                            <label htmlFor="title">title</label>
                            <input className="inputA" onChange={handleChange}
                            name="title" id="title" type="text"
                            value={formData.title} placeholder="enter title" />
                        </div>
                    </div>

                    <div class="uplLine">
                        <div className="uplForm">
                            <label htmlFor="genre">genre</label>
                            <select id="genre" className="inputB" onChange={handleChange}
                            name="genre" id="genre" type="text"
                            value={formData.genre}>
                                <option value="" disabled>genre</option>
                                <option value="comedy">comedy</option>
                                <option value="tragedy">tragedy</option>
                                <option value="drama">drama</option>
                                <option value="absurd">absurd</option>
                                <option value="musical">musical</option>
                                <option value="experimantal">experimantal</option>
                            </select>
                        </div>


                        <div className="uplForm">
                            <label htmlFor="language">language</label>
                            <select id="language" className="inputB" onChange={handleChange}
                            name="language" id="language" type="text"
                            value={formData.language}>
                                <option value="" disabled>language</option>
                                <option value="English">English</option>
                                <option value="French">French</option>
                                <option value="Italian">Italian</option>
                                <option value="Spanish">Spanish</option>
                                <option value="Portuguese">Portuguese</option>
                                <option value="German">German</option>
                                <option value="Polish">Polish</option>
                            </select>
                        </div>


                        

                        <div className="uplForm">
                            <label htmlFor="length">approx. lenght (minutes)</label>
                            <input className="inputNo" onChange={handleChange}
                            name="length" id="length" type="number" min="0" step="10"
                            value={formData.length} placeholder="" />
                        </div>




                    </div>
                    <p class="cast">cast / characters</p>
                    <div class="uplLine">
                        <div className="uplForm">
                            <label htmlFor="m">male</label>
                            <input className="inputNo" onChange={handleChange}
                            name="m" id="m" type="number" min="0"
                            value={formData.m} placeholder="" />
                        </div>
                        <div className="uplForm">
                            <label htmlFor="f">female</label>
                            <input className="inputNo" onChange={handleChange}
                            name="f" id="f" type="number" min="0"
                            value={formData.f} placeholder="" />
                        </div>
                        <div className="uplForm">
                            <label htmlFor="n">neutral</label>
                            <input className="inputNo" onChange={handleChange}
                            name="n" id="n" type="number" min="0"
                            value={formData.n} placeholder="" />
                        </div>
                    </div>

                    <div class="uplLine">
                        <div className="uplForm">
                            <label htmlFor="description">description</label>
                            <textarea className="textarea" onChange={handleChange}
                            name="description" id="description" type="text"
                            rows="5" cols="75"
                            value={formData.description} placeholder="enter description" />
                        </div>
                    </div>

                    <div class="uplLine">
                        <input class="pickfile" type="file" name="file" onChange={handleChangeFile} />
                        <img className="submit hover" onClick={handleSubmit} src={submit} height="70"/>
                    </div>

                </form>
            </div>

        </div>

    );
  }
  
  export default NewScript;