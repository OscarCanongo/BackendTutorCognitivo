const express = require("express");
const router = express.Router();
const dominioController = require("../controllers/dominioController");

//Get dominio
router.get("/", dominioController.getDominio);

// Post dominio
router.post("/", dominioController.create);

// Delete dominio
router.delete("/:id", dominioController.delete);

// Update dominio
router.put("/:id", dominioController.update);

module.exports = router;
