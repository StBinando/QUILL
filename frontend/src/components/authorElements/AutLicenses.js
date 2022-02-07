import { Link } from "react-router-dom";


const AutLicenses = () => {
    const licenses =[
        {
            "id": 1,
            "title": "Lysistrata",
            "company": "companyName",
            "issued": "12-02-2021",
            "active": true,
            "expires": "12-02-2022"
        },
        {
            "id": 1,
            "title": "Lysistrata",
            "company": "companyName",
            "issued": "12-02-2021",
            "active": true,
            "expires": "12-02-2022"
        }
    ]



    return (
        <div className="listPage">
            <div className="listButtons">
                <button><Link to="../main">back to main</Link></button>
                <button><Link to="../scripts">scripts list</Link></button>
            </div>

            <h2>Author - licenses</h2>

            <div className="licensesList">
                {licenses.map((license, index) => {
                    return (
                            <p className="licenseLine">
                                {license.title}
                                <button>
                                {license.company}
                                </button>
                                {license.issued}
                                {license.active ? "ACTIVE" : "EXPIRED"}
                                {license.expires}
                            </p>
                )})};
            </div>
        </div>

    );
  }
  
  export default AutLicenses;