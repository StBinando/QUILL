import { Link, useParams } from "react-router-dom";
import React, { useState } from 'react';

import search from "../../images/search.png"
import licenses from "../../images/licenses.png"
import home from "../../images/home.png"
import underconstruction from "../../images/underconstruction.png"

const CompLicenses = () => {
    let {id} = useParams();
    const[msg, setMsg] = useState();

    return (
            <div className="flexiColumn">
                <div className="iconsTop">
                    <div className="iconsTop">
                        <Link className="home hover desaturate" to="../main"><img src={home} height="180"/></Link>
                        <p className="spacer"></p>
                        <Link className="search hover desaturate" to="../search"><img src={search} height="180"/></Link>
                        <p className="spacer"></p>
                        <Link className="licenses hover" to="../licenses"><img src={licenses} height="180"/></Link>
                        <h3 className="message">{msg}</h3>
                    </div>
                </div>
                
                    {msg==null ? null : <h3 className="message">{msg}</h3>}
            <h2 className="info"></h2>

            <img src={underconstruction} height="450"/>

        </div>
    );

  }
  
  export default CompLicenses;