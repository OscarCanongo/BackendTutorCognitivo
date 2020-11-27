const express = require("express");
const router = express.Router();
const taxonomiaController = require("../controllers/taxonomiaController");
const auth = require ('../middleware/auth');

//Get taxonomia
router.get("/", 
//auth, 
taxonomiaController.getTaxonomia);

// Post taxonomia
router.post("/", 
//auth, 
taxonomiaController.create);

// Delete taxonomia
router.delete("/:id", 
//auth, 
taxonomiaController.delete);

module.exports = router;
