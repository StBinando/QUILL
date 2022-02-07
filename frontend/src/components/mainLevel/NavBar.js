import { Link, Outlet, useParams } from "react-router-dom";
import { useEffect } from "react";
import SideBar from "./SideBar";
import QuillSaturated from "../../images/QuillSaturated.png"

const NavBar = ({setProfile, profile}) => {
    let {id} = useParams();
    let xxx;

// =====   Fetch profile, set in state   =====
        useEffect( () => {
            fetchProfile();
        }, [])  
        
        const fetchProfile = () => {
            fetch(`http://localhost:8080/userprofiles/${id}`)
            .then(response => response.json())
            .then(data => {
                setProfile(data)
            })
            // console.log(profile);
        }

    return (
        <div className="userwholepage">
            <div className="navbar">
                <img className="logosmall" src={QuillSaturated} height="160"/>
                {/* <p className="slogan">{profile.name}</p> */}
                <p className="slogan">...making new theatre easier...</p>
                <div className="navbuttons">
                    <Link Link className="logout"to="logout" ></Link>
                </div>
            </div>

            <div className="page">
                <SideBar profile={profile}/>    
                <Outlet/>    
            </div>

        </div>

    );
  }
  
  export default NavBar;