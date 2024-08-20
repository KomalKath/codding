const express = require('express');
const serverless = require('serverless-http');
const connectDB = require ('../db/connection');
require("dotenv").config();
const app = express();
connectDB();
// Your existing Express routes
app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});
app.get('/.netlify/functions/api/student/all',async (req, res) => {
  try {
      const studentData = await Student.find();
      res.status(200).json({student:studentData});
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
})
module.exports.handler = serverless(app);