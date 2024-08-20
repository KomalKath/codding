const Instructor = require('../models/instructor');

// Create a new instructor
exports.createInstructor = async (req, res) => {
    const { instName, instOffice, Rank, department, email, courseId} = req.body;
    const instructorData = new Instructor({
        instName,
        instOffice,
        Rank,
        department,
        email,
        courseId
    });

    try {
        await instructorData.save();
        res.status(201).json({ instructor: instructorData });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error });
    }
};
// get api for instructors....
exports.getAllInstructor = async (req, res) =>{
    try {
        const instructorData = await Instructor.find();
        res.status(200).json({instructor:instructorData});
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
 }


 exports.getInstructorByCourseId = async (req, res) => {
  const courseId = req.params.cid;
  try {
      const instructor = await Instructor.find({ courseId });
      if (instructor) {
          res.json(instructor);
      } else {
          res.status(404).json({ message: 'Instructor not found' });
      }
  } catch (error) {
    consol.log(error);
      res.status(500).json({ message: 'Server error', error });
  }
};


// delete api
exports.deleteInstructor = async (req, res) => {
    try {
        const { id } = req.params;
        const instructor = await Instructor.findByIdAndDelete(id);

        if (!instructor) {
            return res.status(404).json({ message: 'Instructor not found' });
        }

        res.json({ message: 'Instructor deleted successfully', instructor });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
// api update 
exports.updateInstructor = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;

        const instructor = await Instructor.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });

        if (!instructor) {
            return res.status(404).json({ message: 'Instructor not found' });
        }

        res.json({ message: 'Instructor updated successfully', instructor });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};