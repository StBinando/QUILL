import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';


import RecentScripts from "./RecentScripts";

import search from "../../images/search.png"
import licenses from "../../images/licenses.png"
import home from "../../images/home.png"
import reset from "../../images/reset.png"
import submit from "../../images/submit.png"
import back from "../../images/back.png"
import pdf from "../../images/pdf.png"



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
        console.log(pathResults);
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

     const backToSearch = ()=>{
         setShowResults(false);
         refreshPage();
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
                        <Link className="home hover desaturate" to="../main"><img src={home} height="180"/></Link>
                        <p className="spacer"></p>
                        <Link className="search hover" to="../search"><img src={search} height="180"/></Link>
                        <p className="spacer"></p>
                        <Link className="licenses hover desaturate" to="../licenses"><img src={licenses} height="180"/></Link>
                        <h3 className="message">{msg}</h3>
                    </div>
                </div>
                
                    {msg==null ? null : <h3 className="message">{msg}</h3>}


                <h2 className="info">search scripts</h2>

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
                                <label htmlFor="lop">approx. lenght (minutes)</label>
                                <select id="lop" className="inputB" onChange={handleChange}
                                name="lop" id="lop" type="text"
                                value={formData.lop}>
                                    <option value="gte">equal or more than</option>
                                    <option value="lte">equal or less than</option>
                                </select>
                                <div className="searchField">
                                    <input className="inputNo" onChange={handleChange}
                                    name="length" id="length" type="number" min="0" step="10"
                                    value={formData.length} placeholder="any" />
                                </div>
                            </div>
                        </div>


                        <p class="cast">cast / characters</p>
                        <div class="searchline">
                            <div className="searchfield2">
                                <div>
                                    <label htmlFor="mop">male</label>
                                    <select id="mop" className="inputC" onChange={handleChange}
                                    name="mop" id="mop" type="text"
                                    value={formData.mop}>
                                        <option value="eq">exactly</option>
                                        <option value="gt">more than</option>
                                        <option value="lt">less than</option>
                                    </select>
                                </div>
                                <input className="inputNo" onChange={handleChange}
                                name="m" id="m" type="number" min="0"
                                value={formData.m} placeholder="any" />
                            </div>

                            <div className="searchfield2">
                                <div>
                                    <label htmlFor="fop">female</label>
                                    <select id="fop" className="inputC" onChange={handleChange}
                                    name="fop" id="fop" type="text"
                                    value={formData.fop}>
                                        <option value="eq">exactly</option>
                                        <option value="gt">more than</option>
                                        <option value="lt">less than</option>
                                    </select>
                                </div>
                                <input className="inputNo" onChange={handleChange}
                                name="f" id="f" type="number" min="0"
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
                                name="n" id="n" type="number" min="0"
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
                                name="cast" id="cast" type="number" min="0"
                                value={formData.cast} placeholder="any" />
                            </div>
                        </div>

                        <div class="searchline2">
                            <div className="RFall">
                                <label htmlFor="royaltyfree">royalty free only?</label>
                                <select id="royaltyfree" className="RF" onChange={handleChange}
                                name="royaltyfree" id="royaltyfree" type="royaltyfree"
                                value={formData.royaltyfree}>
                                    <option value="false">no</option>
                                    <option value="true">yes</option>
                                </select>
                            </div>
                            <p className="spacer"></p>
                            <p className="spacer"></p>
                            <p className="spacer"></p>
                            <p className="spacer"></p>
                            <img className="hover"onClick={handleSubmit} src={submit} height="70"/>
                            <img className="hover" onClick={refreshPage} src={reset} height="70"/>
                            <p className="spacer"></p>
                        </div>
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
                        <Link className="home hover desaturate" to="../main"><img src={home} height="180"/></Link>
                        <p className="spacer"></p>
                        <Link className="search hover" to="../search"><img src={search} height="180"/></Link>
                        <p className="spacer"></p>
                        <Link className="licenses hover desaturate" to="../licenses"><img src={licenses} height="180"/></Link>
                        <h3 className="message">{msg}</h3>
                    </div>
                </div>
                
                <div className="info marginbutton">
                    <h2 >results: {results.length} script(s)</h2>
                    <img className="hover" onClick={()=>{backToSearch()}} src={back} height="70"/>
                </div>
                {!results.length && <h2 className="message">there are no scripts matching your search</h2>}
                {results.length && 
                    <div className="resultsList">
                        <p className="listtitle titleC">title</p>
                        <p className="listauthor titleC">author</p>
                        <p className="listgenre titleC">genre</p>
                        <p className="listlanguage titleC">language</p>
                        <p className="listlength titleC">length</p>
                        <p className="listm titleC">M</p>
                        <p className="listf titleC">F</p>
                        <p className="listn titleC">N</p>
                        <p className="listpdf titleC"></p>
                        {results.map((script, index) => (
                            <>
                                <p className="Ltitle" title={script.description}>{script.title}</p>
                                <p className="Lauthor">{script.authorname}</p>
                                <p className="Lgenre">{script.genre}</p>
                                <p className="Llanguage">{script.language}</p>
                                <p className="Llength">{script.length}</p>
                                <p className="Lm">{script.m}</p>
                                <p className="Lf">{script.f}</p>
                                <p className="Ln">{script.n}</p>
                                <a className="pdfdwl hover desaturate" title={`download ${script.title}.pdf file`} href={`http://localhost:8080/scripts/pdf/${script.id}`} ><img src={pdf} width="50"/></a>
                            </>
                        ))}
                    </div>
                }
            </div>
        )
    }
}
    
    export default Search;