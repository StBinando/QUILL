import { useState , useEffect} from "react";

import { BrowserRouter, Route, Routes, Navigate, useNavigate, useParams } from 'react-router-dom';

import Login from "./mainLevel/Login";
import Signup from "./mainLevel/Signup";
import NoMatch from "./mainLevel/NoMatch";
import HomePage from "./mainLevel/HomePage"
import Profile from "./mainLevel/Profile";
import Author from "./authorElements/Author";
import Company from "./companyElements/Company";
import NavBar from "./mainLevel/NavBar";
import Logout from "./mainLevel/Logout";
import DeleteUser from "./mainLevel/DeleteUser";
import Picture from "./mainLevel/Picture";
import AutScripts from "./authorElements/AutScripts";
import AutLicenses from "./authorElements/AutLicenses";
import NewScript from "./authorElements/NewScript";
import Search from "./companyElements/Search";
import Results from "./companyElements/Results";
import CompLicenses from "./companyElements/CompLicenses";
import Script from "./companyElements/Script";



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
        bio: "",
        profilePic: null
    });
    const [user, setUser] = useState({
            username: "",
            password: "",
            email: ""
        });
    const [scripts, setScripts] = useState([{}]);
    const [results, setResults] = useState([{}]);
    const [dpftoupload, setPdftoupload] = useState(null);
    const [image, setImage] = useState();
    const [pathResults, setPathResults] = useState();
    const [msg, setMsg] = useState();

// =============      END     =================
// =============    STATES    =================
    


// =============    LOGIN     =================
const handleLoginSubmit = (data) => {
    fetch("http://localhost:8080/user/validate?user="+data.username+"&pwd="+data.password)
    .then(response => response.json())
    .then(data => {
        if(data.id){
            window.location.href = `http://localhost:3000/${data.userType}/${data.id}/main`;
        } else {
            setMsg("username and/or password incorrect");
        }
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
        fetch("http://localhost:8080/user/create/"+data.userType,{method: 'POST', body: JSON.stringify(data), headers: { 'Content-Type': 'application/json' }})
        .then(response => response.json())
        .then(data => {
            window.location.href = `http://localhost:3000/${data.userType}/${data.id}/profile`;
        })
    }

    
// =========   SUBMIT SCRIPT   =================
    const handleNewScriptSubmit = (_data, file, id) => {
        formData.append("pdf", file);
        
        fetch(
            "http://localhost:8080/author/"+id +"/script/add" +
            "?title="+_data.title +
            "&authorname=" + profile.name +
            "&genre=" + _data.genre.toUpperCase() +
            "&length=" + _data.length +
            "&m=" + _data.m + 
            "&f=" + _data.f +
            "&n=" + _data.n +
            "&language=" + _data.language+
            "&royaltyfree=false" +
            "&description="+ _data.description +
            "&tags=banana",
			{
                method: 'POST',
				body: formData,
			}
            )
            .then(response => response.json())
            .then(data => {
            })
            console.log(profile.userType);
            const path = `http://localhost:3000/${profile.userType}/${profile.id}/scripts`;
            console.log(path);
            window.location.href = path;
        }
        
// =============    UPDATE PROFILE     =================
            const handleUdpateProfile = (data, id) => {
                setProfile(data);
                fetch("http://localhost:8080/userprofiles/"+id,{
                    method: 'PUT',
                    body: JSON.stringify(data),
                    headers: { 'Content-Type': 'application/json' }})
                .then(response => response.json())
                .then(data => {console.log(profile)})
            }

// ================= UPDATE PICTURE ========================
    const handleSubmitPicture = (file, id) => {

        console.log("ID: " + id);
        formData.append("profilepicture", file);
        fetch("http://localhost:8080/userprofile/"+id+"/profilepicture/add",
			{
				method: 'PUT',
				body: formData,
			}
		)
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        window.location.href = `http://localhost:3000/${profile.userType}/${profile.id}/profile`;
    }

// ================= GET SEARCH PARAMS ========================
    const handleSearchSubmit= (data, id) => {
        if (data.length == "") {data.length = -1}
        if (data.m == "") {data.m = -1}
        if (data.f == "") {data.f = -1}
        if (data.n == "") {data.n = -1}
        if (data.cast == "") {data.cast = -1}

        setPathResults(backend + "/results?"+
            "title=" + data.title +
            "&authorname=" + data.authorname +
            "&genre=" + data.genre +
            "&lop=" + data.lop + "&length=" + 
                (data.length==-1 ? data.length : (data.length + "&" + data.lop + data.length)) +
            "&mop=" + data.mop + "&m=" + 
                (data.m==-1 ? data.m : (data.m + "&" + data.mop + data.m)) +
            "&fop=" + data.fop + "&f=" +
                (data.f==-1 ? data.f : (data.f + "&" + data.fop + data.f)) +
            "&nop=" + data.nop + "&n=" +
                (data.n==-1 ? data.n : (data.n + "&" + data.nop + data.n)) +
            "&cop=" + data.cop + "&cast=" +
                (data.cast==-1 ? data.cast : (data.cast + "&" + data.cop + data.cast)) +
            "&language=" + data.language +
            "&royaltyfree=" + data.royaltyfree +
            "&tags=");
    }



// ===============================================================
// ===============================================================
// =============        RENDERING PAGE       =====================
// ===============================================================
// ===============================================================

    return (
        <>
        
        <BrowserRouter>
        <Routes>
{/* ================  LOG IN / CREATE NEW ACCOUNT  ============== */}
          <Route path='/' index element={<HomePage/>} />
          <Route path='signup' element={<Signup onSignupSubmit={handleSignUpSubmit}/>} />
          <Route path='login' element={<Login onLoginSubmit={handleLoginSubmit} setMsg={setMsg} msg={msg}/>} />
          {/* <Route path='login' element={<Login onLoginSubmit={handleLoginSubmit} msg={msg}/>} /> */}

{/* ================            AUTHOR             ============== */}
          <Route path='author/:id/*' element={<NavBar setProfile={setProfile} profile={profile} setImage={setImage} image={image}/>}>

            <Route path='profile' element={<Profile
                onUpdateProfileSubmit={handleUdpateProfile}
                profile={profile}
                onSubmitPicture={handleSubmitPicture}/>} />

            <Route path='main' element={<Author />} />
            <Route path='scripts' element={<AutScripts setScripts={setScripts} scripts={scripts}/>} />
            <Route path='addnew' element={<NewScript 
                onNewScriptSubmit={handleNewScriptSubmit}
                setPdftoupload={setPdftoupload} />} />
            <Route path='licenses' element={<AutLicenses/>} />
            <Route path='script/licenses' element={<AutLicenses/>} />
            {/* <Route path='license/company' element={<p>company profile</p>} /> */}
            <Route path='script/delete' element={<p>delete script</p>} />
            <Route path='script/licenses' element={<p>edit script details</p>} />

            <Route path="logout" element={<Logout />} />
            <Route path="delete" element={<DeleteUser profile={profile}/>} />

            <Route path="*" element={<NoMatch />} />
          </Route>

{/* ================           COMPANY             ============== */}
          <Route path='company/:id/*' element={<NavBar setProfile={setProfile} profile={profile} setImage={setImage} image={image}/>}>

            <Route path='profile' element={<Profile
                onUpdateProfileSubmit={handleUdpateProfile}
                profile={profile}
                onSubmitPicture={handleSubmitPicture}/>} />
            <Route path='profilepic' element={<Picture />} />
            <Route path='main' element={<Company />} />
            <Route path='search' element={<Search onSearchSubmit={handleSearchSubmit} pathResults={pathResults} setResults={setResults} results={results}/>} />
            {/* <Route path='results' element={<Results/>} /> */} 
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