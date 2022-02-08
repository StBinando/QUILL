import { Link, useParams } from "react-router-dom";
import React, { useState } from 'react';

import allscripts from "../../images/allscripts.png"
import sendscript from "../../images/sendscript.png"
import licenses from "../../images/licenses.png"
import home from "../../images/home.png"

function NewScript ({onNewScriptSubmit}) {
    let {id} = useParams();

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
    // const [selected, setSelected] = useState(false);
    
    const handleChange = (event) => {
        const newState = {...formData};
        newState[event.target.name] = (event.target.value);
        setFormData(newState);
    }

    const handleChangeFile = (event) => {
		setSelectedFile(event.target.files[0]);
		// setSelected(true);
	};

    const handleSubmit = (event) => {
        event.preventDefault();

        // onNewScriptSubmit(formData);    // to test create NEW USER
        // onNewScriptSubmit(selectedFile, id);    // to test upload picture
        onNewScriptSubmit(formData, selectedFile, id);
    }


    return (
        <div className="flexiColumn">
            <div className="iconsTop">
                <Link className="home" to="../main"><img src={home} height="180"/></Link>
                <Link className="active" to="../addnew"><img src={sendscript} height="180"/></Link>
                <Link className="scripts" to="../scripts"><img src={allscripts} height="180"/></Link>
                <Link className="licenses" to="../licenses"><img src={licenses} height="180"/></Link>
            </div>

            <h2 className="info">upload new script</h2>

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
                        <input className="inputB" onChange={handleChange}
                        name="genre" id="genre" type="text"
                        value={formData.genre} placeholder="enter genre" />
                    </div>
                    <div className="uplForm">
                        <label htmlFor="language">language</label>
                        <input className="inputB" onChange={handleChange}
                        name="language" id="language" type="text"
                        value={formData.language} placeholder="enter language" />
                    </div>
                    <div className="uplForm">
                        <label htmlFor="length">lenght</label>
                        <input className="inputNo" onChange={handleChange}
                        name="length" id="length" type="number"
                        value={formData.m} placeholder="0" />
                    </div>
                </div>
                <p class="cast">cast / characters</p>
                <div class="uplLine">
                    <div className="uplForm">
                        <label htmlFor="m">males</label>
                        <input className="inputNo" onChange={handleChange}
                        name="m" id="m" type="number"
                        value={formData.m} placeholder="0" />
                    </div>
                    <div className="uplForm">
                        <label htmlFor="f">females</label>
                        <input className="inputNo" onChange={handleChange}
                        name="f" id="f" type="number"
                        value={formData.f} placeholder="0" />
                    </div>
                    <div className="uplForm">
                        <label htmlFor="n">neutral</label>
                        <input className="inputNo" onChange={handleChange}
                        name="n" id="n" type="number"
                        value={formData.n} placeholder="0" />
                    </div>
                </div>

                <div class="uplLine">
                    <div className="uplForm">
                        <label htmlFor="description">description</label>
                        <textarea className="textarea" onChange={handleChange}
                        name="description" id="description" type="text"
                        rows="5" cols="44"
                        value={formData.description} placeholder="enter description" />
                    </div>
                </div>

                <div class="uplLinelastheigh">
                    <input class="pickfile" type="file" name="file" onChange={handleChangeFile} />
                    <input class="xxx" onClick={handleSubmit} type="submit" value="upload" />
                </div>

            </form>
            </div>

        </div>

    );
  }
  
  export default NewScript;