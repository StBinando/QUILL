import { Link, Route, Routes } from "react-router-dom";

const SideBar = (profile, image) => {

    // console.log(profile.profile);

    const scriptsNo = 2;
    const licensesNo = 0;

    const img_path = `http://localhost:8080/userprofile/${profile.profile.id}/profilepicture`;
    console.log("image: "+ image)
    console.log(image.image==true)

    console.log("image: "+ image.image)
    console.log(image==false)

    return (
        <aside className="sidebar">
            <Link className="picture" to="profile" >
                {image &&
                <img src={`http://localhost:8080/userprofile/${profile.profile.id}/profilepicture`} height="202" width="202"/>
                }
            </Link>

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