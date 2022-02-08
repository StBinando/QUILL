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
                <Link className="active" to="../main"><img src={home} height="180"/></Link>
                <Link className="search" to="../search"><img src={search} height="180"/></Link>
                <Link className="licenses" to="../licenses"><img src={licenses} height="180"/></Link>
                <h3 className="message">{msg}</h3>
            </div>
            <h2 className="info">Select an option</h2>

        </div>

    )
  }
  
  export default Company;