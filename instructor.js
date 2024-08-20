const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const instructorSchema = new Schema({
    instName: { type: String, required: true },
    instOffice: { type: String, required: true },
    Rank: { type: String, required: true },
    department: { type: String, required: true },
    email: { type: String, required: true },
    courseId:{ type:mongoose.Types.ObjectId,ref:'course'},
});
module.exports = mongoose.model('Instructor', instructorSchema);
