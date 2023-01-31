const { model, Schema } = require("mongoose");

const formCSchema = new Schema({
  userId: {
    type: String,
  },
  acadYear: {
    type: String,
  },
  ematscore: {
    socialOutReach1: {
      nameOfActivity: String,
      noOfActivity: {
        type: Number,
      },
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    socialOutReach2: {
      nameOfActivity: String,
      noOfActivity: {
        type: Number,
      },
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    socialOutReach: {
      nameOfActivity: String,
      noOfActivity: {
        type: Number,
      },
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    digitalIndiaContribution1: {
      nameOfContribution: String,
      noOfContribution: {
        type: Number,
      },
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    digitalIndiaContribution2: {
      nameOfContribution: String,
      noOfContribution: {
        type: Number,
      },
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    digitalIndiaContribution3: {
      nameOfContribution: String,
      noOfContribution: {
        type: Number,
      },
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    digitalIndiaContribution4: {
      nameOfContribution: String,
      noOfContribution: {
        type: Number,
      },
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    digitalIndiaContribution: {
      nameOfContribution: String,
      noOfContribution: {
        type: Number,
      },
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    otherContribution: {
      nameOfContribution: String,
      noOfContribution: {
        type: Number,
      },
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    organzingMooc1: {
      nameOfEvent: String,
      organizingSlot: Number,
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    organzingMooc2: {
      nameOfEvent: String,
      organizingSlot: Number,
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    organzingMooc3: {
      nameOfEvent: String,
      organizingSlot: Number,
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    organzingMooc4: {
      nameOfEvent: String,
      organizingSlot: Number,
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    organzingMooc: {
      nameOfEvent: String,
      organizingSlot: Number,
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    organzingFDP1: {
      nameOfEvent: String,
      organizingSlot: Number,
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    organzingFDP2: {
      nameOfEvent: String,
      organizingSlot: Number,
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    organzingFDP3: {
      nameOfEvent: String,
      organizingSlot: Number,
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    organzingFDP4: {
      nameOfEvent: String,
      organizingSlot: Number,
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    organzingFDP: {
      nameOfEvent: String,
      organizingSlot: Number,
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    organizingWorkshop1: {
      nameOfEvent: String,
      organizingSlot: Number,
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    organizingWorkshop2: {
      nameOfEvent: String,
      organizingSlot: Number,
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    organizingWorkshop3: {
      nameOfEvent: String,
      organizingSlot: Number,
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    organizingWorkshop4: {
      nameOfEvent: String,
      organizingSlot: Number,
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    organizingWorkshop: {
      nameOfEvent: String,
      organizingSlot: Number,
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    participationInMOOC1: {
      nameOfEvent: String,
      organizingSlot: Number,
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    participationInMOOC2: {
      nameOfEvent: String,
      organizingSlot: Number,
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    participationInMOOC3: {
      nameOfEvent: String,
      organizingSlot: Number,
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    participationInMOOC4: {
      nameOfEvent: String,
      organizingSlot: Number,
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    participationInMOOC: {
      nameOfEvent: String,
      organizingSlot: Number,
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    participationInWorkshop1: {
      nameOfEvent: String,
      organizingSlot: Number,
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    participationInWorkshop2: {
      nameOfEvent: String,
      organizingSlot: Number,
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    participationInWorkshop3: {
      nameOfEvent: String,
      organizingSlot: Number,
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    participationInWorkshop4: {
      nameOfEvent: String,
      organizingSlot: Number,
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    participationInWorkshop: {
      nameOfEvent: String,
      organizingSlot: Number,
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    participationInFDP1: {
      nameOfEvent: String,
      noOfDays: Number,
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    participationInFDP2: {
      nameOfEvent: String,
      noOfDays: Number,
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    participationInFDP3: {
      nameOfEvent: String,
      noOfDays: Number,
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    participationInFDP4: {
      nameOfEvent: String,
      noOfDays: Number,
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    participationInFDP: {
      nameOfEvent: String,
      noOfDays: Number,
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    organizingFDP1: {
      nameOfEvent: String,
      noOfDays: Number,
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    organizingFDP2: {
      nameOfEvent: String,
      noOfDays: Number,
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    organizingFDP3: {
      nameOfEvent: String,
      noOfDays: Number,
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    organizingFDP4: {
      nameOfEvent: String,
      noOfDays: Number,
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    organizingFDP: {
      nameOfEvent: String,
      noOfDays: Number,
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    sponsorship1: {
      nameOfEvent: String,
      amountReceived: Number,
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    sponsorship2: {
      nameOfEvent: String,
      amountReceived: Number,
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    sponsorship3: {
      nameOfEvent: String,
      amountReceived: Number,
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    sponsorship4: {
      nameOfEvent: String,
      amountReceived: Number,
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    sponsorship: {
      nameOfEvent: String,
      amountReceived: Number,
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    industryLinkage1: {
      typeOfLinakge: String,
      noOfActivities: Number,
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    industryLinkage2: {
      typeOfLinakge: String,
      noOfActivities: Number,
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    industryLinkage3: {
      typeOfLinakge: String,
      noOfActivities: Number,
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    industryLinkage4: {
      typeOfLinakge: String,
      noOfActivities: Number,
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    industryLinkage: {
      typeOfLinakge: String,
      noOfActivities: Number,
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    organizingLectures1: {
      noOfLec: Number,
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    organizingLectures2: {
      noOfLec: Number,
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    organizingLectures3: {
      noOfLec: Number,
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    organizingLectures4: {
      noOfLec: Number,
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    organizingLectures5: {
      noOfLec: Number,
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    organizingLectures6: {
      noOfLec: Number,
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    organizingLectures7: {
      noOfLec: Number,
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    organizingLectures8: {
      noOfLec: Number,
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    organizingLectures9: {
      noOfLec: Number,
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    organizingLectures: {
      noOfLec: Number,
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    invitedTalk1: {
      activityName: String,
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    invitedTalk2: {
      activityName: String,
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    invitedTalk3: {
      activityName: String,
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    invitedTalk4: {
      activityName: String,
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    invitedTalk: {
      activityName: String,
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    additionalResp: {
      responsibleForDept: String,
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },
  },
  toatalScore: Number,
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

module.exports = model("FormC", formCSchema);
