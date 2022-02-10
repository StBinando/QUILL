import { Link, Route, Routes } from "react-router-dom";

import edit2 from "../../images/edit2.png";
import picture from "../../images/picture.png";


const SideBar = ({profile, image}) => {

    const scriptsNo = 2;
    const licensesNo = 0;

    console.log("image exists? :"+image)

    return (
        <div>
            <aside className={profile.userType == "AUTHOR" ? "sidebarA" : "sidebarC"}>
                <Link className="picture" to="profile" >
                    {image &&
                    <img className="profilePic"
                        src={`http://localhost:8080/userprofile/${profile.id}/profilepicture`} height="202" width="202"/>
                    }
                    {!image && <img src={picture} height="202" width="202"/>
                    }
                </Link>

                <p className="name">{profile.name}</p>
                <p className="bio">{profile.bio}</p>
                <Link className="edit hover" to="profile" ><img src={edit2} height="80"/></Link>
            </aside>
        </div>

    );
  }
  
  export default SideBar;