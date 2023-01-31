const router = require("express").Router();
const userCtrl = require("../controller/userControl");
const { PreviewForms, finalScore } = require("../controller/previewController");
const auth = require("../middleware/auth");

router.post("/register", userCtrl.register);

router.post("/login", userCtrl.login);

router.get("/logout", userCtrl.logout);

router.get("/refresh_token", userCtrl.refreshToken);

router.get("/infor", auth, userCtrl.getUser);

router.put("/create-profile", auth, userCtrl.createProfile);
router.get("/preview/form", auth, PreviewForms);
router.get("/final/score", auth, finalScore);

module.exports = router;
