
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const takeSchema = new Schema({
grade:{type:String, required:true}

});
module.exports = mongoose.model('take',takeSchema);