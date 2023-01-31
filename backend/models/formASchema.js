const { model, Schema } = require("mongoose");

const formASchema = new Schema({
  userId: { type: String },
  acadYear: { type: String, default: 0 }, // things need to be done here
  isFormFiled: {
    type: Boolean,
    default: false,
  },
  ematscore: {
    eMaterialUdemy: {
      pointsAlloted: {
        type: Number,
      },
      noOfActivity: {
        type: Number,
      },
      pointScored: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },
    eMaterialSatyabama: {
      pointsAlloted: {
        type: Number,
      },
      noOfActivity: {
        type: Number,
      },
      pointScored: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },
    courseInEmergingArea: {
      pointsAlloted: {
        type: Number,
      },
      noOfActivity: {
        type: Number,
      },
      pointScored: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },
    youtubeLec1: {
      pointsAlloted: {
        type: Number,
      },
      noOfActivity: {
        type: Number,
      },
      pointScored: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },
    youtubeLec2: {
      pointsAlloted: {
        type: Number,
      },
      noOfActivity: {
        type: Number,
      },
      pointScored: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },
    youtubeLec3: {
      pointsAlloted: {
        type: Number,
      },
      noOfActivity: {
        type: Number,
      },
      pointScored: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },
    extraTeachingActivity: {
      pointsAlloted: {
        type: Number,
      },
      noOfActivity: {
        type: Number,
      },
      pointScored: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },
    awards: {
      pointsAlloted: {
        type: Number,
      },
      noOfActivity: {
        type: Number,
      },
      pointScored: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },
    memberInOtherAcadBoard: {
      pointsAlloted: {
        type: Number,
      },
      noOfActivity: {
        type: Number,
      },
      pointScored: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },
    valueAddedProg: {
      pointsAlloted: {
        type: Number,
      },
      noOfActivity: {
        type: Number,
      },
      pointScored: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },
    overAllContribution: {
      pointsAlloted: {
        type: Number,
      },
      noOfActivity: {
        type: Number,
      },
      pointScored: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },
    evaluationOfExamPaper: {
      pointsAlloted: {
        type: Number,
      },
      noOfActivity: {
        type: Number,
      },
      pointScored: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },
    mentorInHackathon: {
      pointsAlloted: {
        type: Number,
      },
      noOfActivity: {
        type: Number,
      },
      pointScored: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },
  },
  totalScore: {
    type: Number,
  },
  status: {
    currStatus: {
      type: String,
      default: "pending",
    },
    statusMsg: {
      type: String,
      default: "pending",
    },
  },
  created: String,
});

module.exports = model("FormA", formASchema);
