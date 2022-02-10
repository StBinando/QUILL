import { Link } from "react-router-dom";

// =================================================
// =========    not yet implemented    =============
// =================================================
const RecentScripts = () => {
    const recentScripts =[
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
        <div className="recentScriptsPage">
            <h3>Recent Scripts</h3>

            <div className="recentScriptsList">
                {recentScripts.map((script, index) => {
                    return (
                        <div className="RecentScriptEntry">
                            <h4>{script.title}</h4>
                            <h5> by {script.authorname}</h5>
                            <p>{script.genre} - dur. {script.length}'</p>
                            <p>{script.language}</p>
                            <p>cast: M{script.m}, F{script.f}, N{script.n}</p>
                            <p>{script.description}</p>

                            <button><Link to="../script">show details</Link></button>
                        </div>
                )})}
            </div>
        </div>
    );
  }
  
  export default RecentScripts;