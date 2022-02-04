import { Link, Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const NavBar = () => {
    return (
        <>
            <h3>(navigation bar)</h3>
            <h1>QUILL</h1>
            <p>logosmall</p>
            <Link to="logout" >Logout</Link>
            <br/>
            <Link to="main">User main page</Link>
            <hr/>
            <SideBar/>

            <Outlet/>    
        </>

    );
  }
  
  export default NavBar;