import { Link, useParams } from "react-router-dom";
import { useEffect, useState} from "react";

import allscripts from "../../images/allscripts.png"
import sendscript from "../../images/sendscript.png"
import licenses from "../../images/licenses.png"
import home from "../../images/home.png"

function Author () {
    const[msg, setMsg] = useState();

    return (
        <div className="flexiColumn">
            <div className="iconsTop">
                <Link className="active" to="../main"><img src={home} height="180"/></Link>
                <Link className="sendscript" to="../addnew"><img src={sendscript} height="180"/></Link>
                <Link className="scripts" to="../scripts"><img src={allscripts} height="180"/></Link>
                <Link className="licenses" to="../licenses"><img src={licenses} height="180"/></Link>
                <h3 className="message">{msg}</h3>
            </div>
            <h2 className="info">Select an option</h2>

        </div>

    )
  }
  
  export default Author;