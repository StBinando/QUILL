import { Link, Outlet } from "react-router-dom";

const Company = () => {
    return (
        <>
            <h1>Company</h1>
            <Link to="../search">SEARCH</Link>
            <br/>
            <br/>
            <Link to="../licenses">licenses</Link>

            <Outlet/>
        </>

    );
  }
  
  export default Company;