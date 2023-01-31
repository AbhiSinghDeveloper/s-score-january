const router = require("express").Router();
const formBControl = require("../controller/formBController");
const authAdmin = require("../middleware/authAdmin");
const auth = require("../middleware/auth");

router.post("/fill-form-b", auth, formBControl.createFormB);
router.get("/get-form-b-data/:userId", auth, formBControl.getFormBDataByUserId);
router.get("/get-all-b-response", auth, authAdmin, formBControl.getAllForm);
router.post(
  "/change-status/:formId",
  auth,
  authAdmin,
  formBControl.changeStatusFormB
);
router.post("/update-form/:id", auth, formBControl.updateForm);

module.exports = router;
