const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TeacherSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  startHour: {
    type: String,
    required:true,
  },
  startMinutes:{
    type: String,
    required: true,
  },
  endHour: {
    type: String,
    required:true,
  },
  endMinutes:{
    type: String,
    required: true,
  },
  date: {
    type:Number,
  },
  month:{
    type:Number,
  },
  year:{
    type:Number,
  },
});

module.exports = Teachers = mongoose.model("Teachers", TeacherSchema);
