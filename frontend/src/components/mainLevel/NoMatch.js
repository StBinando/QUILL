import { Link } from "react-router-dom";

import notfound from "../../images/notfound.png"

const NoMatch = () => {
    return (
        <>
            <Link to="../main" ><img className="confirm hover" src={notfound} width="450px"/></Link>
            <br/>
        </>
    );
  }
  
  export default NoMatch;