import { Link } from "react-router-dom";


const Results = () => {
    return (
        <>
            <h1>Company - Results</h1>
            <Link to="../main">back to main page</Link>
            -----
            <Link to="../search">search again</Link>

            <p>
                Title - data - data - data - ...........
                <button>download PDF</button>
                <button>buy license</button>
            </p>
            <p>
                Title - data - data - data - ...........
                <button>download PDF</button>
                <button>buy license</button>
            </p>
            <p>
                Title - data - data - data - ...........
                <button>download PDF</button>
                <button>buy license</button>
            </p>
        </>
    );
  }
  
  export default Results;