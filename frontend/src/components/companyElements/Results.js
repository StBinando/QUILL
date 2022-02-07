import { Link } from "react-router-dom";


const Results = () => {

    const scripts =[
        {
            "id": 2,
            "title": "Lysistrata",
            "authorname": "Aristofane",
            "genre": "comedy",
            "length": 70,
            "m": 4,
            "f": 7,
            "n": 6,
            "language": "English",
            "royaltyfree": true,
            "description": "Women, tired of wars, decide to go on a sex strike",
            "tags": "banana",
            "uploadtime": "2022-02-05T20:12:27.963+00:00"
        },
        {
            "id": 3,
            "title": "Lysistrata",
            "authorname": "Aristofane",
            "genre": "comedy",
            "length": 70,
            "m": 4,
            "f": 7,
            "n": 6,
            "language": "English",
            "royaltyfree": true,
            "description": "Women, tired of wars, decide to go on a sex strike",
            "tags": "banana",
            "uploadtime": "2022-02-05T20:12:30.040+00:00"
        },
        {
            "id": 4,
            "title": "Lysistrata",
            "authorname": "Aristofane",
            "genre": "comedy",
            "length": 70,
            "m": 4,
            "f": 7,
            "n": 6,
            "language": "English",
            "royaltyfree": true,
            "description": "Women, tired of wars, decide to go on a sex strike",
            "tags": "banana",
            "uploadtime": "2022-02-05T20:12:30.989+00:00"
        }
    ]
    return (
        <div className="listPage">
            <div className="listButtons">
                <button><Link to="../search">search again</Link></button>
                <button><Link to="../main">back</Link></button>
            </div>

            <h2>search results</h2>

            <div className="resultsList">
                {scripts.map((script, index) => {
                    return (
                        <div className="resultsEntry">
                            <p className="resultstLine">
                                {script.title}
                                {script.authorname}
                                {script.genre}
                                {script.language}
                                {script.length}
                                {script.m}
                                {script.f}
                                {script.n}
                                <button>PDF</button>
                            </p>
                            <p className="scriptExtra">
                                {script.description}
                                <button>buy</button>
                            </p>
                        </div>
                )})};
            </div>
        </div>
    );
  }
  
  export default Results;