import { Link, useParams } from "react-router-dom";
import React, { useState } from 'react';


import RecentScripts from "./RecentScripts";

import search from "../../images/search.png"
import licenses from "../../images/licenses.png"
import home from "../../images/home.png"

function Search ({onSearchSubmit}) {
    let {id} = useParams();
    const[msg, setMsg] = useState();


    const [formData, setFormData] = useState({
        title:"",
        authorname:"",
        genre:"",
        lop:"", length:"",
        mop:"", m:"",
        fop:"", f:"",
        nop:"", n:"",
        cop:"", cast:"",
        language:"",
        royaltyfree:"",
        tag:""
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

        // onNewScriptSubmit(formData);    // to test create NEW USER
        // onNewScriptSubmit(selectedFile, id);    // to test upload picture
        onSearchSubmit(formData, selectedFile, id);
    }



    return (
        <div className="flexiColumn">
            <div className="iconsTop">
            <div className="iconsTop">
                <Link className="home" to="../main"><img src={home} height="180"/></Link>
                <Link className="active" to="../search"><img src={search} height="180"/></Link>
                <Link className="licenses" to="../licenses"><img src={licenses} height="180"/></Link>
                <h3 className="message">{msg}</h3>
            </div>
            </div>
            
                <h3 className="message">{msg}</h3>


            <h2 className="info">search scripts</h2>

            <div className="searchscripts">

                <form id="searchform">
                    <div class="searchline">
                        <div class="uplForm" id="upltitle">
                            <label htmlFor="title">title</label>
                            <input className="searchA" onChange={handleChange}
                            name="title" id="title" type="text"
                            value={formData.title} placeholder="enter title" />
                        </div>
                    </div>

                    <div class="searchline">
                        <div className="searchfield">
                            <label htmlFor="author">author</label>
                            <input className="searchB" onChange={handleChange}
                            name="author" id="author" type="text"
                            value={formData.author} placeholder="enter author" />
                        </div>
                        <div className="searchfield">
                            <label htmlFor="genre">genre</label>
                            <input className="searchB" onChange={handleChange}
                            name="genre" id="genre" type="text"
                            value={formData.genre} placeholder="enter genre" />
                        </div>
                        <div className="searchfield">
                            <label htmlFor="language">language</label>
                            <input className="searchB" onChange={handleChange}
                            name="language" id="language" type="text"
                            value={formData.language} placeholder="enter language" />
                        </div>

                    </div>
                        <div>
                            <div className="searchfield">
                                <label htmlFor="lop">lenght</label>
                                <input className="searchOp" onChange={handleChange}
                                name="lop" id="lop" type="text"
                                value={formData.m} placeholder="greater or equal than" />
                            </div>
                            <div className="searchfield">
                                <input className="searchNo" onChange={handleChange}
                                name="length" id="length" type="number"
                                value={formData.m} placeholder="0" />
                            </div>
                        </div>
                    {/* <p class="cast">cast / characters</p> */}
                    <div class="searchline">
                        <div>
                        <div className="searchfield">
                                <label htmlFor="mop">lenght</label>
                                <input className="searchOp" onChange={handleChange}
                                name="mop" id="mop" type="text"
                                value={formData.m} placeholder="equal" />
                            </div>
                            <div className="searchfield">
                                <label htmlFor="m">males</label>
                                <input className="searchNo" onChange={handleChange}
                                name="m" id="m" type="number"
                                value={formData.m} placeholder="0" />
                            </div>
                        </div>

                        <div>
                            <div className="searchfield">
                                <label htmlFor="fop">lenght</label>
                                <input className="searchOp" onChange={handleChange}
                                name="fop" id="fop" type="text"
                                value={formData.m} placeholder="equal" />
                            </div>
                            <div className="searchfield">
                                <label htmlFor="f">females</label>
                                <input className="searchNo" onChange={handleChange}
                                name="f" id="f" type="number"
                                value={formData.f} placeholder="0" />
                            </div>
                        </div>

                        <div>
                            <div className="searchfield">
                                <label htmlFor="nop">lenght</label>
                                <input className="searchOp" onChange={handleChange}
                                name="nop" id="nop" type="text"
                                value={formData.m} placeholder="equal" />
                            </div>
                            <div className="searchfield">
                                <label htmlFor="n">neutral</label>
                                <input className="searchNo" onChange={handleChange}
                                name="n" id="n" type="number"
                                value={formData.n} placeholder="0" />
                            </div>

                            <div className="searchfield">
                                <label htmlFor="cop">lenght</label>
                                <input className="searchOp" onChange={handleChange}
                                name="cop" id="cop" type="text"
                                value={formData.m} placeholder="greater that or equal" />
                            </div>
                            <div className="searchfield">
                                <label htmlFor="cast">neutral</label>
                                <input className="searchNo" onChange={handleChange}
                                name="cast" id="cast" type="number"
                                value={formData.n} placeholder="0" />
                            </div>
                        </div>
                    </div>

                    <input class="submitfile" onClick={handleSubmit} type="submit" value="upload" />

                </form>
            </div>

        </div>
    








        // <>
        //     <h1>Company - Search</h1>
        //     <Link to="../main">back</Link>
        //     <h4>form</h4>
        //     <p>Title</p>
        //     <p>Length</p>
        //     <p>Genre</p>
        //     <p>....</p>
        //     <Link to="../results">search...</Link>
        //     <hr/>

        //     <RecentScripts/>

        //     <Outlet/>
        // </>
    )
  }
  
  export default Search;