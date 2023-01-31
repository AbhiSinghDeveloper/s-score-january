import React from "react";
import { useState } from "react";
import './login.css';
import axios from "axios";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { InputAdornment } from "@material-ui/core";
import { Input } from "@material-ui/core";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";
const Login = ({ handleChange }) => {
  //  Login flow
  const [data, setData] = useState({
    email: "",
   password:"",
  
})
const [admin, setAdmin] = useState({
  email: "",
 password:"",

})


  const LogIn = async (e) => {
    e.preventDefault();
    try {
        
     let res = await axios.post("http://localhost:5000/user/login", { ...data });
      console.log(res);
      localStorage.setItem("token", res.data.refreshtoken);

    window.location.href = "/declaration";
    } catch (err) {
      alert(err.response.data.msg);
    }
  };


  const paperStyle = {
    padding: 20,
    height: "73vh",
    width: 300,
    margin: "0 auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };


  return (
    <div>
    <nav id="bggcolor">
    <Grid align="center">
    <h3>Login as Employee</h3>
      <form>
        <Paper style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <h2>Sign In</h2>
          </Grid>
          <Input
            label="Username"
            type="email"
            value={data.email}
            // variant="filled"
            onChange= { (e)=>
              setData({
                 ...data, 
                 email: e.target.value,
           })
          }

            placeholder="Enter username"
            fullWidth
            required
            endAdornment={
              <InputAdornment variant="filled" position="end">
                @sathyabama.ac.in
              </InputAdornment>
            }
          />
          <TextField
            label="Password"
            type="password"
            value={data.password}
            onChange= { (e)=>
              setData({
                 ...data, 
                 password: e.target.value,
           })
          }
            placeholder="Enter password"
            fullWidth
            required
          />
          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label="Remember me"
          />
          
          <Typography>
            {" "}
            Do you have an account ?
            <Link href="#" onClick={() => handleChange("event", 1)}>
              Sign Up
            </Link>
          </Typography>
        </Paper>
      </form>
      <Button
        type="submit"
        color="primary"
        variant="contained"
        onClick={LogIn}
        style={btnstyle}
        fullWidth
      >
        Sign in
      </Button>
    </Grid>
    </nav>
    
    </div>
  );
};
export default Login;
