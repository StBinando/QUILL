import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";

import allscripts from "../../images/allscripts.png"
import sendscript from "../../images/sendscript.png"
import licenses from "../../images/licenses.png"
import home from "../../images/home.png"
import pdf from "../../images/pdf.png"


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
                <Link className="home hover desaturate" to="../main"><img src={home} height="180"/></Link>
                <p className="spacer"></p>
                <Link className="sendscript hover desaturate" to="../addnew"><img src={sendscript} height="180"/></Link>
                <p className="spacer"></p>
                <Link className="scripts hover" to="../scripts"><img src={allscripts} height="180"/></Link>
                <p className="spacer"></p>
                <Link className="licenses hover desaturate" to="../licenses"><img src={licenses} height="180"/></Link>
            </div>
            <h2 className="info">Scripts submitted</h2>
            {!scripts.length && <h2 className="message">you haven't submitted any script yet</h2>}
            {scripts.length && 
            <div className="scriptList">
                <p className="listtitle titleA">title</p>
                <p className="listgenre titleA">genre</p>
                <p className="listlanguage titleA">language</p>
                <p className="listlength titleA">length</p>
                <p className="listm titleA">M</p>
                <p className="listf titleA">F</p>
                <p className="listn titleA">N</p>
                <p className="listlicenses titleA"> </p>
                {scripts.map((script, index) => (
                    <>
                        <p className="Ltitle" title={script.description}>{script.title}</p>
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
  
  export default AutScripts;