const express = require("express");
const router = express.Router();
const materiaController = require("../controllers/materiaController");

//Get materia
router.get("/", materiaController.getMateria);

// Post materia
router.post("/", materiaController.create);

// Delete materia
router.delete("/:id", materiaController.delete);

// Update materia
router.put("/:id", materiaController.update);

module.exports = router;
