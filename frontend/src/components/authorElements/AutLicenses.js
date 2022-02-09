import { Link } from "react-router-dom";

import allscripts from "../../images/allscripts.png"
import sendscript from "../../images/sendscript.png"
import licenses from "../../images/licenses.png"
import home from "../../images/home.png"
import underconstruction from "../../images/underconstruction.png"

const AutLicenses = () => {
    // const licenses =[
    //     {
    //         "id": 1,
    //         "title": "Lysistrata",
    //         "company": "companyName",
    //         "issued": "12-02-2021",
    //         "active": true,
    //         "expires": "12-02-2022"
    //     },
    //     {
    //         "id": 1,
    //         "title": "Lysistrata",
    //         "company": "companyName",
    //         "issued": "12-02-2021",
    //         "active": true,
    //         "expires": "12-02-2022"
    //     }
    // ]



    return (
        <div className="flexiColumn">
            <div className="iconsTop">
                <Link className="home" to="../main"><img src={home} height="180"/></Link>
                <p className="spacer"></p>
                <Link className="sendscript" to="../addnew"><img src={sendscript} height="180"/></Link>
                <p className="spacer"></p>
                <Link className="scripts" to="../scripts"><img src={allscripts} height="180"/></Link>
                <p className="spacer"></p>
                <Link className="active" to="../licenses"><img src={licenses} height="180"/></Link>
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