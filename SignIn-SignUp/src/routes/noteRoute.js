const express = require("express");
const app = express();
const router = express.Router();
const noteController = require("../controllers/noteController");
const authMiddleware = require("../middlewares/authMiddleware");
const adminMiddleware = require("../middlewares/adminMiddleware");

router.post("/create-note" ,authMiddleware, adminMiddleware, noteController.noteCreation);
router.delete(
  "/delete-note/:id",
  authMiddleware,
  noteController.noteDeletion
);
module.exports = router;