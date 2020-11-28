const express = require("express");
const router = express.Router();
const problemaController = require("../controllers/problemaController");


//Get problema
router.get("/", problemaController.getProblema);

// Post problema
router.post("/", problemaController.create);

// Delete problema
router.delete("/:id", problemaController.delete);

module.exports = router;
