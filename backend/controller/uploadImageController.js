const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");

const s3 = new aws.S3({
  accessKeyId: process.env.S3_ACCESS_KEY,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  region: process.env.S3_BUCKET_REGION,
});

const upload = (bucketName) =>
  multer({
    storage: multerS3({
      s3: s3,
      bucket: bucketName,
      metadata: function (req, file, cb) {
        cb(null, { fieldName: file.fieldname });
      },
      key: function (req, file, cb) {
        //console.log(file);
        cb(null, `proof-${Date.now()}.pdf`);
      },
    }),
  });

exports.setImage = (req, res, next) => {
  console.log(req.body);
  //https://www.youtube.com/watch?v=XC5rdgxyioY
  const uploadSingle = upload("sscore-upload").single("image");
  //  console.log(uploadSingle);

  uploadSingle(req, res, (err) => {
    if (err) {
      //console.log(err);
      return res.status(500).json({ success: false, msg: err.message });
    }
    console.log(req.file);
    res.status(200).json({ data: req.file });
  });
};
