const FormC = require("../models/formCSchema");

const formCControl = {
  createFormC: async (req, res) => {
    console.log("form c api got hit");
    try {
      console.log(req.body);
      let getForm = await FormC.find({
        userId: req.user.id,
      });
      if (getForm.length !== 0) {
        return res
          .status(200)
          .json({ msg: "You have already filled the form" });
      }

      let userId = req.user.id;
      let acadYear = req.body.acadYear;
      let isFilled = true;

      let data = req.body.data;

      let toatalScore =
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
        +data.additionalResp.score;

      const newForm = new FormC({
        userId,
        acadYear,
        isFilled,
        ematscore: req.body.data,
      });
      newForm.toatalScore = toatalScore;
      const savedForm = await newForm.save();
      //console.log(savedForm);
      res.status(200).json(savedForm);
      //res.json({msg: "Register Successful!"})
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: err.message });
    }
  },
  getAllForm: async (req, res) => {
    try {
      let allForms = await FormC.find();
      res.status(200).json(allForms);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getFormCDataByUserId: async (req, res) => {
    let userId = req.params.userId;
    console.log(userId);

    try {
      const formData = await FormC.findOne({
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
      const updatedForm = await FormC.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true },
      );
      res.status(200).json({ msg: "Form updated successfully" });
    } catch (err) {
      next(err);
    }
  },

  changeStatusFormC: async (req, res) => {
    let formId = req.params.formId;

    const status = req.body.status;
    const message = req.body.statusMsg;
    // console.log({
    //   status,
    //   message,
    // });

    try {
      const formData = await FormC.findByIdAndUpdate(formId, {
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

module.exports = formCControl;
