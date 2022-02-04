import { Link } from "react-router-dom";


const AutScripts = () => {
    return (
        <>
            <h1>Author - Scripts</h1>
            <Link to="../addnew">upload NEW script</Link>
            -----
            <Link to="../main">back</Link>

            <p>
                Title - data - data - data - ...........
                <button>edit details</button>
                <button>delete</button>
                <Link to="../script/licenses">licenses</Link>
            </p>
            <p>
                Title - data - data - data - ...........
                <button>edit details</button>
                <button>delete</button>
                <Link to="../script/licenses">licenses</Link>
            </p>
            <p>
                Title - data - data - data - ...........
                <button>edit details</button>
                <button>delete</button>
                <Link to="../script/licenses">licenses</Link>
            </p>
            <p>
                Title - data - data - data - ...........
                <button>edit details</button>
                <button>delete</button>
                <Link to="../script/licenses">licenses</Link>
            </p>
        </>
    );
  }
  
  export default AutScripts;