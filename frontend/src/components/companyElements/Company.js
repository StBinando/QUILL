import { Link, Outlet } from "react-router-dom";

const Company = () => {

    return (
        <div>
            <h1>Company Main Page</h1>
            <button><Link to="../search">search scripts</Link></button>
            <button><Link to="../licenses">see licenses</Link></button>
        </div>

    );
  }
  
  export default Company;