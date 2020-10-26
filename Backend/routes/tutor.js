const express = require("express");
const router = express.Router();
const tutorController = require("../controllers/tutorController");

//Get Tutor
router.get("/", tutorController.getTutor);

// Post tutor
router.post("/", tutorController.create);

// Delete tutor
router.delete("/:_id", tutorController.delete);
module.exports = router;
