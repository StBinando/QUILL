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

            <img className="image" src={logout} width="300px"/>

            <h2 className="info3">do you confirm you want to log out?</h2>

            <div className="buttons">
                    <img className="confirm hover" onClick={handleConfirm} src={confirm} width="130px"/>
                <Link className="cancel" to="../main" >
                    <img className="cancel hover" src={cancel} width="130px"/>
                </Link>
            </div>

        </div>

    );
  }
  
  export default Logout;
