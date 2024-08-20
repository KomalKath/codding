const Student = require('../models/student');
const Course = require('../models/course');

exports.createStudent = async (req,res) => {
const {firstname, lastname, age, course, city, instructorId,  enrollmentYear,
  level, enrollmentDate, degreeLevel, grade,email,isActive,status} = req.body;
const studentData = new Student({
   firstname,
   lastname,
   age,
   course,
   city,
   instructorId,
   enrollmentYear,
   level, 
   enrollmentDate,
   degreeLevel,
   grade,
   email,
   isActive,
   status
});
    try{
await studentData.save();
res.status(201).json({student:studentData});
    }catch(error){
     console.log(error);
    }
};
exports.getAllStudents = async (req, res) =>{
    try {
        const studentData = await Student.find();
        res.status(200).json({student:studentData});
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
 }
exports.getCourseByStdId = async(req, res) => {
  try {
      const stdId = req.params.cid; 
      
      const courseInfoById = await Course.find({stdId}); 
      console.log(courseInfoById);
      if (!courseInfoById) {
          return res.status(404).json({ message: 'Course not found' });  
      }

      res.status(200).json({student:courseInfoById}); 
  } catch (error) {
     console.log(error);
      res.status(500).json({ message: error.message });  
  }
};

exports.getStudentsByCity = async (req, res) => {
    const city =req.params.city;
    try {
      const students = await Student.find({city});
      res.json(students);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

//   for instructor....
exports.getStudentsByInstructor = async (req, res) => {
    try {
      const instructorId = req.params.instId;
      
      const studentDataByInstructor = await Student.find({instructorId});
      console.log(studentDataByInstructor);
      if (!studentDataByInstructor) {
        return res.status(404).json({ message: 'instructor not found' });  
    }
    res.status(200).json({Instructor:studentDataByInstructor}); 
} catch (error) {
   console.log(error);
    res.status(500).json({ message: error.message });  
}
  };
// enrollment year
exports.getStudentsByEnrollmentYear = async (req, res) => {
    try {
      const students = await Student.find({ enrollmentYear: req.params.year });
      res.json(students);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
// undergraduates...
exports.getUndergraduateStudents = async (req, res) => {
    try {
      const students = await Student.find({ level:req.params.levell});
      res.json(students);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
//  ..avtive.
exports.getActiveStudents = async (req,res) => {
  try {
      const activeStudents = await Student.find({isActive:true});
      res.status(200).json({Students:activeStudents});
  } catch (error) {
      console.error('Error fetching active students:', error);
      res.status(500).json({ message: 'Server error', error: error.message });
  }
};
//  inactive 


exports.getInActiveStudents = async (req,res) => {
  try {
      const InactiveStudents = await Student.find({isActive:false});
      res.status(200).json({Students:InactiveStudents});
  } catch (error) {
      console.error('Error fetching Inactive students:', error);
      res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// rejected...
exports.getRejectedStudent = async (req,res) => {
  try {
      const RejectedStudent = await Student.find({status:'rejected'});
      res.status(200).json({Students:RejectedStudent});
  } catch (error) {
      console.error('Error fetching rejected students:', error);
      res.status(500).json({ message: 'Server error', error: error.message });
  }
};
// list of student by course

exports.getStudentListbyCourse = async(req,res) =>{
  try{
    const StudentListCourse = await Student.find({StudentListCourse:req.params.course});
    res.status(200).json({Student:StudentListCourse});

  }catch(error){
    console.error('Error fetching list of  students by course:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
}

//  delete api
exports.deleteStudent = async (req, res) => {
  try {
      const { id } = req.params;
      const student = await Student.findByIdAndDelete(id);

      if (!student) {
          return res.status(404).json({ message: 'Student not found' });
      }

      res.json({ message: 'Student deleted successfully', student });
  } catch (error) {
      res.status(500).json({ message: 'Server error', error });
  }
};

// put api
exports.updateStudent = async (req, res) => {
  try {
      const { id } = req.params;
      const updateData = req.body;

      const student = await Student.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });

      if (!student) {
          return res.status(404).json({ message: 'Student not found' });
      }

      res.json({ message: 'Student updated successfully', student });
  } catch (error) {
      res.status(500).json({ message: 'Server error', error });
  }
};