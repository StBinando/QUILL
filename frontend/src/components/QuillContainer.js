import { useState , useEffect} from "react";

import { BrowserRouter, Route, Routes, Navigate, useNavigate, useParams } from 'react-router-dom';

import Login from "../components/mainLevel/Login";
import Signup from "../components/mainLevel/Signup";
import NoMatch from "../components/mainLevel/NoMatch";
import HomePage from "../components/mainLevel/HomePage"
import Profile from "../components/mainLevel/Profile";
import Author from "../components/authorElements/Author";
import Company from "../components/companyElements/Company";
import NavBar from "../components/mainLevel/NavBar";
import Logout from "../components/mainLevel/Logout";
import DeleteUser from "../components/mainLevel/DeleteUser";
import Picture from "../components/mainLevel/Picture";
import AutScripts from "../components/authorElements/AutScripts";
import AutLicenses from "../components/authorElements/AutLicenses";
import NewScript from "../components/authorElements/NewScript";
import Search from "../components/companyElements/Search";
import Results from "../components/companyElements/Results";
import CompLicenses from "../components/companyElements/CompLicenses";
import Script from "../components/companyElements/Script";



const QuillContainer = () => {
    
    const backend = 'http://localhost:8080';

    const FormData = require('form-data');
    const formData = new FormData();


// =============    STATES    =================
const [profile, setProfile] = useState(
    {
        id: "",
        name: "",
        userType: "",
        bio: ""
    });
    const [user, setUser] = useState({
            username: "",
            password: "",
            email: ""
        });
    const [scripts, setScripts] = useState([{}]);
    // const [search, setSearch] = useState();
    // const [path, setPath] = useState();
    const [dpftoupload, setPdftoupload] = useState(null);

// =============      END     =================
// =============    STATES    =================
    




// =============    LOGIN     =================
const handleLoginSubmit = (data) => {
    fetch("http://localhost:8080/user/validate?user="+data.username+"&pwd="+data.password)
    .then(response => response.json())
    .then(data => {
        window.location.href = `http://localhost:3000/${data.userType}/${data.id}/main`;
    })
}

// =============    SIGNUP     =================
    const handleSignUpSubmit = (data) => {
        fetch("http://localhost:8080/user/validate?user="+data.username+"&pwd="+data.password)
        setUser({
            username: data.username,
            password: data.password,
            email: data.email
        });
        // console.log(user);
        fetch("http://localhost:8080/user/create/"+data.userType,{method: 'POST', body: JSON.stringify(user), headers: { 'Content-Type': 'application/json' }})
        .then(response => response.json())
        .then(data => {
            window.location.href = `http://localhost:3000/${data.userType}/${data.id}/main`;
            // console.log(data)
        })
    }

    const handleDelete = () => {

    }
    

// =========   SUBMIT SCRIPT   =================

    const handleNewScriptSubmit = (data, file, id) => {
        formData.append("profilepicture", file);
        
    //     // const fromForm = {
    //     //     title: data.title,
    //     //     authorname: "",
    //     //     genre: data.genre.toUpperCase(),
    //     //     length: data.length,
    //     //     m: data.m,
    //     //     f: data.f,
    //     //     n: data.n,
    //     //     language: data.language,
    //     //     description: data.description
    //     // };

        // console.log("xxx");
        fetch(
			"http://localhost:8080/author/"+id +
            "/script/add?title="+data.title +
            "&authorname=" + profile.name +
            "&genre=" + data.genre.toUpperCase() +
            "&length=" + data.length +
            "&m=" + data.m + 
            "&f=" + data.f +
            "&n=" + data.n +
            "&language=" + data.language+
            "&royaltyfree=false" +
            "&description="+ data.description +
            "&tags=banana",
			{
				mmethod: 'POST',
				body: formData,
                // mode: 'no-cors',
                headers: { 'Content-Type': 'multipart/form-data' }
			}
		)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            // window.location.href = `http://localhost:3000/${data.userType}/${data.id}/main`;
        })
    }
console.log();


// ================= to upload PICTURE ========================
    // const handleNewScriptSubmit = (file, id) => {

    //     console.log("ID: " + id);
    //     formData.append("profilepicture", file);
    //     fetch("http://localhost:8080/userprofile/"+id+"/profilepicture/add",
	// 		{
	// 			method: 'POST',
	// 			body: formData,
    //             // mode: 'no-cors',
    //             // headers: { 'Content-Type': 'multipart/form-data' }
	// 		}
	// 	)
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //         // window.location.href = `http://localhost:3000/${data.userType}/${data.id}/main`;
    //     })
    // }



    



// ===============================================================
// =============        RENDERING PAGE       =====================
// ===============================================================
    


    return (
        <>
        
        <BrowserRouter>
        <Routes>
{/* ================  LOG IN / CREATE NEW ACCOUNT  ============== */}
          <Route path='/' index element={<HomePage/>} />
          <Route path='signup' element={<Signup onSignupSubmit={handleSignUpSubmit}/>} />
          <Route path='login' element={<Login onLoginSubmit={handleLoginSubmit}/>} />
          {/* <Route path='login' element={<Login onLoginSubmit={handleLoginSubmit} msg={msg}/>} /> */}

{/* ================            AUTHOR             ============== */}
          <Route path='author/:id/*' element={<NavBar setProfile={setProfile} profile={profile}/>}>

            <Route path='profile' element={<Profile />} />
            <Route path='profilepic' element={<Picture />} />

            <Route path='main' element={<Author />} />
            <Route path='scripts' element={<AutScripts setScripts={setScripts} scripts={scripts}/>} />
            <Route path='addnew' element={<NewScript onNewScriptSubmit={handleNewScriptSubmit} setPdftoupload={setPdftoupload} />} />
            <Route path='licenses' element={<AutLicenses/>} />
            <Route path='script/licenses' element={<AutLicenses/>} />
            {/* <Route path='license/company' element={<p>company profile</p>} /> */}
            <Route path='script/delete' element={<p>delete script</p>} />
            <Route path='script/licenses' element={<p>edit script details</p>} />

            <Route path="logout" element={<Logout setProfile={setProfile} />} />
            <Route path="delete" element={<DeleteUser />} />

            <Route path="*" element={<NoMatch />} />
          </Route>

{/* ================           COMPANY             ============== */}
          <Route path='company/:id/*' element={<NavBar setProfile={setProfile} profile={profile}/>}>

            <Route path='profile' element={<Profile />} />
            <Route path='profilepic' element={<Picture />} />
            <Route path='main' element={<Company />} />
            <Route path='search' element={<Search/>} />
            <Route path='results' element={<Results/>} />
            <Route path='licenses' element={<CompLicenses/>} />
            <Route path='script' element={<Script/>} />

            {/* <Route path='company/script/author' element={<p>author profile</p>} /> */}
            
            <Route path="logout" element={<Logout setProfile={setProfile} />} />
            <Route path="delete" element={<DeleteUser />} />

            <Route path="*" element={<NoMatch />} />
          </Route>

{/* ================        PAGE NOT FOUND         ============== */}
          <Route path="*" element={<NoMatch />} />

{/* ================        USER NOT FOUND         ============== */}
{/* ========================  to add ============================ */}

        </Routes>
      </BrowserRouter>
      </>
    )

};

export default QuillContainer;