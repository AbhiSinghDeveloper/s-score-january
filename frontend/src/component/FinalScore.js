import { Grid } from "@material-ui/core";
import { Input } from "@mui/material";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import { useEffect, useState } from "react";
import './FinalScore.css';


const FinalScore = () => {

    const[data,setData] = useState(null);

useEffect(async ()=>{
   await axios.get("http://localhost:5000/user/final/score",{
        headers:{
            Authorization: localStorage.getItem("token")
        }
    }).then((res)=>{
        console.log("this is respone",res.data)
        setData(res.data)
    }).catch((e)=>{
        console.log("token -----",localStorage.getItem("token"))
        console.log("error", e)
    })

},[])
if(!data)return <div>Loading...</div>

    return(
        <div>
      
       <p>
        <Grid>
        <div align = "center"><h2>SATHYABAMA Institute of Science and Technology</h2>
        <p>(Deemed to be University)<br/>
       <b> Annual Performance Indicator -Sathyabama Score (SScore)</b><br/>
       June 2020 to May 2021</p>
        </div>
        <TableContainer>
            <table>
            <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="center">
                {data.UserData.name}
                </TableCell>
          </TableRow>
          <TableRow>
              <TableCell >Designation</TableCell>
              <TableCell align="center">{data.UserData.designation}</TableCell>
          </TableRow>
          <TableRow>
              <TableCell>Employee No</TableCell>
              <TableCell align="center">{data.UserData.empNo}</TableCell>
          </TableRow>
          <TableRow>
              <TableCell>Date of Birth</TableCell>
              <TableCell align="center">{data.UserData.dob}</TableCell>
          </TableRow>
          <TableRow>
              <TableCell>Email </TableCell>
              <TableCell align="center">{data.UserData.email}</TableCell>
          </TableRow>
          <TableRow>
              <TableCell>Mobile No</TableCell>
              <TableCell align="center">{data.UserData.mobileNo}</TableCell>
          </TableRow>
          <TableRow>
              <TableCell>Name of Department & School/Research Centre</TableCell>
              <TableCell align="center">{data.UserData.nameOfDeptAndSclResearchCenter}</TableCell>
              <TableCell align="right"><h3>Score A</h3></TableCell>
              <TableCell align="center">{data.ScoreA}</TableCell>
          </TableRow>
          <TableRow>
              <TableCell>Date of Joining</TableCell>
              <TableCell align="center">{data.UserData.dob}</TableCell>
              <TableCell align="right"><h3>Score B</h3></TableCell>
              <TableCell align="center">{data.ScoreB}</TableCell>
          </TableRow>
          <TableRow>
              <TableCell>Whether Awarded PhD</TableCell>
              <TableCell align="center">{data.hasPHD == true?"NO":"YES"}</TableCell>
              <TableCell align="right"><h3>Score C</h3></TableCell>
              <TableCell align="center">{data.ScoreC}</TableCell>
          </TableRow>
          <TableRow>
              <TableCell>Year Awarded PhD</TableCell>
              <TableCell align="center">{data.UserData.yearPHD}</TableCell>
              <TableCell align="right"><h2>SScore</h2></TableCell>
              <TableCell align="center">{data.totalScore}</TableCell>
          </TableRow>
          <TableRow>
              <TableCell>Current Gross Salary</TableCell>
              <TableCell align="center">{data.UserData.mobileNo}</TableCell>
          </TableRow>
          </TableHead>
            </table>
        </TableContainer>
        </Grid>
        </p>
        </div>
     
    )

};

export default FinalScore;