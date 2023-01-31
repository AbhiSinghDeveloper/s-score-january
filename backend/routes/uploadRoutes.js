const router = require("express").Router();
const uploadImageController = require("../controller/uploadImageController");

router.post("/upload-proof", uploadImageController.setImage);

module.exports = router;
