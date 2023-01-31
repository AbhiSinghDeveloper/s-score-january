const router = require("express").Router();
const formCControl = require("../controller/formCController");
const authAdmin = require("../middleware/authAdmin");
const auth = require("../middleware/auth");

router.post("/fill-form-c", auth, formCControl.createFormC);
router.get("/get-form-c-data/:userId", auth, formCControl.getFormCDataByUserId);
router.get("/get-all-c-response", auth, authAdmin, formCControl.getAllForm);
router.post(
  "/change-status/:formId",
  auth,
  authAdmin,
  formCControl.changeStatusFormC
);
router.post("/update-form/:id", auth, formCControl.updateForm);

module.exports = router;
