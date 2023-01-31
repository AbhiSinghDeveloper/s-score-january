require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
//const fileUpload = require("express-fileupload");
//const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const connectDb = require("./config/db");

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(bodyParser.urlencoded());
app.use(cors());

//app.use(cookieParser());

// app.use(
//   fileUpload({
//     useTempFiles: true,
//   })
// );

// Routes
app.use("/user", require("./routes/userRoutes"));
app.use("/a", require("./routes/formARoutes"));
app.use("/b", require("./routes/formBRoutes"));
app.use("/c", require("./routes/formCRoutes"));
app.use("/image", require("./routes/uploadRoutes"));

app.get("/", (req, res) => {
  res.json({ msg: "Its working........." });
});

const PORT = process.env.PORT || 5000;

connectDb()
  .then(() => {
    app.listen(PORT, () => console.log(`Listenting on port ${PORT}...`));
  })
  .catch((err) => {
    console.log(err);
  });
