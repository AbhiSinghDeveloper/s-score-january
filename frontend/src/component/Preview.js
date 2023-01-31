import React from "react";
import { useContext, useEffect, useState } from "react";
// import { Typography } from "@material-ui/core";
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
import ScoreA from "./ScoreA";
import ScoreB from "./ScoreB";
import ScoreC from "./ScoreC";
import { GlobalState } from "../GlobalState";

let userId = localStorage.getItem("userId");
const token = localStorage.getItem("token");

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
  acadYear: localStorage.getItem("acadYear"),
  singleAuthor: {
    nameOfJounal: "",
    impactFactor: 0,
    doiLink: "",
    score: 0,
  },
  singleAuthor1: {
    nameOfJounal: "",
    impactFactor: 0,
    doiLink: "",
    score: 0,
  },
  singleAuthor2: {
    nameOfJounal: "",
    impactFactor: 0,
    doiLink: "",
    score: 0,
  },
  singleAuthor3: {
    nameOfJounal: "",
    impactFactor: 0,
    doiLink: "",
    score: 0,
  },
  singleAuthor4: {
    nameOfJounal: "",
    impactFactor: 0,
    doiLink: "",
    score: 0,
  },
  firstAndCorrAuthSame: {
    nameOfJounal: "",
    impactFactor: 0,
    doiLink: "",
    score: 0,
  },
  firstAndCorrAuthSame1: {
    nameOfJounal: "",
    impactFactor: 0,
    doiLink: "",
    score: 0,
  },
  firstAndCorrAuthSame2: {
    nameOfJounal: "",
    impactFactor: 0,
    doiLink: "",
    score: 0,
  },
  firstAndCorrAuthSame3: {
    nameOfJounal: "",
    impactFactor: 0,
    doiLink: "",
    score: 0,
  },
  firstAndCorrAuthSame4: {
    nameOfJounal: "",
    impactFactor: 0,
    doiLink: "",
    score: 0,
  },
  firstAndCorrAuthSame5: {
    nameOfJounal: "",
    impactFactor: 0,
    doiLink: "",
    score: 0,
  },
  firstAndCorrAuthSame6: {
    nameOfJounal: "",
    impactFactor: 0,
    doiLink: "",
    score: 0,
  },

  firstFromSatyabamaSecondDiff: {
    firstCorAuthor: "",
    nameOfJounal: "",
    impactFactor: 0,
    doiLink: "",
    score: 0,
  },
  firstFromSatyabamaSecondDiff1: {
    firstCorAuthor: "",
    nameOfJounal: "",
    impactFactor: 0,
    doiLink: "",
    score: 0,
  },
  firstFromSatyabamaSecondDiff2: {
    firstCorAuthor: "",
    nameOfJounal: "",
    impactFactor: 0,
    doiLink: "",
    score: 0,
  },
  firstFromSatyabamaSecondDiff3: {
    firstCorAuthor: "",
    nameOfJounal: "",
    impactFactor: 0,
    doiLink: "",
    score: 0,
  },
  firstFromOtherSecondSatyabama: {
    nameOfJounal: "",
    impactFactor: 0,
    doiLink: "",
    score: 0,
  },
  firstFromOtherSecondSatyabama1: {
    nameOfJounal: "",
    impactFactor: 0,
    doiLink: "",
    score: 0,
  },
  firstFromOtherSecondSatyabama2: {
    nameOfJounal: "",
    impactFactor: 0,
    doiLink: "",
    score: 0,
  },
  firstFromOtherSecondSatyabama3: {
    nameOfJounal: "",
    impactFactor: 0,
    doiLink: "",
    score: 0,
  },
  firstFromOtherSecondSatyabama4: {
    nameOfJounal: "",
    impactFactor: 0,
    doiLink: "",
    score: 0,
  },

  firstFromOtherInstituteSatyabama: {
    nameOfJounal: "",
    impactFactor: 0,
    doiLink: "",
    score: 0,
  },
  firstFromOtherInstituteSatyabama1: {
    nameOfJounal: "",
    impactFactor: 0,
    doiLink: "",
    score: 0,
  },
  firstFromOtherInstituteSatyabama2: {
    nameOfJounal: "",
    impactFactor: 0,
    doiLink: "",
    score: 0,
  },
  firstFromOtherInstituteSatyabama3: {
    nameOfJounal: "",
    impactFactor: 0,
    doiLink: "",
    score: 0,
  },
  firstFromOtherInstituteSatyabama4: {
    nameOfJounal: "",
    impactFactor: 0,
    doiLink: "",
    score: 0,
  },

  coAuthors: {
    AllcoAuthor: 1,
    nameOfJounal: "",
    impactFactor: 0,
    doiLink: "",
    score: 0,
  },

  coAuthors1: {
    AllcoAuthor: 1,
    nameOfJounal: "",
    impactFactor: 0,
    doiLink: "",
    score: 0,
  },
  coAuthors2: {
    AllcoAuthor: 1,
    nameOfJounal: "",
    impactFactor: 0,
    doiLink: "",
    score: 0,
  },
  coAuthors3: {
    AllcoAuthor: 1,
    nameOfJounal: "",
    impactFactor: 0,
    doiLink: "",
    score: 0,
  },

  ugcCareJournal: {
    nameOfJounal: "",
    impactFactor: 0,
    doiLink: "",
    score: 0,
  },
  ugcCareJournal1: {
    nameOfJounal: "",
    impactFactor: 0,
    doiLink: "",
    score: 0,
  },
  ugcCareJournal2: {
    nameOfJounal: "",
    impactFactor: 0,
    doiLink: "",
    score: 0,
  },
  ugcCareJournal3: {
    nameOfJounal: "",
    impactFactor: 0,
    doiLink: "",
    score: 0,
  },
  ugcCareJournal4: {
    nameOfJounal: "",
    impactFactor: 0,
    doiLink: "",
    score: 0,
  },
  articleScore: {
    noOfPaperPublished: 0,
    totalCitation: 0,
    averageCitation: 0,
    hIndex: 0,
    score: 0,
  },

  researchActivities: {
    nameOFPublisher: "",
    noOfBook: 0,
    score: 0,
    uploadProof: "",
  },
  researchActivities1: {
    nameOFPublisher: "",
    noOfBook: 0,
    score: 0,
    uploadProof: "",
  },
  researchActivities2: {
    nameOFPublisher: "",
    noOfBook: 0,
    score: 0,
    uploadProof: "",
  },
  researchActivities3: {
    nameOFPublisher: "",
    noOfBook: 0,
    score: 0,
    uploadProof: "",
  },

  bookChapterPublished: {
    nameOFChapter: "",
    noOfBook: 0,
    score: 0,
    uploadProof: "",
  },
  bookChapterPublished1: {
    nameOFChapter: "",
    noOfBook: 0,
    score: 0,
    uploadProof: "",
  },
  bookChapterPublished2: {
    nameOFChapter: "",
    noOfBook: 0,
    score: 0,
    uploadProof: "",
  },
  bookChapterPublished3: {
    nameOFChapter: "",
    noOfBook: 0,
    score: 0,
    uploadProof: "",
  },
  articlePublished: {
    nameOFMag: "",
    noOfArticle: 0,
    score: 0,
    uploadProof: "",
  },
  articlePublished1: {
    nameOFMag: "",
    noOfArticle: 0,
    score: 0,
    uploadProof: "",
  },
  articlePublished2: {
    nameOFMag: "",
    noOfArticle: 0,
    score: 0,
    uploadProof: "",
  },
  articlePublished3: {
    nameOFMag: "",
    noOfArticle: 0,
    score: 0,
    uploadProof: "",
  },
  reviews: {
    nameOFJournal: "",
    noOfReview: 0,
    score: 0,
    uploadProof: "",
  },
  reviews1: {
    nameOFJournal: "",
    noOfReview: 0,
    score: 0,
    uploadProof: "",
  },
  reviews2: {
    nameOFJournal: "",
    noOfReview: 0,
    score: 0,
    uploadProof: "",
  },
  reviews3: {
    nameOFJournal: "",
    noOfReview: 0,
    score: 0,
    uploadProof: "",
  },
  productPatent: {
    isAwarded: "",
    nameOFPatent: "",
    score: 0,
    uploadProof: "",
  },
  productPatent1: {
    isAwarded: "",
    nameOFPatent: "",
    score: 0,
    uploadProof: "",
  },
  productPatent2: {
    isAwarded: "",
    nameOFPatent: "",
    score: 0,
    uploadProof: "",
  },
  productPatent3: {
    isAwarded: "",
    nameOFPatent: "",
    score: 0,
    uploadProof: "",
  },
  copyright: {
    nameOFCopyright: "",
    role: "",
    score: 0,
    uploadProof: "",
  },
  copyright1: {
    nameOFCopyright: "",
    role: "",
    score: 0,
    uploadProof: "",
  },
  copyright2: {
    nameOFCopyright: "",
    role: "",
    score: 0,
    uploadProof: "",
  },
  copyright3: {
    nameOFCopyright: "",
    role: "",
    score: 0,
    uploadProof: "",
  },
  commercialProdDev: {
    nameOfProd: "",
    noOfProd: "",
    score: 0,
    uploadProof: "",
  },
  startUp: {
    nameOfStartUp: "",
    isStartUp: "",
    score: 0,
    uploadProof: "",
  },
  researchGuideFullTime: {
    noOfPHD: "",
    pointsAlloted: 0,
    score: 0,
    uploadProof: "",
  },
  researchGuidePartTime: {
    noOfPHD: "",
    pointsAlloted: 0,
    score: 0,
    uploadProof: "",
  },
  researchGuideFullTimeCompleted: {
    noOfPHD: 0,
    pointsAlloted: 0,
    score: 0,
    uploadProof: "",
  },
  researchGuidePartTimeCompleted: {
    noOfPHD: 0,
    pointsAlloted: 0,
    score: 0,
    uploadProof: "",
  },
  projectAsPI: {
    nameOfProjectAndFundAgency: "",
    amountReceived: 0,
    score: 0,
    uploadProof: "",
  },
  projectAsPI1: {
    nameOfProjectAndFundAgency: "",
    amountReceived: 0,
    score: 0,
    uploadProof: "",
  },
  projectAsPI2: {
    nameOfProjectAndFundAgency: "",
    amountReceived: 0,
    score: 0,
    uploadProof: "",
  },
  projectAsPI3: {
    nameOfProjectAndFundAgency: "",
    amountReceived: 0,
    score: 0,
    uploadProof: "",
  },
  projectAsCoPI: {
    nameOfProjectAndFundAgency: "",
    amountReceived: 0,
    noOfInvestigator: 0,
    score: 0,
    uploadProof: "",
  },
  projectAsCoPI1: {
    nameOfProjectAndFundAgency: "",
    amountReceived: 0,
    noOfInvestigator: 0,
    score: 0,
    uploadProof: "",
  },
  projectAsCoPI2: {
    nameOfProjectAndFundAgency: "",
    amountReceived: 0,
    noOfInvestigator: 0,
    score: 0,
    uploadProof: "",
  },
  projectAsCoPI3: {
    nameOfProjectAndFundAgency: "",
    amountReceived: 0,
    noOfInvestigator: 0,
    score: 0,
    uploadProof: "",
  },
  projectAsMentor: {
    nameOfProjectAndFundAgency: "",
    amountReceived: 0,
    score: 0,
    uploadProof: "",
  },

  projectAsMentor1: {
    nameOfProjectAndFundAgency: "",
    amountReceived: 0,
    score: 0,
    uploadProof: "",
  },
  projectAsMentor2: {
    nameOfProjectAndFundAgency: "",
    amountReceived: 0,
    score: 0,
    uploadProof: "",
  },
  projectAsMentor3: {
    nameOfProjectAndFundAgency: "",
    amountReceived: 0,
    score: 0,
    uploadProof: "",
  },
  projectAsMentor4: {
    nameOfProjectAndFundAgency: "",
    amountReceived: 0,
    score: 0,
    uploadProof: "",
  },
  projectAsMentor5: {
    nameOfProjectAndFundAgency: "",
    amountReceived: 0,
    score: 0,
    uploadProof: "",
  },
  consultantWork: {
    nameOfWork: "",
    amountGenerated: 0,
    score: 0,
    uploadProof: "",
  },

  consultantWork1: {
    nameOfWork: "",
    amountGenerated: 0,
    score: 0,
    uploadProof: "",
  },
  consultantWork2: {
    nameOfWork: "",
    amountGenerated: 0,
    score: 0,
    uploadProof: "",
  },
  consultantWork3: {
    nameOfWork: "",
    amountGenerated: 0,
    score: 0,
    uploadProof: "",
  },
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


export default function Preview(props) {
  const state = useContext(GlobalState);
  // const [formAData, setFormAData] = state.formA;
  // const [formBData, setFormBData] = state.formB;
  // const [formCData, setFormCData] = state.formC;
  const [aData, setAData] = useState({});
  const [bData, setBData] = useState({});
  const [cData, setCData] = useState({});
  const [loading, setLoading] = useState(false);
  const [ematscore, setEmatScore] = useState(
    props.edit !== undefined
      ? JSON.parse(localStorage.getItem("forma"))
      : initialState,
  );
  const [data, setData] = useState(
    props.edit !== undefined
      ? JSON.parse(localStorage.getItem("formb"))
      : initialState,
  );
  

  useEffect(() => {
    setLoading(true);

    axios
      .get("http://localhost:5000/a/get-form-a-data/" + userId, {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      })
      .then((res) => {
        setAData(res.data.ematscore);
        localStorage.setItem("forma", JSON.stringify(res.data.ematscore));
        //setFormAData(res.data);
        // console.log(res.data.ematscore.ematerialUdemy.noOfActivity);
        console.log(res.data.ematscore.youtubeLec3.noOfActivity);
      })
      .catch((err) => {
        setLoading(true);
        alert(err);
      });
  }, []);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/b/get-form-b-data/" + userId, {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      })
      .then((res) => {
        setBData(res.data.ematscore);
        localStorage.setItem("formb", JSON.stringify(res.data.ematscore));

        //setFormAData(res.data);
        // console.log(res.data.ematscore.ematerialUdemy.noOfActivity);
      })
      .catch((err) => {
        setLoading(true);
        alert(err);
      });
  }, []);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/c/get-form-c-data/" + userId, {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      })
      .then((res) => {
        setCData(res.data);
        console.log(res.data);
        //localStorage.setItem("formc", JSON.stringify(res.data.ematscore));
        setLoading(false);
        //setFormAData(res.data);
        // console.log(res.data.ematscore.ematerialUdemy.noOfActivity);
      })
      .catch((err) => {
        setLoading(true);
        console.log(err);
      });
  }, []);
  //console.log(cData);

  return (
    <>
      <div>
      <h2 align="center">Score A</h2>
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
                    E-Materials (National/International Platforms like SWAYAM,
                    Unacademy, Udemy, Coursera, etc)
                  </TableCell>
                  <TableCell align='center'>50.0</TableCell>
                  <TableCell align='center'>
                  </TableCell>
                  <TableCell align='center'>
                    {ematscore.eMaterialUdemy.pointScored}
                  </TableCell>
                  <TableCell align='center'>
                   
                    
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component='th'>2</TableCell>
                  <TableCell align='center'>
                    E-Materials (Sathyabama LMS)
                  </TableCell>
                  <TableCell align='center'>10.0</TableCell>
                  <TableCell align='center'>
                  </TableCell>
                  <TableCell align='center'>
                    {ematscore.eMaterialSatyabama.pointScored}
                  </TableCell>
                  <TableCell align='center'>
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component='th'>3</TableCell>
                  <TableCell align='center'>
                    Initiating courses in new and emerging areas/Labs
                  </TableCell>
                  <TableCell align='center'>50.0</TableCell>
                  <TableCell align='center'>
                  </TableCell>
                  <TableCell align='center'>
                    {ematscore.courseInEmergingArea.pointScored}
                  </TableCell>
                  <TableCell align='center'>
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component='th'>4</TableCell>
                  <TableCell align='center'>
                    Innovative Teaching (ICT-enabled classroom, Flipped
                    Classroom, Case-Studies, Solving Complex Engineering
                    Problems, Activity based learning, Gamification, Quizzes,
                    etc.)
                  </TableCell>
                  <TableCell align='center'>5.0</TableCell>
                  <TableCell align='center'>
                   
                  
                  </TableCell>
                  <TableCell align='center'>
                    {ematscore.youtubeLec3.pointScored}
                  </TableCell>
                  <TableCell align='center'>
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
                    
                  </TableCell>
                  <TableCell align='center'>
                    {ematscore.youtubeLec1.pointScored}
                  </TableCell>
                  <TableCell align='center'>
                    
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component='th'>6</TableCell>
                  <TableCell align='center'>
                    YouTube Lectures with more than 100 Views
                  </TableCell>
                  <TableCell align='center'>10.0</TableCell>
                  <TableCell align='center'>
                    
                  </TableCell>
                  <TableCell align='center'>
                    {ematscore.youtubeLec2.pointScored}
                  </TableCell>
                  <TableCell align='center'>
                  
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component='th'>7</TableCell>
                  <TableCell align='center'>
                    Open and distance learning (ODL) course initiation/materials
                    (50 points/Course)
                  </TableCell>
                  <TableCell align='center'>50.0</TableCell>
                  <TableCell align='center'>
                    
                  </TableCell>
                  <TableCell align='center'>
                    {ematscore.extraTeachingActivity.noOfActivity * 50.0}
                  </TableCell>
                  <TableCell align='center'>
                  
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
                    
                  </TableCell>
                  <TableCell align='center'>
                    {ematscore.awards.pointScored}
                  </TableCell>
                  <TableCell align='center'>
                   
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component='th'>9</TableCell>
                  <TableCell align='center'>
                    Member in other academic boards such as Board of Studies,
                    Academic Council in state/national institutes or
                    universities or Govt. of India committees/panel
                  </TableCell>
                  <TableCell align='center'>20.0</TableCell>
                  <TableCell align='center'>
                    {/* <select
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
                    </select> */}
                  </TableCell>
                  <TableCell align='center'>
                    {20.0 * ematscore.memberInOtherAcadBoard.noOfActivity}
                  </TableCell>
                  <TableCell align='center'>
                  
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component='th'>10</TableCell>
                  <TableCell align='center'>
                    Value Added Programmes (30 hours course, Points be claimed
                    by course co-ordinator)
                  </TableCell>
                  <TableCell align='center'>50.0</TableCell>
                  <TableCell align='center'>
                  
                  </TableCell>
                  <TableCell align='center'>
                    {ematscore.valueAddedProg.pointScored}
                  </TableCell>
                  
                  
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component='th'>11</TableCell>
                  <TableCell align='center'>
                    Overall contribution to the department (to be evaluated by
                    the respective department HODs) (Max. 10 points/person)
                  </TableCell>
                  <TableCell align='center'>20.0</TableCell>
                  <TableCell align='center'>
                   
                  </TableCell>
                  <TableCell align='center'>
                    {ematscore.overAllContribution.pointScored}
                  </TableCell>
                  <TableCell align='center'>

                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component='th'>12</TableCell>
                  <TableCell align='center'>
                    Evaluation of examination papers on time without any
                    discrepancies (Maximum 10 points yearly, ie., two semesters
                  </TableCell>
                  <TableCell align='center'>20.0</TableCell>
                  <TableCell align='center'>
                  
                  </TableCell>
                  <TableCell align='center'>
                    {ematscore.evaluationOfExamPaper.pointScored}
                  </TableCell>
                  <TableCell align='center'>
                   
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component='th'>13</TableCell>
                  <TableCell align='center'>
                    Mentor for students in national level events, like Smart
                    India Hackathon, AICTE Lilavati Awards, Vishwakarma Award,
                    etc. (Points can be claimed only if studnets have won the
                    event)
                  </TableCell>
                  <TableCell align='center'>10.0</TableCell>
                  <TableCell align='center'>
                    
                  </TableCell>
                  <TableCell align='center'>
                    {ematscore.mentorInHackathon.pointScored}
                  </TableCell>
                  <TableCell align='center'>
                   
                  </TableCell>
                  <TableRow>
                    <TableCell colSpan={4}>Total Score A</TableCell>
                    <TableCell align='center'>
                    </TableCell>
                  </TableRow>{" "}
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <h2 align="center">Score B</h2>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
              <TableCell component='th'>13</TableCell>
              <TableCell colSpan={6}>
                {" "}
                Article Score (Journal Publications)
              </TableCell>

              <TableRow>
                <TableCell align='center' colSpan={6}>
                  {" "}
                  Research Papers Published in Journals with Impact Factor
                  during June 2020 to May 2024 (Article ScoreAuthorship
                  Position)
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell></TableCell>
                <TableCell align='center'>Name of Journal</TableCell>
                <TableCell align='center'>Imapct Factor</TableCell>
                <TableCell align='center'>DOI Link</TableCell>
                <TableCell align='center'>Points</TableCell>
              </TableRow>

              <TableRow>
                <TableCell rowSpan={6}>
                  Single Author(Only Sathyabama Affiliation)
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align='center'>
               
                </TableCell>

                <TableCell align='center'>
                  
                </TableCell>
                <TableCell align='center'>
                  
                 
                </TableCell>
                <TableCell align='center'>{data.singleAuthor.score}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell align='center'>
               
                </TableCell>

                <TableCell align='center'>
                 
                </TableCell>
                <TableCell align='center'>
                 
                </TableCell>
                <TableCell align='center'>{data.singleAuthor1.score}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell align='center'>
                 
                </TableCell>

                <TableCell align='center'>
                 
                </TableCell>
                <TableCell align='center'>
                 
                </TableCell>
                <TableCell align='center'>{data.singleAuthor2.score}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell align='center'>
                 
                </TableCell>

                <TableCell align='center'>
                  
                </TableCell>
                <TableCell align='center'>
                
                </TableCell>
                <TableCell align='center'>{data.singleAuthor3.score}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell align='center'>
               
                </TableCell>

                <TableCell align='center'>
                  
                </TableCell>
                <TableCell align='center'>
              
                </TableCell>
                <TableCell align='center'>{data.singleAuthor4.score}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell></TableCell>
                <TableCell align='center'>Name of Journal</TableCell>
                <TableCell align='center'>Imapct Factor</TableCell>
                <TableCell align='center'>DOI Link</TableCell>
                <TableCell align='center'>Points</TableCell>
              </TableRow>
              <TableRow>
                <TableCell rowSpan={6}>
                  Both First & Corresponding Author are the same person(Only
                  Sathyabama Affiliation)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                 
                </TableCell>

                <TableCell align='center'>
                
                </TableCell>
                <TableCell align='center'>
                  
                </TableCell>
                <TableCell align='center'>
                  {data.firstAndCorrAuthSame.score}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align='center'>
                  
                </TableCell>

                <TableCell align='center'>
                 
                </TableCell>
                <TableCell align='center'>
                 
                </TableCell>
                <TableCell align='center'>
                  {data.firstAndCorrAuthSame1.score}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align='center'>
               
                </TableCell>

                <TableCell align='center'>
                 
                </TableCell>
                <TableCell align='center'>
       
                </TableCell>
                <TableCell align='center'>
                  {data.firstAndCorrAuthSame2.score}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align='center'>
               
                </TableCell>

                <TableCell align='center'>
              
                </TableCell>
                <TableCell align='center'>
                  
                
                </TableCell>
                <TableCell align='center'>
                  {data.firstAndCorrAuthSame3.score}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align='center'>
               
                </TableCell>

                <TableCell align='center'>
                 
                </TableCell>
                <TableCell align='center'>
                
                </TableCell>
                <TableCell align='center'>
                  {data.firstAndCorrAuthSame4.score}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  First & Corresponding Author are from Sathyabama
                </TableCell>

                <TableCell align='center'>Name of Journal</TableCell>
                <TableCell align='center'>Impact Factor</TableCell>
                <TableCell align='center'>DOI Link</TableCell>
                <TableCell align='center'>Points</TableCell>
              </TableRow>

              <TableRow>
                <TableCell align='center'></TableCell>
                <TableCell align='center'></TableCell>
                <TableCell align='center'></TableCell>
                <TableCell align='center'></TableCell>
              </TableRow>

              <TableRow>
                <TableCell align='center'>
                  {/* <select
                    onChange={(e) =>
                      setData({
                        ...data,
                        firstFromSatyabamaSecondDiff: {
                          ...data.firstFromSatyabamaSecondDiff,
                          firstCorAuthor: e.target.value,
                        },
                      })
                    }>
                    <option>select </option>
                    <option value='yes'>First Author</option>
                    <option value='no'>Corresponding Author</option>
                  </select> */}
                </TableCell>
                <TableCell align='center'>
               
                </TableCell>
                <TableCell align='center'>
               
                </TableCell>
                <TableCell align='center'>
                  
                </TableCell>
                <TableCell align='center'>
                  {data.firstFromSatyabamaSecondDiff.score}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align='center'>
                  {/* <select
                    onChange={(e) =>
                      setData({
                        ...data,
                        firstFromSatyabamaSecondDiff1: {
                          ...data.firstFromSatyabamaSecondDiff1,
                          firstCorAuthor: e.target.value,
                        },
                      })
                    }>
                    <option>select </option>
                    <option value='yes'>First Author</option>
                    <option value='no'>Corresponding Author</option>
                  </select> */}
                </TableCell>
                <TableCell align='center'>
                  {" "}
               
                </TableCell>
                <TableCell align='center'>
                  {" "}
                 
                </TableCell>
                <TableCell align='center'>
                 
                </TableCell>
                <TableCell align='center'>
                  {data.firstFromSatyabamaSecondDiff1.score}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align='center'>
                  {/* <select
                    onChange={(e) =>
                      setData({
                        ...data,
                        firstFromSatyabamaSecondDiff2: {
                          ...data.firstFromSatyabamaSecondDiff2,
                          firstCorAuthor: e.target.value,
                        },
                      })
                    }>
                    <option>select </option>
                    <option value='yes'>First Author</option>
                    <option value='no'>Corresponding Author</option>
                  </select> */}
                </TableCell>
                <TableCell align='center'>
                  {" "}
                 
                </TableCell>
                <TableCell align='center'>
                  {" "}
                  
                </TableCell>
                <TableCell align='center'>
                  
                </TableCell>
                <TableCell align='center'>
                  {data.firstFromSatyabamaSecondDiff2.score}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align='center'>
                  {/* <select
                    onChange={(e) =>
                      setData({
                        ...data,
                        firstFromSatyabamaSecondDiff3: {
                          ...data.firstFromSatyabamaSecondDiff3,
                          firstCorAuthor: e.target.value,
                        },
                      })
                    }>
                    <option>select </option>
                    <option value='yes'>First Author</option>
                    <option value='no'>Corresponding Author</option>
                  </select> */}
                </TableCell>
                <TableCell align='center'>
                  {" "}
                  
                </TableCell>
                <TableCell align='center'>
                  {" "}
                  
                </TableCell>
                <TableCell align='center'>
                 
                </TableCell>
                <TableCell align='center'>
                  {data.firstFromSatyabamaSecondDiff3.score}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell></TableCell>
                <TableCell align='center'>Name of Journal</TableCell>
                <TableCell align='center'>Imapct Factor</TableCell>
                <TableCell align='center'>DOI Link</TableCell>
                <TableCell align='center'>Points</TableCell>
              </TableRow>
              <TableRow>
                <TableCell rowSpan={6}>
                  First Author from Sathyabama & Corresponding Author from other
                  institute
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align='center'>
                  
                </TableCell>

                <TableCell align='center'>
                 
                </TableCell>
                <TableCell align='center'>
                  
                </TableCell>
                <TableCell align='center'>
                  {data.firstFromOtherSecondSatyabama.score}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align='center'>
                  
                </TableCell>

                <TableCell align='center'>
          
                </TableCell>
                <TableCell align='center'>
       
                </TableCell>
                <TableCell align='center'>
                  {data.firstFromOtherSecondSatyabama1.score}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align='center'>
             
                </TableCell>

                <TableCell align='center'>
                
                </TableCell>
                <TableCell align='center'>
                 
                </TableCell>
                <TableCell align='center'>
                  {data.firstFromOtherSecondSatyabama2.score}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                
                </TableCell>

                <TableCell align='center'>
                 
                </TableCell>
                <TableCell align='center'>
                
                </TableCell>
                <TableCell align='center'>
                  {data.firstFromOtherSecondSatyabama3.score}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align='center'>
                 
                </TableCell>

                <TableCell align='center'>
                 
                </TableCell>
                <TableCell align='center'>
                 
                </TableCell>
                <TableCell align='center'>
                  {data.firstFromOtherSecondSatyabama4.score}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell></TableCell>
                <TableCell align='center'>Name of Journal</TableCell>
                <TableCell align='center'>Imapct Factor</TableCell>
                <TableCell align='center'>DOI Link</TableCell>
                <TableCell align='center'>Points</TableCell>
              </TableRow>
              <TableRow>
                <TableCell rowSpan={6}>
                  First Author from other institute and Corresponding Author
                  from Sathyabama
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                 
                </TableCell>

                <TableCell align='center'>
                 
                </TableCell>
                <TableCell align='center'>
                  {/* {" "}
                  <Input
                    value={data.firstFromOtherInstituteSatyabama.doiLink}
                    onChange={(e) =>
                      setData({
                        ...data,
                        firstFromOtherInstituteSatyabama: {
                          ...data.firstFromOtherInstituteSatyabama,
                          doiLink: e.target.value,
                        },
                      })
                    }
                    type='text'
                    name=''
                    id=''
                  />{" "} */}
                </TableCell>
                <TableCell align='center'>
                  {data.firstFromOtherInstituteSatyabama.score}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align='center'>
                  {/* <Input
                    value={data.firstFromOtherInstituteSatyabama1.nameOfJounal}
                    onChange={(e) =>
                      setData({
                        ...data,
                        firstFromOtherInstituteSatyabama1: {
                          ...data.firstFromOtherInstituteSatyabama1,
                          nameOfJounal: e.target.value,
                        },
                      })
                    }
                    type='text'
                    name=''
                    id=''
                  /> */}
                </TableCell>

                <TableCell align='center'>
                  {" "}
                  {/* <Input
                    value={data.firstFromOtherInstituteSatyabama1.impactFactor}
                    onChange={(e) =>
                      setData({
                        ...data,
                        firstFromOtherInstituteSatyabama1: {
                          ...data.firstFromOtherInstituteSatyabama1,
                          impactFactor: e.target.value,
                          score: 12 * e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  />{" "} */}
                </TableCell>
                <TableCell align='center'>
                  {/* {" "}
                  <Input
                    value={data.firstFromOtherInstituteSatyabama1.doiLink}
                    onChange={(e) =>
                      setData({
                        ...data,
                        firstFromOtherInstituteSatyabama1: {
                          ...data.firstFromOtherInstituteSatyabama1,
                          doiLink: e.target.value,
                        },
                      })
                    }
                    type='text'
                    name=''
                    id=''
                  />{" "} */}
                </TableCell>
                <TableCell align='center'>
                  {data.firstFromOtherInstituteSatyabama1.score}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align='center'>
                  {/* <Input
                    value={data.firstFromOtherInstituteSatyabama2.nameOfJounal}
                    onChange={(e) =>
                      setData({
                        ...data,
                        firstFromOtherInstituteSatyabama2: {
                          ...data.firstFromOtherInstituteSatyabama2,
                          nameOfJounal: e.target.value,
                        },
                      })
                    }
                    type='text'
                    name=''
                    id=''
                  /> */}
                </TableCell>

                <TableCell align='center'>
                  {/* {" "}
                  <Input
                    value={data.firstFromOtherInstituteSatyabama2.impactFactor}
                    onChange={(e) =>
                      setData({
                        ...data,
                        firstFromOtherInstituteSatyabama2: {
                          ...data.firstFromOtherInstituteSatyabama2,
                          impactFactor: e.target.value,
                          score: 12 * e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  />{" "} */}
                </TableCell>
                <TableCell align='center'>
                  {" "}
                  {/* <Input
                    value={data.firstFromOtherInstituteSatyabama2.doiLink}
                    onChange={(e) =>
                      setData({
                        ...data,
                        firstFromOtherInstituteSatyabama2: {
                          ...data.firstFromOtherInstituteSatyabama2,
                          doiLink: e.target.value,
                        },
                      })
                    }
                    type='text'
                    name=''
                    id=''
                  />{" "} */}
                </TableCell>
                <TableCell align='center'>
                  {data.firstFromOtherInstituteSatyabama2.score}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align='center'>
                  {/* <Input
                    value={data.firstFromOtherInstituteSatyabama3.nameOfJounal}
                    onChange={(e) =>
                      setData({
                        ...data,
                        firstFromOtherInstituteSatyabama3: {
                          ...data.firstFromOtherInstituteSatyabama3,
                          nameOfJounal: e.target.value,
                        },
                      })
                    }
                    type='text'
                    name=''
                    id=''
                  /> */}
                </TableCell>

                <TableCell align='center'>
                  {/* {" "}
                  <Input
                    value={data.firstFromOtherInstituteSatyabama3.impactFactor}
                    onChange={(e) =>
                      setData({
                        ...data,
                        firstFromOtherInstituteSatyabama3: {
                          ...data.firstFromOtherInstituteSatyabama3,
                          impactFactor: e.target.value,
                          score: 12 * e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  />{" "} */}
                </TableCell>
                <TableCell align='center'>
                  {" "}
                  {/* <Input
                    value={data.firstFromOtherInstituteSatyabama3.doiLink}
                    onChange={(e) =>
                      setData({
                        ...data,
                        firstFromOtherInstituteSatyabama3: {
                          ...data.firstFromOtherInstituteSatyabama3,
                          doiLink: e.target.value,
                        },
                      })
                    }
                    type='text'
                    name=''
                    id=''
                  />{" "} */}
                </TableCell>
                <TableCell align='center'>
                  {data.firstFromOtherInstituteSatyabama3.score}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align='center'>
                  {/* <Input
                    value={data.firstFromOtherInstituteSatyabama4.nameOfJounal}
                    onChange={(e) =>
                      setData({
                        ...data,
                        firstFromOtherInstituteSatyabama4: {
                          ...data.firstFromOtherInstituteSatyabama4,
                          nameOfJounal: e.target.value,
                        },
                      })
                    }
                    type='text'
                    name=''
                    id=''
                  /> */}
                </TableCell>

                <TableCell align='center'>
                  {" "}
                  {/* <Input
                    value={data.firstFromOtherInstituteSatyabama4.impactFactor}
                    onChange={(e) =>
                      setData({
                        ...data,
                        firstFromOtherInstituteSatyabama4: {
                          ...data.firstFromOtherInstituteSatyabama4,
                          impactFactor: e.target.value,
                          score: 12 * e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  />{" "} */}
                </TableCell>
                <TableCell align='center'>
                  {" "}
                  {/* <Input
                    value={data.firstFromOtherInstituteSatyabama4.doiLink}
                    onChange={(e) =>
                      setData({
                        ...data,
                        firstFromOtherInstituteSatyabama4: {
                          ...data.firstFromOtherInstituteSatyabama4,
                          doiLink: e.target.value,
                        },
                      })
                    }
                    type='text'
                    name=''
                    id=''
                  />{" "} */}
                </TableCell>
                <TableCell align='center'>
                  {data.firstFromOtherInstituteSatyabama4.score}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align='center'>
                  All Co-Authors (Excluding First and Corresponding Author,
                  Select the No of Co-Authors)
                </TableCell>
                <TableCell align='center'>Name of Journal</TableCell>
                <TableCell align='center'>Imapct Factor</TableCell>
                <TableCell align='center'>DOI Link</TableCell>
                <TableCell align='center'>Points</TableCell>
              </TableRow>

              <TableRow>
                <TableCell align='center'>
                  {/* <select
                    onChange={(e) =>
                      setData({
                        ...data,
                        coAuthors: {
                          ...data.coAuthors,
                          AllcoAuthor: e.target.value,
                        },
                      })
                    }>
                    <option>select coAuthors</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    <option value='6'>6</option>
                    <option value='7'>7</option>
                    <option value='8'>8</option>
                  </select> */}
                </TableCell>

                <TableCell align='center'>
                  {/* <Input
                    value={data.coAuthors.nameOfJounal}
                    onChange={(e) =>
                      setData({
                        ...data,
                        coAuthors: {
                          ...data.coAuthors,
                          nameOfJounal: e.target.value,
                        },
                      })
                    }
                    type='text'
                    name=''
                    id=''
                  />{" "} */}
                </TableCell>
                <TableCell align='center'>
                  {/* <Input
                    value={data.coAuthors.impactFactor}
                    onChange={(e) =>
                      setData({
                        ...data,
                        coAuthors: {
                          ...data.coAuthors,
                          impactFactor: e.target.value,
                          score:
                            (6 * e.target.value) / data.coAuthors.AllcoAuthor,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  />{" "} */}
                </TableCell>
                <TableCell align='center'>
                  {" "}
                  {/* <Input
                    value={data.coAuthors.doiLink}
                    onChange={(e) =>
                      setData({
                        ...data,
                        coAuthors: {
                          ...data.coAuthors,
                          doiLink: e.target.value,
                        },
                      })
                    }
                    type='text'
                    name=''
                    id=''
                  />{" "} */}
                </TableCell>
                <TableCell align='center'>{data.coAuthors.score}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  {/* <select
                    onChange={(e) =>
                      setData({
                        ...data,
                        coAuthors1: {
                          ...data.coAuthors1,
                          AllcoAuthor: e.target.value,
                        },
                      })
                    }>
                    <option value='novalue'>select coAuthors</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    <option value='6'>6</option>
                    <option value='7'>7</option>
                    <option value='8'>8</option>
                  </select> */}
                </TableCell>

                <TableCell align='center'>
                  {/* <Input
                    value={data.coAuthors1.nameOfJounal}
                    onChange={(e) =>
                      setData({
                        ...data,
                        coAuthors1: {
                          ...data.coAuthors1,
                          nameOfJounal: e.target.value,
                        },
                      })
                    }
                    type='text'
                    name=''
                    id=''
                  />{" "} */}
                </TableCell>
                <TableCell align='center'>
                  {/* <Input
                    value={data.coAuthors1.impactFactor}
                    onChange={(e) =>
                      setData({
                        ...data,
                        coAuthors1: {
                          ...data.coAuthors1,
                          impactFactor: e.target.value,
                          score:
                            (6 * e.target.value) / data.coAuthors1.AllcoAuthor,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  />{" "} */}
                </TableCell>
                <TableCell align='center'>
                  {" "}
                  {/* <Input
                    value={data.coAuthors1.doiLink}
                    onChange={(e) =>
                      setData({
                        ...data,
                        coAuthors1: {
                          ...data.coAuthors1,
                          doiLink: e.target.value,
                        },
                      })
                    }
                    type='text'
                    name=''
                    id=''
                  />{" "} */}
                </TableCell>
                <TableCell align='center'>{data.coAuthors1.score}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  {/* <select
                    onChange={(e) =>
                      setData({
                        ...data,
                        coAuthors2: {
                          ...data.coAuthors2,
                          AllcoAuthor: e.target.value,
                        },
                      })
                    }>
                    <option>select coAuthors</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    <option value='6'>6</option>
                    <option value='7'>7</option>
                    <option value='8'>8</option>
                  </select> */}
                </TableCell>

                <TableCell align='center'>
                  {/* <Input
                    value={data.coAuthors2.nameOfJounal}
                    onChange={(e) =>
                      setData({
                        ...data,
                        coAuthors2: {
                          ...data.coAuthors2,
                          nameOfJounal: e.target.value,
                        },
                      })
                    }
                    type='text'
                    name=''
                    id=''
                  />{" "} */}
                </TableCell>
                <TableCell align='center'>
                  {/* <Input
                    value={data.coAuthors2.impactFactor}
                    onChange={(e) =>
                      setData({
                        ...data,
                        coAuthors2: {
                          ...data.coAuthors2,
                          impactFactor: e.target.value,
                          score:
                            (6 * e.target.value) / data.coAuthors2.AllcoAuthor,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  />{" "} */}
                </TableCell>
                <TableCell align='center'>
                  {" "}
                  {/* <Input
                    value={data.coAuthors2.doiLink}
                    onChange={(e) =>
                      setData({
                        ...data,
                        coAuthors2: {
                          ...data.coAuthors2,
                          doiLink: e.target.value,
                        },
                      })
                    }
                    type='text'
                    name=''
                    id=''
                  />{" "} */}
                </TableCell>
                <TableCell align='center'>{data.coAuthors2.score}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  {/* <select
                    onChange={(e) =>
                      setData({
                        ...data,
                        coAuthors3: {
                          ...data.coAuthors3,
                          AllcoAuthor: e.target.value,
                        },
                      })
                    }>
                    <option>select coAuthors</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    <option value='6'>6</option>
                    <option value='7'>7</option>
                    <option value='8'>8</option>
                  </select> */}
                </TableCell>

                <TableCell align='center'>
                  {/* <Input
                    value={data.coAuthors3.nameOfJounal}
                    onChange={(e) =>
                      setData({
                        ...data,
                        coAuthors3: {
                          ...data.coAuthors3,
                          nameOfJounal: e.target.value,
                        },
                      })
                    }
                    type='text'
                    name=''
                    id=''
                  />{" "} */}
                </TableCell>
                <TableCell align='center'>
                  {/* <Input
                    value={data.coAuthors3.impactFactor}
                    onChange={(e) =>
                      setData({
                        ...data,
                        coAuthors3: {
                          ...data.coAuthors3,
                          impactFactor: e.target.value,
                          score:
                            (6 * e.target.value) / data.coAuthors3.AllcoAuthor,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  />{" "} */}
                </TableCell>
                <TableCell align='center'>
                  {/* {" "}
                  <Input
                    value={data.coAuthors3.doiLink}
                    onChange={(e) =>
                      setData({
                        ...data,
                        coAuthors3: {
                          ...data.coAuthors3,
                          doiLink: e.target.value,
                        },
                      })
                    }
                    type='text'
                    name=''
                    id=''
                  />{" "} */}
                </TableCell>
                <TableCell align='center'>{data.coAuthors3.score}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell align='center' colSpan={6}>
                  Research Papers Published in Journals with No Impact Factor
                  during June 2020 to May 2024
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell></TableCell>
                <TableCell align='center'>Name of Journal</TableCell>
                <TableCell align='center'>
                  Role (Select 1 for First/Corresponding Author & 2 for
                  co-author)
                </TableCell>
                <TableCell align='center'>DOI Link</TableCell>
                <TableCell align='center'>Points</TableCell>
              </TableRow>
              <TableRow>
                <TableCell rowSpan={6}>
                  Paper published only in Scopus Indexed/UGC CARE Journals (No
                  impact factor)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  {" "}
                  {/* <Input
                    value={data.ugcCareJournal.nameOfJounal}
                    onChange={(e) =>
                      setData({
                        ...data,
                        ugcCareJournal: {
                          ...data.ugcCareJournal,
                          nameOfJounal: e.target.value,
                        },
                      })
                    }
                    type='text'
                    name=''
                    id=''
                  />{" "} */}
                </TableCell>
                <TableCell align='center'>
                  {" "}
                  {/* <select
                    onChange={(e) =>
                      setData({
                        ...data,
                        ugcCareJournal: {
                          ...data.ugcCareJournal,
                          impactFactor: e.target.value,
                          score: 2 * e.target.value,
                        },
                      })
                    }>
                    <option value='0'>select Role(1 or 2)</option>
                    <option value='1'>1</option>
                    <option value='1'>2</option>
                  </select> */}
                </TableCell>
                <TableCell align='center'>
                  {/* <Input
                    value={data.ugcCareJournal.doiLink}
                    onChange={(e) =>
                      setData({
                        ...data,
                        ugcCareJournal: {
                          ...data.ugcCareJournal,
                          doiLink: e.target.value,
                        },
                      })
                    }
                    type='text'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>
                  {data.ugcCareJournal.score}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align='center'>
                  {" "}
                  {/* <Input
                    value={data.ugcCareJournal1.nameOfJounal}
                    onChange={(e) =>
                      setData({
                        ...data,
                        ugcCareJournal1: {
                          ...data.ugcCareJournal1,
                          nameOfJounal: e.target.value,
                        },
                      })
                    }
                    type='text'
                    name=''
                    id=''
                  />{" "} */}
                </TableCell>
                <TableCell align='center'>
                  {" "}
                  {/* <select
                    onChange={(e) =>
                      setData({
                        ...data,
                        ugcCareJournal1: {
                          ...data.ugcCareJournal1,
                          impactFactor: e.target.value,
                          score: 2 * e.target.value,
                        },
                      })
                    }>
                    <option>select Role(1 or 2)</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                  </select> */}
                </TableCell>
                <TableCell align='center'>
                  {/* <Input
                    value={data.ugcCareJournal1.doiLink}
                    onChange={(e) =>
                      setData({
                        ...data,
                        ugcCareJournal1: {
                          ...data.ugcCareJournal1,
                          doiLink: e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>
                  {data.ugcCareJournal1.score}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  {/* {" "}
                  <Input
                    value={data.ugcCareJournal2.nameOfJounal}
                    onChange={(e) =>
                      setData({
                        ...data,
                        ugcCareJournal2: {
                          ...data.ugcCareJournal2,
                          nameOfJounal: e.target.value,
                        },
                      })
                    }
                    type='text'
                    name=''
                    id=''
                  />{" "} */}
                </TableCell>
                <TableCell align='center'>
                  {" "}
                  {/* <select
                    onChange={(e) =>
                      setData({
                        ...data,
                        ugcCareJournal2: {
                          ...data.ugcCareJournal2,
                          impactFactor: e.target.value,
                          score: 2 * e.target.value,
                        },
                      })
                    }>
                    <option>select Role(1 or 2)</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                  </select> */}
                </TableCell>
                <TableCell align='center'>
                  {/* <Input
                    value={data.ugcCareJournal2.doiLink}
                    onChange={(e) =>
                      setData({
                        ...data,
                        ugcCareJournal2: {
                          ...data.ugcCareJournal2,
                          impactFactor: e.target.value,
                          score: 2 * e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>
                  {data.ugcCareJournal2.score}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  {" "}
                  {/* <Input
                    value={data.ugcCareJournal3.nameOfJounal}
                    onChange={(e) =>
                      setData({
                        ...data,
                        ugcCareJournal3: {
                          ...data.ugcCareJournal3,
                          nameOfJounal: e.target.value,
                        },
                      })
                    }
                    type='text'
                    name=''
                    id=''
                  />{" "} */}
                </TableCell>
                <TableCell align='center'>
                  {" "}
                  {/* <select
                    onChange={(e) =>
                      setData({
                        ...data,
                        ugcCareJournal3: {
                          ...data.ugcCareJournal3,
                          impactFactor: e.target.value,
                          score: 2 * e.target.value,
                        },
                      })
                    }>
                    <option>select Role(1 or 2)</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                  </select> */}
                </TableCell>
                <TableCell align='center'>
                  {/* <Input
                    value={data.ugcCareJournal3.doiLink}
                    onChange={(e) =>
                      setData({
                        ...data,
                        ugcCareJournal3: {
                          ...data.ugcCareJournal3,
                          impactFactor: e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>
                  {data.ugcCareJournal3.score}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  {/* <Input
                    value={data.ugcCareJournal4.nameOfJounal}
                    onChange={(e) =>
                      setData({
                        ...data,
                        ugcCareJournal4: {
                          ...data.ugcCareJournal4,
                          nameOfJounal: e.target.value,
                        },
                      })
                    }
                    type='text'
                    name=''
                    id=''
                  />{" "} */}
                </TableCell>
                <TableCell align='center'>
                  {" "}
                  {/* <select
                    onChange={(e) =>
                      setData({
                        ...data,
                        ugcCareJournal4: {
                          ...data.ugcCareJournal4,
                          impactFactor: e.target.value,
                          score: 2 * e.target.value,
                        },
                      })
                    }>
                    <option>select Role(1 or 2)</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                  </select> */}
                </TableCell>
                <TableCell align='center'>
                  {/* <Input
                    value={data.ugcCareJournal4.doiLink}
                    onChange={(e) =>
                      setData({
                        ...data,
                        ugcCareJournal4: {
                          ...data.ugcCareJournal4,
                          impactFactor: e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>
                  {data.ugcCareJournal4.score}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={6}>
                  <center>Article ScoreCitations</center>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center' colSpan={6}>
                  Average Citations as per WoS (Total Citations/No of articles
                  published so far after joining Sathyabama)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  No Papers Published after joining Sathyabama
                </TableCell>
                <TableCell align='center'>Total Citations</TableCell>
                <TableCell align='center'>Average Citations</TableCell>

                <TableCell align='center'>H-index (as per WoS)</TableCell>
                <TableCell align='center'>Points</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  {/* <Input
                    value={data.articleScore.noOfPaperPublished}
                    onChange={(e) =>
                      setData({
                        ...data,
                        articleScore: {
                          ...data.articleScore,
                          noOfPaperPublished: e.target.value,
                        },
                      })
                    }
                  /> */}
                </TableCell>
                <TableCell align='center'>
                  {/* <Input
                    value={data.articleScore.totalCitation}
                    onChange={(e) =>
                      setData({
                        ...data,
                        articleScore: {
                          ...data.articleScore,
                          totalCitation: e.target.value,
                        },
                      })
                    }
                  /> */}
                </TableCell>
                <TableCell align='center'>
                  {/* <Input
                    value={data.articleScore.averageCitation}
                    onChange={(e) =>
                      setData({
                        ...data,
                        articleScore: {
                          ...data.articleScore,
                          averageCitation: e.target.value,
                        },
                      })
                    }
                  /> */}
                </TableCell>
                <TableCell align='center'>
                  {/* <Input
                    value={data.articleScore.hIndex}
                    onChange={(e) =>
                      setData({
                        ...data,
                        articleScore: {
                          ...data.articleScore,
                          hIndex: e.target.value,
                          score: parseInt(
                            data.articleScore.averageCitation + e.target.value,
                          ),
                        },
                      })
                    }
                  /> */}
                </TableCell>

                <TableCell align='center'>{data.articleScore.score}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell component='th'>14</TableCell>
                <TableCell align='center' colSpan={6}>
                  {" "}
                  Research Activities
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={5}>
                  <center>
                    Books Published/Edited/Guest Editor/Editor Published (in
                    reputed publishing house) during June 2020 to May 2024
                  </center>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align='center'>Name of Publisher</TableCell>
                <TableCell align='center'>
                  No Books Published/Edited/Guest Editor/Editor
                </TableCell>
                <TableCell align='center'>Points Scored</TableCell>
                <TableCell align='center'>Upload Proof</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  {/* <Input
                    value={data.researchActivities.nameOFPublisher}
                    onChange={(e) =>
                      setData({
                        ...data,
                        researchActivities: {
                          ...data.researchActivities,
                          nameOFPublisher: e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>
                  {/* <Input
                    value={data.researchActivities.noOfBook}
                    onChange={(e) =>
                      setData({
                        ...data,
                        researchActivities: {
                          ...data.researchActivities,
                          noOfBook: e.target.value,
                          score: 20 * e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>
                  {data.researchActivities.score}
                </TableCell>
                <TableCell align='center'>
                 
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  {/* <Input
                    value={data.researchActivities1.nameOFPublisher}
                    onChange={(e) =>
                      setData({
                        ...data,
                        researchActivities1: {
                          ...data.researchActivities1,
                          nameOFPublisher: e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>
                  {/* <Input
                    value={data.researchActivities1.noOfBook}
                    onChange={(e) =>
                      setData({
                        ...data,
                        researchActivities1: {
                          ...data.researchActivities1,
                          noOfBook: e.target.value,
                          score: 20 * e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>
                  {data.researchActivities1.score}
                </TableCell>
                <TableCell align='center'>
                 
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align='center'>
                  {/* <Input
                    value={data.researchActivities2.nameOFPublisher}
                    onChange={(e) =>
                      setData({
                        ...data,
                        researchActivities2: {
                          ...data.researchActivities2,
                          nameOFPublisher: e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>
                  {/* <Input
                    value={data.researchActivities2.noOfBook}
                    onChange={(e) =>
                      setData({
                        ...data,
                        researchActivities2: {
                          ...data.researchActivities2,
                          noOfBook: e.target.value,
                          score: 20 * e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>
                  {data.researchActivities2.score}
                </TableCell>
                <TableCell align='center'>
                
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align='center'>
                  {/* <Input
                    value={data.researchActivities3.nameOFPublisher}
                    onChange={(e) =>
                      setData({
                        ...data,
                        researchActivities3: {
                          ...data.researchActivities3,
                          nameOFPublisher: e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>
                  {/* <Input
                    value={data.researchActivities3.noOfBook}
                    onChange={(e) =>
                      setData({
                        ...data,
                        researchActivities3: {
                          ...data.researchActivities3,
                          noOfBook: e.target.value,
                          score: 20 * e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>
                  {data.researchActivities3.score}
                </TableCell>
                <TableCell align='center'>
                 
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell component='th'>15</TableCell>
                <TableCell colSpan={6}>
                  {" "}
                  Book Chapters Published (in reputed publishing house) during
                  June 2020 to May 2021
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>Name of Publisher</TableCell>
                <TableCell align='center'>No Book Chapters</TableCell>
                <TableCell align='center'>Points Scored</TableCell>
                <TableCell align='center'>Upload Proof</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  {/* <Input
                    value={data.bookChapterPublished.nameOFPublisher}
                    onChange={(e) =>
                      setData({
                        ...data,
                        bookChapterPublished: {
                          ...data.bookChapterPublished,
                          nameOFPublisher: e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>
                  {/* <Input
                    value={data.bookChapterPublished.nameOFChapter}
                    onChange={(e) =>
                      setData({
                        ...data,
                        bookChapterPublished: {
                          ...data.bookChapterPublished,
                          nameOFChapter: e.target.value,
                          score: 5 * e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>
                  {data.bookChapterPublished.score}
                </TableCell>
                <TableCell align='center'>
                
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  {/* <Input
                    value={data.bookChapterPublished1.nameOFPublisher}
                    onChange={(e) =>
                      setData({
                        ...data,
                        bookChapterPublished1: {
                          ...data.bookChapterPublished1,
                          nameOFPublisher: e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>
                  {/* <Input
                    value={data.bookChapterPublished1.nameOFChapter}
                    onChange={(e) =>
                      setData({
                        ...data,
                        bookChapterPublished1: {
                          ...data.bookChapterPublished1,
                          nameOFChapter: e.target.value,
                          score: 5 * e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>
                  {data.bookChapterPublished1.score}
                </TableCell>
                <TableCell align='center'>
                 
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  {/* <Input
                    value={data.bookChapterPublished2.nameOFPublisher}
                    onChange={(e) =>
                      setData({
                        ...data,
                        bookChapterPublished2: {
                          ...data.bookChapterPublished2,
                          nameOFPublisher: e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>
                  {/* <Input
                    value={data.bookChapterPublished2.nameOFChapter}
                    onChange={(e) =>
                      setData({
                        ...data,
                        bookChapterPublished2: {
                          ...data.bookChapterPublished2,
                          nameOFChapter: e.target.value,
                          score: 5 * e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>
                  {data.bookChapterPublished2.score}
                </TableCell>
                <TableCell align='center'>
               
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  {/* <Input
                    value={data.bookChapterPublished3.nameOFPublisher}
                    onChange={(e) =>
                      setData({
                        ...data,
                        bookChapterPublished3: {
                          ...data.bookChapterPublished3,
                          nameOFPublisher: e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>
                  {/* <Input
                    value={data.bookChapterPublished3.nameOFChapter}
                    onChange={(e) =>
                      setData({
                        ...data,
                        bookChapterPublished3: {
                          ...data.bookChapterPublished3,
                          nameOFChapter: e.target.value,
                          score: 5 * e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>
                  {data.bookChapterPublished3.score}
                </TableCell>
                <TableCell align='center'>
              
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component='th'>16</TableCell>
                <TableCell colSpan={6}>
                  {" "}
                  Articles Published in Leading Magazines/Newsletters during
                  June 2020 to May 2021
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  Name of Magazine/Newsletter
                </TableCell>
                <TableCell align='center'>No Articles</TableCell>
                <TableCell align='center'>Points Scored</TableCell>
                <TableCell align='center'>Upload Proof</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  {/* <Input
                    value={data.articlePublished.nameOFMag}
                    onChange={(e) =>
                      setData({
                        ...data,
                        articlePublished: {
                          ...data.articlePublished,
                          nameOFMag: e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>
                  <Input
                    value={data.articlePublished.noOfArticle}
                    onChange={(e) =>
                      setData({
                        ...data,
                        articlePublished: {
                          ...data.articlePublished,
                          noOfArticle: e.target.value,
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
                  {data.articlePublished.score}
                </TableCell>
                <TableCell align='center'>
                 
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  {/* <Input
                    value={data.articlePublished1.nameOFMag}
                    onChange={(e) =>
                      setData({
                        ...data,
                        articlePublished1: {
                          ...data.articlePublished1,
                          nameOFMag: e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>
                  {/* <Input
                    value={data.articlePublished1.noOfArticle}
                    onChange={(e) =>
                      setData({
                        ...data,
                        articlePublished1: {
                          ...data.articlePublished1,
                          noOfArticle: e.target.value,
                          score: 5 * e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>
                  {data.articlePublished1.score}
                </TableCell>
                <TableCell align='center'>
                  
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  {/* <Input
                    value={data.articlePublished2.nameOFMag}
                    onChange={(e) =>
                      setData({
                        ...data,
                        articlePublished2: {
                          ...data.articlePublished2,
                          nameOFMag: e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>
                  {/* <Input
                    value={data.articlePublished2.noOfArticle}
                    onChange={(e) =>
                      setData({
                        ...data,
                        articlePublished2: {
                          ...data.articlePublished2,
                          noOfArticle: e.target.value,
                          score: 5 * e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>
                  {data.articlePublished2.score}
                </TableCell>
                <TableCell align='center'>
              
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  {/* <Input
                    value={data.articlePublished3.nameOFMag}
                    onChange={(e) =>
                      setData({
                        ...data,
                        articlePublished3: {
                          ...data.articlePublished3,
                          nameOFMag: e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>
                  {/* <Input
                    value={data.articlePublished3.noOfArticle}
                    onChange={(e) =>
                      setData({
                        ...data,
                        articlePublished3: {
                          ...data.articlePublished3,
                          noOfArticle: e.target.value,
                          score: 5 * e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>
                  {data.articlePublished3.score}
                </TableCell>
                <TableCell align='center'>
                 
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component='th'>17</TableCell>
                <TableCell colSpan={6}>
                  {" "}
                  Reviewer for Journals with Impact Factor during June 2020 to
                  May 2021
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>Name of Journal Reviewed</TableCell>
                <TableCell align='center'>No Reveiws in that Journal</TableCell>
                <TableCell align='center'>Points Scored</TableCell>
                <TableCell align='center'>Upload Proof</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  {/* <Input
                    value={data.reviews.nameOFJournal}
                    onChange={(e) =>
                      setData({
                        ...data,
                        reviews: {
                          ...data.reviews,
                          nameOFJournal: e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>
                  {/* <Input
                    value={data.reviews.noOfReview}
                    onChange={(e) =>
                      setData({
                        ...data,
                        reviews: {
                          ...data.reviews,
                          noOfReview: e.target.value,
                          score: 8 * e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>{data.reviews.score}</TableCell>
                <TableCell align='center'>
               
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  {/* <Input
                    value={data.reviews1.nameOFJournal}
                    onChange={(e) =>
                      setData({
                        ...data,
                        reviews1: {
                          ...data.reviews1,
                          nameOFJournal: e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>
                  {/* <Input
                    value={data.reviews1.noOfReview}
                    onChange={(e) =>
                      setData({
                        ...data,
                        reviews1: {
                          ...data.reviews1,
                          noOfReview: e.target.value,
                          score: 8 * e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>{data.reviews1.score}</TableCell>
                <TableCell align='center'>
                 
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  {/* <Input
                    value={data.reviews2.nameOFJournal}
                    onChange={(e) =>
                      setData({
                        ...data,
                        reviews2: {
                          ...data.reviews2,
                          nameOFJournal: e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>
                  {/* <Input
                    value={data.reviews2.noOfReview}
                    onChange={(e) =>
                      setData({
                        ...data,
                        reviews2: {
                          ...data.reviews2,
                          noOfReview: e.target.value,
                          score: 8 * e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>{data.reviews2.score}</TableCell>
                <TableCell align='center'>
               
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  {/* <Input
                    value={data.reviews3.nameOFJournal}
                    onChange={(e) =>
                      setData({
                        ...data,
                        reviews3: {
                          ...data.reviews3,
                          nameOFJournal: e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>
                  {/* <Input
                    value={data.reviews3.noOfReview}
                    onChange={(e) =>
                      setData({
                        ...data,
                        reviews3: {
                          ...data.reviews3,
                          noOfReview: e.target.value,
                          score: 8 * e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>{data.reviews3.score}</TableCell>
                <TableCell align='center'>
                  
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component='th'>18</TableCell>
                <TableCell colSpan={6}>
                  {" "}
                  Product Patent if Granted Only (All Inventors) during June
                  2020 to May 2021
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>Name of Product Patent</TableCell>
                <TableCell align='center'>
                  {" "}
                  Choose 1 if you are awarded a product patent
                </TableCell>
                <TableCell align='center'>Points Scored</TableCell>
                <TableCell align='center'>Upload Proof</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  {/* <Input
                    value={data.productPatent.nameOFPatent}
                    onChange={(e) =>
                      setData({
                        ...data,
                        productPatent: {
                          ...data.productPatent,
                          nameOFPatent: e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>
                  {/* <select
                    onChange={(e) =>
                      setData({
                        ...data,
                        productPatent: {
                          ...data.productPatent,
                          isAwarded: e.target.value,
                          score: 10 * e.target.value,
                        },
                      })
                    }>
                    <option> Select </option>
                    <option value='1'> Published </option>
                    <option value='3'>Granted</option>
                  </select> */}
                </TableCell>
                <TableCell align='center'>{data.productPatent.score}</TableCell>
                <TableCell align='center'>
           
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  {/* <Input
                    value={data.productPatent1.nameOFPatent}
                    onChange={(e) =>
                      setData({
                        ...data,
                        productPatent1: {
                          ...data.productPatent1,
                          nameOFPatent: e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>
                  {/* <select
                    onChange={(e) =>
                      setData({
                        ...data,
                        productPatent1: {
                          ...data.productPatent1,
                          isAwarded: e.target.value,
                          score: 10 * e.target.value,
                        },
                      })
                    }>
                    <option> Select </option>
                    <option value='1'> Published </option>
                    <option value='3'>Granted</option>
                  </select> */}
                </TableCell>
                <TableCell align='center'>
                  {data.productPatent1.score}
                </TableCell>
                <TableCell align='center'>
                 
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  {/* <Input
                    value={data.productPatent2.nameOFPatent}
                    onChange={(e) =>
                      setData({
                        ...data,
                        productPatent2: {
                          ...data.productPatent2,
                          nameOFPatent: e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>
                  {/* <select
                    onChange={(e) =>
                      setData({
                        ...data,
                        productPatent2: {
                          ...data.productPatent2,
                          isAwarded: e.target.value,
                          score: 10 * e.target.value,
                        },
                      })
                    }>
                    <option> Select </option>
                    <option value='1'> Published </option>
                    <option value='3'>Granted</option>
                  </select> */}
                </TableCell>
                <TableCell align='center'>
                  {data.productPatent2.score}
                </TableCell>
                <TableCell align='center'>
                
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  {/* <Input
                    value={data.productPatent3.nameOFPatent}
                    onChange={(e) =>
                      setData({
                        ...data,
                        productPatent3: {
                          ...data.productPatent3,
                          nameOFPatent: e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>
                  {/* <select
                    onChange={(e) =>
                      setData({
                        ...data,
                        productPatent3: {
                          ...data.productPatent3,
                          isAwarded: e.target.value,
                          score: 10 * e.target.value,
                        },
                      })
                    }>
                    <option> Select </option>
                    <option value='1'> Published </option>
                    <option value='3'>Granted</option>
                  </select> */}
                </TableCell>
                <TableCell align='center'>
                  {data.productPatent3.score}
                </TableCell>
                <TableCell align='center'>
                  
                </TableCell>
              </TableRow>
              {/* </TableRow>
          <TableRow>
            <TableCell component="th">19</TableCell>
            <TableCell colSpan={6}>
              {" "}
              Design Patent/Copyright if Granted Only (All Inventors) during
              June 2020 to May 2021
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center">
              Name of design patent/Copyright
            </TableCell>
            <TableCell align="center">Role</TableCell>
            <TableCell align="center">Points Scored</TableCell>
            <TableCell align="center">Upload Proof</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center">
              <Input
                value={data.copyright.nameOFCopyright}
                onChange={(e) =>
                  setData({
                    ...data,
                    copyright: {...data.copyright,
                      nameOFCopyright: e.target.value,
                    },
                  })
                }
                type="number"
                name=""
                id=""
              />
            </TableCell>
            <TableCell align="center">
              <Input
                value={data.copyright.role}
                onChange={(e) =>
                  setData({
                    ...data,
                    copyright: {...data.copyright,
                      role: e.target.value,
                    },
                  })
                }
                type="number"
                name=""
                id=""
              />
            </TableCell>
            <TableCell align="center">0.0</TableCell>
            <TableCell align="center">
            <input type="file" name="file-upload" onChange={onChangeImage} />
          <button onClick={onUploadCopyright}>Upload</button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center">
              <Input
                value={data.copyright1.nameOFCopyright}
                onChange={(e) =>
                  setData({
                    ...data,
                    copyright1: {...data.copyright1,
                      nameOFCopyright: e.target.value,
                    },
                  })
                }
                type="number"
                name=""
                id=""
              />
            </TableCell>
            <TableCell align="center">
              <Input
                value={data.copyright1.role}
                onChange={(e) =>
                  setData({
                    ...data,
                    copyright1: {...data.copyright1,
                      role: e.target.value,
                    },
                  })
                }
                type="number"
                name=""
                id=""
              />
            </TableCell>
            <TableCell align="center">0.0</TableCell>
            <TableCell align="center">
            <input type="file" name="file-upload" onChange={onChangeImage} />
          <button onClick={onUploadCopyright1}>Upload</button>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell align="center">
              <Input
                value={data.copyright2.nameOFCopyright}
                onChange={(e) =>
                  setData({
                    ...data,
                    copyright2: {...data.copyright2,
                      nameOFCopyright: e.target.value,
                    },
                  })
                }
                type="number"
                name=""
                id=""
              />
            </TableCell>
            <TableCell align="center">
              <Input
                value={data.copyright2.role}
                onChange={(e) =>
                  setData({
                    ...data,
                    copyright2: {...data.copyright2,
                      role: e.target.value,
                    },
                  })
                }
                type="number"
                name=""
                id=""
              />
            </TableCell>
            <TableCell align="center">0.0</TableCell>
            <TableCell align="center">
            <input type="file" name="file-upload" onChange={onChangeImage} />
          <button onClick={onUploadCopyright2}>Upload</button>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell align="center">
              <Input
                value={data.copyright3.nameOFCopyright}
                onChange={(e) =>
                  setData({
                    ...data,
                    copyright3: {...data.copyright3,
                      nameOFCopyright: e.target.value,
                    },
                  })
                }
                type="number"
                name=""
                id=""
              />
            </TableCell>
            <TableCell align="center">
              <Input
                value={data.copyright3.role}
                onChange={(e) =>
                  setData({
                    ...data,
                    copyright3: {...data.copyright3,
                      role: e.target.value,
                    },
                  })
                }
                type="number"
                name=""
                id=""
              />
            </TableCell>
            <TableCell align="center">0.0</TableCell>
            <TableCell align="center">
            <input type="file" name="file-upload" onChange={onChangeImage} />
          <button onClick={onUploadCopyright3}>Upload</button>
            </TableCell>
          </TableRow> */}

              <TableRow>
                <TableCell component='th'>20</TableCell>
                <TableCell colSpan={6}>
                  {" "}
                  Commercial Product Developed during June 2020 to May 2021
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align='center'>Name of Product Developed</TableCell>
                <TableCell align='center'>No Products developed</TableCell>
                <TableCell align='center'>Points Scored</TableCell>
                <TableCell align='center'>Upload Proof</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  {/* <Input
                    value={data.commercialProdDev.nameOfProd}
                    onChange={(e) =>
                      setData({
                        ...data,
                        commercialProdDev: {
                          ...data.commercialProdDev,
                          nameOfProd: e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>
                  {/* <Input
                    value={data.commercialProdDev.noOfProd}
                    onChange={(e) =>
                      setData({
                        ...data,
                        commercialProdDev: {
                          ...data.commercialProdDev,
                          noOfProd: e.target.value,
                          score: 50 * e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>
                  {data.commercialProdDev.score}
                </TableCell>
                <TableCell align='center'>
                 
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component='th'>21</TableCell>
                <TableCell colSpan={6}>
                  {" "}
                  Start Up from Institute during June 2020 to May 2021
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  Choose 1 if you are a Start-up
                </TableCell>
                <TableCell align='center'> Name of Start-Up</TableCell>
                <TableCell align='center'>Points Scored</TableCell>
                <TableCell align='center'>Upload Proof</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  {/* <select
                    onChange={(e) =>
                      setData({
                        ...data,
                        startUp: {
                          ...data.startUp,
                          isStartUp: e.target.value,
                          score: 100 * e.target.value,
                        },
                      })
                    }>
                    <option> Select </option>
                    <option value='1'> Yes</option>
                    <option value='0'>No</option>
                  </select> */}
                </TableCell>
                <TableCell align='center'>
                  {/* <Input
                    value={data.startUp.nameOfStartUp}
                    onChange={(e) =>
                      setData({
                        ...data,
                        startUp: {
                          ...data.startUp,
                          nameOfStartUp: e.target.value,
                        },
                      })
                    }
                    type='text'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>{data.startUp.score}</TableCell>
                <TableCell align='center'>
                 
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component='th'>22</TableCell>
                <TableCell colSpan={6}>
                  {" "}
                  Research Guidance (Full-Time PhD Scholar Guiding) during June
                  2020 to May 2021
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  No of Full-time Scholars currently pursuing PhD
                </TableCell>
                <TableCell align='center'>Points alloted</TableCell>
                <TableCell align='center'>Points Scored</TableCell>
                <TableCell align='center'>Upload Proof</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  {/* <select
                    onChange={(e) =>
                      setData({
                        ...data,
                        researchGuideFullTime: {
                          ...data.researchGuideFullTime,
                          noOfPHD: e.target.value,
                          score: 20 * e.target.value,
                        },
                      })
                    }>
                    <option>select coAuthors</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    <option value='6'>6</option>
                    <option value='7'>7</option>
                    <option value='8'>8</option>
                  </select> */}
                </TableCell>
                <TableCell align='center'>20</TableCell>
                <TableCell align='center'>
                  {data.researchGuideFullTime.score}
                </TableCell>
                <TableCell align='center'>
                 
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component='th'>23</TableCell>
                <TableCell colSpan={6}>
                  {" "}
                  Research Guidance (Part-Time PhD Scholar Guiding) during June
                  2020 to May 2021
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  No of Part-time Scholars currently pursuing PhD
                </TableCell>
                <TableCell align='center'>Points alloted</TableCell>
                <TableCell align='center'>Points Scored</TableCell>
                <TableCell align='center'>Upload Proof</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  {/* <select
                    onChange={(e) =>
                      setData({
                        ...data,
                        researchGuidePartTime: {
                          ...data.researchGuidePartTime,
                          noOfPHD: e.target.value,
                          score: 10 * e.target.value,
                        },
                      })
                    }>
                    <option>select coAuthors</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    <option value='6'>6</option>
                    <option value='7'>7</option>
                    <option value='8'>8</option> */}
                  
                </TableCell>
                <TableCell align='center'>10</TableCell>
                <TableCell align='center'>
                  {data.researchGuidePartTime.score}
                </TableCell>
                <TableCell align='center'>
                 
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component='th'>24</TableCell>
                <TableCell colSpan={6}>
                  {" "}
                  Research Guidance (Full-Time Scholar Completed PhD) during
                  June 2020 to May 2021
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  No of Full-time Scholars Awarded the Degree
                </TableCell>
                <TableCell align='center'>Points alloted</TableCell>
                <TableCell align='center'>Points Scored</TableCell>
                <TableCell align='center'>Upload Proof</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  {/* <select
                    onChange={(e) =>
                      setData({
                        ...data,
                        researchGuideFullTimeCompleted: {
                          ...data.researchGuideFullTimeCompleted,
                          noOfPHD: e.target.value,
                          score: 40 * e.target.value,
                        },
                      })
                    }>
                    <option value='novalue'>select coAuthors</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    <option value='6'>6</option>
                    <option value='7'>7</option>
                    <option value='8'>8</option>
                  </select> */}
                </TableCell>
                <TableCell align='center'>40</TableCell>
                <TableCell align='center'>
                  {data.researchGuideFullTimeCompleted.score}
                </TableCell>
                <TableCell align='center'>
                  
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component='th'>25</TableCell>
                <TableCell colSpan={6}>
                  {" "}
                  Research Guidance (Part-Time Scholar Completed PhD) during
                  June 2020 to May 2021
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  No of Part-time Scholars Awarded the Degree
                </TableCell>
                <TableCell align='center'>Points alloted</TableCell>
                <TableCell align='center'>Points Scored</TableCell>
                <TableCell align='center'>Upload Proof</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  {/* <select
                    onChange={(e) =>
                      setData({
                        ...data,
                        researchGuidePartTimeCompleted: {
                          ...data.researchGuidePartTimeCompleted,
                          noOfPHD: e.target.value,
                          score: 30 * e.target.value,
                        },
                      })
                    }>
                    <option value='novalue'>select coAuthors</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    <option value='6'>6</option>
                    <option value='7'>7</option>
                    <option value='8'>8</option>
                  </select> */}
                </TableCell>
                <TableCell align='center'>30</TableCell>
                <TableCell align='center'>
                  {data.researchGuidePartTimeCompleted.score}
                </TableCell>
                <TableCell align='center'>
                 
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component='th'>26</TableCell>
                <TableCell colSpan={6}>
                  {" "}
                  Projects (As PI) (Based on amount received during June 2020 to
                  May 2021)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  Name of Project and Funding Agency
                </TableCell>
                <TableCell align='center'>
                  Amount Recieved in Lakhs for the period June 2020 to May 2021
                  (Enter 1.00 for 1 Lakh, 0.2 for twenty thousand)
                </TableCell>
                <TableCell align='center'>Points Scored</TableCell>
                <TableCell align='center'>Upload Proof</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  {/* <Input
                    value={data.projectAsPI.nameOfProjectAndFundAgency}
                    onChange={(e) =>
                      setData({
                        ...data,
                        projectAsPI: {
                          ...data.projectAsPI,
                          nameOfProjectAndFundAgency: e.target.value,
                        },
                      })
                    }
                    type='text'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>
                  {" "}
                  {/* <Input
                    value={data.projectAsPI.amountReceived}
                    onChange={(e) =>
                      setData({
                        ...data,
                        projectAsPI: {
                          ...data.projectAsPI,
                          amountReceived: e.target.value,
                          score: 25 * e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>{data.projectAsPI.score}</TableCell>
                <TableCell align='center'>
                  
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  {/* <Input
                    value={data.projectAsPI1.nameOfProjectAndFundAgency}
                    onChange={(e) =>
                      setData({
                        ...data,
                        projectAsPI1: {
                          ...data.projectAsPI1,
                          nameOfProjectAndFundAgency: e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>
                  {" "}
                  {/* <Input
                    value={data.projectAsPI1.amountReceived}
                    onChange={(e) =>
                      setData({
                        ...data,
                        projectAsPI1: {
                          ...data.projectAsPI1,
                          amountReceived: e.target.value,
                          score: 25 * e.target.value,
                        },
                      })
                    }
                    type='text'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>{data.projectAsPI1.score}</TableCell>
                <TableCell align='center'>
              
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  {/* <Input
                    value={data.projectAsPI2.nameOfProjectAndFundAgency}
                    onChange={(e) =>
                      setData({
                        ...data,
                        projectAsPI2: {
                          ...data.projectAsPI2,
                          nameOfProjectAndFundAgency: e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>
                  {" "}
                  {/* <Input
                    value={data.projectAsPI2.amountReceived}
                    onChange={(e) =>
                      setData({
                        ...data,
                        projectAsPI2: {
                          ...data.projectAsPI2,
                          amountReceived: e.target.value,
                          score: 25 * e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>{data.projectAsPI2.score}</TableCell>
                <TableCell align='center'>
                 
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  {/* <Input
                    value={data.projectAsPI3.nameOfProjectAndFundAgency}
                    onChange={(e) =>
                      setData({
                        ...data,
                        projectAsPI3: {
                          ...data.projectAsPI3,
                          nameOfProjectAndFundAgency: e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>
                  {" "}
                  {/* <Input
                    value={data.projectAsPI3.amountReceived}
                    onChange={(e) =>
                      setData({
                        ...data,
                        projectAsPI3: {
                          ...data.projectAsPI3,
                          amountReceived: e.target.value,
                          score: 25 * e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>{data.projectAsPI3.score}</TableCell>
                <TableCell align='center'>
                 
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component='th'>27</TableCell>
                <TableCell colSpan={6}>
                  {" "}
                  Projects (As Co-PI) (Based on amount received during June 2020
                  to May 2021)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  Name of Project and Funding Agency
                </TableCell>
                <TableCell align='center'>
                  Amount Recieved in Lakhs for the period June 2020 to May 2021
                  (Enter 1.00 for 1 Lakh, 0.2 for twenty thousand)
                </TableCell>
                <TableCell align='center'>
                  No of Investigators (inclusive of PI)
                </TableCell>
                <TableCell align='center'>Points Scored</TableCell>
                <TableCell align='center'>Upload Proof</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  {/* <Input
                    value={data.projectAsCoPI.nameOfProjectAndFundAgency}
                    onChange={(e) =>
                      setData({
                        ...data,
                        projectAsCoPI: {
                          ...data.projectAsCoPI,
                          nameOfProjectAndFundAgency: e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>
                  {/* <Input
                    value={data.projectAsCoPI.amountReceived}
                    onChange={(e) =>
                      setData({
                        ...data,
                        projectAsCoPI: {
                          ...data.projectAsCoPI,
                          amountReceived: e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>
                  {/* <Input
                    value={data.projectAsCoPI.noOfInvestigator}
                    onChange={(e) =>
                      setData({
                        ...data,
                        projectAsCoPI: {
                          ...data.projectAsCoPI,
                          noOfInvestigator: e.target.value,
                          score:
                            (25 * data.projectAsCoPI.amountReceived) /
                            e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>{data.projectAsCoPI.score}</TableCell>
                <TableCell align='center'>
                 
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  {/* <Input
                    value={data.projectAsCoPI1.nameOfProjectAndFundAgency}
                    onChange={(e) =>
                      setData({
                        ...data,
                        projectAsCoPI1: {
                          ...data.projectAsCoPI1,
                          nameOfProjectAndFundAgency: e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>
                  {/* <Input
                    value={data.projectAsCoPI1.amountReceived}
                    onChange={(e) =>
                      setData({
                        ...data,
                        projectAsCoPI1: {
                          ...data.projectAsCoPI1,
                          amountReceived: e.target.value,
                          score: 25 * e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>
                  {/* <Input
                    value={data.projectAsCoPI1.noOfInvestigator}
                    onChange={(e) =>
                      setData({
                        ...data,
                        projectAsCoPI1: {
                          ...data.projectAsCoPI1,
                          noOfInvestigator: e.target.value,
                          score:
                            (25 * data.projectAsCoPI1.amountReceived) /
                            e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>
                  {data.projectAsCoPI1.score}
                </TableCell>
                <TableCell align='center'>
                  
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  {/* <Input
                    value={data.projectAsCoPI2.nameOfProjectAndFundAgency}
                    onChange={(e) =>
                      setData({
                        ...data,
                        projectAsCoPI2: {
                          ...data.projectAsCoPI2,
                          nameOfProjectAndFundAgency: e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>
                  {/* <Input
                    value={data.projectAsCoPI2.amountReceived}
                    onChange={(e) =>
                      setData({
                        ...data,
                        projectAsCoPI2: {
                          ...data.projectAsCoPI2,
                          amountReceived: e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>
                  {/* <Input
                    value={data.projectAsCoPI2.noOfInvestigator}
                    onChange={(e) =>
                      setData({
                        ...data,
                        projectAsCoPI2: {
                          ...data.projectAsCoPI2,
                          noOfInvestigator: e.target.value,
                          score:
                            (25 * data.projectAsCoPI2.amountReceived) /
                            e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>
                  {data.projectAsCoPI2.score}
                </TableCell>
                <TableCell align='center'>
                 
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  {/* <Input
                    value={data.projectAsCoPI3.nameOfProjectAndFundAgency}
                    onChange={(e) =>
                      setData({
                        ...data,
                        projectAsCoPI3: {
                          ...data.projectAsCoPI3,
                          nameOfProjectAndFundAgency: e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>
                  {/* <Input
                    value={data.projectAsCoPI3.amountReceived}
                    onChange={(e) =>
                      setData({
                        ...data,
                        projectAsCoPI3: {
                          ...data.projectAsCoPI3,
                          amountReceived: e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>
                  {/* <Input
                    value={data.projectAsCoPI3.noOfInvestigator}
                    onChange={(e) =>
                      setData({
                        ...data,
                        projectAsCoPI3: {
                          ...data.projectAsCoPI3,
                          noOfInvestigator: e.target.value,
                          score:
                            (25 * data.projectAsCoPI3.amountReceived) /
                            e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>
                  {data.projectAsCoPI3.score}
                </TableCell>
                <TableCell align='center'>
                 
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell component='th'>28</TableCell>
                <TableCell colSpan={6}>
                  {" "}
                  Projects (As Mentor/Supervisor for NPDF, UGC-Postdoc, RA,
                  WoS-A,-B,-C, etc) (Based on amount received during June 2020
                  to May 2021)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  Name of Project and Funding Agency
                </TableCell>
                <TableCell align='center'>
                  Amount Recieved in Lakhs for the period June 2020 to May 2021
                  (Enter 1.00 for 1 Lakh, 0.2 for twenty thousand)
                </TableCell>
                <TableCell align='center'>Points Scored</TableCell>
                <TableCell align='center'>Upload Proof</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  {/* <Input
                    value={data.projectAsMentor.nameOfProjectAndFundAgency}
                    onChange={(e) =>
                      setData({
                        ...data,
                        projectAsMentor: {
                          ...data.projectAsMentor,
                          nameOfProjectAndFundAgency: e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>
                  {/* <Input
                    value={data.projectAsMentor.amountReceived}
                    onChange={(e) =>
                      setData({
                        ...data,
                        projectAsMentor: {
                          ...data.projectAsMentor,
                          amountReceived: e.target.value,
                          score: 25 * e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>
                  {data.projectAsMentor.score}
                </TableCell>
                <TableCell align='center'>
                  
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  {/* <Input
                    value={data.projectAsMentor1.nameOfProjectAndFundAgency}
                    onChange={(e) =>
                      setData({
                        ...data,
                        projectAsMentor1: {
                          ...data.projectAsMentor1,
                          nameOfProjectAndFundAgency: e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>
                  {/* <Input
                    value={data.projectAsMentor1.amountReceived}
                    onChange={(e) =>
                      setData({
                        ...data,
                        projectAsMentor1: {
                          ...data.projectAsMentor1,
                          amountReceived: e.target.value,
                          score: 25 * e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>
                  {data.projectAsMentor1.score}
                </TableCell>
                <TableCell align='center'>
                  
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  {/* <Input
                    value={data.projectAsMentor2.nameOfProjectAndFundAgency}
                    onChange={(e) =>
                      setData({
                        ...data,
                        projectAsMentor2: {
                          ...data.projectAsMentor2,
                          nameOfProjectAndFundAgency: e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>
                  {/* <Input
                    value={data.projectAsMentor2.amountReceived}
                    onChange={(e) =>
                      setData({
                        ...data,
                        projectAsMentor2: {
                          ...data.projectAsMentor2,
                          amountReceived: e.target.value,
                          score: 25 * e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>
                  {data.projectAsMentor2.score}
                </TableCell>
                <TableCell align='center'>
                  
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  {/* <Input
                    value={data.projectAsMentor3.nameOfProjectAndFundAgency}
                    onChange={(e) =>
                      setData({
                        ...data,
                        projectAsMentor3: {
                          ...data.projectAsMentor3,
                          nameOfProjectAndFundAgency: e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>
                  {/* <Input
                    value={data.projectAsMentor3.amountReceived}
                    onChange={(e) =>
                      setData({
                        ...data,
                        projectAsMentor3: {
                          ...data.projectAsMentor3,
                          amountReceived: e.target.value,
                          score: 25 * e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>
                  {data.projectAsMentor3.score}
                </TableCell>
                <TableCell align='center'>
                  
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  {/* <Input
                    value={data.projectAsMentor4.nameOfProjectAndFundAgency}
                    onChange={(e) =>
                      setData({
                        ...data,
                        projectAsMentor4: {
                          ...data.projectAsMentor4,
                          nameOfProjectAndFundAgency: e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>
                  {/* <Input
                    value={data.projectAsMentor4.amountReceived}
                    onChange={(e) =>
                      setData({
                        ...data,
                        projectAsMentor4: {
                          ...data.projectAsMentor4,
                          amountReceived: e.target.value,
                          score: 25 * e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>
                  {data.projectAsMentor4.score}
                </TableCell>
                <TableCell align='center'>
                 
                  
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  {/* <Input
                    value={data.projectAsMentor5.nameOfProjectAndFundAgency}
                    onChange={(e) =>
                      setData({
                        ...data,
                        projectAsMentor5: {
                          ...data.projectAsMentor5,
                          nameOfProjectAndFundAgency: e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>
                  {/* <Input
                    value={data.projectAsMentor5.amountReceived}
                    onChange={(e) =>
                      setData({
                        ...data,
                        projectAsMentor5: {
                          ...data.projectAsMentor5,
                          amountReceived: e.target.value,
                          score: 25 * e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>
                  {data.projectAsMentor5.score}
                </TableCell>
                <TableCell align='center'>
                  
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component='th'>29</TableCell>
                <TableCell colSpan={6}>
                  {" "}
                  Fund Generated Through Consultancy during June 2020 to May
                  2021
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>Name of Consultant Work</TableCell>
                <TableCell align='center'>
                  Amount Generated in Lakhs (Enter 1.00 for 1 Lakh, 0.2 for
                  twenty thousand)
                </TableCell>
                <TableCell align='center'>Points Scored</TableCell>
                <TableCell align='center'>Upload Proof</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  {/* <Input
                    value={data.consultantWork.nameOfWork}
                    onChange={(e) =>
                      setData({
                        ...data,
                        consultantWork: {
                          ...data.consultantWork,
                          nameOfWork: e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>
                  {/* <Input
                    value={data.consultantWork.amountGenerated}
                    onChange={(e) =>
                      setData({
                        ...data,
                        consultantWork: {
                          ...data.consultantWork,
                          amountGenerated: e.target.value,
                          score: 25 * e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>
                  {data.consultantWork.score}
                </TableCell>
                <TableCell align='center'>
                 
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  {/* <Input
                    value={data.consultantWork1.nameOfWork}
                    onChange={(e) =>
                      setData({
                        ...data,
                        consultantWork1: {
                          ...data.consultantWork1,
                          nameOfWork: e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>
                  {/* <Input
                    value={data.consultantWork1.amountGenerated}
                    onChange={(e) =>
                      setData({
                        ...data,
                        consultantWork1: {
                          ...data.consultantWork1,
                          amountGenerated: e.target.value,
                          score: 25 * e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>
                  {data.consultantWork1.score}
                </TableCell>
                <TableCell align='center'>
                 
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  {/* <Input
                    value={data.consultantWork2.nameOfWork}
                    onChange={(e) =>
                      setData({
                        ...data,
                        consultantWork2: {
                          ...data.consultantWork2,
                          nameOfWork: e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>
                  {/* <Input
                    value={data.consultantWork2.amountGenerated}
                    onChange={(e) =>
                      setData({
                        ...data,
                        consultantWork2: {
                          ...data.consultantWork2,
                          amountGenerated: e.target.value,
                          score: 25 * e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>
                  {data.consultantWork2.score}
                </TableCell>
                <TableCell align='center'>
                 
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  {/* <Input
                    value={data.consultantWork3.nameOfWork}
                    onChange={(e) =>
                      setData({
                        ...data,
                        consultantWork3: {
                          ...data.consultantWork3,
                          nameOfWork: e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>
                  {/* <Input
                    value={data.consultantWork3.amountGenerated}
                    onChange={(e) =>
                      setData({
                        ...data,
                        consultantWork3: {
                          ...data.consultantWork3,
                          amountGenerated: e.target.value,
                          score: 25 * e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  /> */}
                </TableCell>
                <TableCell align='center'>
                  {data.consultantWork3.score}
                </TableCell>
                <TableCell align='center'>
                 
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={4}>Total Score B</TableCell>
                <TableCell align='center'>{data.totalScore}</TableCell>
              </TableRow>
            </Table>
          </TableContainer>
          <h2 align="center">Score C</h2>
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
                {/* <Input
                  value={data.socialOutReach.nameOfActivity}
                  onChange={(e) =>
                    setData({
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
                /> */}
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setData({
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
                {/* <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadsocialOutReach}>Upload</button> */}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                {/* <Input
                  value={data.socialOutReach1.nameOfActivity}
                  onChange={(e) =>
                    setData({
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
                /> */}
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setData({
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
                {/* <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadsocialOutReach1}>Upload</button> */}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                {/* <Input
                  value={data.socialOutReach2.nameOfActivity}
                  onChange={(e) =>
                    setData({
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
                /> */}
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setData({
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
                {/* <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadsocialOutReach2}>Upload</button> */}
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
                {/* <Input
                  value={data.digitalIndiaContribution.nameOfContribution}
                  onChange={(e) =>
                    setData({
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
                /> */}
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setData({
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
                {/* <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploaddigitalIndiaContribution}>
                  Upload
                </button> */}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                {/* <Input
                  value={data.digitalIndiaContribution1.nameOfContribution}
                  onChange={(e) =>
                    setData({
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
                /> */}
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setData({
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
                {/* <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploaddigitalIndiaContribution1}>
                  Upload
                </button> */}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                {/* <Input
                  value={data.digitalIndiaContribution2.nameOfContribution}
                  onChange={(e) =>
                    setData({
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
                /> */}
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setData({
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
                {/* <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploaddigitalIndiaContribution2}>
                  Upload
                </button> */}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                {/* <Input
                  value={data.digitalIndiaContribution3.nameOfContribution}
                  onChange={(e) =>
                    setData({
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
                /> */}
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setData({
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
                {/* <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploaddigitalIndiaContribution3}>
                  Upload
                </button> */}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                {/* <Input
                  value={data.digitalIndiaContribution4.nameOfContribution}
                  onChange={(e) =>
                    setData({
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
                /> */}
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setData({
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
                {/* <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploaddigitalIndiaContribution4}>
                  Upload
                </button> */}
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
                {/* <Input
                  value={data.otherContribution.nameOfContribution}
                  onChange={(e) =>
                    setData({
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
                /> */}
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setData({
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
                {/* <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadotherContribution}>Upload</button> */}
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
                {/* <Input
                  value={data.organizingMooc.nameofEvent}
                  onChange={(e) =>
                    setData({
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
                /> */}
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setData({
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
                {/* <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadorganizingMOOC}>Upload</button> */}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                {/* <Input
                  value={data.organizingMooc1.nameofEvent}
                  onChange={(e) =>
                    setData({
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
                /> */}
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setData({
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
                {/* <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadorganizingMOOC1}>Upload</button> */}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                {/* <Input
                  value={data.organizingMooc2.nameofEvent}
                  onChange={(e) =>
                    setData({
                      ...data,
                      organizingMooc2: {
                        nameofEvent: e.target.value,
                      },
                    })
                  }
                  type='number'
                  name=''
                  id=''
                /> */}
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setData({
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
                {/* <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadorganizingMOOC2}>Upload</button> */}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                {/* <Input
                  value={data.organizingMooc3.nameofEvent}
                  onChange={(e) =>
                    setData({
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
                /> */}
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setData({
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
                {/* <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadorganizingMOOC3}>Upload</button> */}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                {/* <Input
                  value={data.organizingMooc4.nameofEvent}
                  onChange={(e) =>
                    setData({
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
                /> */}
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setData({
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
                {/* <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadorganizingMOOC4}>Upload</button> */}
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
                {/* <Input
                  value={data.organizingFDP.nameofEvent}
                  onChange={(e) =>
                    setData({
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
                /> */}
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setData({
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
                {/* <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadorganizingFDP}>Upload</button> */}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                {/* <Input
                  value={data.organizingFDP1.nameofEvent}
                  onChange={(e) =>
                    setData({
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
                /> */}
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setData({
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
                {/* <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadorganizingFDP1}>Upload</button> */}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                {/* <Input
                  value={data.organizingFDP2.nameofEvent}
                  onChange={(e) =>
                    setData({
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
                /> */}
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setData({
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
                {/* <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadorganizingFDP2}>Upload</button> */}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                {/* <Input
                  value={data.organizingFDP3.nameofEvent}
                  onChange={(e) =>
                    setData({
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
                /> */}
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setData({
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
                {/* <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadorganizingFDP3}>Upload</button> */}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                {/* <Input
                  value={data.organizingFDP4.nameofEvent}
                  onChange={(e) =>
                    setData({
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
                /> */}
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setData({
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
                {/* <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadorganizingFDP4}>Upload</button> */}
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
                {/* <Input
                  value={data.organizingWorkshop.nameofEvent}
                  onChange={(e) =>
                    setData({
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
                /> */}
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setData({
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
                {/* <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadorganizingWorkshop}>Upload</button> */}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                {/* <Input
                  value={data.organizingWorkshop1.nameofEvent}
                  onChange={(e) =>
                    setData({
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
                /> */}
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setData({
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
                {/* <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadorganizingWorkshop1}>Upload</button> */}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                {/* <Input
                  value={data.organizingWorkshop2.nameofEvent}
                  onChange={(e) =>
                    setData({
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
                /> */}
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setData({
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
                {/* <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadorganizingWorkshop2}>Upload</button> */}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                {/* <Input
                  value={data.organizingWorkshop3.nameofEvent}
                  onChange={(e) =>
                    setData({
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
                /> */}
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setData({
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
                {/* <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadorganizingWorkshop3}>Upload</button> */}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                {/* <Input
                  value={data.organizingWorkshop4.nameofEvent}
                  onChange={(e) =>
                    setData({
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
                /> */}
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setData({
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
                {/* <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadorganizingWorkshop4}>Upload</button> */}
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
                {/* <Input
                  value={data.participationInMOOC.nameofEvent}
                  onChange={(e) =>
                    setData({
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
                /> */}
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setData({
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
                {/* <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadParticipationInMOOC}>Upload</button> */}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                {/* <Input
                  value={data.participationInMOOC1.nameofEvent}
                  onChange={(e) =>
                    setData({
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
                /> */}
              </TableCell>
              <TableCell align='center'>
                {" "}
                <select
                  onChange={(e) =>
                    setData({
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
                {/* <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadParticipationInMOOC1}>Upload</button> */}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                {/* <Input
                  value={data.participationInMOOC2.nameofEvent}
                  onChange={(e) =>
                    setData({
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
                /> */}
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setData({
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
                {/* <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadParticipationInMOOC3}>Upload</button> */}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                {/* <Input
                  value={data.participationInMOOC3.nameofEvent}
                  onChange={(e) =>
                    setData({
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
                /> */}
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setData({
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
                {/* <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadParticipationInMOOC4}>Upload</button> */}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                {/* <Input
                  value={data.participationInMOOC4.nameofEvent}
                  onChange={(e) =>
                    setData({
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
                /> */}
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setData({
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
                {/* <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadParticipationInMOOC4}>Upload</button> */}
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
                {/* <Input
                  value={data.participationInFDP.nameofEvent}
                  onChange={(e) =>
                    setData({
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
                /> */}
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setData({
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
                {/* <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadParticipationInFDP}>Upload</button> */}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                {/* <Input
                  value={data.participationInFDP1.nameofEvent}
                  onChange={(e) =>
                    setData({
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
                /> */}
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setData({
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
                {/* <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadParticipationInFDP1}>Upload</button> */}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                {/* <Input
                  value={data.participationInFDP2.nameofEvent}
                  onChange={(e) =>
                    setData({
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
                /> */}
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setData({
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
                {/* <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadParticipationInFDP2}>Upload</button> */}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
               <TableCell align='center'>
                {/* <Input
                  value={data.participationInFDP3.nameofEvent}
                  onChange={(e) =>
                    setData({
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
                /> */}
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setData({
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
                {/* <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadParticipationInFDP}>Upload</button> */}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                {/* <Input
                  value={data.participationInFDP4.nameofEvent}
                  onChange={(e) =>
                    setData({
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
                /> */}
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setData({
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
                {/* <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadorganizingFDP4}>Upload</button> */}
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
                {/* <Input
                  value={data.participationInWorkshop.nameofEvent}
                  onChange={(e) =>
                    setData({
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
                /> */}
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setData({
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
                {/* <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadParticipationInWorkshop}>
                  Upload
                </button> */}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                {/* <Input
                  value={data.participationInWorkshop1.nameofEvent}
                  onChange={(e) =>
                    setData({
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
                /> */}
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setData({
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
                {/* <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadParticipationInWorkshop1}>
                  Upload
                </button> */}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                {/* <Input
                  value={data.participationInWorkshop2.nameofEvent}
                  onChange={(e) =>
                    setData({
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
                /> */}
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setData({
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
                {/* <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadParticipationInWorkshop2}>
                  Upload
                </button> */}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                {/* <Input
                  value={data.participationInWorkshop3.nameofEvent}
                  onChange={(e) =>
                    setData({
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
                /> */}
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setData({
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
                {/* <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadParticipationInWorkshop3}>
                  Upload
                </button> */}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                {/* <Input
                  value={data.participationInWorkshop4.nameofEvent}
                  onChange={(e) =>
                    setData({
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
                /> */}
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setData({
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
                {/* <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadParticipationInWorkshop4}>
                  Upload
                </button> */}
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
                {/* <Input
                  value={data.fundGeneration.nameofEvent}
                  onChange={(e) =>
                    setData({
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
                /> */}
              </TableCell>
              <TableCell align='center'>
                {/* <Input
                  value={data.fundGeneration.amountGenerated}
                  onChange={(e) =>
                    setData({
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
                /> */}
              </TableCell>
              <TableCell align='center'>{data.fundGeneration.score}</TableCell>
              <TableCell align='center'>
                {/* <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadFundGeneration}>Upload</button> */}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                {/* <Input
                  value={data.fundGeneration1.nameofEvent}
                  onChange={(e) =>
                    setData({
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
                /> */}
              </TableCell>
              <TableCell align='center'>
                {/* <Input
                  value={data.fundGeneration1.amountGenerated}
                  onChange={(e) =>
                    setData({
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
                /> */}
              </TableCell>
              <TableCell align='center'>{data.fundGeneration1.score}</TableCell>
              <TableCell align='center'>
                {/* <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadFundGeneration1}>Upload</button> */}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                {/* <Input
                  value={data.fundGeneration2.nameofEvent}
                  onChange={(e) =>
                    setData({
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
                /> */}
              </TableCell>
              <TableCell align='center'>
                {/* <Input
                  value={data.fundGeneration2.amountGenerated}
                  onChange={(e) =>
                    setData({
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
                /> */}
              </TableCell>
              <TableCell align='center'>{data.fundGeneration2.score}</TableCell>
              <TableCell align='center'>
                {/* <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadFundGeneration2}>Upload</button> */}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                {/* <Input
                  value={data.fundGeneration3.nameofEvent}
                  onChange={(e) =>
                    setData({
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
                /> */}
              </TableCell>
              <TableCell align='center'>
                {/* <Input
                  value={data.fundGeneration3.amountGenerated}
                  onChange={(e) =>
                    setData({
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
                /> */}
              </TableCell>
              <TableCell align='center'>{data.fundGeneration3.score}</TableCell>
              <TableCell align='center'>
                {/* <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadFundGeneration3}>Upload</button> */}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                {/* <Input
                  value={data.fundGeneration4.nameofEvent}
                  onChange={(e) =>
                    setData({
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
                /> */}
              </TableCell>
              <TableCell align='center'>
                {/* <Input
                  value={data.fundGeneration4.amountGenerated}
                  onChange={(e) =>
                    setData({
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
                /> */}
              </TableCell>
              <TableCell align='center'>{data.fundGeneration4.score}</TableCell>
              <TableCell align='center'>
                {/* <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadFundGeneration4}>Upload</button> */}
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
                    setData({
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
                {/* <Input
                  value={data.industryLinkage.noOfActivities}
                  onChange={(e) =>
                    setData({
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
                /> */}
              </TableCell>
              <TableCell align='center'>{data.industryLinkage.score}</TableCell>
              <TableCell align='center'>
                {/* <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadindustryLinkage}>Upload</button> */}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setData({
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
                {/* <Input
                  value={data.industryLinkage1.noOfActivities}
                  onChange={(e) =>
                    setData({
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
                /> */}
              </TableCell>
              <TableCell align='center'>
                {data.industryLinkage1.score}
              </TableCell>
              <TableCell align='center'>
                {/* <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadindustryLinkage1}>Upload</button> */}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setData({
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
                {/* <Input
                  value={data.industryLinkage2.noOfActivities}
                  onChange={(e) =>
                    setData({
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
                /> */}
              </TableCell>
              <TableCell align='center'>
                {data.industryLinkage2.score}
              </TableCell>
              <TableCell align='center'>
                {/* <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadindustryLinkage2}>Upload</button> */}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setData({
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
                {/* <Input
                  value={data.industryLinkage3.noOfActivities}
                  onChange={(e) =>
                    setData({
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
                /> */}
              </TableCell>
              <TableCell align='center'>
                {data.industryLinkage3.score}
              </TableCell>
              <TableCell align='center'>
                {/* <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadindustryLinkage3}>Upload</button> */}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setData({
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
                {/* <Input
                  value={data.industryLinkage4.noOfActivities}
                  onChange={(e) =>
                    setData({
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
                /> */}
              </TableCell>
              <TableCell align='center'>
                {data.industryLinkage4.score}
              </TableCell>
              <TableCell align='center'>
                {/* <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadindustryLinkage4}>Upload</button> */}
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
                    setData({
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
                {/* <Input
                  value={data.organizingLectures.noOfLec}
                  onChange={(e) =>
                    setData({
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
                /> */}
              </TableCell>
              <TableCell align='center'>
                {data.organizingLectures.score}
              </TableCell>
              <TableCell align='center'>
                {/* <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadorganizingLecture}>Upload</button> */}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setData({
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
                {/* <Input
                  value={data.organizingLectures1.noOfLec}
                  onChange={(e) =>
                    setData({
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
                /> */}
              </TableCell>
              <TableCell align='center'>
                {data.organizingLectures1.score}
              </TableCell>
              <TableCell align='center'>
                {/* <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadorganizingLecture1}>Upload</button> */}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setData({
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
                {/* <Input
                  value={data.organizingLectures2.noOfLec}
                  onChange={(e) =>
                    setData({
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
                /> */}
              </TableCell>
              <TableCell align='center'>
                {data.organizingLectures2.score}
              </TableCell>
              <TableCell align='center'>
                {/* <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadorganizingLecture2}>Upload</button> */}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setData({
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
                {/* <Input
                  value={data.organizingLectures3.noOfLec}
                  onChange={(e) =>
                    setData({
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
                /> */}
              </TableCell>
              <TableCell align='center'>
                {data.organizingLectures3.score}
              </TableCell>
              <TableCell align='center'>
                {/* <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadorganizingLecture3}>Upload</button> */}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setData({
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
                {/* <Input
                  value={data.organizingLectures4.noOfLec}
                  onChange={(e) =>
                    setData({
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
                /> */}
              </TableCell>
              <TableCell align='center'>
                {data.organizingLectures4.score}
              </TableCell>
              <TableCell align='center'>
                {/* <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadorganizingLecture4}>Upload</button> */}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setData({
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
                {/* <Input
                  value={data.organizingLectures5.noOfLec}
                  onChange={(e) =>
                    setData({
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
                /> */}
              </TableCell>
              <TableCell align='center'>
                {data.organizingLectures5.score}
              </TableCell>
              <TableCell align='center'>
                {/* <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadorganizingLecture5}>Upload</button> */}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setData({
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
                {/* <Input
                  value={data.organizingLectures6.noOfLec}
                  onChange={(e) =>
                    setData({
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
                /> */}
              </TableCell>
              <TableCell align='center'>
                {data.organizingLectures6.score}
              </TableCell>
              <TableCell align='center'>
                {/* <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadorganizingLecture6}>Upload</button> */}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setData({
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
                {/* <Input
                  value={data.organizingLectures7.noOfLec}
                  onChange={(e) =>
                    setData({
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
                /> */}
              </TableCell>
              <TableCell align='center'>
                {data.organizingLectures7.score}
              </TableCell>
              <TableCell align='center'>
                {/* <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadorganizingLecture7}>Upload</button> */}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setData({
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
                {/* <Input
                  value={data.organizingLectures8.noOfLec}
                  onChange={(e) =>
                    setData({
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
                /> */}
              </TableCell>
              <TableCell align='center'>
                {data.organizingLectures8.score}
              </TableCell>
              <TableCell align='center'>
                {/* <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadorganizingLecture8}>Upload</button> */}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setData({
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
                {/* <Input
                  value={data.organizingLectures9.noOfLec}
                  onChange={(e) =>
                    setData({
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
                /> */}
              </TableCell>
              <TableCell align='center'>
                {data.organizingLectures9.score}
              </TableCell>
              <TableCell align='center'>
                {/* <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadorganizingLecture9}>Upload</button> */}
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
                    setData({
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
                {/* <Input
                  value={data.invitedTalk.activityName}
                  onChange={(e) =>
                    setData({
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
                /> */}
              </TableCell>
              <TableCell align='center'>{data.invitedTalk.score}</TableCell>
              <TableCell align='right'>
                {/* <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadinvitedtalk}>Upload</button> */}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setData({
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
                {/* <Input
                  value={data.invitedTalk1.activityName}
                  onChange={(e) =>
                    setData({
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
                /> */}
              </TableCell>
              <TableCell align='center'>{data.invitedTalk1.score}</TableCell>
              <TableCell align='right'>
                {/* <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadinvitedtalk1}>Upload</button> */}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setData({
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
                {/* <Input
                  value={data.invitedTalk2.activityName}
                  onChange={(e) =>
                    setData({
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
                /> */}
              </TableCell>
              <TableCell align='center'>{data.invitedTalk2.score}</TableCell>
              <TableCell align='right'>
                {/* <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadinvitedtalk2}>Upload</button> */}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setData({
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
                {/* <Input
                  value={data.invitedTalk3.activityName}
                  onChange={(e) =>
                    setData({
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
                /> */}
              </TableCell>
              <TableCell align='center'>{data.invitedTalk3.score}</TableCell>
              <TableCell align='right'>
                {/* <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadinvitedtalk3}>Upload</button> */}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align='center'>
                <label for='Outreach'></label>
              </TableCell>
              <TableCell align='center'>
                <select
                  onChange={(e) =>
                    setData({
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
                {/* <Input
                  value={data.invitedTalk4.activityName}
                  onChange={(e) =>
                    setData({
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
                /> */}
              </TableCell>
              <TableCell align='center'>{data.invitedTalk4.score}</TableCell>
              <TableCell align='right'>
                {/* <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadinvitedtalk4}>Upload</button> */}
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
                    setData({
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
                {/* <Input
                  value={data.additionalResp.responsibleForDept}
                  onChange={(e) =>
                    setData({
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
                /> */}
              </TableCell>
              <TableCell align='center'>{data.additionalResp.score}</TableCell>
              <TableCell align='right'>
                {/* <input
                  type='file'
                  name='file-upload'
                  onChange={onChangeImage}
                />
                <button onClick={onUploadadditionalResp}>Upload</button> */}
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
      </div>
    </>
  );
}
