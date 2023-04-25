import React, { useState } from "react";
import './Landing.css';
import Signup from "../pages/signup";


const Landing = () =>{
 const [data,setData] = useState({
        loginAs:0,
    });
 const onSubmit = (e) => {
        e.preventDefault();
          window.location.href = "/Singup";
        }
 const onSubmit1 = (e) => {
          e.preventDefault();
            window.location.href = "/login";
          }
return(
    <p align ="center" id="Landing">
   <h1> <h2>Welcome To SATHYABAMA Score </h2></h1>
    <div padding ="25px" style={{
       
    }}> 
<h2><select onChange={(e) =>
           setData({
             ...data,
             loginAs: e.target.value,
})}>
  
    <option>  Login </option>
    <option value={1}> Login As Faculty </option>
    <option value={2}> Login As Admin </option>
    </select></h2>
</div>
    <br/>
    <div align="center">
    <buttontoolbar>
    <button id="button" onClick={onSubmit1}>Login</button>
    </buttontoolbar>
    <br/>
    <br/>
    <buttontoolbar>
    <button id="button1" onClick={onSubmit}>Singup</button>
    </buttontoolbar>
    </div>
    </p>
   

 )};

 export default Landing;
 