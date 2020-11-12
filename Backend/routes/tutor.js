const express = require("express");
const router = express.Router();
const tutorController = require("../controllers/tutorController");
const auth = require ('../middleware/auth');

//Get Tutor
router.get("/", auth, tutorController.getTutor);

// Post tutor
router.post("/", auth, tutorController.create);

// Delete tutor
router.delete("/:id", auth, tutorController.delete);

// Update tutor
router.put("/:id", auth, tutorController.update);

module.exports = router;
