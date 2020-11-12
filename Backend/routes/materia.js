const express = require("express");
const router = express.Router();
const materiaController = require("../controllers/materiaController");
const auth = require ('../middleware/auth');

//Get materia
router.get("/", auth, materiaController.getMateria);

// Post materia
router.post("/", auth, materiaController.create);

// Delete materia
router.delete("/:id", auth, materiaController.delete);

// Update materia
router.put("/:id", auth, materiaController.update);

module.exports = router;
