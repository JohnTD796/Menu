const { Schema, model} = require("mongoose");

const MainCourseSchema = new Schema({
  mcName: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  description: {
    type: String,
    required: false,
  },

});

const MainCourse = model('MainCourse', MainCourseSchema);

module.exports = MainCourse