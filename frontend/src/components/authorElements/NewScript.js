import { Link } from "react-router-dom";


const NewScript = () => {
    return (
        <>
            <h1>Author - upload new script</h1>

            <h4>form</h4>
            <p>Title</p>
            <p>Length</p>
            <p>Genre</p>
            <p>....</p>
            <p>load file</p>

            <Link to="../scripts">upload</Link>
            -----
            <Link to="../main">back to main</Link>
            -----
            <Link to="../scripts">scripts list</Link>

        </>

    );
  }
  
  export default NewScript;