const express = require ('express');
const router = express.Router();
const tutorController = require('../controllers/tutorController');

router.get('/:id',
    tutorController.get
);

module.exports = router;