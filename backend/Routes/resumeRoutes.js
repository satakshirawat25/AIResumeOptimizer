const express = require("express");
const router = express.Router();
const ResumeController = require("../Controllers/resumeController");
const { upload } = require("../utils/multer");

router.post("/addResume", upload.single("resume"), ResumeController.addResume);
router.get('/get/:user',ResumeController.getAllResumesForUser)

module.exports = router;
// export default router;
