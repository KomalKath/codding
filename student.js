const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    firstname:{type:String, required:true},
    lastname:{type:String, required:true},
    age:{type:Number, required:true},
    course:{type:String, required:true},
    city:{type:String, required:true},
    instructorId: {type: mongoose.Types.ObjectId,ref: 'instructor'},
    enrollmentYear:{type:Number, required:true},
    level:{type:String, required:true},
    degreeLevel:{type:String, required:true},
    email:{type:String, required:true},
    isActive:{type:Boolean,default:true},
    status:{type:String,required:true},
    CourseId: {type: mongoose.Types.ObjectId,ref: 'course'},
});
module.exports = mongoose.model('student',studentSchema);

