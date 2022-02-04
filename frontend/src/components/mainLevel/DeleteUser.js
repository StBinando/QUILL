import { Link } from "react-router-dom";

const DeleteUser = () => {
    return (
        <>
        <h1>Delete account</h1>
        <Link to="/" >confirm delete user</Link>
        <br/>
        <br/>
        <Link to="../profile" >cancel</Link>
        </>

    );
  }
  
  export default DeleteUser;