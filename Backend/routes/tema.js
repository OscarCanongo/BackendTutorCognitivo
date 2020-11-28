const express = require("express");
const router = express.Router();
const temaController = require("../controllers/temaController");
const auth = require ('../middleware/auth');

//Get tema
router.get("/", 
//auth, 
temaController.getTema);

// Post tema
router.post("/", 
//auth, 
temaController.create);

// Delete Tema
router.delete("/:id", 
//auth, 
temaController.delete);

module.exports = router;
