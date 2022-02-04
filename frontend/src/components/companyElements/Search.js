import { Link, Outlet } from "react-router-dom";
import RecentScripts from "./RecentScripts";


const Search = () => {
    return (
        <>
            <h1>Company - Search</h1>
            <Link to="../main">back</Link>
            <h4>form</h4>
            <p>Title</p>
            <p>Length</p>
            <p>Genre</p>
            <p>....</p>
            <Link to="../results">search...</Link>
            <hr/>

            <RecentScripts/>

            <Outlet/>
        </>
    );
  }
  
  export default Search;