import { Link, Route, Routes } from "react-router-dom";

const SideBar = (profile) => {

    // console.log(profile.profile);

    const scriptsNo = 2;
    const licensesNo = 0;

    return (
        <aside className="sidebar">
            <Link className="picture" to="profile" > </Link>

            <p className="name">{profile.profile.name}</p>
            <p className="bio">{profile.profile.bio}</p>
            <Link className="edit" to="profile" ></Link>
            {/* <div>
                {profile.userType == "AUTHOR" ? <p>scripts: {scriptsNo}</p> : null}
                <p>license: {licensesNo}</p>
            </div> */}
            <hr/>
        </aside>

    );
  }
  
  export default SideBar;