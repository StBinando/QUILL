import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <>
            <h1>QUILL</h1>
            <h2>Home Page </h2>

            <Link to="/login" >log in</Link>
            <br/>
            <Link to="/signup" >create new account</Link>
        </>
    );
  }
  
  export default HomePage;