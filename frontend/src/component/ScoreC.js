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

const initialState = {
  socialOutReach: {
    nameOfActivity: "",
    noOfActivity: 10,
    uploadProof: "",
    score: 0,
  },
  socialOutReach1: {
    nameOfActivity: "",
    noOfActivity: 10,
    uploadProof: "",
    score: 0,
  },
  socialOutReach2: {
    nameOfActivity: "",
    noOfActivity: 10,
    uploadProof: "",
    score: 0,
  },
  digitalIndiaContribution: {
    nameOfContribution: "",
    noOfContribution: 0,
    uploadProof: "",
    score: 0,
  },
  digitalIndiaContribution1: {
    nameOfContribution: "",
    noOfContribution: 0,
    uploadProof: "",
    score: 0,
  },
  digitalIndiaContribution2: {
    nameOfContribution: "",
    noOfContribution: 0,
    uploadProof: "",
    score: 0,
  },
  digitalIndiaContribution3: {
    nameOfContribution: "",
    noOfContribution: 0,
    uploadProof: "",
    score: 0,
  },
  digitalIndiaContribution4: {
    nameOfContribution: "",
    noOfContribution: 0,
    uploadProof: "",
    score: 0,
  },
  otherContribution: {
    nameOfContribution: "",
    noOfContribution: 0,
    score: 0,
    uploadProof: "",
  },
  organizingMooc: {
    nameOfEvent: "",
    organizingSlot: "",
    score: 0,
    uploadProof: "",
  },
  organizingMooc1: {
    nameOfEvent: "",
    organizingSlot: "",
    score: 0,
    uploadProof: "",
  },
  organizingMooc2: {
    nameOfEvent: "",
    organizingSlot: "",
    score: 0,
    uploadProof: "",
  },
  organizingMooc3: {
    nameOfEvent: "",
    organizingSlot: "",
    score: 0,
    uploadProof: "",
  },
  organizingMooc4: {
    nameOfEvent: "",
    organizingSlot: "",
    score: 0,
    uploadProof: "",
  },
  organizingFDP: {
    nameOfEvent: "",
    organizingSlot: "",
    score: 0,
    uploadProof: "",
  },
  organizingFDP1: {
    nameOfEvent: "",
    organizingSlot: "",
    score: 0,
    uploadProof: "",
  },
  organizingFDP2: {
    nameOfEvent: "",
    organizingSlot: "",
    score: 0,
    uploadProof: "",
  },
  organizingFDP3: {
    nameOfEvent: "",
    organizingSlot: "",
    score: 0,
    uploadProof: "",
  },
  organizingFDP4: {
    nameOfEvent: "",
    organizingSlot: "",
    score: 0,
    uploadProof: "",
  },
  organizingWorkshop: {
    nameOfEvent: "",
    organizingSlot: "",
    score: 0,
    uploadProof: "",
  },
  organizingWorkshop1: {
    nameOfEvent: "",
    organizingSlot: "",
    score: 0,
    uploadProof: "",
  },
  organizingWorkshop2: {
    nameOfEvent: "",
    organizingSlot: "",
    score: 0,
    uploadProof: "",
  },
  organizingWorkshop3: {
    nameOfEvent: "",
    organizingSlot: "",
    score: 0,
    uploadProof: "",
  },
  organizingWorkshop4: {
    nameOfEvent: "",
    organizingSlot: "",
    score: 0,
    uploadProof: "",
  },
  participationInMOOC: {
    nameOfEvent: "",
    organizingSlot: "",
    score: 0,
    uploadProof: "",
  },
  participationInMOOC1: {
    nameOfEvent: "",
    organizingSlot: "",
    score: 0,
    uploadProof: "",
  },
  participationInMOOC2: {
    nameOfEvent: "",
    organizingSlot: "",
    score: 0,
    uploadProof: "",
  },
  participationInMOOC3: {
    nameOfEvent: "",
    organizingSlot: "",
    score: 0,
    uploadProof: "",
  },
  participationInMOOC4: {
    nameOfEvent: "",
    organizingSlot: "",
    score: 0,
    uploadProof: "",
  },
  participationInFDP: {
    nameOfEvent: "",
    organizingSlot: "",
    score: 0,
    uploadProof: "",
  },
  participationInFDP1: {
    nameOfEvent: "",
    organizingSlot: "",
    score: 0,
    uploadProof: "",
  },
  participationInFDP2: {
    nameOfEvent: "",
    organizingSlot: "",
    score: 0,
    uploadProof: "",
  },
  participationInFDP3: {
    nameOfEvent: "",
    organizingSlot: "",
    score: 0,
    uploadProof: "",
  },
  participationInFDP4: {
    nameOfEvent: "",
    organizingSlot: "",
    score: 0,
    uploadProof: "",
  },
  participationInWorkshop: {
    nameOfEvent: "",
    organizingSlot: "",
    score: 0,
    uploadProof: "",
  },
  participationInWorkshop1: {
    nameOfEvent: "",
    organizingSlot: "",
    score: 0,
    uploadProof: "",
  },
  participationInWorkshop2: {
    nameOfEvent: "",
    organizingSlot: "",
    score: 0,
    uploadProof: "",
  },
  participationInWorkshop3: {
    nameOfEvent: "",
    organizingSlot: "",
    score: 0,
    uploadProof: "",
  },
  participationInWorkshop4: {
    nameOfEvent: "",
    organizingSlot: "",
    score: 0,
    uploadProof: "",
  },
  fundGeneration: {
    nameOfEvent: "",
    amountGenerated: "",
    score: 0,
    uploadProof: "",
  },
  fundGeneration1: {
    nameOfEvent: "",
    amountGenerated: "",
    score: 0,
    uploadProof: "",
  },
  fundGeneration2: {
    nameOfEvent: "",
    amountGenerated: "",
    score: 0,
    uploadProof: "",
  },
  fundGeneration3: {
    nameOfEvent: "",
    amountGenerated: "",
    score: 0,
    uploadProof: "",
  },
  fundGeneration4: {
    nameOfEvent: "",
    amountGenerated: "",
    score: 0,
    uploadProof: "",
  },
  fundGeneration5: {
    nameOfEvent: "",
    amountGenerated: "",
    score: 0,
    uploadProof: "",
  },
  industryLinkage: {
    typeOfLinakge: "",
    noOfActivities: "",
    score: 0,
    uploadProof: "",
  },
  industryLinkage1: {
    typeOfLinakge: "",
    noOfActivities: "",
    score: 0,
    uploadProof: "",
  },
  industryLinkage2: {
    typeOfLinakge: "",
    noOfActivities: "",
    score: 0,
    uploadProof: "",
  },
  industryLinkage3: {
    typeOfLinakge: "",
    noOfActivities: "",
    score: 0,
    uploadProof: "",
  },
  industryLinkage4: {
    typeOfLinakge: "",
    noOfActivities: "",
    score: 0,
    uploadProof: "",
  },
  organizingLectures: {
    type: "",
    noOfLec: "",
    score: 0,
    uploadProof: "",
  },

  organizingLectures1: {
    type: "",
    noOfLec: "",
    score: 0,
    uploadProof: "",
  },
  organizingLectures2: {
    type: "",
    noOfLec: "",
    score: 0,
    uploadProof: "",
  },
  organizingLectures3: {
    type: "",
    noOfLec: "",
    score: 0,
    uploadProof: "",
  },
  organizingLectures4: {
    type: "",
    noOfLec: "",
    score: 0,
    uploadProof: "",
  },
  organizingLectures5: {
    type: "",
    noOfLec: "",
    score: 0,
    uploadProof: "",
  },
  organizingLectures6: {
    type: "",
    noOfLec: "",
    score: 0,
    uploadProof: "",
  },
  organizingLectures7: {
    type: "",
    noOfLec: "",
    score: 0,
    uploadProof: "",
  },
  organizingLectures8: {
    type: "",
    noOfLec: "",
    score: 0,
    uploadProof: "",
  },
  organizingLectures9: {
    type: "",
    noOfLec: "",
    score: 0,
    uploadProof: "",
  },

  invitedTalk: {
    type: "",
    activityName: "",
    score: 0,
    uploadProof: "",
  },
  invitedTalk1: {
    type: "",
    activityName: "",
    score: 0,
    uploadProof: "",
  },
  invitedTalk2: {
    type: "",
    activityName: "",
    score: 0,
    uploadProof: "",
  },
  invitedTalk3: {
    type: "",
    activityName: "",
    score: 0,
    uploadProof: "",
  },
  invitedTalk4: {
    type: "",
    activityName: "",
    score: 0,
    uploadProof: "",
  },
  additionalResp: {
    type: "",
    responsibleForDept: "",
    score: 0,
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

const ScoreC = (props) => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setDate] = useState(
    props.edit !== undefined
      ? JSON.parse(localStorage.getItem("formc"))
      : initialState,
  );
  const onChangeImage = (e) => {
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  };

  const onUploadsocialOutReach = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);

    let res = await uploadToS3(form_data);

    if (res) {
      setDate({
        ...data,
        socialOutReach: {
          ...data.socialOutReach,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  console.log(data);
  const onUploadsocialOutReach1 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);

    if (res) {
      setDate({
        ...data,
        socialoutreach1: {
          ...data.socialOutReach1,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };
  const onUploadsocialOutReach2 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);

    if (res) {
      setDate({
        ...data,
        socialOutReach2: {
          ...data.socialOutReach2,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };
  const onUploaddigitalIndiaContribution = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);
    if (res) {
      setDate({
        ...data,
        digitalIndiaContribution: {
          ...data.digitalIndiaContribution,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };
  const onUploaddigitalIndiaContribution1 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);

    if (res) {
      setDate({
        ...data,
        digitalIndiaContribution1: {
          ...data.digitalIndiaContribution1,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };
  const onUploaddigitalIndiaContribution2 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);

    if (res) {
      setDate({
        ...data,
        digitalIndiaContribution2: {
          ...data.digitalIndiaContribution2,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploaddigitalIndiaContribution3 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);

    if (res) {
      setDate({
        ...data,
        digitalIndiaContribution3: {
          ...data.digitalIndiaContribution3,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploaddigitalIndiaContribution4 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);

    if (res) {
      setDate({
        ...data,
        digitalIndiaContribution4: {
          ...data.digitalIndiaContribution4,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploadotherContribution = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);

    if (res) {
      setDate({
        ...data,
        otherContribution: {
          ...data.otherContribution,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploadorganizingMOOC = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);

    if (res) {
      setDate({
        ...data,
        organizingMooc: {
          ...data.organizingMooc,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploadorganizingMOOC1 = async (e) => {
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);
    if (res) {
      setDate({
        ...data,
        organizingMooc1: {
          ...data.organizingMooc1,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };
  const onUploadorganizingMOOC2 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);
    if (res) {
      setDate({
        ...data,
        organizingMooc2: {
          ...data.organizingMooc2,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploadorganizingMOOC3 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);
    if (res) {
      setDate({
        ...data,
        organizingMooc3: {
          ...data.organizingMooc3,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploadorganizingMOOC4 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);
    if (res) {
      setDate({
        ...data,
        organizingMooc4: {
          ...data.organizingMooc4,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploadorganizingFDP = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);
    if (res) {
      setDate({
        ...data,
        OrganizingFDP: {
          ...data.OrganizingFDP,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploadorganizingFDP1 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);
    if (res) {
      setDate({
        ...data,
        OrganizingFDP1: {
          ...data.OrganizingFDP1,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploadorganizingFDP2 = async (e) => {
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);
    if (res) {
      setDate({
        ...data,
        OrganizingFDP2: {
          ...data.OrganizingFDP2,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploadorganizingFDP3 = async (e) => {
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);
    if (res) {
      setDate({
        ...data,
        OrganizingFDP3: {
          ...data.OrganizingFDP3,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };
  const onUploadorganizingFDP4 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);
    if (res) {
      setDate({
        ...data,
        OrganizingFDP4: {
          ...data.OrganizingFDP4,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploadorganizingWorkshop = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);
    if (res) {
      setDate({
        ...data,
        OrganizingWorkshop: {
          ...data.OrganizingWorkshop,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploadorganizingWorkshop1 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);
    if (res) {
      setDate({
        ...data,
        OrganizingWorkshop1: {
          ...data.OrganizingWorkshop1,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };
  const onUploadorganizingWorkshop2 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);
    if (res) {
      setDate({
        ...data,
        OrganizingWorkshop2: {
          ...data.OrganizingWorkshop2,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };
  const onUploadorganizingWorkshop3 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);
    if (res) {
      setDate({
        ...data,
        OrganizingFDP4: {
          ...data.OrganizingFDP4,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };
  const onUploadorganizingWorkshop4 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);
    if (res) {
      setDate({
        ...data,
        organizingWorkshop4: {
          ...data.organizingWorkshop4,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploadParticipationInMOOC = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);
    if (res) {
      setDate({
        ...data,
        participationInMOOC: {
          ...data.participationInMOOC,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploadParticipationInMOOC1 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);
    if (res) {
      setDate({
        ...data,
        participationInMOOC1: {
          ...data.participationInMOOC1,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploadParticipationInMOOC2 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);
    if (res) {
      setDate({
        ...data,
        participationInMOOC2: {
          ...data.participationInMOOC2,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploadParticipationInMOOC3 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);
    if (res) {
      setDate({
        ...data,
        participationInMOOC3: {
          ...data.participationInMOOC3,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploadParticipationInMOOC4 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);
    if (res) {
      setDate({
        ...data,
        participationInMOOC4: {
          ...data.participationInMOOC4,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploadParticipationInFDP = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);
    if (res) {
      setDate({
        ...data,
        participationInFDP: {
          ...data.participationInFDP,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploadParticipationInFDP1 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);
    if (res) {
      setDate({
        ...data,
        participationInFDP2: {
          ...data.participationInFDP2,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploadParticipationInFDP2 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);
    if (res) {
      setDate({
        ...data,
        participationInFDP2: {
          ...data.participationInFDP2,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploadParticipationInFDP3 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);
    if (res) {
      setDate({
        ...data,
        participationInFDP3: {
          ...data.participationInFDP3,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };
  const onUploadParticipationInFDP4 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);
    if (res) {
      setDate({
        ...data,
        participationInFDP4: {
          ...data.participationInFDP4,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploadParticipationInWorkshop = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);
    if (res) {
      setDate({
        ...data,
        participationInWorkshop: {
          ...data.participationInWorkshop,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };
  const onUploadParticipationInWorkshop1 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);
    if (res) {
      setDate({
        ...data,
        participationInWorkshop1: {
          ...data.participationInWorkshop1,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploadParticipationInWorkshop2 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);
    if (res) {
      setDate({
        ...data,
        participationInWorkshop2: {
          ...data.participationInWorkshop2,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploadParticipationInWorkshop3 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);
    if (res) {
      setDate({
        ...data,
        participationInWorkshop3: {
          ...data.participationInWorkshop3,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploadParticipationInWorkshop4 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);
    if (res) {
      setDate({
        ...data,
        participationInWorkshop4: {
          ...data.participationInWorkshop4,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploadFundGeneration = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);
    if (res) {
      setDate({
        ...data,
        fundGeneration: {
          ...data.fundGeneration,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploadFundGeneration1 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);
    if (res) {
      setDate({
        ...data,
        fundGeneration: {
          ...data.fundGeneration,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploadFundGeneration2 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);
    if (res) {
      setDate({
        ...data,
        fundGeneration2: {
          ...data.fundGeneration2,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploadFundGeneration3 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);
    if (res) {
      setDate({
        ...data,
        fundGeneration3: {
          ...data.fundGeneration3,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploadFundGeneration4 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);
    if (res) {
      setDate({
        ...data,
        fundGeneration4: {
          ...data.fundGeneration4,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploadindustryLinkage = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);
    if (res) {
      setDate({
        ...data,
        industryLinkage: {
          ...data.industryLinkage,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploadindustryLinkage1 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);
    if (res) {
      setDate({
        ...data,
        industryLinkage1: {
          ...data.industryLinkage1,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };
  const onUploadindustryLinkage2 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);
    if (res) {
      setDate({
        ...data,
        industryLinkage2: {
          ...data.industryLinkage2,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploadindustryLinkage3 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);
    if (res) {
      setDate({
        ...data,
        industryLinkage3: {
          ...data.industryLinkage3,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploadindustryLinkage4 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);
    if (res) {
      setDate({
        ...data,
        industryLinkage4: {
          ...data.industryLinkage4,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploadadditionalResp = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);

    let res = await uploadToS3(form_data);
    if (res) {
      setDate({
        ...data,
        additionalResp: {
          ...data.additionalResp,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploadorganizingLecture = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);
    if (res) {
      setDate({
        ...data,
        organizingLectures: {
          ...data.organizingLectures,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploadorganizingLecture1 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);
    if (res) {
      setDate({
        ...data,
        organizingLectures1: {
          ...data.organizingLectures1,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploadorganizingLecture2 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);
    if (res) {
      setDate({
        ...data,
        organizingLectures2: {
          ...data.organizingLectures2,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploadorganizingLecture3 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);
    if (res) {
      setDate({
        ...data,
        organizingLectures3: {
          ...data.organizingLectures3,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploadorganizingLecture4 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);
    if (res) {
      setDate({
        ...data,
        organizingLectures4: {
          ...data.organizingLectures4,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploadorganizingLecture5 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);
    if (res) {
      setDate({
        ...data,
        organizingLectures5: {
          ...data.organizingLectures5,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploadorganizingLecture6 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);
    if (res) {
      setDate({
        ...data,
        organizingLectures6: {
          ...data.organizingLectures6,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploadorganizingLecture7 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);
    if (res) {
      setDate({
        ...data,
        organizingLectures7: {
          ...data.organizingLectures7,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploadorganizingLecture8 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);
    if (res) {
      setDate({
        ...data,
        organizingLectures8: {
          ...data.organizingLectures8,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploadorganizingLecture9 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);
    if (res) {
      setDate({
        ...data,
        organizingLectures9: {
          ...data.organizingLectures9,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploadinvitedtalk = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);
    if (res) {
      setDate({
        ...data,
        invitedTalk: {
          ...data.invitedTalk,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };
  const onUploadinvitedtalk2 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);
    if (res) {
      setDate({
        ...data,
        invitedTalk2: {
          ...data.invitedTalk2,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };
  const onUploadinvitedtalk1 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);
    if (res) {
      setDate({
        ...data,
        invitedTalk1: {
          ...data.invitedTalk1,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };
  const onUploadinvitedtalk3 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);
    if (res) {
      setDate({
        ...data,
        invitedTalk3: {
          ...data.invitedTalk3,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };
  const onUploadinvitedtalk4 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);
    if (res) {
      setDate({
        ...data,
        invitedTalk4: {
          ...data.invitedTalk4,
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
    let acadYear = localStorage.getItem("acadYear");
    await axios
      .post(
        "http://localhost:5000/c/fill-form-c",
        { data, acadYear },
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

        window.location.href = "/finalscore";
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <>
      {data === null ? (
        <p>Loading... | Please wait</p>
      ) : (
        <>
          <p>
            <h2 align='center'>Score C</h2>{" "}
          </p>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 1000 }} aria-label='simple table'>
              <TableCell component='th'></TableCell>
              <TableRow align='center'>
                <TableHead colspan='4'>
                  <TableCell align='center'>
                  Social Outreach Activities/Rural Development (to be claimed by Convenor/Co-ordinator, 5 points/day; Maximum 20 points) during the selected Academic Year
                  </TableCell>
                </TableHead>
              </TableRow>
            </Table>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align='center'>Name of Outreach Activity</TableCell>
              <TableCell align='center'>No of Such Activities</TableCell>
              <TableCell align='center'>Points Scored</TableCell>
              <TableCell align='center'>Upload Proof</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <Input
                  value={data.socialOutReach.nameOfActivity}
                  onChange={(e) =>
                    setDate({
                      ...data,
                      socialOutReach: {
                        ...data.socialOutReach,
                        nameOfActivity: e.target.value,
                      },
                    })
                  }
                  type='text'
                  name=''
                  id=''
                />
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setDate({
                      ...data,

                      socialOutReach: {
                        ...data.socialOutReach,
                        noOfActivity: e.target.value,
                        score: 5 * e.target.value,
                      },
                    })
                  }>
                  <option> Select No Activities </option>
                  <option value={1}> 1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                </select>
              </TableCell>
              <TableCell align='center'>{data.socialOutReach.score}</TableCell>
              <TableCell align='center'>
                <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadsocialOutReach}>Upload</button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <Input
                  value={data.socialOutReach1.nameOfActivity}
                  onChange={(e) =>
                    setDate({
                      ...data,
                      socialOutReach1: {
                        ...data.socialOutReach1,
                        nameOfActivity: e.target.value,
                      },
                    })
                  }
                  type='number'
                  name=''
                  id=''
                />
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setDate({
                      ...data,
                      socialOutReach1: {
                        ...data.socialOutReach1,
                        noOfActivity: e.target.value,
                        score: 5 * e.target.value,
                      },
                    })
                  }>
                  <option> Select No Activities </option>
                  <option value='1'> 1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                </select>
              </TableCell>
              <TableCell align='center'>{data.socialOutReach1.score}</TableCell>
              <TableCell align='center'>
                <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadsocialOutReach1}>Upload</button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <Input
                  value={data.socialOutReach2.nameOfActivity}
                  onChange={(e) =>
                    setDate({
                      ...data,
                      socialOutReach2: {
                        ...data.socialOutReach2,
                        nameOfActivity: e.target.value,
                      },
                    })
                  }
                  type='number'
                  name=''
                  id=''
                />
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setDate({
                      ...data,
                      socialOutReach2: {
                        ...data.socialOutReach2,
                        noOfActivity: e.target.value,
                        score: 5 * e.target.value,
                      },
                    })
                  }>
                  <option> Select No Activities </option>
                  <option value='1'> 1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                </select>
              </TableCell>
              <TableCell align='center'>{data.socialOutReach2.score}</TableCell>
              <TableCell align='center'>
                <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadsocialOutReach2}>Upload</button>
              </TableCell>
            </TableRow>

            <TableCell component='th'></TableCell>
          </TableContainer>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 1000 }} aria-label='simple table'>
              <TableCell component='th'></TableCell>
              <TableRow align='center'>
                <TableHead colspan='4'>
                  <TableCell align='center'>
                    Contribution to Digital India/Make in India/Skill India during the selected Academic Year
                  </TableCell>
                </TableHead>
              </TableRow>
            </Table>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align='center'>Name of Contribution</TableCell>
              <TableCell align='center'>No of Such Contributions</TableCell>
              <TableCell align='center'>Points Scored</TableCell>
              <TableCell align='center'>Upload Proof</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <Input
                  value={data.digitalIndiaContribution.nameOfContribution}
                  onChange={(e) =>
                    setDate({
                      ...data,
                      digitalIndiaContribution: {
                        ...data.digitalIndiaContribution,
                        nameOfContribution: e.target.value,
                      },
                    })
                  }
                  type='number'
                  name=''
                  id=''
                />
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setDate({
                      ...data,
                      digitalIndiaContribution: {
                        ...data.digitalIndiaContribution,
                        noOfContribution: e.target.value,
                        score: 10 * e.target.value,
                      },
                    })
                  }>
                  <option value='novalue'> Select </option>
                  <option value='1'> 1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                </select>
              </TableCell>
              <TableCell align='center'>
                {data.digitalIndiaContribution.score}
              </TableCell>
              <TableCell align='center'>
                <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploaddigitalIndiaContribution}>
                  Upload
                </button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <Input
                  value={data.digitalIndiaContribution1.nameOfContribution}
                  onChange={(e) =>
                    setDate({
                      ...data,
                      digitalIndiaContribution1: {
                        ...data.digitalIndiaContribution1,
                        nameOfContribution: e.target.value,
                      },
                    })
                  }
                  type='number'
                  name=''
                  id=''
                />
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setDate({
                      ...data,
                      digitalIndiaContribution1: {
                        ...data.digitalIndiaContribution1,
                        noOfContribution: e.target.value,
                        score: 10 * e.target.value,
                      },
                    })
                  }>
                  <option value='novalue'> Select</option>
                  <option value='1'> 1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                </select>
              </TableCell>
              <TableCell align='center'>
                {data.digitalIndiaContribution1.score}
              </TableCell>
              <TableCell align='center'>
                <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploaddigitalIndiaContribution1}>
                  Upload
                </button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <Input
                  value={data.digitalIndiaContribution2.nameOfContribution}
                  onChange={(e) =>
                    setDate({
                      ...data,
                      digitalIndiaContribution2: {
                        ...data.digitalIndiaContribution2,
                        nameOfContribution: e.target.value,
                      },
                    })
                  }
                  type='number'
                  name=''
                  id=''
                />
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setDate({
                      ...data,
                      digitalIndiaContribution2: {
                        ...data.digitalIndiaContribution2,
                        noOfContribution: e.target.value,
                        score: 10 * e.target.value,
                      },
                    })
                  }>
                  <option> Select </option>
                  <option value='1'> 1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                </select>
              </TableCell>
              <TableCell align='center'>
                {data.digitalIndiaContribution2.score}
              </TableCell>
              <TableCell align='center'>
                <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploaddigitalIndiaContribution2}>
                  Upload
                </button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <Input
                  value={data.digitalIndiaContribution3.nameOfContribution}
                  onChange={(e) =>
                    setDate({
                      ...data,
                      digitalIndiaContribution3: {
                        ...data.digitalIndiaContribution3,
                        nameOfContribution: e.target.value,
                      },
                    })
                  }
                  type='number'
                  name=''
                  id=''
                />
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setDate({
                      ...data,
                      digitalIndiaContribution3: {
                        ...data.digitalIndiaContribution3,
                        noOfContribution: e.target.value,
                        score: 10 * e.target.value,
                      },
                    })
                  }>
                  <option value='novalue'> Select </option>
                  <option value='1'> 1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                </select>
              </TableCell>
              <TableCell align='center'>
                {data.digitalIndiaContribution3.score}
              </TableCell>
              <TableCell align='center'>
                <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploaddigitalIndiaContribution3}>
                  Upload
                </button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <Input
                  value={data.digitalIndiaContribution4.nameOfContribution}
                  onChange={(e) =>
                    setDate({
                      ...data,
                      digitalIndiaContribution4: {
                        ...data.digitalIndiaContribution4,
                        nameOfContribution: e.target.value,
                      },
                    })
                  }
                  type='number'
                  name=''
                  id=''
                />
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setDate({
                      ...data,
                      digitalIndiaContribution4: {
                        ...data.digitalIndiaContribution4,
                        noOfContribution: e.target.value,
                        score: 10 * e.target.value,
                      },
                    })
                  }>
                  <option> Select </option>
                  <option value='1'> 1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                </select>
              </TableCell>
              <TableCell align='center'>
                {data.digitalIndiaContribution4.score}
              </TableCell>
              <TableCell align='center'>
                <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploaddigitalIndiaContribution4}>
                  Upload
                </button>
              </TableCell>
            </TableRow>

            <TableCell component='th'></TableCell>
          </TableContainer>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 1000 }} aria-label='simple table'>
              <TableCell component='th'></TableCell>
              <TableRow align='center'>
                <TableHead colspan='4'>
                  <TableCell align='center'>
                  Other Noteworthy Contribution to the Institute (New Initiatives, Introduction of Best Practices, Institutional Level Contribution in Accreditations, Rankings and Ratings, etc.) during the selected Academic Year
                  </TableCell>
                </TableHead>
              </TableRow>
            </Table>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align='center'>Name of Contribution</TableCell>
              <TableCell align='center'>No. of Such Contributions</TableCell>
              <TableCell align='center'>Points Scored</TableCell>
              <TableCell align='center'>Upload Proof</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <Input
                  value={data.otherContribution.nameOfContribution}
                  onChange={(e) =>
                    setDate({
                      ...data,
                      otherContribution: {
                        ...data.otherContribution,
                        nameOfContribution: e.target.value,
                      },
                    })
                  }
                  type='number'
                  name=''
                  id=''
                />
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setDate({
                      ...data,
                      otherContribution: {
                        ...data.otherContribution,
                        noOfContribution: e.target.value,
                        score: 100 * e.target.value,
                      },
                    })
                  }>
                  <option> Select </option>
                  <option value='1'> 1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                </select>
              </TableCell>
              <TableCell align='center'>
                {data.otherContribution.score}
              </TableCell>
              <TableCell align='center'>
                <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadotherContribution}>Upload</button>
              </TableCell>
            </TableRow>

            <TableCell component='th'></TableCell>
          </TableContainer>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 1000 }} aria-label='simple table'>
              <TableCell component='th'></TableCell>
              <TableRow align='center'>
                <TableHead colspan='4'>
                  <TableCell align='center'>
                  Organizing MOOC Courses such as NPTEL, Refresher Courses, Short-Term Courses.    Choose 1 for (1 Week), 2 for (2 Weeks), 3 for (3 Weeks), 4 for (4 Weeks), etc. during the selected Academic Year. Minimum 5 hours program in a day will be treated as one day program. 70 points for one Week Program
                  </TableCell>
                </TableHead>
              </TableRow>
            </Table>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align='center'>Name of Event </TableCell>
              <TableCell align='center'>organizing Slot</TableCell>
              <TableCell align='center'>Points Scored</TableCell>
              <TableCell align='center'>Upload Proof</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <Input
                  value={data.organizingMooc.nameofEvent}
                  onChange={(e) =>
                    setDate({
                      ...data,
                      organizingMooc: {
                        ...data.organizingMooc,
                        nameofEvent: e.target.value,
                      },
                    })
                  }
                  type='number'
                  name=''
                  id=''
                />
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setDate({
                      ...data,
                      organizingMooc: {
                        ...data.organizingMooc,
                        organizingSlot: e.target.value,
                        score: 100 * e.target.value,
                      },
                    })
                  }>
                  <option> Select </option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                </select>
              </TableCell>
              <TableCell align='center'>{data.organizingMooc.score}</TableCell>
              <TableCell align='center'>
                <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadorganizingMOOC}>Upload</button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <Input
                  value={data.organizingMooc1.nameofEvent}
                  onChange={(e) =>
                    setDate({
                      ...data,
                      organizingMooc1: {
                        ...data.organizingMooc1,
                        nameofEvent: e.target.value,
                      },
                    })
                  }
                  type='number'
                  name=''
                  id=''
                />
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setDate({
                      ...data,
                      organizingMooc1: {
                        ...data.organizingMooc1,
                        organizingSlot: e.target.value,
                        score: 100 * e.target.value,
                      },
                    })
                  }>
                  <option> Select </option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                  <option value='6'>6</option>
                </select>
              </TableCell>
              <TableCell align='center'>{data.organizingMooc1.score}</TableCell>
              <TableCell align='center'>
                <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadorganizingMOOC1}>Upload</button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <Input
                  value={data.organizingMooc2.nameofEvent}
                  onChange={(e) =>
                    setDate({
                      ...data,
                      organizingMooc2: {
                        nameofEvent: e.target.value,
                      },
                    })
                  }
                  type='number'
                  name=''
                  id=''
                />
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setDate({
                      ...data,
                      organizingMooc2: {
                        ...data.organizingMooc2,
                        organizingSlot: e.target.value,
                        score: 100 * e.target.value,
                      },
                    })
                  }>
                  <option> Select </option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                  <option value='6'>6</option>
                </select>
              </TableCell>
              <TableCell align='center'>{data.organizingMooc2.score}</TableCell>
              <TableCell align='center'>
                <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadorganizingMOOC2}>Upload</button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <Input
                  value={data.organizingMooc3.nameofEvent}
                  onChange={(e) =>
                    setDate({
                      ...data,
                      organizingMooc3: {
                        ...data.organizingMooc3,
                        nameofEvent: e.target.value,
                      },
                    })
                  }
                  type='number'
                  name=''
                  id=''
                />
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setDate({
                      ...data,
                      organizingMooc3: {
                        ...data.organizingMooc3,
                        organizingSlot: e.target.value,
                        score: 100 * e.target.value,
                      },
                    })
                  }>
                  <option> Select </option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                  <option value='6'>6</option>
                </select>
              </TableCell>
              <TableCell align='center'>{data.organizingMooc3.score}</TableCell>
              <TableCell align='center'>
                <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadorganizingMOOC3}>Upload</button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <Input
                  value={data.organizingMooc4.nameofEvent}
                  onChange={(e) =>
                    setDate({
                      ...data,
                      organizingMooc4: {
                        ...data.organizingMooc4,
                        nameofEvent: e.target.value,
                      },
                    })
                  }
                  type='number'
                  name=''
                  id=''
                />
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setDate({
                      ...data,
                      organizingMooc4: {
                        ...data.organizingMooc4,
                        organizingSlot: e.target.value,
                        score: 100 * e.target.value,
                      },
                    })
                  }>
                  <option> Select </option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                  <option value='6'>6</option>
                </select>
              </TableCell>
              <TableCell align='center'>{data.organizingMooc4.score}</TableCell>
              <TableCell align='center'>
                <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadorganizingMOOC4}>Upload</button>
              </TableCell>
            </TableRow>

            <TableCell component='th'></TableCell>
          </TableContainer>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 1000 }} aria-label='simple table'>
              <TableCell component='th'></TableCell>
              <TableRow align='center'>
                <TableHead colspan='4'>
                  <TableCell align='center'>
                  Organizing FDP, FIP and Training Programs. Choose 1 for (1 Week), 2 for (2 Weeks), 3 for (3 Weeks), 4 for (4 Weeks), etc. during the selected Academic Year. Minimum 5 hours program in a day will be treated as one day program. 20 points for one Week Program
                  </TableCell>
                </TableHead>
              </TableRow>
            </Table>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align='center'>Name of Event </TableCell>
              <TableCell align='center'>organizing Slot</TableCell>
              <TableCell align='center'>Points Scored</TableCell>
              <TableCell align='center'>Upload Proof</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <Input
                  value={data.organizingFDP.nameofEvent}
                  onChange={(e) =>
                    setDate({
                      ...data,
                      organizingFDP: {
                        ...data.organizingFDP,
                        nameofEvent: e.target.value,
                      },
                    })
                  }
                  type='number'
                  name=''
                  id=''
                />
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setDate({
                      ...data,
                      organizingFDP: {
                        ...data.organizingFDP,
                        noOfDays: e.target.value,
                        score: 70 * e.target.value,
                      },
                    })
                  }>
                  <option> Select </option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                  <option value='6'>6</option>
                </select>
              </TableCell>
              <TableCell align='center'>{data.organizingFDP.score}</TableCell>
              <TableCell align='center'>
                <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadorganizingFDP}>Upload</button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <Input
                  value={data.organizingFDP1.nameofEvent}
                  onChange={(e) =>
                    setDate({
                      ...data,
                      organizingFDP1: {
                        ...data.organizingFDP1,
                        nameofEvent: e.target.value,
                      },
                    })
                  }
                  type='number'
                  name=''
                  id=''
                />
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setDate({
                      ...data,
                      organizingFDP1: {
                        ...data.organizingFDP1,
                        noOfDays: e.target.value,
                        score: 70 * e.target.value,
                      },
                    })
                  }>
                  <option> Select </option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                  <option value='6'>6</option>
                </select>
              </TableCell>
              <TableCell align='center'>{data.organizingFDP1.score}</TableCell>
              <TableCell align='center'>
                <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadorganizingFDP1}>Upload</button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <Input
                  value={data.organizingFDP2.nameofEvent}
                  onChange={(e) =>
                    setDate({
                      ...data,
                      organizingFDP2: {
                        ...data.organizingFDP2,
                        nameofEvent: e.target.value,
                      },
                    })
                  }
                  type='number'
                  name=''
                  id=''
                />
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setDate({
                      ...data,
                      organizingFDP2: {
                        ...data.organizingFDP2,
                        noOfDays: e.target.value,
                        score: 70 * e.target.value,
                      },
                    })
                  }>
                  <option> Select </option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                  <option value='6'>6</option>
                </select>
              </TableCell>
              <TableCell align='center'>{data.organizingFDP2.score}</TableCell>
              <TableCell align='center'>
                <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadorganizingFDP2}>Upload</button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <Input
                  value={data.organizingFDP3.nameofEvent}
                  onChange={(e) =>
                    setDate({
                      ...data,
                      organizingFDP3: {
                        ...data.organizingFDP3,
                        nameofEvent: e.target.value,
                      },
                    })
                  }
                  type='number'
                  name=''
                  id=''
                />
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setDate({
                      ...data,
                      organizingFDP3: {
                        ...data.organizingFDP3,
                        noOfDays: e.target.value,
                        score: 70 * e.target.value,
                      },
                    })
                  }>
                  <option> Select </option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                  <option value='6'>6</option>
                </select>
              </TableCell>
              <TableCell align='center'>{data.organizingFDP3.score}</TableCell>
              <TableCell align='center'>
                <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadorganizingFDP3}>Upload</button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <Input
                  value={data.organizingFDP4.nameofEvent}
                  onChange={(e) =>
                    setDate({
                      ...data,
                      organizingFDP4: {
                        ...data.organizingFDP4,
                        nameofEvent: e.target.value,
                      },
                    })
                  }
                  type='number'
                  name=''
                  id=''
                />
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setDate({
                      ...data,
                      organizingFDP4: {
                        ...data.organizingFDP4,
                        noOfDays: e.target.value,
                        score: 70 * e.target.value,
                      },
                    })
                  }>
                  <option> Select </option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                  <option value='6'>6</option>
                </select>
              </TableCell>
              <TableCell align='center'>{data.organizingFDP4.score}</TableCell>
              <TableCell align='center'>
                <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadorganizingFDP4}>Upload</button>
              </TableCell>
            </TableRow>

            <TableCell component='th'></TableCell>
          </TableContainer>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 1000 }} aria-label='simple table'>
              <TableCell component='th'></TableCell>
              <TableRow align='center'>
                <TableHead colspan='4'>
                  <TableCell align='center'>
                  Organizing Workshops, Conferences, Symposium, etc. Choose 1 for (1 Day), 2 for (2 Days), 3 for (3 Days), 4 for (4 Days), 5 for (5 Days), 6 for (6 Days), etc. during the selected Academic Year. Minimum 5 hours program in a day will be treated as one day program. 10 points for one day program
                  </TableCell>
                </TableHead>
              </TableRow>
            </Table>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align='center'>Name of Event </TableCell>
              <TableCell align='center'>organizing Slot</TableCell>
              <TableCell align='center'>Points Scored</TableCell>
              <TableCell align='center'>Upload Proof</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <Input
                  value={data.organizingWorkshop.nameofEvent}
                  onChange={(e) =>
                    setDate({
                      ...data,
                      organizingWorkshop: {
                        ...data.organizingWorkshop,
                        nameofEvent: e.target.value,
                      },
                    })
                  }
                  type='number'
                  name=''
                  id=''
                />
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setDate({
                      ...data,
                      organizingWorkshop: {
                        ...data.organizingWorkshop,
                        organizingSlot: e.target.value,
                        score: 10 * e.target.value,
                      },
                    })
                  }>
                  <option> Select </option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                  <option value='6'>6</option>
                </select>
              </TableCell>
              <TableCell align='center'>
                {data.organizingWorkshop.score}
              </TableCell>
              <TableCell align='center'>
                <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadorganizingWorkshop}>Upload</button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <Input
                  value={data.organizingWorkshop1.nameofEvent}
                  onChange={(e) =>
                    setDate({
                      ...data,
                      organizingWorkshop1: {
                        ...data.organizingWorkshop1,
                        nameofEvent: e.target.value,
                      },
                    })
                  }
                  type='number'
                  name=''
                  id=''
                />
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setDate({
                      ...data,
                      organizingWorkshop1: {
                        ...data.organizingWorkshop1,
                        organizingSlot: e.target.value,
                        score: 10 * e.target.value,
                      },
                    })
                  }>
                  <option> Select </option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                  <option value='6'>6</option>
                </select>
              </TableCell>
              <TableCell align='center'>
                {data.organizingWorkshop1.score}
              </TableCell>
              <TableCell align='center'>
                <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadorganizingWorkshop1}>Upload</button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <Input
                  value={data.organizingWorkshop2.nameofEvent}
                  onChange={(e) =>
                    setDate({
                      ...data,
                      organizingWorkshop2: {
                        ...data.organizingWorkshop2,
                        nameofEvent: e.target.value,
                      },
                    })
                  }
                  type='number'
                  name=''
                  id=''
                />
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setDate({
                      ...data,
                      organizingWorkshop2: {
                        ...data.organizingWorkshop2,
                        organizingSlot: e.target.value,
                        score: 10 * e.target.value,
                      },
                    })
                  }>
                  <option> Select </option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                  <option value='6'>6</option>
                </select>
              </TableCell>
              <TableCell align='center'>
                {data.organizingWorkshop2.score}
              </TableCell>
              <TableCell align='center'>
                <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadorganizingWorkshop2}>Upload</button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <Input
                  value={data.organizingWorkshop3.nameofEvent}
                  onChange={(e) =>
                    setDate({
                      ...data,
                      organizingWorkshop3: {
                        ...data.organizingWorkshop3,
                        nameofEvent: e.target.value,
                      },
                    })
                  }
                  type='number'
                  name=''
                  id=''
                />
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setDate({
                      ...data,
                      organizingWorkshop3: {
                        ...data.organizingWorkshop3,
                        organizingSlot: e.target.value,
                        score: 10 * e.target.value,
                      },
                    })
                  }>
                  <option> Select </option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                  <option value='6'>6</option>
                </select>
              </TableCell>
              <TableCell align='center'>
                {data.organizingWorkshop3.score}
              </TableCell>
              <TableCell align='center'>
                <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadorganizingWorkshop3}>Upload</button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <Input
                  value={data.organizingWorkshop4.nameofEvent}
                  onChange={(e) =>
                    setDate({
                      ...data,
                      organizingWorkshop4: {
                        ...data.organizingWorkshop4,
                        nameofEvent: e.target.value,
                      },
                    })
                  }
                  type='number'
                  name=''
                  id=''
                />
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setDate({
                      ...data,
                      organizingWorkshop4: {
                        ...data.organizingWorkshop4,
                        organizingSlot: e.target.value,
                        score: 10 * e.target.value,
                      },
                    })
                  }>
                  <option> Select </option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                  <option value='6'>6</option>
                </select>
              </TableCell>
              <TableCell align='center'>
                {data.organizingWorkshop4.score}
              </TableCell>
              <TableCell align='center'>
                <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadorganizingWorkshop4}>Upload</button>
              </TableCell>
            </TableRow>

            <TableCell component='th'></TableCell>
          </TableContainer>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 1000 }} aria-label='simple table'>
              <TableCell component='th'></TableCell>
              <TableRow align='center'>
                <TableHead colspan='4'>
                  <TableCell align='center'>
                  Participation in MOOC Courses such as NPTEL, Refresher Courses, Short-Term Courses. Choose 1 for (1 Week), 2 for (2 Weeks), 3 for (3 Weeks), 4 for (4 Weeks), etc. during the selected Academic Year. Minimum 5 hours program in a day will be treated as one day program. 15 points for one Week Program
                  </TableCell>
                </TableHead>
              </TableRow>
            </Table>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align='center'>Name of Event </TableCell>
              <TableCell align='center'>organizing Slot</TableCell>
              <TableCell align='center'>Points Scored</TableCell>
              <TableCell align='center'>Upload Proof</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <Input
                  value={data.participationInMOOC.nameofEvent}
                  onChange={(e) =>
                    setDate({
                      ...data,
                      participationInMOOC: {
                        ...data.participationInMOOC,
                        nameofEvent: e.target.value,
                      },
                    })
                  }
                  type='number'
                  name=''
                  id=''
                />
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setDate({
                      ...data,
                      participationInMOOC: {
                        ...data.participationInMOOC,
                        organizingSlot: e.target.value,
                        score: 25 * e.target.value,
                      },
                    })
                  }>
                  <option> Select </option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                  <option value='6'>6</option>
                </select>
              </TableCell>
              <TableCell align='center'>
                {data.participationInMOOC.score}
              </TableCell>
              <TableCell align='center'>
                <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadParticipationInMOOC}>Upload</button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <Input
                  value={data.participationInMOOC1.nameofEvent}
                  onChange={(e) =>
                    setDate({
                      ...data,
                      participationInMOOC1: {
                        ...data.participationInMOOC1,
                        nameofEvent: e.target.value,
                      },
                    })
                  }
                  type='number'
                  name=''
                  id=''
                />
              </TableCell>
              <TableCell align='center'>
                {" "}
                <select
                  onChange={(e) =>
                    setDate({
                      ...data,
                      participationInMOOC1: {
                        ...data.participationInMOOC1,
                        organizingSlot: e.target.value,
                        score: 25 * e.target.value,
                      },
                    })
                  }>
                  <option> Select </option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                  <option value='6'>6</option>
                </select>
              </TableCell>
              <TableCell align='center'>
                {data.participationInMOOC1.score}
              </TableCell>
              <TableCell align='center'>
                <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadParticipationInMOOC1}>Upload</button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <Input
                  value={data.participationInMOOC2.nameofEvent}
                  onChange={(e) =>
                    setDate({
                      ...data,
                      participationInMOOC2: {
                        ...data.participationInMOOC2,
                        nameofEvent: e.target.value,
                      },
                    })
                  }
                  type='number'
                  name=''
                  id=''
                />
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setDate({
                      ...data,
                      participationInMOOC2: {
                        ...data.participationInMOOC2,
                        organizingSlot: e.target.value,
                        score: 25 * e.target.value,
                      },
                    })
                  }>
                  <option> Select </option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                  <option value='6'>6</option>
                </select>
              </TableCell>
              <TableCell align='center'>
                {data.participationInMOOC2.score}
              </TableCell>
              <TableCell align='center'>
                <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadParticipationInMOOC3}>Upload</button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <Input
                  value={data.participationInMOOC3.nameofEvent}
                  onChange={(e) =>
                    setDate({
                      ...data,
                      participationInMOOC3: {
                        ...data.participationInMOOC3,
                        nameofEvent: e.target.value,
                      },
                    })
                  }
                  type='number'
                  name=''
                  id=''
                />
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setDate({
                      ...data,
                      participationInMOOC3: {
                        ...data.participationInMOOC3,
                        organizingSlot: e.target.value,
                        score: 25 * e.target.value,
                      },
                    })
                  }>
                  <option> Select </option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                  <option value='6'>6</option>
                </select>
              </TableCell>
              <TableCell align='center'>
                {data.participationInMOOC3.score}
              </TableCell>
              <TableCell align='center'>
                <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadParticipationInMOOC4}>Upload</button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <Input
                  value={data.participationInMOOC4.nameofEvent}
                  onChange={(e) =>
                    setDate({
                      ...data,
                      participationInMOOC4: {
                        ...data.participationInMOOC4,
                        nameofEvent: e.target.value,
                      },
                    })
                  }
                  type='number'
                  name=''
                  id=''
                />
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setDate({
                      ...data,
                      participationInMOOC4: {
                        ...data.participationInMOOC4,
                        organizingSlot: e.target.value,
                        score: 25 * e.target.value,
                      },
                    })
                  }>
                  <option> Select </option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                  <option value='6'>6</option>
                </select>
              </TableCell>
              <TableCell align='center'>
                {data.participationInMOOC4.score}
              </TableCell>
              <TableCell align='center'>
                <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadParticipationInMOOC4}>Upload</button>
              </TableCell>
            </TableRow>

            <TableCell component='th'></TableCell>
          </TableContainer>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 1000 }} aria-label='simple table'>
              <TableCell component='th'></TableCell>
              <TableRow align='center'>
                <TableHead colspan='4'>
                  <TableCell align='center'>
                  Participation in FDP, FIP and Training Programs. Choose 1 for (1 Week), 2 for (2 Weeks), 3 for (3 Weeks), 4 for (4 Weeks), etc. during the selected Academic Year. Minimum 5 hours program in a day will be treated as one day program. 10 points for one Week Program
                  </TableCell>
                </TableHead>
              </TableRow>
            </Table>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align='center'>Name of Event </TableCell>
              <TableCell align='center'>Organized Slot</TableCell>
              <TableCell align='center'>Points Scored</TableCell>
              <TableCell align='center'>Upload Proof</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <Input
                  value={data.participationInFDP.nameofEvent}
                  onChange={(e) =>
                    setDate({
                      ...data,
                      participationInFDP: {
                        ...data.participationInFDP,
                        nameofEvent: e.target.value,
                      },
                    })
                  }
                  type='number'
                  name=''
                  id=''
                />
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setDate({
                      ...data,
                      participationInFDP: {
                        ...data.participationInFDP,
                        noOfDays: e.target.value,
                        score: 20 * e.target.value,
                      },
                    })
                  }>
                  <option> Select </option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                  <option value='6'>6</option>
                </select>
              </TableCell>
              <TableCell align='center'>
                {data.participationInFDP.score}
              </TableCell>
              <TableCell align='center'>
                <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadParticipationInFDP}>Upload</button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <Input
                  value={data.participationInFDP1.nameofEvent}
                  onChange={(e) =>
                    setDate({
                      ...data,
                      participationInFDP1: {
                        ...data.participationInFDP1,
                        nameofEvent: e.target.value,
                      },
                    })
                  }
                  type='number'
                  name=''
                  id=''
                />
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setDate({
                      ...data,
                      participationInFDP1: {
                        ...data.participationInFDP1,
                        noOfDays: e.target.value,
                        score: 20 * e.target.value,
                      },
                    })
                  }>
                  <option> Select </option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                  <option value='6'>6</option>
                </select>
              </TableCell>
              <TableCell align='center'>
                {data.participationInFDP1.score}
              </TableCell>
              <TableCell align='center'>
                <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadParticipationInFDP1}>Upload</button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <Input
                  value={data.participationInFDP2.nameofEvent}
                  onChange={(e) =>
                    setDate({
                      ...data,
                      participationInFDP2: {
                        ...data.participationInFDP2,
                        nameofEvent: e.target.value,
                      },
                    })
                  }
                  type='number'
                  name=''
                  id=''
                />
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setDate({
                      ...data,
                      participationInFDP2: {
                        ...data.participationInFDP2,
                        noOfDays: e.target.value,
                        score: 20 * e.target.value,
                      },
                    })
                  }>
                  <option> Select </option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                  <option value='6'>6</option>
                </select>
              </TableCell>
              <TableCell align='center'>
                {data.participationInFDP2.score}
              </TableCell>
              <TableCell align='center'>
                <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadParticipationInFDP2}>Upload</button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <Input
                  value={data.participationInFDP3.nameofEvent}
                  onChange={(e) =>
                    setDate({
                      ...data,
                      participationInFDP3: {
                        ...data.participationInFDP3,
                        nameofEvent: e.target.value,
                      },
                    })
                  }
                  type='number'
                  name=''
                  id=''
                />
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setDate({
                      ...data,
                      participationInFDP3: {
                        ...data.participationInFDP3,
                        noOfDays: e.target.value,
                        score: 20 * e.target.value,
                      },
                    })
                  }>
                  <option> Select </option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                  <option value='6'>6</option>
                </select>
              </TableCell>
              <TableCell align='center'>
                {data.participationInFDP3.score}
              </TableCell>
              <TableCell align='center'>
                <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadParticipationInFDP}>Upload</button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <Input
                  value={data.participationInFDP4.nameofEvent}
                  onChange={(e) =>
                    setDate({
                      ...data,
                      participationInFDP4: {
                        ...data.participationInFDP4,
                        nameofEvent: e.target.value,
                      },
                    })
                  }
                  type='number'
                  name=''
                  id=''
                />
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setDate({
                      ...data,
                      participationInFDP4: {
                        ...data.participationInFDP4,
                        noOfDays: e.target.value,
                        score: 20 * e.target.value,
                      },
                    })
                  }>
                  <option> Select </option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                  <option value='6'>6</option>
                </select>
              </TableCell>
              <TableCell align='center'>
                {data.participationInFDP4.score}
              </TableCell>
              <TableCell align='center'>
                <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadorganizingFDP4}>Upload</button>
              </TableCell>
            </TableRow>

            <TableCell component='th'></TableCell>
          </TableContainer>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 1000 }} aria-label='simple table'>
              <TableCell component='th'></TableCell>
              <TableRow align='center'>
                <TableHead colspan='4'>
                  <TableCell align='center'>
                  Participation in Workshops, Conferences, Symposium, etc. Choose 1 for (1 Day), 2 for (2 Days), 3 for (3 Days), 4 for (4 Days), 5 for (5 Days), 6 for (6 Days), etc. during the seelcted Academic Year. Minimum 5 hours program in a day will be treated as one day program. 3 points for one day program
                  </TableCell>
                </TableHead>
              </TableRow>
            </Table>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align='center'>Name of Event </TableCell>
              <TableCell align='center'>Organized Slot</TableCell>
              <TableCell align='center'>Points Scored</TableCell>
              <TableCell align='center'>Upload Proof</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <Input
                  value={data.participationInWorkshop.nameofEvent}
                  onChange={(e) =>
                    setDate({
                      ...data,
                      participationInWorkshop: {
                        ...data.participationInWorkshop,
                        nameofEvent: e.target.value,
                      },
                    })
                  }
                  type='number'
                  name=''
                  id=''
                />
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setDate({
                      ...data,
                      participationInWorkshop: {
                        ...data.participationInWorkshop,
                        organizingSlot: e.target.value,
                        score: 3 * e.target.value,
                      },
                    })
                  }>
                  <option> Select </option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                  <option value='6'>6</option>
                </select>
              </TableCell>
              <TableCell align='center'>
                {data.participationInWorkshop.score}
              </TableCell>
              <TableCell align='center'>
                <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadParticipationInWorkshop}>
                  Upload
                </button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <Input
                  value={data.participationInWorkshop1.nameofEvent}
                  onChange={(e) =>
                    setDate({
                      ...data,
                      participationInWorkshop1: {
                        ...data.participationInWorkshop1,
                        nameofEvent: e.target.value,
                      },
                    })
                  }
                  type='number'
                  name=''
                  id=''
                />
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setDate({
                      ...data,
                      participationInWorkshop1: {
                        ...data.participationInWorkshop1,
                        organizingSlot: e.target.value,
                        score: 3 * e.target.value,
                      },
                    })
                  }>
                  <option> Select </option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                  <option value='6'>6</option>
                </select>
              </TableCell>
              <TableCell align='center'>
                {data.participationInWorkshop1.score}
              </TableCell>
              <TableCell align='center'>
                <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadParticipationInWorkshop1}>
                  Upload
                </button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <Input
                  value={data.participationInWorkshop2.nameofEvent}
                  onChange={(e) =>
                    setDate({
                      ...data,
                      participationInWorkshop2: {
                        ...data.participationInWorkshop2,
                        nameofEvent: e.target.value,
                      },
                    })
                  }
                  type='number'
                  name=''
                  id=''
                />
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setDate({
                      ...data,
                      participationInWorkshop2: {
                        ...data.participationInWorkshop2,
                        organizingSlot: e.target.value,
                        score: 3 * e.target.value,
                      },
                    })
                  }>
                  <option> Select </option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                  <option value='6'>6</option>
                </select>
              </TableCell>
              <TableCell align='center'>
                {data.participationInWorkshop2.score}
              </TableCell>
              <TableCell align='center'>
                <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadParticipationInWorkshop2}>
                  Upload
                </button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <Input
                  value={data.participationInWorkshop3.nameofEvent}
                  onChange={(e) =>
                    setDate({
                      ...data,
                      participationInWorkshop3: {
                        ...data.participationInWorkshop3,
                        nameofEvent: e.target.value,
                      },
                    })
                  }
                  type='number'
                  name=''
                  id=''
                />
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setDate({
                      ...data,
                      participationInWorkshop3: {
                        ...data.participationInWorkshop3,
                        organizingSlot: e.target.value,
                        score: 3 * e.target.value,
                      },
                    })
                  }>
                  <option> Select </option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                  <option value='6'>6</option>
                </select>
              </TableCell>
              <TableCell align='center'>
                {data.participationInWorkshop3.score}
              </TableCell>
              <TableCell align='center'>
                <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadParticipationInWorkshop3}>
                  Upload
                </button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <Input
                  value={data.participationInWorkshop4.nameofEvent}
                  onChange={(e) =>
                    setDate({
                      ...data,
                      participationInWorkshop4: {
                        ...data.participationInWorkshop4,
                        nameofEvent: e.target.value,
                      },
                    })
                  }
                  type='number'
                  name=''
                  id=''
                />
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setDate({
                      ...data,
                      participationInWorkshop4: {
                        ...data.participationInWorkshop4,
                        organizingSlot: e.target.value,
                        score: 3 * e.target.value,
                      },
                    })
                  }>
                  <option> Select </option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                  <option value='6'>6</option>
                </select>
              </TableCell>
              <TableCell align='center'>
                {data.participationInWorkshop4.score}
              </TableCell>
              <TableCell align='center'>
                <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadParticipationInWorkshop4}>
                  Upload
                </button>
              </TableCell>
            </TableRow>

            <TableCell component='th'></TableCell>
          </TableContainer>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 1000 }} aria-label='simple table'>
              <TableCell component='th'></TableCell>
              <TableRow align='center'>
                <TableHead colspan='4'>
                  <TableCell align='center'>
                  Fund Generated/Sponsorship Received through Conference, Workshop/Internships/Summer School during the selected Academic Year. (*Points can be claimed only by a maximum of 5 faculty per event)
                  </TableCell>
                </TableHead>
              </TableRow>
            </Table>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align='center'>Name of Event </TableCell>
              <TableCell align='center'>
                Amount Generated in Lakhs (Enter 1.00 for 1 Lakh, 0.2 for twenty
                thousand)
              </TableCell>
              <TableCell align='center'>Points Scored</TableCell>
              <TableCell align='center'>Upload Proof</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <Input
                  value={data.fundGeneration.nameofEvent}
                  onChange={(e) =>
                    setDate({
                      ...data,
                      fundGeneration: {
                        ...data.fundGeneration,
                        nameofEvent: e.target.value,
                      },
                    })
                  }
                  type='number'
                  name=''
                  id=''
                />
              </TableCell>
              <TableCell align='center'>
                <Input
                  value={data.fundGeneration.amountGenerated}
                  onChange={(e) =>
                    setDate({
                      ...data,
                      fundGeneration: {
                        ...data.fundGeneration,
                        amountGenerated: e.target.value,
                        score: 25 * e.target.value,
                      },
                    })
                  }
                  type='number'
                  name=''
                  id=''
                />
              </TableCell>
              <TableCell align='center'>{data.fundGeneration.score}</TableCell>
              <TableCell align='center'>
                <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadFundGeneration}>Upload</button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <Input
                  value={data.fundGeneration1.nameofEvent}
                  onChange={(e) =>
                    setDate({
                      ...data,
                      fundGeneration1: {
                        ...data.fundGeneration1,
                        nameofEvent: e.target.value,
                      },
                    })
                  }
                  type='number'
                  name=''
                  id=''
                />
              </TableCell>
              <TableCell align='center'>
                <Input
                  value={data.fundGeneration1.amountGenerated}
                  onChange={(e) =>
                    setDate({
                      ...data,
                      fundGeneration1: {
                        ...data.fundGeneration1,
                        amountGenerated: e.target.value,
                        score: 25 * e.target.value,
                      },
                    })
                  }
                  type='number'
                  name=''
                  id=''
                />
              </TableCell>
              <TableCell align='center'>{data.fundGeneration1.score}</TableCell>
              <TableCell align='center'>
                <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadFundGeneration1}>Upload</button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <Input
                  value={data.fundGeneration2.nameofEvent}
                  onChange={(e) =>
                    setDate({
                      ...data,
                      fundGeneration2: {
                        ...data.fundGeneration2,
                        nameofEvent: e.target.value,
                      },
                    })
                  }
                  type='number'
                  name=''
                  id=''
                />
              </TableCell>
              <TableCell align='center'>
                <Input
                  value={data.fundGeneration2.amountGenerated}
                  onChange={(e) =>
                    setDate({
                      ...data,
                      fundGeneration2: {
                        ...data.fundGeneration2,
                        amountGenerated: e.target.value,
                        score: 25 * e.target.value,
                      },
                    })
                  }
                  type='number'
                  name=''
                  id=''
                />
              </TableCell>
              <TableCell align='center'>{data.fundGeneration2.score}</TableCell>
              <TableCell align='center'>
                <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadFundGeneration2}>Upload</button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <Input
                  value={data.fundGeneration3.nameofEvent}
                  onChange={(e) =>
                    setDate({
                      ...data,
                      fundGeneration3: {
                        ...data.fundGeneration3,
                        nameofEvent: e.target.value,
                      },
                    })
                  }
                  type='number'
                  name=''
                  id=''
                />
              </TableCell>
              <TableCell align='center'>
                <Input
                  value={data.fundGeneration3.amountGenerated}
                  onChange={(e) =>
                    setDate({
                      ...data,
                      fundGeneration3: {
                        ...data.fundGeneration3,
                        amountGenerated: e.target.value,
                        score: 25 * e.target.value,
                      },
                    })
                  }
                  type='number'
                  name=''
                  id=''
                />
              </TableCell>
              <TableCell align='center'>{data.fundGeneration3.score}</TableCell>
              <TableCell align='center'>
                <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadFundGeneration3}>Upload</button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <Input
                  value={data.fundGeneration4.nameofEvent}
                  onChange={(e) =>
                    setDate({
                      ...data,
                      fundGeneration4: {
                        ...data.fundGeneration4,
                        nameofEvent: e.target.value,
                      },
                    })
                  }
                  type='number'
                  name=''
                  id=''
                />
              </TableCell>
              <TableCell align='center'>
                <Input
                  value={data.fundGeneration4.amountGenerated}
                  onChange={(e) =>
                    setDate({
                      ...data,
                      fundGeneration4: {
                        ...data.fundGeneration4,
                        amountGenerated: e.target.value,
                        score: 25 * e.target.value,
                      },
                    })
                  }
                  type='number'
                  name=''
                  id=''
                />
              </TableCell>
              <TableCell align='center'>{data.fundGeneration4.score}</TableCell>
              <TableCell align='center'>
                <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadFundGeneration4}>Upload</button>
              </TableCell>
            </TableRow>

            <TableCell component='th'></TableCell>
          </TableContainer>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 1000 }} aria-label='simple table'>
              <TableCell component='th'></TableCell>
              <TableRow align='center'>
                <TableHead colspan='4'>
                  <TableCell align='center'>
                    Industry Linkage, International/National R&D Collaboration, MoUs (Effective partnership and activities) during the selected Academic Year
                  </TableCell>
                </TableHead>
              </TableRow>
            </Table>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align='center'>Type of Linkage </TableCell>
              <TableCell align='center'>No of Activities </TableCell>
              <TableCell align='center'>Points Scored</TableCell>
              <TableCell align='center'>Upload Proof</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setDate({
                      ...data,
                      industryLinkage: {
                        ...data.industryLinkage,
                        typeOfLinakge: e.target.value,
                      },
                    })
                  }>
                  <option> Select </option>
                  <option value='1'>Industry Linkage</option>
                  <option value='2'>International R & D Collaboration </option>
                  <option value='3'>MoU with Industry</option>
                  <option value='4'>Mou with Reputed Universities</option>
                </select>
              </TableCell>
              <TableCell align='center'>
                <Input
                  value={data.industryLinkage.noOfActivities}
                  onChange={(e) =>
                    setDate({
                      ...data,
                      industryLinkage: {
                        ...data.industryLinkage,
                        noOfActivities: e.target.value,
                        score: 10 * e.target.value,
                      },
                    })
                  }
                  type='number'
                  name=''
                  id=''
                />
              </TableCell>
              <TableCell align='center'>{data.industryLinkage.score}</TableCell>
              <TableCell align='center'>
                <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadindustryLinkage}>Upload</button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setDate({
                      ...data,
                      industryLinkage1: {
                        ...data.industryLinkage1,
                        typeOfLinakge: e.target.value,
                      },
                    })
                  }>
                  <option> Select </option>
                  <option value='1'>Industry Linkage</option>
                  <option value='2'>International R & D Collaboration </option>
                  <option value='3'>MoU with Industry</option>
                  <option value='4'>Mou with Reputed Universities</option>
                </select>
              </TableCell>
              <TableCell align='center'>
                <Input
                  value={data.industryLinkage1.noOfActivities}
                  onChange={(e) =>
                    setDate({
                      ...data,
                      industryLinkage1: {
                        ...data.industryLinkage1,
                        noOfActivities: e.target.value,
                        score: 10 * e.target.value,
                      },
                    })
                  }
                  type='number'
                  name=''
                  id=''
                />
              </TableCell>
              <TableCell align='center'>
                {data.industryLinkage1.score}
              </TableCell>
              <TableCell align='center'>
                <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadindustryLinkage1}>Upload</button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setDate({
                      ...data,
                      industryLinkage2: {
                        ...data.industryLinkage2,
                        typeOfLinakge: e.target.value,
                      },
                    })
                  }>
                  <option> Select </option>
                  <option value='1'>Industry Linkage</option>
                  <option value='2'>International R & D Collaboration </option>
                  <option value='3'>MoU with Industry</option>
                  <option value='4'>Mou with Reputed Universities</option>
                </select>
              </TableCell>
              <TableCell align='center'>
                <Input
                  value={data.industryLinkage2.noOfActivities}
                  onChange={(e) =>
                    setDate({
                      ...data,
                      industryLinkage2: {
                        ...data.industryLinkage2,
                        noOfActivities: e.target.value,
                        score: 10 * e.target.value,
                      },
                    })
                  }
                  type='number'
                  name=''
                  id=''
                />
              </TableCell>
              <TableCell align='center'>
                {data.industryLinkage2.score}
              </TableCell>
              <TableCell align='center'>
                <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadindustryLinkage2}>Upload</button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setDate({
                      ...data,
                      industryLinkage3: {
                        ...data.industryLinkage3,
                        typeOfLinakge: e.target.value,
                      },
                    })
                  }>
                  <option> Select </option>
                  <option value='1'>Industry Linkage</option>
                  <option value='2'>International R & D Collaboration </option>
                  <option value='3'>MoU with Industry</option>
                  <option value='4'>Mou with Reputed Universities</option>
                </select>
              </TableCell>
              <TableCell align='center'>
                <Input
                  value={data.industryLinkage3.noOfActivities}
                  onChange={(e) =>
                    setDate({
                      ...data,
                      industryLinkage3: {
                        ...data.industryLinkage3,
                        noOfActivities: e.target.value,
                        score: 10 * e.target.value,
                      },
                    })
                  }
                  type='number'
                  name=''
                  id=''
                />
              </TableCell>
              <TableCell align='center'>
                {data.industryLinkage3.score}
              </TableCell>
              <TableCell align='center'>
                <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadindustryLinkage3}>Upload</button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setDate({
                      ...data,
                      industryLinkage4: {
                        ...data.industryLinkage4,
                        typeOfLinakge: e.target.value,
                      },
                    })
                  }>
                  <option> Select </option>
                  <option value='1'>Industry Linkage</option>
                  <option value='2'>International R & D Collaboration </option>
                  <option value='3'>MoU with Industry</option>
                  <option value='4'>Mou with Reputed Universities</option>
                </select>
              </TableCell>
              <TableCell align='center'>
                <Input
                  value={data.industryLinkage4.noOfActivities}
                  onChange={(e) =>
                    setDate({
                      ...data,
                      industryLinkage4: {
                        ...data.industryLinkage4,
                        noOfActivities: e.target.value,
                        score: 10 * e.target.value,
                      },
                    })
                  }
                  type='number'
                  name=''
                  id=''
                />
              </TableCell>
              <TableCell align='center'>
                {data.industryLinkage4.score}
              </TableCell>
              <TableCell align='center'>
                <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadindustryLinkage4}>Upload</button>
              </TableCell>
            </TableRow>

            <TableCell component='th'></TableCell>
          </TableContainer>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 1000 }} aria-label='simple table'>
              <TableCell component='th'></TableCell>
              <TableRow align='center'>
                <TableHead colspan='4'>
                  <TableCell align='center'>
                  Organizing lectures/talks by Industry Experts, Academicians during the selected Academic Year
                  </TableCell>
                </TableHead>
              </TableRow>
            </Table>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align='center'>
                Type of Lecture/Talk Arranged
              </TableCell>
              <TableCell align='center'>No of Such Lectures </TableCell>
              <TableCell align='center'>Points Scored</TableCell>
              <TableCell align='center'>Upload Proof</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setDate({
                      ...data,
                      organizingLectures: {
                        ...data.organizingLectures,

                        type: e.target.value,
                      },
                    })
                  }>
                  <option> Select </option>
                  <option value='1'>Seminar</option>
                  <option value='2'>Awareness </option>
                  <option value='3'>Demonstration</option>
                  <option value='4'>Guest Lecture </option>
                </select>
              </TableCell>
              <TableCell align='center'>
                <Input
                  value={data.organizingLectures.noOfLec}
                  onChange={(e) =>
                    setDate({
                      ...data,
                      organizingLectures: {
                        ...data.organizingLectures,
                        noOfLec: e.target.value,
                        score: 5 * e.target.value,
                      },
                    })
                  }
                  type='number'
                  name=''
                  id=''
                />
              </TableCell>
              <TableCell align='center'>
                {data.organizingLectures.score}
              </TableCell>
              <TableCell align='center'>
                <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadorganizingLecture}>Upload</button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setDate({
                      ...data,
                      organizingLectures1: {
                        ...data.organizingLectures1,
                        type: e.target.value,
                      },
                    })
                  }>
                  <option> Select </option>
                  <option value='1'>Seminar</option>
                  <option value='2'>Awareness </option>
                  <option value='3'>Demonstration</option>
                  <option value='4'>Guest Lecture </option>
                </select>
              </TableCell>
              <TableCell align='center'>
                <Input
                  value={data.organizingLectures1.noOfLec}
                  onChange={(e) =>
                    setDate({
                      ...data,
                      organizingLectures1: {
                        ...data.organizingLectures1,
                        noOfLec: e.target.value,
                        score: 5 * e.target.value,
                      },
                    })
                  }
                  type='text'
                  name=''
                  id=''
                />
              </TableCell>
              <TableCell align='center'>
                {data.organizingLectures1.score}
              </TableCell>
              <TableCell align='center'>
                <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadorganizingLecture1}>Upload</button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setDate({
                      ...data,
                      organizingLectures2: {
                        ...data.organizingLectures2,
                        type: e.target.value,
                      },
                    })
                  }>
                  <option> Select </option>
                  <option value='1'>Seminar</option>
                  <option value='2'>Awareness </option>
                  <option value='3'>Demonstration</option>
                  <option value='4'>Guest Lecture </option>
                </select>
              </TableCell>
              <TableCell align='center'>
                <Input
                  value={data.organizingLectures2.noOfLec}
                  onChange={(e) =>
                    setDate({
                      ...data,
                      organizingLectures2: {
                        ...data.organizingLectures2,
                        noOfLec: e.target.value,
                        score: 5 * e.target.value,
                      },
                    })
                  }
                  type='number'
                  name=''
                  id=''
                />
              </TableCell>
              <TableCell align='center'>
                {data.organizingLectures2.score}
              </TableCell>
              <TableCell align='center'>
                <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadorganizingLecture2}>Upload</button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setDate({
                      ...data,
                      organizingLectures3: {
                        ...data.organizingLectures3,
                        type: e.target.value,
                      },
                    })
                  }>
                  <option> Select </option>
                  <option value='1'>Seminar</option>
                  <option value='2'>Awareness </option>
                  <option value='3'>Demonstration</option>
                  <option value='4'>Guest Lecture </option>
                </select>
              </TableCell>
              <TableCell align='center'>
                <Input
                  value={data.organizingLectures3.noOfLec}
                  onChange={(e) =>
                    setDate({
                      ...data,
                      organizingLectures3: {
                        ...data.organizingLectures3,
                        noOfLec: e.target.value,
                        score: 5 * e.target.value,
                      },
                    })
                  }
                  type='number'
                  name=''
                  id=''
                />
              </TableCell>
              <TableCell align='center'>
                {data.organizingLectures3.score}
              </TableCell>
              <TableCell align='center'>
                <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadorganizingLecture3}>Upload</button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setDate({
                      ...data,
                      organizingLectures4: {
                        ...data.organizingLectures4,
                        type: e.target.value,
                      },
                    })
                  }>
                  <option> Select </option>
                  <option value='1'>Seminar</option>
                  <option value='2'>Awareness </option>
                  <option value='3'>Demonstration</option>
                  <option value='4'>Guest Lecture </option>
                </select>
              </TableCell>
              <TableCell align='center'>
                <Input
                  value={data.organizingLectures4.noOfLec}
                  onChange={(e) =>
                    setDate({
                      ...data,
                      organizingLectures4: {
                        ...data.organizingLectures4,
                        noOfLec: e.target.value,
                        score: 5 * e.target.value,
                      },
                    })
                  }
                  type='number'
                  name=''
                  id=''
                />
              </TableCell>
              <TableCell align='center'>
                {data.organizingLectures4.score}
              </TableCell>
              <TableCell align='center'>
                <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadorganizingLecture4}>Upload</button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setDate({
                      ...data,
                      organizingLectures5: {
                        ...data.organizingLectures5,
                        type: e.target.value,
                      },
                    })
                  }>
                  <option> Select </option>
                  <option value='1'>Seminar</option>
                  <option value='2'>Awareness </option>
                  <option value='3'>Demonstration</option>
                  <option value='4'>Guest Lecture </option>
                </select>
              </TableCell>
              <TableCell align='center'>
                <Input
                  value={data.organizingLectures5.noOfLec}
                  onChange={(e) =>
                    setDate({
                      ...data,
                      organizingLectures5: {
                        ...data.organizingLectures5,
                        noOfLec: e.target.value,
                        score: 5 * e.target.value,
                      },
                    })
                  }
                  type='number'
                  name=''
                  id=''
                />
              </TableCell>
              <TableCell align='center'>
                {data.organizingLectures5.score}
              </TableCell>
              <TableCell align='center'>
                <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadorganizingLecture5}>Upload</button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setDate({
                      ...data,
                      organizingLectures6: {
                        ...data.organizingLectures6,
                        type: e.target.value,
                      },
                    })
                  }>
                  <option> Select </option>
                  <option value='1'>Seminar</option>
                  <option value='2'>Awareness </option>
                  <option value='3'>Demonstration</option>
                  <option value='4'>Guest Lecture </option>
                </select>
              </TableCell>
              <TableCell align='center'>
                <Input
                  value={data.organizingLectures6.noOfLec}
                  onChange={(e) =>
                    setDate({
                      ...data,
                      organizingLectures6: {
                        ...data.organizingLectures6,
                        noOfLec: e.target.value,
                        score: 5 * e.target.value,
                      },
                    })
                  }
                  type='number'
                  name=''
                  id=''
                />
              </TableCell>
              <TableCell align='center'>
                {data.organizingLectures6.score}
              </TableCell>
              <TableCell align='center'>
                <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadorganizingLecture6}>Upload</button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setDate({
                      ...data,
                      organizingLectures7: {
                        ...data.organizingLectures7,
                        type: e.target.value,
                      },
                    })
                  }>
                  <option> Select </option>
                  <option value='1'>Seminar</option>
                  <option value='2'>Awareness </option>
                  <option value='3'>Demonstration</option>
                  <option value='4'>Guest Lecture </option>
                </select>
              </TableCell>
              <TableCell align='center'>
                <Input
                  value={data.organizingLectures7.noOfLec}
                  onChange={(e) =>
                    setDate({
                      ...data,
                      organizingLectures7: {
                        ...data.organizingLectures7,
                        noOfLec: e.target.value,
                        score: 5 * e.target.value,
                      },
                    })
                  }
                  type='number'
                  name=''
                  id=''
                />
              </TableCell>
              <TableCell align='center'>
                {data.organizingLectures7.score}
              </TableCell>
              <TableCell align='center'>
                <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadorganizingLecture7}>Upload</button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setDate({
                      ...data,
                      organizingLectures8: {
                        ...data.organizingLectures8,
                        type: e.target.value,
                      },
                    })
                  }>
                  <option> Select </option>
                  <option value='1'>Seminar</option>
                  <option value='2'>Awareness </option>
                  <option value='3'>Demonstration</option>
                  <option value='4'>Guest Lecture </option>
                </select>
              </TableCell>
              <TableCell align='center'>
                <Input
                  value={data.organizingLectures8.noOfLec}
                  onChange={(e) =>
                    setDate({
                      ...data,
                      organizingLectures8: {
                        ...data.organizingLectures8,
                        noOfLec: e.target.value,
                        score: 5 * e.target.value,
                      },
                    })
                  }
                  type='number'
                  name=''
                  id=''
                />
              </TableCell>
              <TableCell align='center'>
                {data.organizingLectures8.score}
              </TableCell>
              <TableCell align='center'>
                <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadorganizingLecture8}>Upload</button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setDate({
                      ...data,
                      organizingLectures9: {
                        ...data.organizingLectures9,
                        type: e.target.value,
                      },
                    })
                  }>
                  <option> Select </option>
                  <option value='1'>Seminar</option>
                  <option value='2'>Awareness </option>
                  <option value='3'>Demonstration</option>
                  <option value='4'>Guest Lecture </option>
                </select>
              </TableCell>
              <TableCell align='center'>
                <Input
                  value={data.organizingLectures9.noOfLec}
                  onChange={(e) =>
                    setDate({
                      ...data,
                      organizingLectures9: {
                        ...data.organizingLectures9,
                        noOfLec: e.target.value,
                        score: 5 * e.target.value,
                      },
                    })
                  }
                  type='number'
                  name=''
                  id=''
                />
              </TableCell>
              <TableCell align='center'>
                {data.organizingLectures9.score}
              </TableCell>
              <TableCell align='center'>
                <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadorganizingLecture9}>Upload</button>
              </TableCell>
            </TableRow>
          </TableContainer>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 1000 }} aria-label='simple table'>
              <TableCell component='th'></TableCell>
              <TableRow align='center'>
                <TableHead colspan='4'>
                  <TableCell align='center'>
                  Invited talks/guest lectures/session chairs/Resource Persons (in distinguished forums or conferences) during the selected Academic Year
                  </TableCell>
                </TableHead>
              </TableRow>
            </Table>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align='center'>Type of Invitation </TableCell>
              <TableCell align='center'>Activity Name </TableCell>
              <TableCell align='center'>Points Scored</TableCell>
              <TableCell align='center'>Upload Proof</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setDate({
                      ...data,
                      invitedTalk: {
                        ...data.invitedTalk,
                        type: e.target.value,
                        score: 10 * e.target.value,
                      },
                    })
                  }>
                  <option> Select </option>
                  <option value='1.5'>International</option>
                  <option value='1'>National </option>
                </select>
              </TableCell>
              <TableCell align='center'>
                <Input
                  value={data.invitedTalk.activityName}
                  onChange={(e) =>
                    setDate({
                      ...data,
                      invitedTalk: {
                        ...data.invitedTalk,
                        activityName: e.target.value,
                      },
                    })
                  }
                  type='number'
                  name=''
                  id=''
                />
              </TableCell>
              <TableCell align='center'>{data.invitedTalk.score}</TableCell>
              <TableCell align='right'>
                <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadinvitedtalk}>Upload</button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setDate({
                      ...data,
                      invitedTalk1: {
                        ...data.invitedTalk1,
                        type: e.target.value,
                        score: 10 * e.target.value,
                      },
                    })
                  }>
                  <option> Select </option>
                  <option value='1.5'>International</option>
                  <option value='1'>National </option>
                </select>
              </TableCell>
              <TableCell align='center'>
                <Input
                  value={data.invitedTalk1.activityName}
                  onChange={(e) =>
                    setDate({
                      ...data,
                      invitedTalk1: {
                        ...data.invitedTalk1,
                        activityName: e.target.value,
                      },
                    })
                  }
                  type='number'
                  name=''
                  id=''
                />
              </TableCell>
              <TableCell align='center'>{data.invitedTalk1.score}</TableCell>
              <TableCell align='right'>
                <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadinvitedtalk1}>Upload</button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setDate({
                      ...data,
                      invitedTalk2: {
                        ...data.invitedTalk2,
                        type: e.target.value,
                        score: 10 * e.target.value,
                      },
                    })
                  }>
                  <option> Select </option>
                  <option value='1.5'>International</option>
                  <option value='1'>National </option>
                </select>
              </TableCell>
              <TableCell align='center'>
                <Input
                  value={data.invitedTalk2.activityName}
                  onChange={(e) =>
                    setDate({
                      ...data,
                      invitedTalk2: {
                        ...data.invitedTalk2,
                        activityName: e.target.value,
                      },
                    })
                  }
                  type='number'
                  name=''
                  id=''
                />
              </TableCell>
              <TableCell align='center'>{data.invitedTalk2.score}</TableCell>
              <TableCell align='right'>
                <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadinvitedtalk2}>Upload</button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setDate({
                      ...data,
                      invitedTalk3: {
                        ...data.invitedTalk3,
                        type: e.target.value,
                        score: 10 * e.target.value,
                      },
                    })
                  }>
                  <option> Select </option>
                  <option value='1.5'>International</option>
                  <option value='1'>National </option>
                </select>
              </TableCell>
              <TableCell align='center'>
                <Input
                  value={data.invitedTalk3.activityName}
                  onChange={(e) =>
                    setDate({
                      ...data,
                      invitedTalk3: {
                        ...data.invitedTalk3,
                        activityName: e.target.value,
                      },
                    })
                  }
                  type='number'
                  name=''
                  id=''
                />
              </TableCell>
              <TableCell align='center'>{data.invitedTalk3.score}</TableCell>
              <TableCell align='right'>
                <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadinvitedtalk3}>Upload</button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setDate({
                      ...data,
                      invitedTalk4: {
                        ...data.invitedTalk4,
                        type: e.target.value,
                        score: 10 * e.target.value,
                      },
                    })
                  }>
                  <option> Select </option>
                  <option value='1.5'>International</option>
                  <option value='1'>National </option>
                </select>
              </TableCell>
              <TableCell align='center'>
                <Input
                  value={data.invitedTalk4.activityName}
                  onChange={(e) =>
                    setDate({
                      ...data,
                      invitedTalk4: {
                        ...data.invitedTalk4,
                        activityName: e.target.value,
                      },
                    })
                  }
                  type='number'
                  name=''
                  id=''
                />
              </TableCell>
              <TableCell align='center'>{data.invitedTalk4.score}</TableCell>
              <TableCell align='right'>
                <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadinvitedtalk4}>Upload</button>
              </TableCell>
            </TableRow>

            <TableCell component='th'></TableCell>
          </TableContainer>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 1000 }} aria-label='simple table'>
              <TableCell component='th'></TableCell>
              <TableRow align='center'>
                <TableHead colspan='4'>
                  <TableCell align='center'>
                  Additional responsibilities (Head of the Department/School, Year coordinators, counselors, time table in-charge, exam cell cordinator, practical exam coordinator, Club Coordinators, NAAC co-ordinator, NBA Co-ordinator, NAAC/NBA Criterion In-charge etc.) during the selected Academic Year
                  </TableCell>
                </TableHead>
              </TableRow>
            </Table>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align='center'>Type of Responsibility</TableCell>
              <TableCell align='center'>
                Resposible for (Name of Department/School/Centre/Club/Activity)
              </TableCell>
              <TableCell align='center'>Points Scored</TableCell>
              <TableCell align=''>Upload Proof</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setDate({
                      ...data,
                      additionalResp: {
                        ...data.additionalResp,
                        type: e.target.value,
                        score: 20 * e.target.value,
                      },
                    })
                  }>
                  <option value='novalue'> Select </option>
                  <option value='1'>Head of the Department/School</option>
                  <option value='1'>Year coordinators </option>
                  <option value='1'>Counselors</option>
                  <option value='1'>In-charge </option>
                  <option value='1'>Exam Cell In-charge</option>
                  <option value='1'>Practical Exam Coordinator</option>
                  <option value='1'>Club Corodinators</option>
                  <option value='0'>None</option>
                </select>
              </TableCell>
              <TableCell align='center'>
                <Input
                  value={data.additionalResp.responsibleForDept}
                  onChange={(e) =>
                    setDate({
                      ...data,
                      additionalResp: {
                        ...data.additionalResp,
                        responsibleForDept: e.target.value,
                      },
                    })
                  }
                  type='number'
                  name=''
                  id=''
                />
              </TableCell>
              <TableCell align='center'>{data.additionalResp.score}</TableCell>
              <TableCell align='right'>
                <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadadditionalResp}>Upload</button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={4}>Total Score C</TableCell>
              <TableCell align='center'>
                <Input
                  value={
                    data.socialOutReach.score +
                    data.socialOutReach1.score +
                    data.socialOutReach2.score +
                    data.digitalIndiaContribution.score +
                    data.digitalIndiaContribution1.score +
                    data.digitalIndiaContribution2.score +
                    data.digitalIndiaContribution3.score +
                    data.digitalIndiaContribution4.score +
                    data.otherContribution.score +
                    data.organizingMooc.score +
                    data.organizingMooc2.score +
                    data.organizingMooc4.score +
                    data.organizingMooc1.score +
                    data.organizingMooc3.score +
                    data.organizingFDP.score +
                    data.organizingFDP1.score +
                    data.organizingFDP2.score +
                    data.organizingFDP3.score +
                    data.organizingFDP4.score +
                    data.organizingWorkshop.score +
                    data.organizingWorkshop1.score +
                    data.organizingWorkshop2.score +
                    data.organizingWorkshop3.score +
                    data.organizingWorkshop4.score +
                    data.participationInMOOC.score +
                    data.participationInMOOC1.score +
                    data.participationInMOOC2.score +
                    data.participationInMOOC3.score +
                    data.participationInMOOC4.score +
                    data.participationInFDP.score +
                    data.participationInFDP1.score +
                    data.participationInFDP2.score +
                    data.participationInFDP3.score +
                    data.participationInFDP4.score +
                    data.participationInWorkshop.score +
                    data.participationInWorkshop1.score +
                    data.participationInWorkshop2.score +
                    data.participationInWorkshop3.score +
                    data.participationInWorkshop4.score +
                    data.fundGeneration.score +
                    data.fundGeneration1.score +
                    data.fundGeneration2.score +
                    data.fundGeneration3.score +
                    data.fundGeneration4.score +
                    data.fundGeneration5.score +
                    data.industryLinkage.score +
                    data.industryLinkage1.score +
                    data.industryLinkage2.score +
                    data.industryLinkage3.score +
                    data.industryLinkage4.score +
                    data.organizingLectures.score +
                    data.organizingLectures1.score +
                    data.organizingLectures2.score +
                    data.organizingLectures3.score +
                    data.organizingLectures4.score +
                    data.organizingLectures5.score +
                    data.organizingLectures6.score +
                    data.organizingLectures7.score +
                    data.organizingLectures8.score +
                    data.organizingLectures9.score +
                    data.invitedTalk.score +
                    data.invitedTalk1.score +
                    data.invitedTalk2.score +
                    data.invitedTalk3.score +
                    data.invitedTalk4.score +
                    +data.additionalResp.score
                  }
                />
              </TableCell>
            </TableRow>
            <TableCell component='th'></TableCell>
          </TableContainer>
          {props.edit !== undefined ? (
            <p>Please check all fields</p>
          ) : (
            <button onClick={onSubmit}>Submit and Next</button>
          )}
        </>
      )}
    </>
  );
};
export default ScoreC;
