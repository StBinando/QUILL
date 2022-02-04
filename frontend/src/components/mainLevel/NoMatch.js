import { Link } from "react-router-dom";

const NoMatch = () => {
    return (
        <>
            <h1>page not found</h1>
            <Link to="../main" >back to main</Link>
            <br/>
        </>
    );
  }
  
  export default NoMatch;