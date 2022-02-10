import { Link } from "react-router-dom";

import QuillSaturated from "../../images/QuillSaturated.png"
import login from "../../images/login.png"
import newuser from "../../images/newuser.png"

const HomePage = () => {

    return (
        <div className="main">
            <img className="logobig" src={QuillSaturated}/>
            <p className="slogan">From Script to Stage</p>

            <div className="main2">
                <Link className="icon1 hover desaturate" to="/login" ><img src={login} height="250"/></Link>
                <Link className="icon1 hover desaturate" to="/signup" ><img src={newuser} height="250"/></Link>
            </div>
        </div>
    );
  }
  
  export default HomePage;