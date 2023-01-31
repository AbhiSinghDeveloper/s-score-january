const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  fname: String,
  lname: String,
  password: String,
  email: String,
  designation: String,
  empNo: String,
  dob: String,
  doj: String,
  mobileNo: String,
  nameOfDeptAndSclResearchCenter: String,
  hasPHD: {
    type: Boolean,
    default: false,
  },
  isProfileCreated: {
    type: Boolean,
    default: false,
  },
  yearPHD: String,
  currentGrossSalary: Number,
  role: {
    type: String,
    default: "user",
  },
  created: String,
});

module.exports = model("User", userSchema);
