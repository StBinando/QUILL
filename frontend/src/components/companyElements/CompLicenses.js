import { Link } from "react-router-dom";

import search from "../../images/search.png"
import licenses from "../../images/licenses.png"
import home from "../../images/home.png"
import underconstruction from "../../images/underconstruction.png"

const CompLicenses = () => {
    return (
        <div className="flexiColumn">
            <div className="iconsTop">
                <Link className="home" to="../main"><img src={home} height="180"/></Link>
                <p className="spacer"></p>
                <Link className="search" to="../search"><img src={search} height="180"/></Link>
                <p className="spacer"></p>
                <Link className="active" to="../licenses"><img src={licenses} height="180"/></Link>
                {/* <h3 className="message">{msg}</h3> */}
            </div>
            <h2 className="info"></h2>

            <img src={underconstruction} height="450"/>

        </div>
    );

  }
  
  export default CompLicenses;