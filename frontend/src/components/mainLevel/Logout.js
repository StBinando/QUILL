import { Link } from "react-router-dom";

import logout from "../../images/logout.png"
import confirm from "../../images/confirm.png"
import cancel from "../../images/cancel.png"


const Logout = () => {

    const handleConfirm = () => {
        window.location.href = `http://localhost:3000`;

    }
    return (
        <div className="flexiColumn">

            <img src={logout} width="520px" height="230px" width="230"/>

            <h2 className="info3">do you confirm you want to log out?</h2>

            <div className="buttons">
                {/* <button className="confirm" onClick={handleConfirm} type="submit" value=""> */}
                    <img className="confirm" onClick={handleConfirm} src={confirm} width="130px"/>
                {/* </button> */}
                <Link className="cancel" to="../main" >
                    <img className="cancel" src={cancel} width="130px"/>
                </Link>
            </div>

        </div>

    );
  }
  
  export default Logout;
