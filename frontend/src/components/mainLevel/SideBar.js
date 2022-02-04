import { Link, Route, Routes } from "react-router-dom";

const SideBar = () => {
    return (
        <>
        <h3>(sidebar - [within NavBar])</h3>
        <Link to="profile" >profile pic</Link>

        <p>Name</p>
        <p>Bio</p>
        <Link to="profile" >edit profile</Link>
        <br/>
        <br/>
        <p>authors: scripts submitted --- licenses sold</p>
        <p>companies: licenses bought</p>
        <hr/>
        </>

    );
  }
  
  export default SideBar;