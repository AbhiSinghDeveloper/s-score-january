const Users = require("../models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userCtrl = {
  register: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await Users.findOne({ email });
      if (user)
        return res.status(400).json({ msg: "The email already exists" });

      if (password.length < 6)
        return res
          .status(400)
          .json({ msg: "Password is at atleast 6 character long." });

      // Password encryption
      const passwordHash = await bcrypt.hash(password, 10);
      const newUser = new Users({
        email,
        password: passwordHash,
      });

      //Save mongodb
      let savedUser = await newUser.save();

      //Then create jsonwebtoken to authentication
      const accesstoken = createAccessToken({ id: newUser._id });
      const refreshtoken = createRefreshToken({ id: newUser._id });

      res
        .cookie("refreshtoken", refreshtoken, {
          httpOnly: true,
        })
        .status(200)
        .json("Successfully  registered | Please login to continue");
      //res.json({msg: "Register Successful!"})
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: err.message });
    }
  },

  login: async (req, res) => {
    console.log("Login Api got hit");
    try {
      const { email, password } = req.body;
      console.log("email -- ", email);
      const user = await Users.findOne({ email });
      if (!user) {
        console.log("user ---", user);
        return res.status(400).json({ msg: "User does not exist." });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        console.log(isMatch);
        return res.status(400).json({ msg: "Incorrect password." });
      }
      //If login success, create access token and refresh token
      const accesstoken = createAccessToken({ id: user._id });
      const refreshtoken = createRefreshToken({ id: user._id });
      console.log("login");
      return res
        .cookie("refreshtoken", refreshtoken, {
          httpOnly: true,
        })
        .status(200)
        .json({
          refreshtoken,
          id: user._id,
          email: user.email,
          role: user.role,
          isProfileCreated: user.isProfileCreated,
          hasPHD: user.hasPHD,
        });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  logout: async (req, res) => {
    try {
      res.clearCookie("refreshtoken");
      return res.json({ msg: "Logged out" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  createProfile: async (req, res) => {
    console.log("createProfile got hit");
    console.log("bodyyy---", req.body);
    try {
      const {
        fname,
        lname,
        designation,
        empNo,
        dob,
        doj,
        mobileNo,
        nameOfDeptAndSclResearchCenter,
        hasPHD,
        cgs,
        yearPHD,
      } = req.body;
      console.log("working");

      let _id = req.user.id;
      const user = await Users.findByIdAndUpdate(_id, {
        fname,
        lname,
        designation,
        empNo,
        dob,
        doj,
        isProfileCreated: true,
        mobileNo,
        nameOfDeptAndSclResearchCenter,
        hasPHD: hasPHD === "true",
        yearPHD,
        currentGrossSalary: cgs,
        role: "user",
      });

      res.status(201).json(user);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: error.message });
    }
  },
  refreshToken: (req, res) => {
    try {
      const rf_token = req.cookies.refreshtoken;
      if (!rf_token)
        return res.status(400).json({ msg: "Please Login or register" });

      jwt.verify(rf_token, 'PBYGKN5MmYReqVOjaki0OLfcO7jvS013', (err, user) => {
        if (err)
          return res.status(400).json({ msg: "Please Login or Register" });

        const accesstoken = createAccessToken({ id: user.id });
        res.json({ user, accesstoken });
      });
      res.json({ rf_token });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getUser: async (req, res) => {
    try {
      const user = await Users.findById(req.user.id).select("-password");
      if (!user) return res.status(400).json({ msg: "User does not exist." });

      res.json(user);
    } catch (err) {
      return res.status(500).json({ msg: err.msg });
    }
  },
};

const createAccessToken = (user) => {
  return jwt.sign(user, 'PBYGKN5MmYReqVOjaki0OLfcO7jvS013', { expiresIn: "1d" });
};

const createRefreshToken = (user) => {
  return jwt.sign(user, 'PBYGKN5MmYReqVOjaki0OLfcO7jvS013', { expiresIn: "7d" });
};

module.exports = userCtrl;
