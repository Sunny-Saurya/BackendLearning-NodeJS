const express = require("express");
const router = express.Router();

const aggregationController = require("../controllers/aggregationController");

router.get("/notes-by-tags/:tag", aggregationController.noteByTag);

module.exports = router;