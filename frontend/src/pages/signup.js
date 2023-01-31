import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import { Input } from "@material-ui/core";
import axios from "axios";
const Signup = () => {
  const paperStyle = { padding: 20, width: 300, margin: "0 auto" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const marginTop = { marginTop: 5 };

const [data, setData] = useState({
     email: "",
    password:"",
   
})
  const history = useHistory();
 
  const register = async (e) => {
    e.preventDefault();
    try {
        
     let res = await axios.post("http://localhost:5000/user/register", { ...data });
      console.log(res);
     // localStorage.setItem("", true);

    //   window.location.href = "/";
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  return (
    <p>
    <div>
    <Grid align="left">
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlinedIcon />
          </Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an account !
          </Typography>
        </Grid>
        <form>
         
          <Input
            type="email"
            value={data.email}
            onChange= { (e)=>
                setData({
                   ...data, 
                   email: e.target.value,
             })
            }
            fullWidth
            label="Email"
            placeholder="Enter your email"
           
          />
          

          <TextField
            type="password"
            fullWidth
            required
            label="Password"
            value={data.password}
            onChange={(e) => setData({
                ...data,
               password : e.target.value,
            })}
            placeholder="Enter your password"
          />

        </form>
        <Button
          onClick={register}
          type="submit"
          variant="contained"
          color="primary"
        >
          Sign up
        </Button>
      </Paper>
    </Grid>
    
 </div>
 </p>
  );
};

export default Signup;