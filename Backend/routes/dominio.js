const express = require("express");
const router = express.Router();
const dominioController = require("../controllers/dominioController");
const auth = require ('../middleware/auth');

//Get dominio
router.get("/", 
//auth, 
dominioController.getDominio);

// Post dominio
router.post("/", 
//auth, 
dominioController.create);

// Delete dominio
router.delete("/:id", 
//auth, 
dominioController.delete);

// Update dominio
router.put("/:id", 
//auth, 
dominioController.update);

module.exports = router;
