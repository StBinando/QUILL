import { Link, Outlet, useParams } from "react-router-dom";
import { useEffect } from "react";
import SideBar from "./SideBar";
import QuillSaturated from "../../images/QuillSaturated.png"
import logout from "../../images/logout.png"

const NavBar = ({setProfile, profile, setImage, image}) => {
    let {id} = useParams();

// =====   Fetch profile, set in state   =====
        useEffect( () => {
            fetchProfile();
            fetchImage();
        }, [])  
        
        const fetchProfile = () => {
            fetch(`http://localhost:8080/userprofiles/${id}`)
            .then(response => response.json())
            .then(data => {
                setProfile(data)
            })
        }

        const fetchImage = () => {
            fetch(`http://localhost:8080/userprofile/${id}/profilepicture`)
            .then(response => {
                if(response.ok){
                    setImage(true);
                } else {
                    setImage(false);
                }
            })
        }
        
    

   
    return (
        
        <div className="userwholepage">
            <div className="navbar">
                <img className="logosmall" src={QuillSaturated} height="160"/>
                <p className="slogan">From Script to Stage</p>
                <div className="navbuttons">
                    <Link Link className="logout hover"to="logout" ><img src={logout} height="150"/></Link>
                </div>
            </div>

            <div className="page">
                <SideBar profile={profile} image={image}/>    
                <Outlet/>    
            </div>

        </div>

    );
  }
  
  export default NavBar;