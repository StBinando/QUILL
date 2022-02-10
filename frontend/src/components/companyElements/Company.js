import { Link, useParams } from "react-router-dom";
import { useEffect, useState} from "react";

import search from "../../images/search.png"
import licenses from "../../images/licenses.png"
import home from "../../images/home.png"

function Company () {
    const[msg, setMsg] = useState();

    return (
        <div className="flexiColumn">
        <div className="iconsTop">
            <div className="iconsTop">
                <Link className="home hover" to="../main"><img src={home} height="180"/></Link>
                <p className="spacer"></p>
                <Link className="search hover desaturate" to="../search"><img src={search} height="180"/></Link>
                <p className="spacer"></p>
                <Link className="licenses hover desaturate" to="../licenses"><img src={licenses} height="180"/></Link>
                <h3 className="message">{msg}</h3>
            </div>
        </div>
        
            {msg==null ? null : <h3 className="message">{msg}</h3>}
            <h2 className="info">select an option</h2>

        </div>

    )
  }
  
  export default Company;