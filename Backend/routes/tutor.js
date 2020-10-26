const express = require("express");
const router = express.Router();
const tutorController = require("../controllers/tutorController");

//Get Tutor
router.get("/", tutorController.getTutor);

// Post tutor
router.post("/", tutorController.create);

// Delete tutor
router.delete("/:id", tutorController.delete);

// Update tutor
router.put("/:id", tutorController.update);

module.exports = router;
