import { Link, Route, Routes } from "react-router-dom";

const SideBar = ({profile, image}) => {

    // console.log(profile.profile);

    const scriptsNo = 2;
    const licensesNo = 0;

    // const img_path = `http://localhost:8080/userprofile/${profile.profile.id}/profilepicture`;
    // console.log("image exists? :")
    console.log("image exists? :"+image)
    // console.log("image exists? :"+image.image==false)

    return (
        <div>
            <aside className={profile.userType == "AUTHOR" ? "sidebarA" : "sidebarC"}>
                <Link className="picture" to="profile" >
                    {image &&
                    <img className="profilePic"
                        src={`http://localhost:8080/userprofile/${profile.id}/profilepicture`} height="202" width="202"/>
                    }
                </Link>

                <p className="name">{profile.name}</p>
                <p className="bio">{profile.bio}</p>
                <Link className="edit" to="profile" ></Link>
                {/* <div>
                    {profile.userType == "AUTHOR" ? <p>scripts: {scriptsNo}</p> : null}
                    <p>license: {licensesNo}</p>
                </div> */}
                <hr/>
            </aside>
        </div>

    );
  }
  
  export default SideBar;