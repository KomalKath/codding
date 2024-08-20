const express = require('express');
const instructorController = require('../controllers/instructorController');
const router = express.Router();

router.get('/:cid', instructorController.getInstructorByCourseId);
router.get('/all', instructorController.getAllInstructor);


// Route to create a new instructor
router.post('/add', instructorController.createInstructor);
// delete instracture
router.delete('/:id', instructorController.deleteInstructor);

router.put('/:id', instructorController.updateInstructor);
module.exports = router;
