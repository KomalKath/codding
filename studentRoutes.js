const express = require('express');
const studentController = require('../controllers/studentController');
const router = express.Router();


router.get('/all', studentController.getAllStudents);
// active
router.get('/actv',studentController.getActiveStudents);

// in active
router.get('/inactv',studentController.getInActiveStudents);

// Rejected student
router.get('/reject',studentController.getRejectedStudent);

router.get('/:cid',studentController.getCourseByStdId);

// for city....
router.get('/city/:city',studentController.getStudentsByCity);

// to get instructor
router.get('/instructor/:instId', studentController.getStudentsByInstructor);

// for enrollment
router.get('/enrollmentYear/:year', studentController.getStudentsByEnrollmentYear);

// active


router.post('/add', studentController.createStudent);



// for date
//router.get('/enrolled/specific', studentController.getStudentsByEnrollmentDates);

router.delete('/:id', studentController.deleteStudent);

// Route to update a student by ID
router.put('/:id', studentController.updateStudent);

module.exports = router;

