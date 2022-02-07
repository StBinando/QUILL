import { Link, useParams } from "react-router-dom";
import React, { useState } from 'react';



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
        <div className="uploadScriprPage">
            <div className="uploadScriptButtons">
                <button><Link to="../main">back to main</Link></button>
                <button><Link to="../scripts">scripts list</Link></button>
            </div>

            <h2>Author - upload new script</h2>

            <form className="uploadScriptForm">
                <div className="LoginFormField">
                    <label htmlFor="genre">genre</label>
                    <input onChange={handleChange}
                    name="genre" id="genre" type="text"
                    value={formData.genre} placeholder="enter genre" />
                </div>
                <div className="LoginFormField">
                    <label htmlFor="title">title</label>
                    <input onChange={handleChange}
                    name="title" id="title" type="text"
                    value={formData.title} placeholder="enter title" />
                </div>
                <div className="LoginFormField">
                    <label htmlFor="language">language</label>
                    <input onChange={handleChange}
                    name="language" id="language" type="text"
                    value={formData.language} placeholder="enter language" />
                </div>
                <div className="LoginFormField">
                    <label htmlFor="length">length</label>
                    <input onChange={handleChange}
                    name="length" id="length" type="number"
                    value={formData.length} placeholder="enter length" />
                </div>
                <div className="LoginFormField">
                    <label htmlFor="m">males</label>
                    <input onChange={handleChange}
                    name="m" id="m" type="number"
                    value={formData.m} placeholder="no. males" />
                </div>
                <div className="LoginFormField">
                    <label htmlFor="f">f</label>
                    <input onChange={handleChange}
                    name="f" id="f" type="number"
                    value={formData.f} placeholder="no. females" />
                </div>
                <div className="LoginFormField">
                    <label htmlFor="n">n</label>
                    <input onChange={handleChange}
                    name="n" id="n" type="number"
                    value={formData.n} placeholder="no. neutral" />
                </div>
                <div className="LoginFormField">
                    <label htmlFor="description">title</label>
                    <input onChange={handleChange}
                    name="description" id="description" type="text"
                    value={formData.description} placeholder="enter description" />
                </div>
                {/* <div className="LoginFormField">
                    <label htmlFor="file">file</label>
                    <input onChange={handleChange}
                    name="file" id="file" type="text"
                    value={formData.file} placeholder="enter file" />
                </div> */}



                <input type="file" name="file" onChange={handleChangeFile} />



                <input onClick={handleSubmit} type="submit" value="upload" />
            </form>

        </div>

    );
  }
  
  export default NewScript;