const FormB = require("../models/formBSchema");

const formBControl = {
  createFormB: async (req, res) => {
    console.log(req.body.data);
    try {
      let getForm = await FormB.find({
        userId: req.user.id,
      });
      console.log(getForm.length, "-----------");
      // changes need to be done
      if (getForm.length !== 0) {
        return res
          .status(200)
          .json({ msg: "You have already filled the form" });
      }
      let userId = req.user.id;
      let acadYear = req.body.acadYear;
      let isFilled = true;
      const newForm = new FormB({
        userId,
        acadYear,
        isFilled,
        ematscore: req.body.data,
      });
      let data = req.body.data;
      let totalScore =
        data.singleAuthor.score +
        data.singleAuthor1.score +
        data.singleAuthor2.score +
        data.singleAuthor3.score +
        data.singleAuthor4.score +
        data.firstAndCorrAuthSame.score +
        data.firstAndCorrAuthSame1.score +
        data.firstAndCorrAuthSame2.score +
        data.firstAndCorrAuthSame3.score +
        data.firstAndCorrAuthSame4.score +
        +data.firstFromSatyabamaSecondDiff.score +
        data.firstFromSatyabamaSecondDiff1.score +
        data.firstFromSatyabamaSecondDiff2.score +
        data.firstFromSatyabamaSecondDiff3.score +
        data.consultantWork1.score +
        data.consultantWork2.score +
        data.consultantWork3.score +
        data.consultantWork.score +
        data.commercialProdDev.score +
        data.firstFromOtherSecondSatyabama.score +
        data.firstFromOtherSecondSatyabama1.score +
        data.firstFromOtherSecondSatyabama2.score +
        data.firstFromOtherInstituteSatyabama.score +
        data.firstFromOtherInstituteSatyabama1.score +
        data.firstFromOtherInstituteSatyabama2.score +
        data.firstFromOtherInstituteSatyabama3.score +
        data.firstFromOtherInstituteSatyabama4.score +
        data.ugcCareJournal.score +
        data.ugcCareJournal1.score +
        data.ugcCareJournal2.score +
        data.ugcCareJournal3.score +
        data.ugcCareJournal4.score +
        data.researchActivities.score +
        data.researchActivities1.score +
        data.researchActivities2.score +
        data.researchActivities3.score +
        data.bookChapterPublished.score +
        data.bookChapterPublished1.score +
        data.bookChapterPublished2.score +
        data.bookChapterPublished3.score +
        data.productPatent.score +
        data.productPatent1.score +
        data.productPatent2.score +
        data.productPatent3.score +
        data.articlePublished.score +
        data.articlePublished1.score +
        data.articlePublished2.score +
        data.articlePublished3.score +
        data.commercialProdDev.score +
        data.startUp.score +
        data.researchGuideFullTime.score +
        data.researchGuidePartTime.score +
        data.researchGuideFullTimeCompleted.score +
        data.researchGuidePartTimeCompleted.score +
        data.projectAsPI.score +
        data.projectAsPI1.score +
        data.projectAsPI2.score +
        data.projectAsPI3.score +
        data.projectAsCoPI.score +
        data.projectAsCoPI1.score +
        data.projectAsCoPI2.score +
        data.projectAsCoPI3.score +
        data.projectAsMentor.score +
        data.projectAsMentor1.score +
        data.projectAsMentor2.score +
        data.projectAsMentor3.score +
        data.projectAsMentor4.score +
        data.projectAsMentor5.score +
        data.articlePublished.score +
        data.articlePublished1.score +
        data.articlePublished2.score +
        data.articlePublished3.score +
        data.reviews.score +
        data.reviews1.score +
        data.reviews2.score +
        data.reviews3.score +
        data.firstFromOtherSecondSatyabama3.score +
        data.firstFromOtherSecondSatyabama4.score +
        data.coAuthors.score +
        data.coAuthors1.score +
        data.coAuthors2.score +
        data.coAuthors3.score;
      //console.log(req.body.data);
      newForm.totalScore = totalScore;
      const savedForm = await newForm.save();
      console.log(savedForm);
      res.status(200).json(savedForm);
      //res.json({msg: "Register Successful!"})
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: err.message });
    }
  },
  getAllForm: async (req, res) => {
    try {
      let allForms = await FormB.find();
      res.status(200).json(allForms);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getFormBDataByUserId: async (req, res) => {
    let userId = req.params.userId;

    try {
      const formData = await FormB.findOne({
        userId: userId,
      });
      res.status(200).json(formData);
      //res.json({msg: "Register Successful!"})
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  updateForm: async (req, res, next) => {
    try {
      const updatedForm = await FormB.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true },
      );
      res.status(200).json({ msg: "Form updated successfully" });
    } catch (err) {
      next(err);
    }
  },
  changeStatusFormB: async (req, res) => {
    let formId = req.params.formId;

    const status = req.body.status;
    const message = req.body.statusMsg;
    // console.log({
    //   status,
    //   message,
    // });

    try {
      const formData = await FormB.findByIdAndUpdate(formId, {
        status: {
          currStatus: status,
          statusMsg: message,
        },
      });
      res.status(200).json({ msg: "Status updated successfully" });
      //res.json({msg: "Register Successful!"})
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = formBControl;
