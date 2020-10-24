const express = require('express');
const router = express.Router();
const tutorController = require('../controllers/tutorController');

//Get Tutor 
router.get('/',
    tutorController.getTutor
)

module.exports = router;
