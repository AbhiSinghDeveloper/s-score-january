const router = require("express").Router();
const formAControl = require("../controller/formAController");
const auth = require("../middleware/auth");
const authAdmin = require("../middleware/authAdmin");
const BodyParser = require("body-parser");

const jsonParser = BodyParser.json();

router.post("/fill-form-a", jsonParser, auth, formAControl.createFormA);
router.get("/get-form-a-data/:userId", auth, formAControl.getFormADataByUserId);

router.get("/get-all-a-response", auth, authAdmin, formAControl.getAllForm);
router.post(
  "/change-status/:formId",
  auth,
  authAdmin,
  formAControl.changeStatusFormA
);
router.post("/update-form/:id", auth, formAControl.updateForm);

module.exports = router;
