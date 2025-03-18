const express = require("express");
const router = express.Router();
const CONTROLLER = require("../controllers/Avis.controller");
const verifieToken = require("../middlewares/auth");

router.post("/add", CONTROLLER.postAvis);
router.delete("/delete/:avisId", verifieToken, CONTROLLER.deleteAvis);

module.exports = router;
