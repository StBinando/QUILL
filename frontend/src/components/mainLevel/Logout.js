import { Link } from "react-router-dom";

const Logout = () => {
    return (
        <>
        <h1>Log Out</h1>
        <Link to="/" >confirm logout</Link>
        <br/>
        <br/>
        <Link to="../main" >cancel</Link>
        </>

    );
  }
  
  export default Logout;
