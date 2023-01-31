import React, { useState } from "react";
import { Input } from "@mui/material";
import Checkbox from "@material-ui/core/Checkbox";
import Navbar from "./Navbar";

const Declaration = () => {

    const[data,setDate]=useState({
     AcademicYear:"",
    });

    const [isAgree, setAgree] = useState(false);

    const onChangeAcadYear = (e) => {
      setDate({
        data: {
          AcademicYear: e.target.value,
        },
      });
      localStorage.setItem("acadYear", e.target.value);
    };
  
    const onCheck = (e) => {
      if (isAgree === false) {
        setAgree(true);
      } else {
        setAgree(false);
      }
    };
  
    const onSubmit = (e) => {
      e.preventDefault();
      console.log(localStorage.getItem("acadYear"));
      if (isAgree === false || data.AcademicYear === "") {
        alert(
          "Please fill Acdemic Year and accept the terms and condition before proceed"
        );
      } else {
        window.location.href = "/profile";
      }
    };
  
    console.log(data.AcademicYear);
    console.log(isAgree);
    

    return(
    <div>
   <p>
    <grid align ="center">
     
     

     <h1 align="center" >Declaration </h1>

     <h3 align="center" >Academic Year</h3>
     <div align ="center">
     <select align = "center"
      onChange={(e) => setDate({
        data:{
          AcademicYear:e.target.value,

        }
      })}>
    <option >Academic Year</option>
    <option value="2017">2017-2018</option>
    <option value="2018">2018-2019</option>
    <option value="2019">2019-2020</option>
    <option value="2020">2020-2021</option>
    <option value="2021">2021-2022</option>
    
  </select>
   
  </div>
     <h2>
     <Checkbox align="center" onChange={onCheck}>Agree</Checkbox> I solemnly affirm and state that the information provided me in this SScore Template and uploaded proofs are true and correct to the best of my knowledge and belief. I hereby express my willingness to be considered for the SScore Assessment in accordance with the SScore eligibility, terms and conditions.	
     </h2>
     <p align ="center">
    <button onClick={onSubmit} height ="200px" width= "200px" >Next</button>
    </p>
    </grid></p>
</div>
    )
};

export default Declaration;  