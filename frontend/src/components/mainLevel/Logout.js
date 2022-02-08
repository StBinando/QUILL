import { Link } from "react-router-dom";

import logout from "../../images/logout.png"
import confirm from "../../images/delete.png"
import cancel from "../../images/cancel.png"


const Logout = ({setProfile}) => {

    const handleConfirm = () => {
        setProfile({
            id: "",
            name: "",
            bio: "",
            userType: ""
        })
        window.location.href = `http://localhost:3000`;

    }
    return (
        <div className="flexiColumn">

            <img className="logout" src={logout} width="520px" height="520px"/>

            <h2 className="msg">do you confirm you want to log out?</h2>

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
