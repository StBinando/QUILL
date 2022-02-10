import { Link } from "react-router-dom";

import allscripts from "../../images/allscripts.png"
import sendscript from "../../images/sendscript.png"
import licenses from "../../images/licenses.png"
import home from "../../images/home.png"
import underconstruction from "../../images/underconstruction.png"

const AutLicenses = () => {

    return (
        <div className="flexiColumn">
            <div className="iconsTop">
                <Link className="home hover desaturate" to="../main"><img src={home} height="180"/></Link>
                <p className="spacer"></p>
                <Link className="sendscript hover desaturate" to="../addnew"><img src={sendscript} height="180"/></Link>
                <p className="spacer"></p>
                <Link className="scripts hover desaturate" to="../scripts"><img src={allscripts} height="180"/></Link>
                <p className="spacer"></p>
                <Link className="licenses hover" to="../licenses"><img src={licenses} height="180"/></Link>
            </div>
            <h2 className="info"></h2>

            <img src={underconstruction} height="450"/>

        </div>


        // <div className="listPage">
        //     <div className="listButtons">
        //         <button><Link to="../main">back to main</Link></button>
        //         <button><Link to="../scripts">scripts list</Link></button>
        //     </div>

        //     <h2>Author - licenses</h2>

        //     <div className="licensesList">
        //         {licenses.map((license, index) => {
        //             return (
        //                     <p className="licenseLine">
        //                         {license.title}
        //                         <button>
        //                         {license.company}
        //                         </button>
        //                         {license.issued}
        //                         {license.active ? "ACTIVE" : "EXPIRED"}
        //                         {license.expires}
        //                     </p>
        //         )})};
        //     </div>
        // </div>

    );
  }
  
  export default AutLicenses;