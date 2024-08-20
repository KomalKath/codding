const express = require('express');
const takeController = require('../controllers/takeController');
const router = express.Router();

//get
router.get('/all',takeController.getTake);

// router.get('/all',takeController.getStudentsByGrade);
router.post('/add',takeController.createtake);
module.exports = router;

