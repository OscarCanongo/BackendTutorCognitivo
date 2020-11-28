const express = require("express");
const router = express.Router();
const preguntaController = require("../controllers/preguntaController");
const auth = require ('../middleware/auth');

//Get pregunta
router.get("/", 
//auth, 
preguntaController.getPregunta);

// Post pregunta
router.post("/", 
//auth, 
preguntaController.create);

// Delete pregunta
router.delete("/:id", 
//auth, 
preguntaController.delete);

module.exports = router;
