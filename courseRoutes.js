const express = require('express');
const courseController = require('../controllers/courseController');
const router = express.Router();


router.get('/course/:courseId/student-ids',  courseController.getStudentIdsFromCourse);


router.get('/all', courseController.getAllCourse);

router.get('/:id', courseController.getCourseById);

router.get('/:id', courseController.getStudentbyListofCourse);

router.post('/add', courseController.createCourse);


// Route to delete a course by ID
router.delete('/:id', courseController.deleteCourse);

// put cou
router.put('/:id', courseController.updateCourse);
module.exports = router;

