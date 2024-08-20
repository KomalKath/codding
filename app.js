const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./db/connection');
const studentRoutes = require('./routes/studentRoutes');
const instructorRoutes = require('./routes/instructorRoutes');
const courseRoutes = require('./routes/courseRoutes');
const takeRoutes = require('./routes/takeRoutes');
const app = express();
const mongoose = require('mongoose');
//connectDB();
app.use(bodyParser.json());
app.use(cors({
    // origin:'*',
       origin:[
               '*',
               'https://app.netlify.com/'
              ],
          
  }));
app.use('/instructor', instructorRoutes);
app.use('/course', courseRoutes);
app.use('/take', takeRoutes);
app.use('/student',studentRoutes);


// const PORT = 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));





const PORT = process.env.PORT || 5000;
//app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
mongoose
  .connect(
    process.env.MONGODB_URL
    //`mongodb+srv://${process.env.DB_User}:${process.env.DB_Password}@pwdbtest.swa3aiu.mongodb.net/${process.env.DB_Name}?retryWrites=true&w=majority`
    //mongodb+srv://PWtest:<password>@pwdbtest.swa3aiu.mongodb.net/?retryWrites=true&w=majority
    //mongodb+srv://PWtest:<password>@pwdbtest.swa3aiu.mongodb.net/?retryWrites=true&w=majority
    //mongodb+srv://PWtest:<password>@pwdbtest.swa3aiu.mongodb.net/?retryWrites=true&w=majority
    //mongodb+srv://PWtest:<password>@pwdbtest.swa3aiu.mongodb.net/?retryWrites=true&w=majority
    //mongodb+srv://PWtest:<password>@pwdbtest.swa3aiu.mongodb.net/?retryWrites=true&w=majority
    //mongodb+srv://PWtest:<password>@pwdbtest.swa3aiu.mongodb.net/?retryWrites=true&w=majority
    //mongodb+srv://PWtest:<password>@pwdbtest.swa3aiu.mongodb.net/?retryWrites=true&w=majority
    //mongodb+srv://PWtest:<password>@pwdbtest.swa3aiu.mongodb.net/?retryWrites=true&w=majority
    //mongodb+srv://PWtest:<password>@pwdbtest.swa3aiu.mongodb.net/?retryWrites=true&w=majority
  )
  .then(() => {
    app.listen(PORT, () => {
      //console.log(`Server is running on http://${host}:${PORT}`);
  });
   //server.listen(PORT,host);
   //server.timeout = 60000;
    console.log("Connected");
  })
  .catch(err => {
    console.log(err);
  });