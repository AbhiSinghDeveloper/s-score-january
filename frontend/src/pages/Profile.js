import React from "react";
import { useState } from "react";
import { Box } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import axios from "axios";

export default function Profile() {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    empNo: "",
    mobileNo: "",
    doj: "",
    dob: "",
    nameOfDeptAndSclResearchCenter: "",
    yearPHD: "",
    hasPHD: "",
    designation: "",
    // currentGrossSalary:"",
    // role:"",
  });
  const onChangeName = (e) => {
    setData({
      ...data,
      fname: e.target.value,
    });
    console.log(data.fname);
  };
  const onChangeName1 = (e) => {
    setData({
      ...data,
      lname: e.target.value,
    });
    console.log(data.lname);
  };
  const onChangeName2 = (e) => {
    setData({
      ...data,
      empNo: e.target.value,
    });
    console.log(data.empNo);
  };
  const onChangeName3 = (e) => {
    setData({
      ...data,
      mobileNo: e.target.value,
    });
    console.log(data.mobileNo);
  };
  const onChangeName4 = (e) => {
    setData({
      ...data,
      dob: e.target.value,
    });
    console.log(data.dob);
  };
  const onChangeName5 = (e) => {
    setData({
      ...data,
      nameOfDeptAndSclResearchCenter: e.target.value,
    });
    console.log(data.nameOfDeptAndSclResearchCenter);
  };
  const onChangeName6 = (e) => {
    setData({
      ...data,
      doj: e.target.value,
    });
    console.log(data.doj);
  };
  const onChangeName7 = (e) => {
    setData({
      ...data,
      hasPHD: e.target.value,
    });
    console.log(data.hasPHD);
  };
  const onChangeName8 = (e) => {
    setData({
      ...data,
      yearPHD: e.target.value,
    });
    console.log(data.yearPHD);
  };

  // const onChangeName9=(e)=>{
  //   e.preventDefault();
  //   let tempEmail=e.target.value
  //   if(tempEmail.include)
  //   setData({

  //       ...data,
  //       email: e.target.value
  //     })
  //   console.log(data.email);
  // }
  const onChangeName10 = (e) => {
    setData({
      ...data,
      cgs: e.target.value,
    });
    console.log(data.cgs);
  };

  const onChangeName11 = (e) => {
    setData({
      ...data,
      designation: e.target.value,
    });
    console.log(data.designation);
  };

  const onSubmitProfile = async (e) => {
    e.preventDefault();
    console.log(data);
    console.log(localStorage.getItem("token"), "user token");
    const token = localStorage.getItem("token");

    await axios
      .put(
        "http://localhost:5000/user/create-profile",
        { ...data },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        },
      )
      .then((res) => {
        console.log("response", res);
        window.location.href = "/fill-a";
      })
      .catch((res) => {
        console.log(`Error Message ${res}`);
      });
  };

  return (
    <>
      <p>
        <p align='center'>
          <h2> Profile</h2>
        </p>
        <Box
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'>
          <img
            src='https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg'
            id='output'
            width='150'
            alt='profile'
          />
          <label className='-label' for='file'>
            <span className='glyphicon glyphicon-camera'></span>
          </label>
        </Box>
        <TextField
          id='outlined-basic'
          variant='outlined'
          label='First name'
          onChange={onChangeName}
          required
          placeholder='Enter Your First Name'
          fullWidth
          margin='normal'
          name='firstName'
        />
        <TextField
          id='last-name'
          label='Last Name'
          required
          onChange={onChangeName1}
          variant='outlined'
          placeholder='Enter Your Last Name'
          fullWidth
          margin='normal'
          name='lastName'
        />
        <TextField
          id='Employee Number'
          label='Employee Number'
          required
          onChange={onChangeName2}
          variant='outlined'
          placeholder='Enter Employee Number'
          fullWidth
          margin='normal'
          name='nickName'
        />
        <TextField
          id='Phone Number'
          label='Phone number'
          variant='outlined'
          required
          onChange={onChangeName3}
          placeholder='Phone number'
          input
          type='tel'
          fullWidth
          margin='normal'
          name='nickName'
        />
        <TextField
          id='Date of birth'
          label='Birth Date'
          required
          onChange={onChangeName4}
          variant='outlined'
          placeholder='dd-mm-yyyy'
          input
          type='text'
          fullWidth
          margin='normal'
          name='nickName'
        />
        <TextField
          id='Name of Department & School/Research Centre'
          label='Name of Department & School/Research Centre'
          required
          variant='outlined'
          placeholder='Name of Department & School/Research Centre'
          input
          onChange={onChangeName5}
          type='text'
          fullWidth
          margin='normal'
          name='nickName'
        />
        <TextField
          id='Date of joining'
          label='Date of joining'
          required
          onChange={onChangeName6}
          variant='outlined'
          placeholder='dd-mm-yy'
          input
          type='text'
          fullWidth
          margin='normal'
          name='nickName'
        />
        <TextField
          id='Whether Awarded PhD'
          label='Whether Awarded PhD'
          required
          onChange={onChangeName7}
          variant='outlined'
          placeholder='Whether Awarded PhD'
          input
          type='text'
          fullWidth
          margin='normal'
          name='nickName'
        />
        <TextField
          id='Year Awarded PhD'
          label='Year Awarded PhD'
          required
          onChange={onChangeName8}
          variant='outlined'
          placeholder='Year Awarded PhD'
          input
          type='text'
          fullWidth
          margin='normal'
          name='nickName'
        />
        {/* <TextField
            id="Email id"
            label="Email id"
            required
            onChange={onChangeName9}
            variant="outlined"
            placeholder="Email id"
            input
            type="text"
            fullWidth
            margin="normal"
            name="nickName"
          /> */}
        <TextField
          id='Current Gross Salary'
          label='Current Gross Salary'
          required
          onChange={onChangeName10}
          variant='outlined'
          placeholder='Current Gross Salary'
          input
          type='text'
          fullWidth
          margin='normal'
        />
        <TextField
          id='Designation'
          label='Designation'
          required
          onChange={onChangeName11}
          variant='outlined'
          placeholder='Enter Designation'
          fullWidth
          margin='normal'
          name='nickName'
        />
        <button onClick={onSubmitProfile}>Submit and Next</button>
      </p>
    </>
  );
}
