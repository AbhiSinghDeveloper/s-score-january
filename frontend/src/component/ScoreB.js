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

const initialState = {
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
  totalScore: 1110,
};

const ScoreB = (props) => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(
    props.edit !== undefined
      ? JSON.parse(localStorage.getItem("formb"))
      : initialState,
  );
  console.log(typeof data.articleScore.hIndex, "ashish");

  const onChangeImage = (e) => {
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  };

  const onUploadresearchActivities = async (e) => {
    e.preventDefault();

    let form_data = new FormData();
    form_data.append("image", image);

    let res = await uploadToS3(form_data);

    if (res) {
      setData({
        ...data,
        researchActivities: {
          ...data.researchActivities,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };
  const onUploadresearchActivities1 = async (e) => {
    e.preventDefault();

    let form_data = new FormData();
    form_data.append("image", image);

    let res = await uploadToS3(form_data);

    if (res) {
      setData({
        ...data,
        researchActivities1: {
          ...data.researchActivities1,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploadresearchActivities2 = async (e) => {
    e.preventDefault();

    let form_data = new FormData();
    form_data.append("image", image);

    let res = await uploadToS3(form_data);

    if (res) {
      setData({
        ...data,
        researchActivities2: {
          ...data.researchActivities2,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploadresearchActivities3 = async (e) => {
    e.preventDefault();

    let form_data = new FormData();
    form_data.append("image", image);

    let res = await uploadToS3(form_data);

    if (res) {
      setData({
        ...data,
        researchActivities3: {
          ...data.researchActivities3,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploadBookChapterPublished = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);

    if (res) {
      setData({
        ...data,
        bookChapterPublished: {
          ...data.bookChapterPublished,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };
  const onUploadBookChapterPublished1 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);

    if (res) {
      setData({
        ...data,
        bookChapterPublished1: {
          ...data.bookChapterPublished1,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };
  const onUploadBookChapterPublished2 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);

    if (res) {
      setData({
        ...data,
        bookChapterPublished2: {
          ...data.bookChapterPublished2,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploadBookChapterPublished3 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);

    if (res) {
      setData({
        ...data,
        bookChapterPublished3: {
          ...data.bookChapterPublished3,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploadArticlePublished = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);

    if (res) {
      setData({
        ...data,
        articlePublished: {
          ...data.articlePublished,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };
  const onUploadArticlePublished1 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);

    if (res) {
      setData({
        ...data,
        articlePublished1: {
          ...data.articlePublished1,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };
  const onUploadArticlePublished2 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);

    if (res) {
      setData({
        ...data,
        articlePublished2: {
          ...data.articlePublished2,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };
  const onUploadArticlePublished3 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);

    if (res) {
      setData({
        ...data,
        articlePublished3: {
          ...data.articlePublished3,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploadReviews = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);

    if (res) {
      setData({
        ...data,
        reviews: {
          ...data.reviews,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploadReviews1 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);

    if (res) {
      setData({
        ...data,
        reviews1: {
          ...data.reviews1,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };
  const onUploadReviews2 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);

    if (res) {
      setData({
        ...data,
        reviews2: {
          ...data.reviews2,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };
  const onUploadReviews3 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);

    if (res) {
      setData({
        ...data,
        reviews3: {
          ...data.reviews3,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploadProductPatent = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);

    if (res) {
      setData({
        ...data,
        productPatent: {
          ...data.productPatent,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploadProductPatent1 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);

    if (res) {
      setData({
        ...data,
        productPatent1: {
          ...data.productPatent1,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploadProductPatent2 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);

    if (res) {
      setData({
        ...data,
        productPatent2: {
          ...data.productPatent2,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploadProductPatent3 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);

    if (res) {
      setData({
        ...data,
        productPatent3: {
          ...data.productPatent3,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploadCopyright = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);

    if (res) {
      setData({
        ...data,
        copyright: {
          ...data.copyright,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploadCopyright1 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);

    if (res) {
      setData({
        ...data,
        copyright1: {
          ...data.copyright1,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };
  const onUploadCopyright2 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);

    if (res) {
      setData({
        ...data,
        copyright2: {
          ...data.copyright2,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploadCopyright3 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);

    if (res) {
      setData({
        ...data,
        copyright3: {
          ...data.copyright3,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploadCommercialProdDev = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);

    if (res) {
      setData({
        ...data,
        commercialProdDev: {
          ...data.commercialProdDev,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploadStartup = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);

    if (res) {
      setData({
        ...data,
        startUp: {
          ...data.startUp,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploadResearchGuideFullTime = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);

    if (res) {
      setData({
        ...data,
        researchGuideFullTime: {
          ...data.researchGuideFullTime,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploadResearchGuidePartTime = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);

    if (res) {
      setData({
        ...data,
        researchGuidePartTime: {
          ...data.researchGuidePartTime,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploadResearchGuideFullTimeCompleted = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);

    if (res) {
      setData({
        ...data,
        researchGuideFullTimeCompleted: {
          ...data.researchGuideFullTimeCompleted,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploadResearchGuidePartTimeCompleted = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);

    if (res) {
      setData({
        ...data,
        researchGuidePartTimeCompleted: {
          ...data.researchGuidePartTimeCompleted,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploadProjectAsPI = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);

    if (res) {
      setData({
        ...data,
        projectAsPI: {
          ...data.projectAsPI,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploadProjectAsPI1 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);

    if (res) {
      setData({
        ...data,
        projectAsPI1: {
          ...data.projectAsPI1,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploadProjectAsPI2 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);

    if (res) {
      setData({
        ...data,
        projectAsPI2: {
          ...data.projectAsPI2,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploadProjectAsPI3 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);

    if (res) {
      setData({
        ...data,
        projectAsPI3: {
          ...data.projectAsPI3,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploadProjectAsCoPI = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);

    if (res) {
      setData({
        ...data,
        projectAsCoPI: {
          ...data.projectAsCoPI,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploadProjectAsCoPI1 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);

    if (res) {
      setData({
        ...data,
        projectAsCoPI1: {
          ...data.projectAsCoPI1,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };
  const onUploadProjectAsCoPI2 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);

    if (res) {
      setData({
        ...data,
        projectAsCoPI2: {
          ...data.projectAsCoPI2,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };
  const onUploadProjectAsCoPI3 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);

    if (res) {
      setData({
        ...data,
        projectAsCoPI3: {
          ...data.projectAsCoPI3,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploadProjectAsMentor = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);

    if (res) {
      setData({
        ...data,
        projectAsMentor: {
          ...data.projectAsMentor,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploadProjectAsMentor1 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);

    if (res) {
      setData({
        ...data,
        projectAsMentor1: {
          ...data.projectAsMentor1,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };
  const onUploadProjectAsMentor2 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);

    if (res) {
      setData({
        ...data,
        projectAsMentor2: {
          ...data.projectAsMentor2,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploadProjectAsMentor3 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);

    if (res) {
      setData({
        ...data,
        projectAsMentor3: {
          ...data.projectAsMentor3,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };
  const onUploadProjectAsMentor4 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);

    if (res) {
      setData({
        ...data,
        projectAsMentor4: {
          ...data.projectAsMentor4,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploadProjectAsMentor5 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);

    if (res) {
      setData({
        ...data,
        projectAsMentor5: {
          ...data.projectAsMentor5,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploadconsultWork = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);

    if (res) {
      setData({
        ...data,
        consultantWork: {
          ...data.consultantWork,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploadconsultWork1 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);

    if (res) {
      setData({
        ...data,
        consultantWork1: {
          ...data.consultantWork1,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploadconsultWork2 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);

    if (res) {
      setData({
        ...data,
        consultantWork2: {
          ...data.consultantWork2,
          uploadProof: res.data.data.location,
        },
      });
      console.log(res);
      setLoading(false);
    }
    setImage(null);
    setLoading(false);
  };

  const onUploadconsultWork3 = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", image);
    let res = await uploadToS3(form_data);

    if (res) {
      setData({
        ...data,
        consultantWork3: {
          ...data.consultantWork3,
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
        "http://localhost:5000/b/fill-form-b",
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

        window.location.href = "/fill-c";
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <>
      {data === null ? (
        <p>Loading... Please wait</p>
      ) : (
        <>
          <h2 align='center'>Score B</h2>
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
                  Research Papers Published in Journals with Impact Factor during the selected Academic Year(Article ScoreAuthorship Position)
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
                  Single Author (Only Sathyabama Affiliation)
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align='center'>
                  <Input
                    value={data.singleAuthor.nameOfJounal}
                    onChange={(e) =>
                      setData({
                        ...data,
                        singleAuthor: {
                          ...data.singleAuthor,
                          nameOfJounal: e.target.value,
                        },
                      })
                    }
                    type='text'
                    name=''
                    id=''
                  />
                </TableCell>

                <TableCell align='center'>
                  <Input
                    value={data.singleAuthor.impactFactor}
                    onChange={(e) =>
                      setData({
                        ...data,
                        singleAuthor: {
                          ...data.singleAuthor,
                          impactFactor: e.target.value,
                          score: 30 * e.target.value,
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
                  <Input
                    value={data.singleAuthor.doiLink}
                    onChange={(e) =>
                      setData({
                        ...data,
                        singleAuthor: {
                          ...data.singleAuthor,
                          doiLink: e.target.value,
                        },
                      })
                    }
                    type='text'
                    name=''
                    id=''
                  />
                </TableCell>
                <TableCell align='center'>{data.singleAuthor.score}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell align='center'>
                  <Input
                    value={data.singleAuthor1.nameOfJounal}
                    onChange={(e) =>
                      setData({
                        ...data,
                        singleAuthor1: {
                          ...data.singleAuthor1,
                          nameOfJounal: e.target.value,
                        },
                      })
                    }
                    type='text'
                    name=''
                    id=''
                  />
                </TableCell>

                <TableCell align='center'>
                  {" "}
                  <Input
                    value={data.singleAuthor1.impactFactor}
                    onChange={(e) =>
                      setData({
                        ...data,
                        singleAuthor1: {
                          ...data.singleAuthor1,
                          impactFactor: e.target.value,
                          score: 30 * e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  />{" "}
                </TableCell>
                <TableCell align='center'>
                  {" "}
                  <Input
                    value={data.singleAuthor1.doiLink}
                    onChange={(e) =>
                      setData({
                        ...data,
                        singleAuthor1: {
                          ...data.singleAuthor1,
                          doiLink: e.target.value,
                        },
                      })
                    }
                    type='text'
                    name=''
                    id=''
                  />{" "}
                </TableCell>
                <TableCell align='center'>{data.singleAuthor1.score}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell align='center'>
                  <Input
                    value={data.singleAuthor2.nameOfJounal}
                    onChange={(e) =>
                      setData({
                        ...data,
                        singleAuthor2: {
                          ...data.singleAuthor2,
                          nameOfJounal: e.target.value,
                        },
                      })
                    }
                    type='text'
                    name=''
                    id=''
                  />
                </TableCell>

                <TableCell align='center'>
                  {" "}
                  <Input
                    value={data.singleAuthor2.impactFactor}
                    onChange={(e) =>
                      setData({
                        ...data,
                        singleAuthor2: {
                          ...data.singleAuthor2,
                          impactFactor: e.target.value,
                          score: 30 * e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  />{" "}
                </TableCell>
                <TableCell align='center'>
                  {" "}
                  <Input
                    value={data.singleAuthor2.doiLink}
                    onChange={(e) =>
                      setData({
                        ...data,
                        singleAuthor2: {
                          ...data.singleAuthor2,
                          doiLink: e.target.value,
                        },
                      })
                    }
                    type='text'
                    name=''
                    id=''
                  />{" "}
                </TableCell>
                <TableCell align='center'>{data.singleAuthor2.score}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell align='center'>
                  <Input
                    value={data.singleAuthor3.nameOfJounal}
                    onChange={(e) =>
                      setData({
                        ...data,
                        singleAuthor3: {
                          ...data.singleAuthor3,
                          nameOfJounal: e.target.value,
                        },
                      })
                    }
                    type='text'
                    name=''
                    id=''
                  />
                </TableCell>

                <TableCell align='center'>
                  {" "}
                  <Input
                    value={data.singleAuthor3.impactFactor}
                    onChange={(e) =>
                      setData({
                        ...data,
                        singleAuthor3: {
                          ...data.singleAuthor3,
                          impactFactor: e.target.value,
                          score: 30 * e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  />{" "}
                </TableCell>
                <TableCell align='center'>
                  {" "}
                  <Input
                    value={data.singleAuthor3.doiLink}
                    onChange={(e) =>
                      setData({
                        ...data,
                        singleAuthor3: {
                          ...data.singleAuthor3,
                          doiLink: e.target.value,
                        },
                      })
                    }
                    type='text'
                    name=''
                    id=''
                  />{" "}
                </TableCell>
                <TableCell align='center'>{data.singleAuthor3.score}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell align='center'>
                  <Input
                    value={data.singleAuthor4.nameOfJounal}
                    onChange={(e) =>
                      setData({
                        ...data,
                        singleAuthor4: {
                          ...data.singleAuthor4,
                          nameOfJounal: e.target.value,
                        },
                      })
                    }
                    type='text'
                    name=''
                    id=''
                  />
                </TableCell>

                <TableCell align='center'>
                  {" "}
                  <Input
                    value={data.singleAuthor4.impactFactor}
                    onChange={(e) =>
                      setData({
                        ...data,
                        singleAuthor4: {
                          ...data.singleAuthor4,
                          impactFactor: e.target.value,
                          score: 30 * e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  />{" "}
                </TableCell>
                <TableCell align='center'>
                  {" "}
                  <Input
                    value={data.singleAuthor4.doiLink}
                    onChange={(e) =>
                      setData({
                        ...data,
                        singleAuthor4: {
                          ...data.singleAuthor4,
                          doiLink: e.target.value,
                        },
                      })
                    }
                    type='text'
                    name=''
                    id=''
                  />{" "}
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
                  <Input
                    value={data.firstAndCorrAuthSame.nameOfJounal}
                    onChange={(e) =>
                      setData({
                        ...data,
                        firstAndCorrAuthSame: {
                          ...data.firstAndCorrAuthSame,
                          nameOfJounal: e.target.value,
                        },
                      })
                    }
                    type='text'
                    name=''
                    id=''
                  />
                </TableCell>

                <TableCell align='center'>
                  {" "}
                  <Input
                    value={data.firstAndCorrAuthSame.impactFactor}
                    onChange={(e) =>
                      setData({
                        ...data,
                        firstAndCorrAuthSame: {
                          ...data.firstAndCorrAuthSame,
                          impactFactor: e.target.value,
                          score: 30 * e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  />{" "}
                </TableCell>
                <TableCell align='center'>
                  {" "}
                  <Input
                    value={data.firstAndCorrAuthSame.doiLink}
                    onChange={(e) =>
                      setData({
                        ...data,
                        firstAndCorrAuthSame: {
                          ...data.firstAndCorrAuthSame,
                          doiLink: e.target.value,
                        },
                      })
                    }
                    type='text'
                    name=''
                    id=''
                  />{" "}
                </TableCell>
                <TableCell align='center'>
                  {data.firstAndCorrAuthSame.score}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align='center'>
                  <Input
                    value={data.firstAndCorrAuthSame1.nameOfJounal}
                    onChange={(e) =>
                      setData({
                        ...data,
                        firstAndCorrAuthSame1: {
                          ...data.firstAndCorrAuthSame1,
                          nameOfJounal: e.target.value,
                        },
                      })
                    }
                    type='text'
                    name=''
                    id=''
                  />
                </TableCell>

                <TableCell align='center'>
                  {" "}
                  <Input
                    value={data.firstAndCorrAuthSame1.impactFactor}
                    onChange={(e) =>
                      setData({
                        ...data,
                        firstAndCorrAuthSame1: {
                          ...data.firstAndCorrAuthSame1,
                          impactFactor: e.target.value,
                          score: 30 * e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  />{" "}
                </TableCell>
                <TableCell align='center'>
                  {" "}
                  <Input
                    value={data.firstAndCorrAuthSame1.doiLink}
                    onChange={(e) =>
                      setData({
                        ...data,
                        firstAndCorrAuthSame1: {
                          ...data.firstAndCorrAuthSame1,
                          doiLink: e.target.value,
                        },
                      })
                    }
                    type='text'
                    name=''
                    id=''
                  />{" "}
                </TableCell>
                <TableCell align='center'>
                  {data.firstAndCorrAuthSame1.score}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align='center'>
                  <Input
                    value={data.firstAndCorrAuthSame2.nameOfJounal}
                    onChange={(e) =>
                      setData({
                        ...data,
                        firstAndCorrAuthSame2: {
                          ...data.firstAndCorrAuthSame2,
                          nameOfJounal: e.target.value,
                        },
                      })
                    }
                    type='text'
                    name=''
                    id=''
                  />
                </TableCell>

                <TableCell align='center'>
                  {" "}
                  <Input
                    value={data.firstAndCorrAuthSame2.impactFactor}
                    onChange={(e) =>
                      setData({
                        ...data,
                        firstAndCorrAuthSame2: {
                          ...data.firstAndCorrAuthSame2,
                          impactFactor: e.target.value,
                          score: 30 * e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  />{" "}
                </TableCell>
                <TableCell align='center'>
                  {" "}
                  <Input
                    value={data.firstAndCorrAuthSame2.doiLink}
                    onChange={(e) =>
                      setData({
                        ...data,
                        firstAndCorrAuthSame2: {
                          ...data.firstAndCorrAuthSame2,
                          doiLink: e.target.value,
                        },
                      })
                    }
                    type='text'
                    name=''
                    id=''
                  />{" "}
                </TableCell>
                <TableCell align='center'>
                  {data.firstAndCorrAuthSame2.score}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align='center'>
                  <Input
                    value={data.firstAndCorrAuthSame3.nameOfJounal}
                    onChange={(e) =>
                      setData({
                        ...data,
                        firstAndCorrAuthSame3: {
                          ...data.firstAndCorrAuthSame3,
                          nameOfJounal: e.target.value,
                        },
                      })
                    }
                    type='text'
                    name=''
                    id=''
                  />
                </TableCell>

                <TableCell align='center'>
                  {" "}
                  <Input
                    value={data.firstAndCorrAuthSame3.impactFactor}
                    onChange={(e) =>
                      setData({
                        ...data,
                        firstAndCorrAuthSame3: {
                          ...data.firstAndCorrAuthSame3,
                          impactFactor: e.target.value,
                          score: 30 * e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  />{" "}
                </TableCell>
                <TableCell align='center'>
                  {" "}
                  <Input
                    value={data.firstAndCorrAuthSame3.doiLink}
                    onChange={(e) =>
                      setData({
                        ...data,
                        firstAndCorrAuthSame3: {
                          ...data.firstAndCorrAuthSame3,
                          doiLink: e.target.value,
                        },
                      })
                    }
                    type='text'
                    name=''
                    id=''
                  />{" "}
                </TableCell>
                <TableCell align='center'>
                  {data.firstAndCorrAuthSame3.score}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align='center'>
                  <Input
                    value={data.firstAndCorrAuthSame4.nameOfJounal}
                    onChange={(e) =>
                      setData({
                        ...data,
                        firstAndCorrAuthSame4: {
                          ...data.firstAndCorrAuthSame4,
                          nameOfJounal: e.target.value,
                        },
                      })
                    }
                    type='text'
                    name=''
                    id=''
                  />
                </TableCell>

                <TableCell align='center'>
                  {" "}
                  <Input
                    value={data.firstAndCorrAuthSame4.impactFactor}
                    onChange={(e) =>
                      setData({
                        ...data,
                        firstAndCorrAuthSame4: {
                          ...data.firstAndCorrAuthSame4,
                          impactFactor: e.target.value,
                          score: 30 * e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  />{" "}
                </TableCell>
                <TableCell align='center'>
                  {" "}
                  <Input
                    value={data.firstAndCorrAuthSame4.doiLink}
                    onChange={(e) =>
                      setData({
                        ...data,
                        firstAndCorrAuthSame4: {
                          ...data.firstAndCorrAuthSame4,
                          doiLink: e.target.value,
                        },
                      })
                    }
                    type='text'
                    name=''
                    id=''
                  />{" "}
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
                  <select
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
                  </select>
                </TableCell>
                <TableCell align='center'>
                  <Input
                    value={data.firstFromSatyabamaSecondDiff.nameOfJounal}
                    onChange={(e) =>
                      setData({
                        ...data,
                        firstFromSatyabamaSecondDiff: {
                          ...data.firstFromSatyabamaSecondDiff,
                          nameOfJounal: e.target.value,
                        },
                      })
                    }
                    type='text'
                    name=''
                    id=''
                  />
                </TableCell>
                <TableCell align='center'>
                  <Input
                    value={data.firstFromSatyabamaSecondDiff.impactFactor}
                    onChange={(e) =>
                      setData({
                        ...data,
                        firstFromSatyabamaSecondDiff: {
                          ...data.firstFromSatyabamaSecondDiff,
                          impactFactor: e.target.value,
                          score: 25 * e.target.value,
                        },
                      })
                    }
                    type='text'
                    name=''
                    id=''
                  />
                </TableCell>
                <TableCell align='center'>
                  <Input
                    value={data.firstFromSatyabamaSecondDiff.doiLink}
                    onChange={(e) =>
                      setData({
                        ...data,
                        firstFromSatyabamaSecondDiff: {
                          ...data.firstFromSatyabamaSecondDiff,
                          doiLink: e.target.value,
                        },
                      })
                    }
                    type='text'
                    name=''
                    id=''
                  />
                </TableCell>
                <TableCell align='center'>
                  {data.firstFromSatyabamaSecondDiff.score}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align='center'>
                  <select
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
                  </select>
                </TableCell>
                <TableCell align='center'>
                  {" "}
                  <Input
                    value={data.firstFromSatyabamaSecondDiff1.nameOfJounal}
                    onChange={(e) =>
                      setData({
                        ...data,
                        firstFromSatyabamaSecondDiff1: {
                          ...data.firstFromSatyabamaSecondDiff1,
                          nameOfJounal: e.target.value,
                        },
                      })
                    }
                    type='text'
                    name=''
                    id=''
                  />
                </TableCell>
                <TableCell align='center'>
                  {" "}
                  <Input
                    value={data.firstFromSatyabamaSecondDiff1.impactFactor}
                    onChange={(e) =>
                      setData({
                        ...data,
                        firstFromSatyabamaSecondDiff1: {
                          ...data.firstFromSatyabamaSecondDiff1,
                          impactFactor: e.target.value,
                          score: 25 * e.target.value,
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
                    value={data.firstFromSatyabamaSecondDiff1.doiLink}
                    onChange={(e) =>
                      setData({
                        ...data,
                        firstFromSatyabamaSecondDiff1: {
                          ...data.firstFromSatyabamaSecondDiff1,
                          doiLink: e.target.value,
                        },
                      })
                    }
                    type='text'
                    name=''
                    id=''
                  />
                </TableCell>
                <TableCell align='center'>
                  {data.firstFromSatyabamaSecondDiff1.score}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align='center'>
                  <select
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
                  </select>
                </TableCell>
                <TableCell align='center'>
                  {" "}
                  <Input
                    value={data.firstFromSatyabamaSecondDiff2.nameOfJounal}
                    onChange={(e) =>
                      setData({
                        ...data,
                        firstFromSatyabamaSecondDiff2: {
                          ...data.firstFromSatyabamaSecondDiff2,
                          nameOfJounal: e.target.value,
                        },
                      })
                    }
                    type='text'
                    name=''
                    id=''
                  />
                </TableCell>
                <TableCell align='center'>
                  {" "}
                  <Input
                    value={data.firstFromSatyabamaSecondDiff2.impactFactor}
                    onChange={(e) =>
                      setData({
                        ...data,
                        firstFromSatyabamaSecondDiff2: {
                          ...data.firstFromSatyabamaSecondDiff2,
                          impactFactor: e.target.value,
                          score: 25 * e.target.value,
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
                    value={data.firstFromSatyabamaSecondDiff2.doiLink}
                    onChange={(e) =>
                      setData({
                        ...data,
                        firstFromSatyabamaSecondDiff2: {
                          ...data.firstFromSatyabamaSecondDiff2,
                          doiLink: e.target.value,
                        },
                      })
                    }
                    type='text'
                    name=''
                    id=''
                  />
                </TableCell>
                <TableCell align='center'>
                  {data.firstFromSatyabamaSecondDiff2.score}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align='center'>
                  <select
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
                  </select>
                </TableCell>
                <TableCell align='center'>
                  {" "}
                  <Input
                    value={data.firstFromSatyabamaSecondDiff3.nameOfJounal}
                    onChange={(e) =>
                      setData({
                        ...data,
                        firstFromSatyabamaSecondDiff3: {
                          ...data.firstFromSatyabamaSecondDiff3,
                          nameOfJounal: e.target.value,
                        },
                      })
                    }
                    type='text'
                    name=''
                    id=''
                  />
                </TableCell>
                <TableCell align='center'>
                  {" "}
                  <Input
                    value={data.firstFromSatyabamaSecondDiff3.impactFactor}
                    onChange={(e) =>
                      setData({
                        ...data,
                        firstFromSatyabamaSecondDiff3: {
                          ...data.firstFromSatyabamaSecondDiff3,
                          impactFactor: e.target.value,
                          score: 25 * e.target.value,
                        },
                      })
                    }
                    type='text'
                    name=''
                    id=''
                  />
                </TableCell>
                <TableCell align='center'>
                  <Input
                    value={data.firstFromSatyabamaSecondDiff3.doiLink}
                    onChange={(e) =>
                      setData({
                        ...data,
                        firstFromSatyabamaSecondDiff3: {
                          ...data.firstFromSatyabamaSecondDiff3,
                          doiLink: e.target.value,
                        },
                      })
                    }
                    type='text'
                    name=''
                    id=''
                  />
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
                  <Input
                    value={data.firstFromOtherSecondSatyabama.nameOfJounal}
                    onChange={(e) =>
                      setData({
                        ...data,
                        firstFromOtherSecondSatyabama: {
                          ...data.firstFromOtherSecondSatyabama,
                          nameOfJounal: e.target.value,
                        },
                      })
                    }
                    type='text'
                    name=''
                    id=''
                  />
                </TableCell>

                <TableCell align='center'>
                  {" "}
                  <Input
                    value={data.firstFromOtherSecondSatyabama.impactFactor}
                    onChange={(e) =>
                      setData({
                        ...data,
                        firstFromOtherSecondSatyabama: {
                          ...data.firstFromOtherSecondSatyabama,
                          impactFactor: e.target.value,
                          score: 20 * e.target.value,
                        },
                      })
                    }
                    type='text'
                    name=''
                    id=''
                  />{" "}
                </TableCell>
                <TableCell align='center'>
                  {" "}
                  <Input
                    value={data.firstFromOtherSecondSatyabama.doiLink}
                    onChange={(e) =>
                      setData({
                        ...data,
                        firstFromOtherSecondSatyabama: {
                          ...data.firstFromOtherSecondSatyabama,
                          doiLink: e.target.value,
                        },
                      })
                    }
                    type='text'
                    name=''
                    id=''
                  />
                </TableCell>
                <TableCell align='center'>
                  {data.firstFromOtherSecondSatyabama.score}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align='center'>
                  <Input
                    value={data.firstFromOtherSecondSatyabama1.nameOfJounal}
                    onChange={(e) =>
                      setData({
                        ...data,
                        firstFromOtherSecondSatyabama1: {
                          ...data.firstFromOtherSecondSatyabama1,
                          nameOfJounal: e.target.value,
                        },
                      })
                    }
                    type='text'
                    name=''
                    id=''
                  />
                </TableCell>

                <TableCell align='center'>
                  {" "}
                  <Input
                    value={data.firstFromOtherSecondSatyabama1.impactFactor}
                    onChange={(e) =>
                      setData({
                        ...data,
                        firstFromOtherSecondSatyabama1: {
                          ...data.firstFromOtherSecondSatyabama1,
                          impactFactor: e.target.value,
                          score: 20 * e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  />{" "}
                </TableCell>
                <TableCell align='center'>
                  {" "}
                  <Input
                    value={data.firstFromOtherSecondSatyabama1.doiLink}
                    onChange={(e) =>
                      setData({
                        ...data,
                        firstFromOtherSecondSatyabama1: {
                          ...data.firstFromOtherSecondSatyabama1,
                          doiLink: e.target.value,
                        },
                      })
                    }
                    type='text'
                    name=''
                    id=''
                  />{" "}
                </TableCell>
                <TableCell align='center'>
                  {data.firstFromOtherSecondSatyabama1.score}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align='center'>
                  <Input
                    value={data.firstFromOtherSecondSatyabama2.nameOfJounal}
                    onChange={(e) =>
                      setData({
                        ...data,
                        firstFromOtherSecondSatyabama2: {
                          ...data.firstFromOtherSecondSatyabama2,
                          nameOfJounal: e.target.value,
                        },
                      })
                    }
                    type='text'
                    name=''
                    id=''
                  />
                </TableCell>

                <TableCell align='center'>
                  {" "}
                  <Input
                    value={data.firstFromOtherSecondSatyabama2.impactFactor}
                    onChange={(e) =>
                      setData({
                        ...data,
                        firstFromOtherSecondSatyabama2: {
                          ...data.firstFromOtherSecondSatyabama2,
                          impactFactor: e.target.value,
                          score: 20 * e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  />{" "}
                </TableCell>
                <TableCell align='center'>
                  {" "}
                  <Input
                    value={data.firstFromOtherSecondSatyabama2.doiLink}
                    onChange={(e) =>
                      setData({
                        ...data,
                        firstFromOtherSecondSatyabama2: {
                          ...data.firstFromOtherSecondSatyabama2,
                          doiLink: e.target.value,
                        },
                      })
                    }
                    type='text'
                    name=''
                    id=''
                  />{" "}
                </TableCell>
                <TableCell align='center'>
                  {data.firstFromOtherSecondSatyabama2.score}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  <Input
                    value={data.firstFromOtherSecondSatyabama3.nameOfJounal}
                    onChange={(e) =>
                      setData({
                        ...data,
                        firstFromOtherSecondSatyabama3: {
                          ...data.firstFromOtherSecondSatyabama3,
                          nameOfJounal: e.target.value,
                        },
                      })
                    }
                    type='text'
                    name=''
                    id=''
                  />
                </TableCell>

                <TableCell align='center'>
                  {" "}
                  <Input
                    value={data.firstFromOtherSecondSatyabama3.impactFactor}
                    onChange={(e) =>
                      setData({
                        ...data,
                        firstFromOtherSecondSatyabama3: {
                          ...data.firstFromOtherSecondSatyabama3,
                          impactFactor: e.target.value,
                          score: 20 * e.target.value,
                        },
                      })
                    }
                    type='text'
                    name=''
                    id=''
                  />{" "}
                </TableCell>
                <TableCell align='center'>
                  {" "}
                  <Input
                    value={data.firstFromOtherSecondSatyabama3.doiLink}
                    onChange={(e) =>
                      setData({
                        ...data,
                        firstFromOtherSecondSatyabama3: {
                          ...data.firstFromOtherSecondSatyabama3,
                          doiLink: e.target.value,
                        },
                      })
                    }
                    type='text'
                    name=''
                    id=''
                  />{" "}
                </TableCell>
                <TableCell align='center'>
                  {data.firstFromOtherSecondSatyabama3.score}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align='center'>
                  <Input
                    value={data.firstFromOtherSecondSatyabama4.nameOfJounal}
                    onChange={(e) =>
                      setData({
                        ...data,
                        firstFromOtherSecondSatyabama4: {
                          ...data.firstFromOtherSecondSatyabama4,
                          nameOfJounal: e.target.value,
                        },
                      })
                    }
                    type='text'
                    name=''
                    id=''
                  />
                </TableCell>

                <TableCell align='center'>
                  {" "}
                  <Input
                    value={data.firstFromOtherSecondSatyabama4.impactFactor}
                    onChange={(e) =>
                      setData({
                        ...data,
                        firstFromOtherSecondSatyabama4: {
                          ...data.firstFromOtherSecondSatyabama4,
                          impactFactor: e.target.value,
                          score: 20 * e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  />{" "}
                </TableCell>
                <TableCell align='center'>
                  {" "}
                  <Input
                    value={data.firstFromOtherSecondSatyabama4.doiLink}
                    onChange={(e) =>
                      setData({
                        ...data,
                        firstFromOtherSecondSatyabama4: {
                          ...data.firstFromOtherSecondSatyabama4,
                          doiLink: e.target.value,
                        },
                      })
                    }
                    type='text'
                    name=''
                    id=''
                  />{" "}
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
                  <Input
                    value={data.firstFromOtherInstituteSatyabama.nameOfJounal}
                    onChange={(e) =>
                      setData({
                        ...data,
                        firstFromOtherInstituteSatyabama: {
                          ...data.firstFromOtherInstituteSatyabama,
                          nameOfJounal: e.target.value,
                        },
                      })
                    }
                    type='text'
                    name=''
                    id=''
                  />
                </TableCell>

                <TableCell align='center'>
                  {" "}
                  <Input
                    value={data.firstFromOtherInstituteSatyabama.impactFactor}
                    onChange={(e) =>
                      setData({
                        ...data,
                        firstFromOtherInstituteSatyabama: {
                          ...data.firstFromOtherInstituteSatyabama,
                          impactFactor: e.target.value,
                          score: 15 * e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  />{" "}
                </TableCell>
                <TableCell align='center'>
                  {" "}
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
                  />{" "}
                </TableCell>
                <TableCell align='center'>
                  {data.firstFromOtherInstituteSatyabama.score}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align='center'>
                  <Input
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
                  />
                </TableCell>

                <TableCell align='center'>
                  {" "}
                  <Input
                    value={data.firstFromOtherInstituteSatyabama1.impactFactor}
                    onChange={(e) =>
                      setData({
                        ...data,
                        firstFromOtherInstituteSatyabama1: {
                          ...data.firstFromOtherInstituteSatyabama1,
                          impactFactor: e.target.value,
                          score: 15 * e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  />{" "}
                </TableCell>
                <TableCell align='center'>
                  {" "}
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
                  />{" "}
                </TableCell>
                <TableCell align='center'>
                  {data.firstFromOtherInstituteSatyabama1.score}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align='center'>
                  <Input
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
                  />
                </TableCell>

                <TableCell align='center'>
                  {" "}
                  <Input
                    value={data.firstFromOtherInstituteSatyabama2.impactFactor}
                    onChange={(e) =>
                      setData({
                        ...data,
                        firstFromOtherInstituteSatyabama2: {
                          ...data.firstFromOtherInstituteSatyabama2,
                          impactFactor: e.target.value,
                          score: 15 * e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  />{" "}
                </TableCell>
                <TableCell align='center'>
                  {" "}
                  <Input
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
                  />{" "}
                </TableCell>
                <TableCell align='center'>
                  {data.firstFromOtherInstituteSatyabama2.score}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align='center'>
                  <Input
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
                  />
                </TableCell>

                <TableCell align='center'>
                  {" "}
                  <Input
                    value={data.firstFromOtherInstituteSatyabama3.impactFactor}
                    onChange={(e) =>
                      setData({
                        ...data,
                        firstFromOtherInstituteSatyabama3: {
                          ...data.firstFromOtherInstituteSatyabama3,
                          impactFactor: e.target.value,
                          score: 15 * e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  />{" "}
                </TableCell>
                <TableCell align='center'>
                  {" "}
                  <Input
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
                  />{" "}
                </TableCell>
                <TableCell align='center'>
                  {data.firstFromOtherInstituteSatyabama3.score}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align='center'>
                  <Input
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
                  />
                </TableCell>

                <TableCell align='center'>
                  {" "}
                  <Input
                    value={data.firstFromOtherInstituteSatyabama4.impactFactor}
                    onChange={(e) =>
                      setData({
                        ...data,
                        firstFromOtherInstituteSatyabama4: {
                          ...data.firstFromOtherInstituteSatyabama4,
                          impactFactor: e.target.value,
                          score: 15 * e.target.value,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  />{" "}
                </TableCell>
                <TableCell align='center'>
                  {" "}
                  <Input
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
                  />{" "}
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
                  <select
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
                  </select>
                </TableCell>

                <TableCell align='center'>
                  <Input
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
                  />{" "}
                </TableCell>
                <TableCell align='center'>
                  <Input
                    value={data.coAuthors.impactFactor}
                    onChange={(e) =>
                      setData({
                        ...data,
                        coAuthors: {
                          ...data.coAuthors,
                          impactFactor: e.target.value,
                          score:
                            (10 * e.target.value) / data.coAuthors.AllcoAuthor,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  />{" "}
                </TableCell>
                <TableCell align='center'>
                  {" "}
                  <Input
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
                  />{" "}
                </TableCell>
                <TableCell align='center'>{data.coAuthors.score}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  <select
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
                  </select>
                </TableCell>

                <TableCell align='center'>
                  <Input
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
                  />{" "}
                </TableCell>
                <TableCell align='center'>
                  <Input
                    value={data.coAuthors1.impactFactor}
                    onChange={(e) =>
                      setData({
                        ...data,
                        coAuthors1: {
                          ...data.coAuthors1,
                          impactFactor: e.target.value,
                          score:
                            (10 * e.target.value) / data.coAuthors1.AllcoAuthor,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  />{" "}
                </TableCell>
                <TableCell align='center'>
                  {" "}
                  <Input
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
                  />{" "}
                </TableCell>
                <TableCell align='center'>{data.coAuthors1.score}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  <select
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
                  </select>
                </TableCell>

                <TableCell align='center'>
                  <Input
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
                  />{" "}
                </TableCell>
                <TableCell align='center'>
                  <Input
                    value={data.coAuthors2.impactFactor}
                    onChange={(e) =>
                      setData({
                        ...data,
                        coAuthors2: {
                          ...data.coAuthors2,
                          impactFactor: e.target.value,
                          score:
                            (10 * e.target.value) / data.coAuthors2.AllcoAuthor,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  />{" "}
                </TableCell>
                <TableCell align='center'>
                  {" "}
                  <Input
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
                  />{" "}
                </TableCell>
                <TableCell align='center'>{data.coAuthors2.score}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  <select
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
                  </select>
                </TableCell>

                <TableCell align='center'>
                  <Input
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
                  />{" "}
                </TableCell>
                <TableCell align='center'>
                  <Input
                    value={data.coAuthors3.impactFactor}
                    onChange={(e) =>
                      setData({
                        ...data,
                        coAuthors3: {
                          ...data.coAuthors3,
                          impactFactor: e.target.value,
                          score:
                            (10 * e.target.value) / data.coAuthors3.AllcoAuthor,
                        },
                      })
                    }
                    type='number'
                    name=''
                    id=''
                  />{" "}
                </TableCell>
                <TableCell align='center'>
                  {" "}
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
                  />{" "}
                </TableCell>
                <TableCell align='center'>{data.coAuthors3.score}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell align='center' colSpan={6}>
                Research Papers Published in Journals with No Impact Factor during the selected Academic Year
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
                  <Input
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
                  />{" "}
                </TableCell>
                <TableCell align='center'>
                  {" "}
                  <select
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
                  </select>
                </TableCell>
                <TableCell align='center'>
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>
                  {data.ugcCareJournal.score}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align='center'>
                  {" "}
                  <Input
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
                  />{" "}
                </TableCell>
                <TableCell align='center'>
                  {" "}
                  <select
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
                  </select>
                </TableCell>
                <TableCell align='center'>
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>
                  {data.ugcCareJournal1.score}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  {" "}
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
                  />{" "}
                </TableCell>
                <TableCell align='center'>
                  {" "}
                  <select
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
                  </select>
                </TableCell>
                <TableCell align='center'>
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>
                  {data.ugcCareJournal2.score}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  {" "}
                  <Input
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
                  />{" "}
                </TableCell>
                <TableCell align='center'>
                  {" "}
                  <select
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
                  </select>
                </TableCell>
                <TableCell align='center'>
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>
                  {data.ugcCareJournal3.score}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  <Input
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
                  />{" "}
                </TableCell>
                <TableCell align='center'>
                  {" "}
                  <select
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
                  </select>
                </TableCell>
                <TableCell align='center'>
                  <Input
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
                  />
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
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>
                  <Input
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
                  />
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
                  Books Published/Edited/Guest Editor/Editor Published (in reputed publishing house) during the selected Academic Year, Please avoid predatory publishers
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
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>
                  {data.researchActivities.score}
                </TableCell>
                <TableCell align='center'>
                  <input
                    type='file'
                    name='file-upload'
                    onChange={onChangeImage}
                  />
                  <button onClick={onUploadresearchActivities}>Upload</button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>
                  {data.researchActivities1.score}
                </TableCell>
                <TableCell align='center'>
                  <input
                    type='file'
                    name='file-upload'
                    onChange={onChangeImage}
                  />
                  <button onClick={onUploadresearchActivities1}>Upload</button>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align='center'>
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>
                  {data.researchActivities2.score}
                </TableCell>
                <TableCell align='center'>
                  <input
                    type='file'
                    name='file-upload'
                    onChange={onChangeImage}
                  />
                  <button onClick={onUploadresearchActivities2}>Upload</button>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align='center'>
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>
                  {data.researchActivities3.score}
                </TableCell>
                <TableCell align='center'>
                  <input
                    type='file'
                    name='file-upload'
                    onChange={onChangeImage}
                  />
                  <button onClick={onUploadresearchActivities3}>Upload</button>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell component='th'>15</TableCell>
                <TableCell colSpan={6}>
                  {" "}
                  Book Chapters Published (in reputed publishing house) during the selected Academic Year
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
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>
                  {data.bookChapterPublished.score}
                </TableCell>
                <TableCell align='center'>
                  <input
                    type='file'
                    name='file-upload'
                    onChange={onChangeImage}
                  />
                  <button onClick={onUploadBookChapterPublished}>Upload</button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>
                  {data.bookChapterPublished1.score}
                </TableCell>
                <TableCell align='center'>
                  <input
                    type='file'
                    name='file-upload'
                    onChange={onChangeImage}
                  />
                  <button onClick={onUploadBookChapterPublished1}>
                    Upload
                  </button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>
                  {data.bookChapterPublished2.score}
                </TableCell>
                <TableCell align='center'>
                  <input
                    type='file'
                    name='file-upload'
                    onChange={onChangeImage}
                  />
                  <button onClick={onUploadBookChapterPublished2}>
                    Upload
                  </button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>
                  {data.bookChapterPublished3.score}
                </TableCell>
                <TableCell align='center'>
                  <input
                    type='file'
                    name='file-upload'
                    onChange={onChangeImage}
                  />
                  <button onClick={onUploadBookChapterPublished3}>
                    Upload
                  </button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component='th'>16</TableCell>
                <TableCell colSpan={6}>
                  {" "}
                  Articles Published in Leading Magazines/Newsletters during the selected Academic Year
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
                  <Input
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
                  />
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
                  <input
                    type='file'
                    name='file-upload'
                    onChange={onChangeImage}
                  />
                  <button onClick={onUploadArticlePublished}>Upload</button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>
                  {data.articlePublished1.score}
                </TableCell>
                <TableCell align='center'>
                  <input
                    type='file'
                    name='file-upload'
                    onChange={onChangeImage}
                  />
                  <button onClick={onUploadArticlePublished1}>Upload</button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>
                  {data.articlePublished2.score}
                </TableCell>
                <TableCell align='center'>
                  <input
                    type='file'
                    name='file-upload'
                    onChange={onChangeImage}
                  />
                  <button onClick={onUploadArticlePublished2}>Upload</button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>
                  {data.articlePublished3.score}
                </TableCell>
                <TableCell align='center'>
                  <input
                    type='file'
                    name='file-upload'
                    onChange={onChangeImage}
                  />
                  <button onClick={onUploadArticlePublished3}>Upload</button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component='th'>17</TableCell>
                <TableCell colSpan={6}>
                  {" "}
                  Reviewer for Journals with Impact Factor during the selected Academic Year
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
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>{data.reviews.score}</TableCell>
                <TableCell align='center'>
                  <input
                    type='file'
                    name='file-upload'
                    onChange={onChangeImage}
                  />
                  <button onClick={onUploadReviews}>Upload</button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>{data.reviews1.score}</TableCell>
                <TableCell align='center'>
                  <input
                    type='file'
                    name='file-upload'
                    onChange={onChangeImage}
                  />
                  <button onClick={onUploadReviews1}>Upload</button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>{data.reviews2.score}</TableCell>
                <TableCell align='center'>
                  <input
                    type='file'
                    name='file-upload'
                    onChange={onChangeImage}
                  />
                  <button onClick={onUploadReviews2}>Upload</button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>{data.reviews3.score}</TableCell>
                <TableCell align='center'>
                  <input
                    type='file'
                    name='file-upload'
                    onChange={onChangeImage}
                  />
                  <button onClick={onUploadReviews3}>Upload</button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component='th'>18</TableCell>
                <TableCell colSpan={6}>
                  {" "}
                  Product Patent if Granted Only (All Inventors) during the selected Academic year
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
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>
                  <select
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
                  </select>
                </TableCell>
                <TableCell align='center'>{data.productPatent.score}</TableCell>
                <TableCell align='center'>
                  <input
                    type='file'
                    name='file-upload'
                    onChange={onChangeImage}
                  />
                  <button onClick={onUploadProductPatent}>Upload</button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>
                  <select
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
                  </select>
                </TableCell>
                <TableCell align='center'>
                  {data.productPatent1.score}
                </TableCell>
                <TableCell align='center'>
                  <input
                    type='file'
                    name='file-upload'
                    onChange={onChangeImage}
                  />
                  <button onClick={onUploadProductPatent1}>Upload</button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>
                  <select
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
                  </select>
                </TableCell>
                <TableCell align='center'>
                  {data.productPatent2.score}
                </TableCell>
                <TableCell align='center'>
                  <input
                    type='file'
                    name='file-upload'
                    onChange={onChangeImage}
                  />
                  <button onClick={onUploadProductPatent2}>Upload</button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>
                  <select
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
                  </select>
                </TableCell>
                <TableCell align='center'>
                  {data.productPatent3.score}
                </TableCell>
                <TableCell align='center'>
                  <input
                    type='file'
                    name='file-upload'
                    onChange={onChangeImage}
                  />
                  <button onClick={onUploadProductPatent3}>Upload</button>
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
                  Commercial Product Developed during the selected Academic Year
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
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>
                  {data.commercialProdDev.score}
                </TableCell>
                <TableCell align='center'>
                  <input
                    type='file'
                    name='file-upload'
                    onChange={onChangeImage}
                  />
                  <button onClick={onUploadCommercialProdDev}>Upload</button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component='th'>21</TableCell>
                <TableCell colSpan={6}>
                  {" "}
                  Start Up from Institute during the Academic Year
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
                  <select
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
                  </select>
                </TableCell>
                <TableCell align='center'>
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>{data.startUp.score}</TableCell>
                <TableCell align='center'>
                  <input
                    type='file'
                    name='file-upload'
                    onChange={onChangeImage}
                  />
                  <button onClick={onUploadStartup}>Upload</button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component='th'>22</TableCell>
                <TableCell colSpan={6}>
                  {" "}
                  Research Guidance (Full-Time PhD Scholar Guiding) during the selected Academic Year
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
                  <select
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
                  </select>
                </TableCell>
                <TableCell align='center'>20</TableCell>
                <TableCell align='center'>
                  {data.researchGuideFullTime.score}
                </TableCell>
                <TableCell align='center'>
                  <input
                    type='file'
                    name='file-upload'
                    onChange={onChangeImage}
                  />
                  <button onClick={onUploadResearchGuideFullTime}>
                    Upload
                  </button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component='th'>23</TableCell>
                <TableCell colSpan={6}>
                  {" "}
                  Research Guidance (Part-Time PhD Scholar Guiding) during the selected Academic Year
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
                  <select
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
                    <option value='8'>8</option>
                  </select>
                </TableCell>
                <TableCell align='center'>10</TableCell>
                <TableCell align='center'>
                  {data.researchGuidePartTime.score}
                </TableCell>
                <TableCell align='center'>
                  <input
                    type='file'
                    name='file-upload'
                    onChange={onChangeImage}
                  />
                  <button onClick={onUploadResearchGuidePartTime}>
                    Upload
                  </button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component='th'>24</TableCell>
                <TableCell colSpan={6}>
                  {" "}
                  Research Guidance (Full-Time Scholar Completed PhD) during the selected Academic Year
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
                  <select
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
                  </select>
                </TableCell>
                <TableCell align='center'>40</TableCell>
                <TableCell align='center'>
                  {data.researchGuideFullTimeCompleted.score}
                </TableCell>
                <TableCell align='center'>
                  <input
                    type='file'
                    name='file-upload'
                    onChange={onChangeImage}
                  />
                  <button onClick={onUploadResearchGuideFullTimeCompleted}>
                    Upload
                  </button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component='th'>25</TableCell>
                <TableCell colSpan={6}>
                  {" "}
                  Research Guidance (Part-Time Scholar Completed PhD) during the selected Academic Year
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
                  <select
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
                  </select>
                </TableCell>
                <TableCell align='center'>30</TableCell>
                <TableCell align='center'>
                  {data.researchGuidePartTimeCompleted.score}
                </TableCell>
                <TableCell align='center'>
                  <input
                    type='file'
                    name='file-upload'
                    onChange={onChangeImage}
                  />
                  <button onClick={onUploadResearchGuidePartTimeCompleted}>
                    Upload
                  </button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component='th'>26</TableCell>
                <TableCell colSpan={6}>
                  {" "}
                  Projects (As PI) (Based on amount received during the selected Academic Year
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  Name of Project and Funding Agency
                </TableCell>
                <TableCell align='center'>
                  Amount Recieved in Lakhs for the selected Academic Year period
                  (Enter 1.00 for 1 Lakh, 0.2 for twenty thousand)
                </TableCell>
                <TableCell align='center'>Points Scored</TableCell>
                <TableCell align='center'>Upload Proof</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>
                  {" "}
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>{data.projectAsPI.score}</TableCell>
                <TableCell align='center'>
                  <input
                    type='file'
                    name='file-upload'
                    onChange={onChangeImage}
                  />
                  <button onClick={onUploadProjectAsPI}>Upload</button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>
                  {" "}
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>{data.projectAsPI1.score}</TableCell>
                <TableCell align='center'>
                  <input
                    type='file'
                    name='file-upload'
                    onChange={onChangeImage}
                  />
                  <button onClick={onUploadProjectAsPI1}>Upload</button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>
                  {" "}
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>{data.projectAsPI2.score}</TableCell>
                <TableCell align='center'>
                  <input
                    type='file'
                    name='file-upload'
                    onChange={onChangeImage}
                  />
                  <button onClick={onUploadProjectAsPI2}>Upload</button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>
                  {" "}
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>{data.projectAsPI3.score}</TableCell>
                <TableCell align='center'>
                  <input
                    type='file'
                    name='file-upload'
                    onChange={onChangeImage}
                  />
                  <button onClick={onUploadProjectAsPI3}>Upload</button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component='th'>27</TableCell>
                <TableCell colSpan={6}>
                  {" "}
                  Projects (As Co-PI) (Based on amount received during the selected Academic Year)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  Name of Project and Funding Agency
                </TableCell>
                <TableCell align='center'>
                  Amount Recieved in Lakhs for the selected Academic Year period
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
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>{data.projectAsCoPI.score}</TableCell>
                <TableCell align='center'>
                  <input
                    type='file'
                    name='file-upload'
                    onChange={onChangeImage}
                  />
                  <button onClick={onUploadProjectAsCoPI}>Upload</button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>
                  {data.projectAsCoPI1.score}
                </TableCell>
                <TableCell align='center'>
                  <input
                    type='file'
                    name='file-upload'
                    onChange={onChangeImage}
                  />
                  <button onClick={onUploadProjectAsCoPI1}>Upload</button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>
                  {data.projectAsCoPI2.score}
                </TableCell>
                <TableCell align='center'>
                  <input
                    type='file'
                    name='file-upload'
                    onChange={onChangeImage}
                  />
                  <button onClick={onUploadProjectAsCoPI2}>Upload</button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>
                  {data.projectAsCoPI3.score}
                </TableCell>
                <TableCell align='center'>
                  <input
                    type='file'
                    name='file-upload'
                    onChange={onChangeImage}
                  />
                  <button onClick={onUploadProjectAsCoPI3}>Upload</button>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell component='th'>28</TableCell>
                <TableCell colSpan={6}>
                  {" "}
                  Projects (As Mentor/Supervisor for NPDF, UGC-Postdoc, RA,
                  WoS-A,-B,-C, etc) (Based on amount received during the selected Academic Year)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  Name of Project and Funding Agency
                </TableCell>
                <TableCell align='center'>
                  Amount Recieved in Lakhs for the selected Academic Year period
                  (Enter 1.00 for 1 Lakh, 0.2 for twenty thousand)
                </TableCell>
                <TableCell align='center'>Points Scored</TableCell>
                <TableCell align='center'>Upload Proof</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>
                  {data.projectAsMentor.score}
                </TableCell>
                <TableCell align='center'>
                  <input
                    type='file'
                    name='file-upload'
                    onChange={onChangeImage}
                  />
                  <button onClick={onUploadProjectAsMentor}>Upload</button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>
                  {data.projectAsMentor1.score}
                </TableCell>
                <TableCell align='center'>
                  <input
                    type='file'
                    name='file-upload'
                    onChange={onChangeImage}
                  />
                  <button onClick={onUploadProjectAsMentor1}>Upload</button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>
                  {data.projectAsMentor2.score}
                </TableCell>
                <TableCell align='center'>
                  <input
                    type='file'
                    name='file-upload'
                    onChange={onChangeImage}
                  />
                  <button onClick={onUploadProjectAsMentor2}>Upload</button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>
                  {data.projectAsMentor3.score}
                </TableCell>
                <TableCell align='center'>
                  <input
                    type='file'
                    name='file-upload'
                    onChange={onChangeImage}
                  />
                  <button onClick={onUploadProjectAsMentor3}>Upload</button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>
                  {data.projectAsMentor4.score}
                </TableCell>
                <TableCell align='center'>
                  <input
                    type='file'
                    name='file-upload'
                    onChange={onChangeImage}
                  />
                  <button onClick={onUploadProjectAsMentor4}>Upload</button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>
                  {data.projectAsMentor5.score}
                </TableCell>
                <TableCell align='center'>
                  <input
                    type='file'
                    name='file-upload'
                    onChange={onChangeImage}
                  />
                  <button onClick={onUploadProjectAsMentor5}>Upload</button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component='th'>29</TableCell>
                <TableCell colSpan={6}>
                  {" "}
                  Fund Generated Through Consultancy during the selected Academic Year
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
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>
                  {data.consultantWork.score}
                </TableCell>
                <TableCell align='center'>
                  <input
                    type='file'
                    name='file-upload'
                    onChange={onChangeImage}
                  />
                  <button onClick={onUploadconsultWork}>Upload</button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>
                  {data.consultantWork1.score}
                </TableCell>
                <TableCell align='center'>
                  <input
                    type='file'
                    name='file-upload'
                    onChange={onChangeImage}
                  />
                  <button onClick={onUploadconsultWork1}>Upload</button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>
                  {data.consultantWork2.score}
                </TableCell>
                <TableCell align='center'>
                  <input
                    type='file'
                    name='file-upload'
                    onChange={onChangeImage}
                  />
                  <button onClick={onUploadconsultWork2}>Upload</button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>
                  <Input
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
                  />
                </TableCell>
                <TableCell align='center'>
                  {data.consultantWork3.score}
                </TableCell>
                <TableCell align='center'>
                  <input
                    type='file'
                    name='file-upload'
                    onChange={onChangeImage}
                  />
                  <button onClick={onUploadconsultWork3}>Upload</button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={4}>Total Score B</TableCell>
                <TableCell align='center'>{data.totalScore}</TableCell>
              </TableRow>
            </Table>
          </TableContainer>
          {props.edit !== undefined ? (
            <p>Please Check all the fields</p>
          ) : (
            <button onClick={onSubmit}>Submit and Next</button>
          )}
        </>
      )}
    </>
  );
};
export default ScoreB;
