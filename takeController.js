const Take = require('../models/take');

// POST API to create a new record
exports.createtake = async (req, res) => {
  try {
    const { grade } = req.body;

    // Create a new record
    const newTake = new Take({ grade });

    // Save the record to the database
    const savedGrade = await newTake.save();

    // Respond with the saved record data
    res.status(201).json(savedGrade);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET API to retrieve records
exports.getTake = async (req, res) => {
  try {
    // Fetch records from the database
    const getGrades = await Take.find();

    // Respond with the fetched records
    res.status(200).json(getGrades);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
