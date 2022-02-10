import { Link } from "react-router-dom";

// =================================================
// =========    not yet implemented    =============
// =====    to display a single script    ==========
// =================================================
const Script = () => {
    return (
        <>
            <h1>Company - Single script</h1>
            <Link to="../main">back to main</Link>
            <h3>Title</h3>
            <p>Length</p>
            <p>Genre</p>
            <p>....</p>
            <button>download PDF</button>
            <button>buy license</button>

        </>
    );
  }
  
  export default Script;