const FormA = require("../models/formASchema");

const formAControl = {
  createFormA: async (req, res) => {
    console.log("form A got hit");
    try {
      let getForm = await FormA.find({
        userId: req.user.id,
      });

      //console.log(getForm);
      if (getForm.length !== 0) {
        return res
          .status(200)
          .json({ msg: "You have already filled the form" });
      } else {
        const newForm = new FormA({
          userId: req.user.id,
          acadYear: req.body.acadYear,
          isFormFiled: true,
          ematscore: req.body.ematscore,
        });
        const {
          eMaterialUdemy,
          eMaterialSatyabama,
          courseInEmergingArea,
          youtubeLec1,
          youtubeLec2,
          youtubeLec3,
          extraTeachingActivity,
          awards,
          memberInOtherAcadBoard,
          valueAddedProg,
          overAllContribution,
          evaluationOfExamPaper,
          mentorInHackathon,
        } = req.body.ematscore;
        let totalScore =
          eMaterialUdemy.pointScored +
          eMaterialSatyabama.pointScored +
          courseInEmergingArea.pointScored +
          youtubeLec1.pointScored +
          youtubeLec2.pointScored +
          youtubeLec3.pointScored +
          extraTeachingActivity.pointScored +
          awards.pointScored +
          memberInOtherAcadBoard.pointScored +
          valueAddedProg.pointScored +
          overAllContribution.pointScored +
          evaluationOfExamPaper.pointScored +
          mentorInHackathon.pointScored;
        newForm.totalScore = totalScore;
        const savedForm = await newForm.save();
        //console.log(savedForm);
        res.status(200).json(savedForm);
        //res.json({msg: "Register Successful!"})
      }
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: err.message });
    }
  },

  updateForm: async (req, res, next) => {
    try {
      const updatedForm = await FormA.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true },
      );
      res.status(200).json({ msg: "Form updated successfully" });
    } catch (err) {
      next(err);
    }
  },

  getAllForm: async (req, res) => {
    try {
      let allForms = await FormA.find();
      res.status(200).json(allForms);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getFormADataByUserId: async (req, res) => {
    let userId = req.params.userId;
    console.log(userId);

    try {
      let formData = await FormA.findOne({
        userId: userId,
      });

      res.status(200).json(formData);

      //res.json({msg: "Register Successful!"})
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  changeStatusFormA: async (req, res) => {
    let formId = req.params.formId;

    const status = req.body.status;
    const message = req.body.statusMsg;
    // console.log({
    //   status,
    //   message,
    // });

    try {
      const formData = await FormA.findByIdAndUpdate(formId, {
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

module.exports = formAControl;
