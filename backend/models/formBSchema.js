const { model, Schema } = require("mongoose");

const formBSchema = new Schema({
  userId: {
    type: String,
  },
  acadYear: {
    type: String,
  },
  isFilled: {
    type: Boolean,
    default: false,
  },

  ematscore: {
    singleAuthor1: {
      nameOfJournal: {
        type: String,
      },
      impactFactor: {
        type: Number,
      },
      doiLink: {
        type: String,
      },
      score: {
        type: Number,
      },
    },
    singleAuthor2: {
      nameOfJournal: {
        type: String,
      },
      impactFactor: {
        type: Number,
      },
      doiLink: {
        type: String,
      },
      score: {
        type: Number,
      },
    },
    singleAuthor3: {
      nameOfJournal: {
        type: String,
      },
      impactFactor: {
        type: Number,
      },
      doiLink: {
        type: String,
      },
      score: {
        type: Number,
      },
    },
    singleAuthor4: {
      nameOfJournal: {
        type: String,
      },
      impactFactor: {
        type: Number,
      },
      doiLink: {
        type: String,
      },
      score: {
        type: Number,
      },
    },
    singleAuthor: {
      nameOfJournal: {
        type: String,
      },
      impactFactor: {
        type: Number,
      },
      doiLink: {
        type: String,
      },
      score: {
        type: Number,
      },
    },
    firstAndCorrAuthSame1: {
      nameOfJournal: {
        type: String,
      },
      impactFactor: {
        type: Number,
      },
      doiLink: {
        type: String,
      },
      score: {
        type: Number,
      },
    },
    firstAndCorrAuthSame2: {
      nameOfJournal: {
        type: String,
      },
      impactFactor: {
        type: Number,
      },
      doiLink: {
        type: String,
      },
      score: {
        type: Number,
      },
    },
    firstAndCorrAuthSame3: {
      nameOfJournal: {
        type: String,
      },
      impactFactor: {
        type: Number,
      },
      doiLink: {
        type: String,
      },
      score: {
        type: Number,
      },
    },
    firstAndCorrAuthSame4: {
      nameOfJournal: {
        type: String,
      },
      impactFactor: {
        type: Number,
      },
      doiLink: {
        type: String,
      },
      score: {
        type: Number,
      },
    },
    firstAndCorrAuthSame5: {
      nameOfJournal: {
        type: String,
      },
      impactFactor: {
        type: Number,
      },
      doiLink: {
        type: String,
      },
      score: {
        type: Number,
      },
    },
    firstAndCorrAuthSame6: {
      nameOfJournal: {
        type: String,
      },
      impactFactor: {
        type: Number,
      },
      doiLink: {
        type: String,
      },
      score: {
        type: Number,
      },
    },
    firstAndCorrAuthSame: {
      nameOfJournal: {
        type: String,
      },
      impactFactor: {
        type: Number,
      },
      doiLink: {
        type: String,
      },
      score: {
        type: Number,
      },
    },

    firstFromSatyabamaSecondDiff1: {
      nameOfJournal: {
        type: String,
      },
      firstCorAuthor: {
        type: String,
      },
      impactFactor: {
        type: Number,
      },
      doiLink: {
        type: String,
      },
      score: {
        type: Number,
      },
    },

    firstFromSatyabamaSecondDiff2: {
      nameOfJournal: {
        type: String,
      },
      firstCorAuthor: {
        type: String,
      },
      impactFactor: {
        type: Number,
      },
      doiLink: {
        type: String,
      },
      score: {
        type: Number,
      },
    },

    firstFromSatyabamaSecondDiff3: {
      nameOfJournal: {
        type: String,
      },
      firstCorAuthor: {
        type: String,
      },
      impactFactor: {
        type: Number,
      },
      doiLink: {
        type: String,
      },
      score: {
        type: Number,
      },
    },

    firstFromSatyabamaSecondDiff: {
      nameOfJournal: {
        type: String,
      },
      impactFactor: {
        type: Number,
      },
      firstCorAuthor: {
        type: String,
      },
      doiLink: {
        type: String,
      },
      score: {
        type: Number,
      },
    },

    firstFromOtherSecondSatyabama1: {
      nameOfJournal: {
        type: String,
      },
      impactFactor: {
        type: Number,
      },
      doiLink: {
        type: String,
      },
      score: {
        type: Number,
      },
    },

    firstFromOtherSecondSatyabama2: {
      nameOfJournal: {
        type: String,
      },
      impactFactor: {
        type: Number,
      },
      doiLink: {
        type: String,
      },
      score: {
        type: Number,
      },
    },

    firstFromOtherSecondSatyabama3: {
      nameOfJournal: {
        type: String,
      },
      impactFactor: {
        type: Number,
      },
      doiLink: {
        type: String,
      },
      score: {
        type: Number,
      },
    },

    firstFromOtherSecondSatyabama4: {
      nameOfJournal: {
        type: String,
      },
      impactFactor: {
        type: Number,
      },
      doiLink: {
        type: String,
      },
      score: {
        type: Number,
      },
    },

    firstFromOtherSecondSatyabama: {
      nameOfJournal: {
        type: String,
      },
      impactFactor: {
        type: Number,
      },
      doiLink: {
        type: String,
      },
      score: {
        type: Number,
      },
    },

    coAuthors1: {
      AllcoAuthor: {
        type: Number,
      },
      nameOfJournal: {
        type: String,
      },
      impactFactor: {
        type: Number,
      },
      doiLink: {
        type: String,
      },
      score: {
        type: Number,
      },
    },

    coAuthors2: {
      AllcoAuthor: {
        type: Number,
      },
      nameOfJournal: {
        type: String,
      },
      impactFactor: {
        type: Number,
      },
      doiLink: {
        type: String,
      },
      score: {
        type: Number,
      },
    },

    coAuthors3: {
      AllcoAuthor: {
        type: Number,
      },
      nameOfJournal: {
        type: String,
      },
      impactFactor: {
        type: Number,
      },
      doiLink: {
        type: String,
      },
      score: {
        type: Number,
      },
    },
    ugcCareJournal1: {
      nameOfJournal: {
        type: String,
      },
      impactFactor: {
        type: Number,
      },
      doiLink: {
        type: String,
      },
      score: {
        type: Number,
      },
    },
    ugcCareJournal2: {
      nameOfJournal: {
        type: String,
      },
      impactFactor: {
        type: Number,
      },
      doiLink: {
        type: String,
      },
      score: {
        type: Number,
      },
    },

    ugcCareJournal3: {
      nameOfJournal: {
        type: String,
      },
      impactFactor: {
        type: Number,
      },
      doiLink: {
        type: String,
      },
      score: {
        type: Number,
      },
    },

    ugcCareJournal4: {
      nameOfJournal: {
        type: String,
      },
      impactFactor: {
        type: Number,
      },
      doiLink: {
        type: String,
      },
      score: {
        type: Number,
      },
    },
    ugcCareJournal: {
      nameOfJournal: {
        type: String,
      },
      impactFactor: {
        type: Number,
      },
      doiLink: {
        type: String,
      },
      score: {
        type: Number,
      },
    },

    articleScore: {
      noOfPaperPublished: {
        type: Number,
      },
      totalCitation: {
        type: Number,
      },
      averageCitation: {
        type: Number,
      },
      hIndex: {
        type: Number,
      },
      score: {
        type: Number,
      },
    },

    researchActivities1: {
      nameOFPublisher: {
        type: String,
      },
      noOfBook: {
        type: Number,
      },
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    researchActivities2: {
      nameOFPublisher: {
        type: String,
      },
      noOfBook: {
        type: Number,
      },
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    researchActivities3: {
      nameOFPublisher: {
        type: String,
      },
      noOfBook: {
        type: Number,
      },
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    researchActivities: {
      nameOFPublisher: {
        type: String,
      },
      noOfBook: {
        type: Number,
      },
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    bookPublished1: {
      nameOFPublisher: {
        type: String,
      },
      noOfChapter: {
        type: Number,
      },
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    bookPublished2: {
      nameOFPublisher: {
        type: String,
      },
      noOfChapter: {
        type: Number,
      },
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    bookPublished3: {
      nameOFPublisher: {
        type: String,
      },
      noOfChapter: {
        type: Number,
      },
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    bookPublished: {
      nameOFPublisher: {
        type: String,
      },
      noOfChapter: {
        type: Number,
      },
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    bookChapterPublished1: {
      nameOFPublisher: {
        type: String,
      },
      noOfChapter: {
        type: Number,
      },
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    bookChapterPublished2: {
      nameOFPublisher: {
        type: String,
      },
      noOfChapter: {
        type: Number,
      },
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    bookChapterPublished3: {
      nameOFPublisher: {
        type: String,
      },
      noOfChapter: {
        type: Number,
      },
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    bookChapterPublished4: {
      nameOFPublisher: {
        type: String,
      },
      noOfChapter: {
        type: Number,
      },
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    bookChapterPublished: {
      nameOFPublisher: {
        type: String,
      },
      noOfChapter: {
        type: Number,
      },
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    articlePublished1: {
      nameOFMag: {
        type: String,
      },
      noOfArticle: {
        type: Number,
      },
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    articlePublished2: {
      nameOFMag: {
        type: String,
      },
      noOfArticle: {
        type: Number,
      },
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    articlePublished3: {
      nameOFMag: {
        type: String,
      },
      noOfArticle: {
        type: Number,
      },
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    articlePublished: {
      nameOFMag: {
        type: String,
      },
      noOfArticle: {
        type: Number,
      },
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    reviews1: {
      nameOfJournal: {
        type: String,
      },
      noOfReview: {
        type: Number,
      },
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    reviews2: {
      nameOfJournal: {
        type: String,
      },
      noOfReview: {
        type: Number,
      },
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    reviews3: {
      nameOfJournal: {
        type: String,
      },
      noOfReview: {
        type: Number,
      },
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    reviews: {
      nameOfJournal: {
        type: String,
      },
      noOfReview: {
        type: Number,
      },
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    productPatent1: {
      nameOFPatent: {
        type: String,
      },
      isAwarded: {
        type: Number,
      },
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    productPatent2: {
      nameOFPatent: {
        type: String,
      },
      isAwarded: {
        type: Number,
      },
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    productPatent3: {
      nameOFPatent: {
        type: String,
      },
      isAwarded: {
        type: Number,
      },
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    productPatent4: {
      nameOFPatent: {
        type: String,
      },
      isAwarded: {
        type: Number,
      },
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    productPatent: {
      nameOFPatent: {
        type: String,
      },
      isAwarded: {
        type: Number,
      },
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    commercialProdDev1: {
      nameOfProd: {
        type: String,
      },
      noOfProd: {
        type: Number,
      },
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    commercialProdDev: {
      nameOfProd: {
        type: String,
      },
      noOfProd: {
        type: Number,
      },
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    startUp: {
      nameOfStartUp: {
        type: String,
      },
      isStartUp: {
        type: Number,
      },
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    researchGuideFullTime: {
      noOfPHD: {
        type: Number,
      },
      pointsAlloted: {
        type: Number,
      },
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    researchGuidePartTime: {
      noOfPHD: {
        type: Number,
      },
      pointsAlloted: {
        type: Number,
      },
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    researchGuideFullTimeCompleted: {
      noOfPHD: {
        type: Number,
      },
      pointsAlloted: {
        type: Number,
      },
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },
    researchGuidePartTimeCompleted: {
      noOfPHD: {
        type: Number,
      },
      pointsAlloted: {
        type: Number,
      },
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    projectAsPI1: {
      nameOfProjectAndFundAgency: {
        type: String,
      },
      amountReceived: {
        type: Number,
      },
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    projectAsPI2: {
      nameOfProjectAndFundAgency: {
        type: String,
      },
      amountReceived: {
        type: Number,
      },
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    projectAsPI3: {
      nameOfProjectAndFundAgency: {
        type: String,
      },
      amountReceived: {
        type: Number,
      },
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    projectAsPI4: {
      nameOfProjectAndFundAgency: {
        type: String,
      },
      amountReceived: {
        type: Number,
      },
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    projectAsPI: {
      nameOfProjectAndFundAgency: {
        type: String,
      },
      amountReceived: {
        type: Number,
      },
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    projectAsCoPI1: {
      nameOfProjectAndFundAgency: {
        type: String,
      },
      amountReceived: {
        type: Number,
      },
      noOfInvestigator: {
        type: Number,
      },
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    projectAsCoPI2: {
      nameOfProjectAndFundAgency: {
        type: String,
      },
      amountReceived: {
        type: Number,
      },
      noOfInvestigator: {
        type: Number,
      },
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    projectAsCoPI3: {
      nameOfProjectAndFundAgency: {
        type: String,
      },
      amountReceived: {
        type: Number,
      },
      noOfInvestigator: {
        type: Number,
      },
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    projectAsCoPI4: {
      nameOfProjectAndFundAgency: {
        type: String,
      },
      amountReceived: {
        type: Number,
      },
      noOfInvestigator: {
        type: Number,
      },
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    projectAsCoPI: {
      nameOfProjectAndFundAgency: {
        type: String,
      },
      amountReceived: {
        type: Number,
      },
      noOfInvestigator: {
        type: Number,
      },
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    projectAsMentor1: {
      nameOfProjectAndFundAgency: {
        type: String,
      },
      amountReceived: {
        type: Number,
      },
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    projectAsMentor2: {
      nameOfProjectAndFundAgency: {
        type: String,
      },
      amountReceived: {
        type: Number,
      },
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    projectAsMentor3: {
      nameOfProjectAndFundAgency: {
        type: String,
      },
      amountReceived: {
        type: Number,
      },
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    projectAsMentor4: {
      nameOfProjectAndFundAgency: {
        type: String,
      },
      amountReceived: {
        type: Number,
      },
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    projectAsMentor5: {
      nameOfProjectAndFundAgency: {
        type: String,
      },
      amountReceived: {
        type: Number,
      },
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    projectAsMentor: {
      nameOfProjectAndFundAgency: {
        type: String,
      },
      amountReceived: {
        type: Number,
      },
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    consultantWork1: {
      nameOfWork: {
        type: String,
      },
      amountGenerated: {
        type: Number,
      },
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    consultantWork2: {
      nameOfWork: {
        type: String,
      },
      amountGenerated: {
        type: Number,
      },
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    consultantWork3: {
      nameOfWork: {
        type: String,
      },
      amountGenerated: {
        type: Number,
      },
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    consultantWork: {
      nameOfWork: {
        type: String,
      },
      amountGenerated: {
        type: Number,
      },
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },
    copyright: {
      nameOFCopyright: {
        type: String,
      },
      role: {
        type: String,
      },
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    copyright1: {
      nameOFCopyright: {
        type: String,
      },
      role: {
        type: String,
      },
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },
    copyright2: {
      nameOFCopyright: {
        type: String,
      },
      role: {
        type: String,
      },
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    copyright3: {
      nameOFCopyright: {
        type: String,
      },
      role: {
        type: String,
      },
      score: {
        type: Number,
      },
      uploadProof: {
        type: String,
      },
    },

    firstFromOtherInstituteSatyabama: {
      nameOfJournal: {
        type: String,
      },
      impactFactor: {
        type: Number,
      },
      doiLink: {
        type: String,
      },
      score: {
        type: Number,
      },
    },

    firstFromOtherInstituteSatyabama1: {
      nameOfJournal: {
        type: String,
      },
      impactFactor: {
        type: Number,
      },
      doiLink: {
        type: String,
      },
      score: {
        type: Number,
      },
    },

    firstFromOtherInstituteSatyabama2: {
      nameOfJournal: {
        type: String,
      },
      impactFactor: {
        type: Number,
      },
      doiLink: {
        type: String,
      },
      score: {
        type: Number,
      },
    },

    firstFromOtherInstituteSatyabama3: {
      nameOfJournal: {
        type: String,
      },
      impactFactor: {
        type: Number,
      },
      doiLink: {
        type: String,
      },
      score: {
        type: Number,
      },
    },

    firstFromOtherInstituteSatyabama4: {
      nameOfJournal: {
        type: String,
      },
      impactFactor: {
        type: Number,
      },
      doiLink: {
        type: String,
      },
      score: {
        type: Number,
      },
    },
  },

  totalScore: Number,
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

module.exports = model("formB", formBSchema);
