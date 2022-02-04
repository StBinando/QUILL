import { Link, Route, Routes } from "react-router-dom";

const Signup = () => {
    return (
        <>
            <h1>Create new user</h1>
            <h4>form</h4>
            <p>username</p>
            <p>password</p>
            <p>e-mail</p>
            <h4>submit</h4>
            <Link to="/author/main">Author main page</Link>
            <br/>
            <Link to="/company/main">Company main page</Link>
            <br/>
            <Link to="/" >back</Link>
        </>

    );
  }
  
  export default Signup;