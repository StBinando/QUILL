import React, { useEffect, useState } from "react";
// import { unstable_renderSubtreeIntoContainer } from "react-dom";

import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import CommentBox from "./***EXAMPLE***/CommentBox";
import Login from "./components/mainLevel/Login";
import Signup from "./components/mainLevel/Signup";
import NoMatch from "./components/mainLevel/NoMatch";
import HomePage from "./components/mainLevel/HomePage"
import Profile from "./components/mainLevel/Profile";
import Author from "./components/authorElements/Author";
import Company from "./components/companyElements/Company";
import NavBar from "./components/mainLevel/NavBar";
import Logout from "./components/mainLevel/Logout";
import DeleteUser from "./components/mainLevel/DeleteUser";
import Picture from "./components/mainLevel/Picture";
import AutScripts from "./components/authorElements/AutScripts";
import AutLicenses from "./components/authorElements/AutLicenses";
import NewScript from "./components/authorElements/NewScript";
import Search from "./components/companyElements/Search";
import Results from "./components/companyElements/Results";
import CompLicenses from "./components/companyElements/CompLicenses";
import Script from "./components/companyElements/Script";


// const baseURL = 'http://localhost:8080';

function App() {
  return (
    // <div className="wrapper">
      <BrowserRouter>
        <Routes>
{/* ================  LOG IN / CREATE NEW ACCOUNT  ============== */}
          <Route path='/' index element={<HomePage/>} />
          <Route path='signup' element={<Signup />} />
          <Route path='login' element={<Login />} />

{/* ================            AUTHOR             ============== */}
          <Route path='author/*' element={<NavBar/>}>

            <Route path='profile' element={<Profile />} />
            <Route path='profilepic' element={<Picture />} />

            <Route path='main' element={<Author />} />
            <Route path='scripts' element={<AutScripts/>} />
            <Route path='addnew' element={<NewScript/>} />
            <Route path='licenses' element={<AutLicenses/>} />
            <Route path='script/licenses' element={<AutLicenses/>} />
            {/* <Route path='license/company' element={<p>company profile</p>} /> */}
            <Route path='script/delete' element={<p>delete script</p>} />
            <Route path='script/licenses' element={<p>edit script details</p>} />

            <Route path="logout" element={<Logout />} />
            <Route path="delete" element={<DeleteUser />} />

            <Route path="*" element={<NoMatch />} />
          </Route>

{/* ================           COMPANY             ============== */}
          <Route path='company/*' element={<NavBar/>}>

            <Route path='profile' element={<Profile />} />
            <Route path='profilepic' element={<Picture />} />
            <Route path='main' element={<Company />} />
            <Route path='search' element={<Search/>} />
            <Route path='results' element={<Results/>} />
            <Route path='licenses' element={<CompLicenses/>} />
            <Route path='script' element={<Script/>} />

            {/* <Route path='company/script/author' element={<p>author profile</p>} /> */}
            
            <Route path="logout" element={<Logout />} />
            <Route path="delete" element={<DeleteUser />} />

            <Route path="*" element={<NoMatch />} />
          </Route>

{/* ================        PAGE NOT FOUND         ============== */}
          <Route path="*" element={<NoMatch />} />

        </Routes>
      </BrowserRouter>

      
    // </div>
  )

}


export default App;


   
// import {useState, useEffect} from "react";
// import './App.css';

// function App() {

//     const [users, setUsers] = useState("");

//     const fetchDog =  function(){
//       console.log("xxxx")
//       // fetch("https://dog.ceo/api/breeds/image/random")
//       fetch('http://localhost:8080/users')
//       // fetch('hhttp://localhost:8080/scripts/pdf/1')
//       .then(response => response.json())
//       .then(data => setUsers(data))
//       // console.log(users[0].email)
//       console.log(users)
//     }

//   return (
//     <div id="app">
//     <h1>RANDOGMISER</h1>
//     {/* <img id="dog-img" src={dogImgUrl} /> */}
//     {/* <img id="dog-img" src="http://localhost:8080/userprofile/1/profilepicture"} /> */}
//     {/* <p>{users[0].email}</p> */}
//     <button onClick={fetchDog}>Gimme those dogs!</button>
//     </div>
//   );
// }

// export default App;