import { Link , Outlet} from "react-router-dom";
import Picture from "./Picture";


const Profile = () => {
    return (
        <>
            <h1>Profile</h1>
            <h4>form</h4>
            <p>name</p>
            <p>bio</p>
            <Picture/>
            <Link to="../main">submit</Link>
            <br/>
            <Link to="../main">back</Link>
            <br/>
            <Link to="../delete">delete account</Link>

            <Outlet/>
        </>

    );
  }
  
  export default Profile;