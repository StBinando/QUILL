import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';


import RecentScripts from "./RecentScripts";

import search from "../../images/search.png"
import licenses from "../../images/licenses.png"
import home from "../../images/home.png"
import reset from "../../images/reset.png"
import submit from "../../images/submit.png"

function Search ({onSearchSubmit, pathResults, setResults, results}) {
    let {id} = useParams();
    const[msg, setMsg] = useState();

    const [showResults, setShowResults] = useState(false);

    const [formData, setFormData] = useState({
        title:"",
        authorname:"",
        genre:"",
        lop:"gte", length:"",
        mop:"eq", m:"",
        fop:"eq", f:"",
        nop:"eq", n:"",
        cop:"gte", cast:"",
        language:"",
        royaltyfree:"false",
        tag:""
    });


    const fetchResults = () => {
        fetch(pathResults)
        .then(response => response.json())
        .then(data => {
            setResults(data)
        })
    }

    useEffect( () => {
        fetchResults();
    }, [pathResults]) 

    
    const handleChange = (event) => {
        const newState = {...formData};
        newState[event.target.name] = (event.target.value);
        setFormData(newState);
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        setShowResults(true);
        onSearchSubmit(formData, id);
    }

    const refreshPage = ()=>{
        window.location.reload();
     }


//  =====================================================================================
//  ===============                                                  ====================
//  ===============                   S E A R C H                    ====================
//  ===============                                                  ====================
//  =====================================================================================

    if (!showResults){
        return (
            <div className="flexiColumn">
                <div className="iconsTop">
                    <div className="iconsTop">
                        <Link className="home" to="../main"><img src={home} height="180"/></Link>
                        <p className="spacer"></p>
                        <Link className="active" to="../search"><img src={search} height="180"/></Link>
                        <p className="spacer"></p>
                        <Link className="licenses" to="../licenses"><img src={licenses} height="180"/></Link>
                        <h3 className="message">{msg}</h3>
                    </div>
                </div>
                
                    {msg==null ? null : <h3 className="message">{msg}</h3>}


                <h2 className="info">search scripts</h2>
                <img onClick={refreshPage} src={reset} height="90"/>

                <div className="searchscripts">

                    <form id="searchform">
                        <div class="searchline">
                            <div class="searchField" id="upltitle">
                                <label htmlFor="title">title</label>
                                <input className="searchA" onChange={handleChange}
                                name="title" id="title" type="text"
                                value={formData.title} placeholder="any" />
                            </div>
                            <div className="searchField">
                                <label htmlFor="authorname">author</label>
                                <input className="inputB" onChange={handleChange}
                                name="authorname" id="authorname" type="text"
                                value={formData.authorname} placeholder="any" />
                            </div>
                        </div>
                        
                        <div class="searchline">

                            <div className="searchField">
                                <label htmlFor="genre">genre</label>
                                <select id="genre" className="inputB" onChange={handleChange}
                                name="genre" id="genre" type="text"
                                value={formData.genre}>
                                    <option value="" disabled>any</option>
                                    <option value="comedy">comedy</option>
                                    <option value="tragedy">tragedy</option>
                                    <option value="drama">drama</option>
                                    <option value="absurd">absurd</option>
                                    <option value="musical">musical</option>
                                    <option value="experimantal">experimantal</option>
                                </select>
                            </div>

                            <div className="searchField">
                            <label htmlFor="language">language</label>
                                <select id="language" className="inputB" onChange={handleChange}
                                name="language" id="language" type="text"
                                value={formData.language}>
                                    <option value="" disabled>any</option>
                                    <option value="English">English</option>
                                    <option value="French">French</option>
                                    <option value="Italian">Italian</option>
                                    <option value="Spanish">Spanish</option>
                                    <option value="Portuguese">Portuguese</option>
                                    <option value="German">German</option>
                                    <option value="Polish">Polish</option>
                                </select>


                            </div>

                        </div>

                        <div class="searchline">
                            <div className="searchField">
                                <label htmlFor="lop">length</label>
                                <select id="lop" className="inputB" onChange={handleChange}
                                name="lop" id="lop" type="text"
                                value={formData.lop}>
                                    <option value="gte">equal or more than</option>
                                    <option value="lte">equal or less than</option>
                                </select>
                                <div className="searchField">
                                    <input className="inputNo" onChange={handleChange}
                                    name="length" id="length" type="number"
                                    value={formData.length} placeholder="any" />
                                </div>
                            </div>
                        </div>


                        <p class="cast">cast / characters</p>
                        <div class="searchline">
                            <div className="searchfield2">
                                <div>
                                    <label htmlFor="mop">males</label>
                                    <select id="mop" className="inputC" onChange={handleChange}
                                    name="mop" id="mop" type="text"
                                    value={formData.mop}>
                                        <option value="eq">exactly</option>
                                        <option value="gt">more than</option>
                                        <option value="lt">less than</option>
                                    </select>
                                </div>
                                <input className="inputNo" onChange={handleChange}
                                name="m" id="m" type="number"
                                value={formData.m} placeholder="any" />
                            </div>

                            <div className="searchfield2">
                                <div>
                                    <label htmlFor="fop">females</label>
                                    <select id="fop" className="inputC" onChange={handleChange}
                                    name="fop" id="fop" type="text"
                                    value={formData.fop}>
                                        <option value="eq">exactly</option>
                                        <option value="gt">more than</option>
                                        <option value="lt">less than</option>
                                    </select>
                                </div>
                                <input className="inputNo" onChange={handleChange}
                                name="f" id="f" type="number"
                                value={formData.f} placeholder="any" />
                            </div>

                            <div className="searchfield2">
                                <div>
                                    <label htmlFor="nop">neutral</label>
                                    <select id="nop" className="inputC" onChange={handleChange}
                                    name="nop" id="nop" type="text"
                                    value={formData.nop}>
                                        <option value="eq">exactly</option>
                                        <option value="gt">more than</option>
                                        <option value="lt">less than</option>
                                    </select>
                                </div>
                                <input className="inputNo" onChange={handleChange}
                                name="n" id="n" type="number"
                                value={formData.n} placeholder="any" />
                            </div>

                            <div className="searchfield2">
                                <div>
                                    <label htmlFor="cop">total</label>
                                    <select id="cop" className="inputB" onChange={handleChange}
                                    name="cop" id="cop" type="text"
                                    value={formData.cop}>
                                        <option value="gte">equal or more than</option>
                                        <option value="lte">equal or less than</option>
                                    </select>
                                </div>
                                <input className="inputNo" onChange={handleChange}
                                name="cast" id="cast" type="number"
                                value={formData.cast} placeholder="any" />
                            </div>
                        </div>

                        <div class="searchline2">
                            <div>
                                <label htmlFor="royaltyfree">royalty free only?</label>
                                <select id="royaltyfree" className="RF" onChange={handleChange}
                                name="royaltyfree" id="royaltyfree" type="royaltyfree"
                                value={formData.royaltyfree}>
                                    <option value="false">no</option>
                                    <option value="true">yes</option>
                                </select>
                            </div>
                            <img onClick={handleSubmit} src={submit} height="70"/>
                            {/* <input class="submitfile" onClick={handleSubmit} type="submit" value="SEARCH" /> */}
                        </div>
                        {/* <div class="searchline"> */}
                        {/* </div> */}
                    </form>
                </div>

            </div>
        )


//  =====================================================================================
//  ===============                                                  ====================
//  ===============                  R E S U L T S                   ====================
//  ===============                                                  ====================
//  =====================================================================================
    } else {

        if(results == [{}]){
            return (<p>loading....</p>)
        }

        return(
            <div className="flexiColumn">
                <div className="iconsTop">
                    <div className="iconsTop">
                        <Link className="home" to="../main"><img src={home} height="180"/></Link>
                        <p className="spacer"></p>
                        <Link className="active" to="../search"><img src={search} height="180"/></Link>
                        <p className="spacer"></p>
                        <Link className="licenses" to="../licenses"><img src={licenses} height="180"/></Link>
                        <h3 className="message">{msg}</h3>
                    </div>
                </div>
                    
                <h2 className="info">RESULTS: {results.length}</h2>
                {!results.length && <h2 className="message">there are no scripts matching your search</h2>}
                {results.length && 
                    <div className="resultsList">
                        <p className="listtitle title">title</p>
                        <p className="listgenre title">genre</p>
                        <p className="listlanguage title">language</p>
                        <p className="listlength title">length</p>
                        <p className="listm title">M</p>
                        <p className="listf title">F</p>
                        <p className="listn title">N</p>
                        <p className="listlicenses title">licen.</p>
                        {results.map((script, index) => (
                            <>
                                <a href={`http://localhost:8080/scripts/pdf/${script.id}`} >{script.title}</a>
                                <p className="Lgenre">{script.genre}</p>
                                <p className="Llanguage">{script.language}</p>
                                <p className="Llength">{script.length}</p>
                                <p className="Lm">{script.m}</p>
                                <p className="Lf">{script.f}</p>
                                <p className="Ln">{script.n}</p>
                                <Link className="Llicenses" to="../script/licenses">licenses</Link>
                            </>
                        ))}
                    </div>
                }
            </div>
        )
    }
}
    
    export default Search;