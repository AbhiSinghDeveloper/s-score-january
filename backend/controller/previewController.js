const FormB = require("../models/formBSchema");
const FormC = require("../models/formCSchema");
const FormA = require("../models/formASchema");
const User = require("../models/userSchema");

exports.PreviewForms = async (req, res) => {
  try {
    let getFormA = await FormA.findOne({
      userId: req.user.id,
    });
    let getFormB = await FormB.findOne({
      userId: req.user.id,
    });
    let getFormC = await FormC.findOne({
      userId: req.user.id,
    });

    return res.status(200).json({
      FormA: getFormA,
      FromB: getFormB,
      FormC: getFormC,
    });
  } catch (e) {
    console.log(e);
    return res.status(400).json({ msg: "something error occurred" });
  }
};

exports.finalScore = async (req, res) => {
  //   let userData = req.user;
  let ScoreA = await FormA.findOne({
    userId: req.user.id,
  });
  let ScoreB = await FormB.findOne({
    userId: req.user.id,
  });
  let ScoreC = await FormC.findOne({
    userId: req.user.id,
  });
  let userData = await User.findOne({
    userId: req.user.id,
  });
  let totalScore = ScoreA.totalScore + ScoreB.totalScore + ScoreC.toatalScore;
  console.log(
    "total ----------",
    totalScore,
    ScoreA.totalScore,
    ScoreB.totalScore,
    ScoreC.toatalScore,
  );
  return res.status(200).json({
    ScoreA: ScoreA.totalScore,
    ScoreB: ScoreB.totalScore,
    ScoreC: ScoreC.toatalScore,
    totalScore: totalScore,
    UserData: userData,
  });
};
