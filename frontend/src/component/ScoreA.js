// import { Typography } from "@material-ui/core";
import React, { useState } from "react";
// import { TextField, Button, Stepper, Step, StepLabel } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import { Box } from "@material-ui/core";
import { Input } from "@mui/material";
import axios from "axios";

const userId = localStorage.getItem("userId");
const acadYear = localStorage.getItem("acadYear");

const initialState = {
  eMaterialUdemy: {
    pointsAlloted: "",
    noOfActivity: 0,
    pointScored: 0,
    uploadProof: "",
  },

  eMaterialSatyabama: {
    pointsAlloted: "",
    noOfActivity: "",
    pointScored: 0,
    uploadProof: "",
  },

  courseInEmergingArea: {
    pointsAlloted: "",
    noOfActivity: "",
    pointScored: 0,
    uploadProof: "",
  },
  youtubeLec1: {
    pointsAlloted: "",
    noOfActivity: "",
    pointScored: 0,
    uploadProof: "",
  },
  youtubeLec3: {
    pointsAlloted: "",
    noOfActivity: "",
    pointScored: 0,
    uploadProof: "",
  },

  youtubeLec2: {
    pointsAlloted: "",
    noOfActivity: "",
    pointScored: 0,
    uploadProof: "",
  },
  extraTeachingActivity: {
    pointsAlloted: "",
    noOfActivity: "",
    pointScored: 0,
    uploadProof: "",
  },

  awards: {
    pointsAlloted: "",
    noOfActivity: "",
    pointScored: 0,
    uploadProof: "",
  },

  memberInOtherAcadBoard: {
    pointsAlloted: "",
    noOfActivity: "",
    pointScored: 0,
    uploadProof: "",
  },
  valueAddedProg: {
    pointsAlloted: "",
    noOfActivity: "",
    pointScored: 0,
    uploadProof: "",
  },
  overAllContribution: {
    pointsAlloted: "",
    noOfActivity: "",
    pointScored: 0,
    uploadProof: "",
  },
  evaluationOfExamPaper: {
    pointsAlloted: "",
    noOfActivity: "",
    pointScored: 0,
    uploadProof: "",
  },
  mentorInHackathon: {
    pointsAlloted: "",
    noOfActivity: "",
    pointScored: 0,
    uploadProof: "",
  },
};

const uploadToS3 = async (form_data) => {
  return await axios.post(
    "http://localhost:5000/image/upload-proof",
    form_data,
    {
      headers: {
        "content-type": "multipart/form-data",
      },
    },
  );
};

const ScoreA = (props) => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [ematscore, setEmatScore] = useState(
    props.edit !== undefined
      ? JSON.parse(localStorage.getItem("forma"))
      : initialState,
  );

  const onChangeImage = (e) => {
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  };

  const onUploadeMaterialSatyabama = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);

    let res = await uploadToS3(form_data);

    if (res) {
      setEmatScore({
        ...ematscore,
        eMaterialSatyabama: {
          ...ematscore.eMaterialSatyabama,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };
  const onUploadeMaterialUdemy = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);

    let res = await uploadToS3(form_data);

    if (res) {
      setEmatScore({
        ...ematscore,
        eMaterialUdemy: {
          ...ematscore.eMaterialUdemy,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };
  const onUploadcourseInEmergingArea = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);

    let res = await uploadToS3(form_data);

    if (res) {
      setEmatScore({
        ...ematscore,
        courseInEmergingArea: {
          ...ematscore.courseInEmergingArea,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };
  const onUploadeyoutubeLec1 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);

    let res = await uploadToS3(form_data);

    if (res) {
      setEmatScore({
        ...ematscore,
        youtubeLec1: {
          ...ematscore.youtubeLec1,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };
  const onUploadeyoutubeLec2 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);

    let res = await uploadToS3(form_data);

    if (res) {
      setEmatScore({
        ...ematscore,
        youtubeLec2: {
          ...ematscore.youtubeLec2,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };
  const onUploadeyoutubeLec3 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);

    let res = await uploadToS3(form_data);

    if (res) {
      setEmatScore({
        ...ematscore,
        youtubeLec3: {
          ...ematscore.youtubeLec3,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };
  const onUploadextraTeachingActivity = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);

    let res = await uploadToS3(form_data);

    if (res) {
      setEmatScore({
        ...ematscore,
        extraTeachingActivity: {
          ...ematscore.extraTeachingActivity,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };
  const onUploadawards = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);

    let res = await uploadToS3(form_data);

    if (res) {
      setEmatScore({
        ...ematscore,
        awards: {
          ...ematscore.awards,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };
  const onUploadmemberInOtherAcadBoard = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);

    let res = await uploadToS3(form_data);

    if (res) {
      setEmatScore({
        ...ematscore,
        memberInOtherAcadBoard: {
          ...ematscore.memberInOtherAcadBoard,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };
  const onUploadvalueAddedProg = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);

    let res = await uploadToS3(form_data);

    if (res) {
      setEmatScore({
        ...ematscore,
        valueAddedProg: {
          ...ematscore.valueAddedProg,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };
  const onUploadoverAllContribution = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);

    let res = await uploadToS3(form_data);

    if (res) {
      setEmatScore({
        ...ematscore,
        overAllContribution: {
          ...ematscore.overAllContribution,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };
  const onUploadevaluationOfExamPaper = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);

    let res = await uploadToS3(form_data);

    if (res) {
      setEmatScore({
        ...ematscore,
        evaluationOfExamPaper: {
          ...ematscore.evaluationOfExamPaper,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };
  const onUploadmentorInHackathon = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);

    let res = await uploadToS3(form_data);

    if (res) {
      setEmatScore({
        ...ematscore,
        mentorInHackathon: {
          ...ematscore.mentorInHackathon,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };
  const onSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    await axios
      .post(
        "http://localhost:5000/a/fill-form-a",
        { ematscore, acadYear },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        },
      )
      .then((res) => {
        // setFormAData(...ematscore);
        console.log(res.data);

        window.location.href = "/fill-b";
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <>
      {ematscore === null ? (
        <p>Loading... | Please wait</p>
      ) : (
        <>
          <h2 align='center'>Score A</h2>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell>S.No</TableCell>
                  <TableCell align='center'>Activity Name</TableCell>
                  <TableCell align='center'>Points Alloted</TableCell>
                  <TableCell align='center'>No. of Activities</TableCell>
                  <TableCell align='center'>Points Scored</TableCell>
                  <TableCell align='center'>Upload Proof</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component='th'>1</TableCell>
                  <TableCell align='center'>
                    {" "}
                    E-Materials (National/International Platforms like SWAYAM, Unacademy, Udemy, Coursera, etc)
                    (50 points/course, irrespective of duration)
                  </TableCell>
                  <TableCell align='center'>50.0</TableCell>
                  <TableCell align='center'>
                    <Input
                      value={ematscore.eMaterialUdemy.noOfActivity}
                      onChange={(e) =>
                        setEmatScore({
                          ...ematscore,
                          eMaterialUdemy: {
                            ...ematscore.eMaterialUdemy,
                            noOfActivity: e.target.value,
                            pointScored: 50 * e.target.value,
                          },
                        })
                      }
                      type='number'
                      name=''
                      id=''
                    />
                  </TableCell>
                  <TableCell align='center'>
                    {ematscore.eMaterialUdemy.pointScored}
                  </TableCell>
                  <TableCell align='center'>
                    <input
                      type='file'
                      name='file-upload'
                      onChange={onChangeImage}
                    />
                    <button onClick={onUploadeMaterialSatyabama}>Upload</button>
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component='th'>2</TableCell>
                  <TableCell align='center'>
                    E-Materials (Sathyabama LMS) (Proof of LMS screenshot in PDF) (20 points/Course)
                  </TableCell>
                  <TableCell align='center'>20.0</TableCell>
                  <TableCell align='center'>
                    <Input
                      value={ematscore.eMaterialSatyabama.noOfActivity}
                      onChange={(e) =>
                        setEmatScore({
                          ...ematscore,
                          eMaterialSatyabama: {
                            ...ematscore.eMaterialSatyabama,
                            noOfActivity: e.target.value,
                            pointScored: 20 * e.target.value,
                          },
                        })
                      }
                      type='number'
                      name=''
                      id=''
                    />
                  </TableCell>
                  <TableCell align='center'>
                    {ematscore.eMaterialSatyabama.pointScored}
                  </TableCell>
                  <TableCell align='center'>
                    <input
                      type='file'
                      name='file-upload'
                      onChange={onChangeImage}
                    />
                    <button onClick={onUploadeMaterialSatyabama}>Upload</button>
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component='th'>3</TableCell>
                  <TableCell align='center'>
                    Initiating Courses/Labs in new and emerging areas
                  </TableCell>
                  <TableCell align='center'>50.0</TableCell>
                  <TableCell align='center'>
                    <Input
                      value={ematscore.courseInEmergingArea.noOfActivity}
                      onChange={(e) =>
                        setEmatScore({
                          ...ematscore,
                          courseInEmergingArea: {
                            ...ematscore.courseInEmergingArea,
                            noOfActivity: e.target.value,
                            pointScored: 50 * e.target.value,
                          },
                        })
                      }
                      type='number'
                      name=''
                      id=''
                    />
                  </TableCell>
                  <TableCell align='center'>
                    {ematscore.courseInEmergingArea.pointScored}
                  </TableCell>
                  <TableCell align='center'>
                    <input
                      type='file'
                      name='file-upload'
                      onChange={onChangeImage}
                    />
                    <button onClick={onUploadcourseInEmergingArea}>
                      Upload
                    </button>
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component='th'>4</TableCell>
                  <TableCell align='center'>
                    Innovative Teaching (Activities: ICT-enabled classroom, Flipped Classroom, Case-Studies,
                    Solving Complex Engineering Problems, Activity based learning, Gamification, Quizzes, etc.),
                    10 Points/Activity, Maximum points 70)
                  </TableCell>
                  <TableCell align='center'>10.0</TableCell>
                  <TableCell align='center'>
                    <Input
                      value={ematscore.youtubeLec3.noOfActivity}
                      onChange={(e) =>
                        setEmatScore({
                          ...ematscore,
                          youtubeLec3: {
                            ...ematscore.youtubeLec3,
                            noOfActivity: e.target.value,
                            pointScored: 10 * e.target.value,
                          },
                        })
                      }
                      type='number'
                      name=''
                      id=''
                    />
                  </TableCell>
                  <TableCell align='center'>
                    {ematscore.youtubeLec3.pointScored}
                  </TableCell>
                  <TableCell align='center'>
                    <input
                      type='file'
                      name='file-upload'
                      onChange={onChangeImage}
                    />
                    <button onClick={onUploadeyoutubeLec3}>Upload</button>
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component='th'>5</TableCell>
                  <TableCell align='center'>
                    YouTube Lectures with more than 100 Views
                  </TableCell>
                  <TableCell align='center'>15.0</TableCell>
                  <TableCell align='center'>
                    <Input
                      value={ematscore.youtubeLec1.noOfActivity}
                      onChange={(e) =>
                        setEmatScore({
                          ...ematscore,
                          youtubeLec1: {
                            ...ematscore.youtubeLec1,
                            noOfActivity: e.target.value,
                            pointScored: 15 * e.target.value,
                          },
                        })
                      }
                      type='number'
                      name=''
                      id=''
                    />
                  </TableCell>
                  <TableCell align='center'>
                    {ematscore.youtubeLec1.pointScored}
                  </TableCell>
                  <TableCell align='center'>
                    <input
                      type='file'
                      name='file-upload'
                      onChange={onChangeImage}
                    />
                    <button onClick={onUploadeyoutubeLec1}>Upload</button>
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component='th'>6</TableCell>
                  <TableCell align='center'>
                    YouTube Lectures with less than 100 Views
                  </TableCell>
                  <TableCell align='center'>10.0</TableCell>
                  <TableCell align='center'>
                    <Input
                      value={ematscore.youtubeLec2.noOfActivity}
                      onChange={(e) =>
                        setEmatScore({
                          ...ematscore,
                          youtubeLec2: {
                            noOfActivity: e.target.value,
                            pointScored: 10 * e.target.value,
                          },
                        })
                      }
                      type='number'
                      name=''
                      id=''
                    />
                  </TableCell>
                  <TableCell align='center'>
                    {ematscore.youtubeLec2.pointScored}
                  </TableCell>
                  <TableCell align='center'>
                    <input
                      type='file'
                      name='file-upload'
                      onChange={onChangeImage}
                    />
                    <button onClick={onUploadeyoutubeLec2}>Upload</button>
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component='th'>7</TableCell>
                  <TableCell align='center'>
                    Open and distance learning (ODL) course initiation/materials (50 points/Course)
                  </TableCell>
                  <TableCell align='center'>50.0</TableCell>
                  <TableCell align='center'>
                    <Input
                      value={ematscore.extraTeachingActivity.noOfActivity}
                      onChange={(e) =>
                        setEmatScore({
                          ...ematscore,
                          extraTeachingActivity: {
                            noOfActivity: e.target.value,
                          },
                        })
                      }
                      type='number'
                      name=''
                      id=''
                    />
                  </TableCell>
                  <TableCell align='center'>
                    {ematscore.extraTeachingActivity.noOfActivity * 50.0}
                  </TableCell>
                  <TableCell align='center'>
                    <input
                      type='file'
                      name='file-upload'
                      onChange={onChangeImage}
                    />
                    <button onClick={onUploadextraTeachingActivity}>
                      Upload
                    </button>
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component='th'>8</TableCell>
                  <TableCell align='center'>
                    {" "}
                    Fellowships, Awards from recognized bodies
                  </TableCell>
                  <TableCell align='center'>50.0</TableCell>
                  <TableCell align='center'>
                    <Input
                      value={ematscore.awards.noOfActivity}
                      onChange={(e) =>
                        setEmatScore({
                          ...ematscore,
                          awards: {
                            ...ematscore.awards,
                            noOfActivity: e.target.value,
                            pointScored: 50.0 * e.target.value,
                          },
                        })
                      }
                      type='number'
                      name=''
                      id=''
                    />
                  </TableCell>
                  <TableCell align='center'>
                    {ematscore.awards.pointScored}
                  </TableCell>
                  <TableCell align='center'>
                    <input
                      type='file'
                      name='file-upload'
                      onChange={onChangeImage}
                    />
                    <button onClick={onUploadawards}>Upload</button>
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component='th'>9</TableCell>
                  <TableCell align='center'>
                    Member in other academic boards such as Board of Studies, Academic Council in state/national institutes or universities or Govt. of India PAC (Program Advisory Committee)
                  </TableCell>
                  <TableCell align='center'>20.0</TableCell>
                  <TableCell align='center'>
                    <select
                      onChange={(e) =>
                        setEmatScore({
                          ...ematscore,
                          memberInOtherAcadBoard: {
                            ...ematscore.memberInOtherAcadBoard,
                            noOfActivity: e.target.value,
                          },
                        })
                      }>
                      <option>select </option>
                      <option value={1}>Yes</option>
                      <option value={0}>No</option>
                    </select>
                  </TableCell>
                  <TableCell align='center'>
                    {20.0 * ematscore.memberInOtherAcadBoard.noOfActivity}
                  </TableCell>
                  <TableCell align='center'>
                    <input
                      type='file'
                      name='file-upload'
                      onChange={onChangeImage}
                    />
                    <button onClick={onUploadmemberInOtherAcadBoard}>
                      Upload
                    </button>
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component='th'>10</TableCell>
                  <TableCell align='center'>
                    Value Added Programmes/Diploma/Skill Development/ UGC NSQF Programs
                    (Minimum 30 hours course, Points to be claimed by course co-ordinator)
                  </TableCell>
                  <TableCell align='center'>50.0</TableCell>
                  <TableCell align='center'>
                    <Input
                      value={ematscore.valueAddedProg.noOfActivity}
                      onChange={(e) =>
                        setEmatScore({
                          ...ematscore,
                          valueAddedProg: {
                            ...ematscore.valueAddedProg,
                            noOfActivity: e.target.value,
                            pointScored: 50.0 * e.target.value,
                          },
                        })
                      }
                      type='number'
                      name=''
                      id=''
                    />
                  </TableCell>
                  <TableCell align='center'>
                    {ematscore.valueAddedProg.pointScored}
                  </TableCell>
                  <TableCell align='center'>
                    <input
                      type='file'
                      name='file-upload'
                      onChange={onChangeImage}
                    />
                    <button onClick={onUploadvalueAddedProg}>Upload</button>
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component='th'>11</TableCell>
                  <TableCell align='center'>
                    Overall contribution to the department (to be evaluated by the respective department HODs) (Max. 20 points/person)
                  </TableCell>
                  <TableCell align='center'>20.0</TableCell>
                  <TableCell align='center'>
                    <Input
                      value={ematscore.overAllContribution.noOfActivity}
                      onChange={(e) =>
                        setEmatScore({
                          ...ematscore,
                          overAllContribution: {
                            ...ematscore.overAllContribution,
                            noOfActivity: e.target.value,
                            pointScored: 20.0 * e.target.value,
                          },
                        })
                      }
                      type='number'
                      name=''
                      id=''
                    />
                  </TableCell>
                  <TableCell align='center'>
                    {ematscore.overAllContribution.pointScored}
                  </TableCell>
                  <TableCell align='center'>
                    <input
                      type='file'
                      name='file-upload'
                      onChange={onChangeImage}
                    />
                    <button onClick={onUploadoverAllContribution}>
                      Upload
                    </button>
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component='th'>12</TableCell>
                  <TableCell align='center'>
                  Evaluation of examination papers on time without any discrepancies (Maximum 20 points yearly, ie., two semesters, Points will be given based on information provided by the HOD)
                  </TableCell>
                  <TableCell align='center'>20.0</TableCell>
                  <TableCell align='center'>
                    <Input
                      value={ematscore.evaluationOfExamPaper.noOfActivity}
                      onChange={(e) =>
                        setEmatScore({
                          ...ematscore,
                          evaluationOfExamPaper: {
                            ...ematscore.evaluationOfExamPaper,
                            noOfActivity: e.target.value,
                            pointScored: 20.0 * e.target.value,
                          },
                        })
                      }
                      type='number'
                      name=''
                      id=''
                    />
                  </TableCell>
                  <TableCell align='center'>
                    {ematscore.evaluationOfExamPaper.pointScored}
                  </TableCell>
                  <TableCell align='center'>
                    <input
                      type='file'
                      name='file-upload'
                      onChange={onChangeImage}
                    />
                    <button onClick={onUploadevaluationOfExamPaper}>
                      Upload
                    </button>
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component='th'>13</TableCell>
                  <TableCell align='center'>
                  Mentor for students Winning national level events, like Smart India Hackathon, AICTE Lilavati Awards, Yukti, Vishwakarma Award, etc. (Points can be claimed only if students have won the event)
                  </TableCell>
                  <TableCell align='center'>20.0</TableCell>
                  <TableCell align='center'>
                    <Input
                      value={ematscore.mentorInHackathon.noOfActivity}
                      onChange={(e) =>
                        setEmatScore({
                          ...ematscore,
                          mentorInHackathon: {
                            ...ematscore.mentorInHackathon,
                            noOfActivity: e.target.value,
                            pointScored: 20.0 * e.target.value,
                          },
                        })
                      }
                      type='number'
                      name=''
                      id=''
                    />
                  </TableCell>
                  <TableCell align='center'>
                    {ematscore.mentorInHackathon.pointScored}
                  </TableCell>
                  <TableCell align='center'>
                    <input
                      type='file'
                      name='file-upload'
                      onChange={onChangeImage}
                    />
                    <button onClick={onUploadmentorInHackathon}>Upload</button>
                  </TableCell>
                  <TableRow>
                    <TableCell colSpan={4}>Total Score A</TableCell>
                    <TableCell align='center'>
                      <Input
                        value={
                          ematscore.mentorInHackathon.noOfActivity * 20.0 +
                          ematscore.evaluationOfExamPaper.noOfActivity * 20.0 +
                          ematscore.overAllContribution.noOfActivity * 5.0 +
                          50.0 * ematscore.valueAddedProg.noOfActivity +
                          20.0 * ematscore.memberInOtherAcadBoard.noOfActivity +
                          50.0 * ematscore.awards.noOfActivity +
                          ematscore.extraTeachingActivity.noOfActivity * 5.0 +
                          10.0 * ematscore.youtubeLec2.noOfActivity +
                          15.0 * ematscore.youtubeLec1.noOfActivity +
                          50.0 * ematscore.youtubeLec3.noOfActivity +
                          20 * ematscore.courseInEmergingArea.noOfActivity +
                          50 * ematscore.eMaterialSatyabama.noOfActivity +
                          50 * ematscore.eMaterialUdemy.noOfActivity
                        }
                      />
                    </TableCell>
                  </TableRow>{" "}
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          {props.edit === undefined ? (
            <button onClick={onSubmit} value={ematscore.totalscore}>
              Submit and Next
            </button>
          ) : (
            <p>Please check all the fields</p>
          )}
        </>
      )}
    </>
  );
};

export default ScoreA;
