import { Link } from "react-router-dom";


const Author = () => {
    return (
        <>
            <h1>Author</h1>
            <Link to="../scripts">see scripts uploaded</Link>
            <br/>
            <br/>
            <Link to="../licenses">see licenses sold</Link>
            <br/>
            <br/>
            <Link to="../addnew">upload script</Link>
        </>

    );
  }
  
  export default Author;