import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";

import allscripts from "../../images/allscripts.png"
import sendscript from "../../images/sendscript.png"
import licenses from "../../images/licenses.png"
import home from "../../images/home.png"


const AutScripts = ({setScripts, scripts}) => {
    let {id} = useParams();

    useEffect( () => {
        fetchScripts();
    }, []) 

    useEffect(() => {
    }, [scripts])

    const fetchScripts = () => {
        fetch(`http://localhost:8080/userprofile/${id}/scripts`)
        .then(response => response.json())
        .then(data => {
            setScripts(data)
        })
    }


    return (
        <div className="flexiColumn">
            <div className="iconsTop">
                <Link className="home" to="../main"><img src={home} height="180"/></Link>
                <Link className="sendscript" to="../addnew"><img src={sendscript} height="180"/></Link>
                <Link className="active" to="../scripts"><img src={allscripts} height="180"/></Link>
                <Link className="licenses" to="../licenses"><img src={licenses} height="180"/></Link>
            </div>
            <h2 className="info">Scripts submitted</h2>
            {!scripts.length && <h2 className="message">you haven't submitted any script yet</h2>}
            {scripts.length && 
            <div className="scriptList">
                <p className="listtitle title">title</p>
                <p className="listgenre title">genre</p>
                <p className="listlanguage title">language</p>
                <p className="listlength title">length</p>
                <p className="listm title">M</p>
                <p className="listf title">F</p>
                <p className="listn title">N</p>
                <p className="listlicenses title">licen.</p>
                {scripts.map((script, index) => (
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

  
                        // <div className="scriptList">
                        //     <p className="listdescription">{script.description}</p>
                        //     <button className="listedit">edit</button>
                        //     <button className="listdelete">delete</button>
                        // </div>
  
  export default AutScripts;