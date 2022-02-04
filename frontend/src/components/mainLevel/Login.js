import { Link } from "react-router-dom";

const Login = () => {
    return (
        <>
            <h1>Log In</h1>
            <h4>form</h4>
            <p>username</p>
            <p>password</p>
            <h4>submit</h4>
            <Link to="/author/main">Author main page</Link>
            <br/>
            <Link to="/company/main">Company main page</Link>
            <br/>
            <Link to="/" >back</Link>
        </>

    );
  }
  
  export default Login;

