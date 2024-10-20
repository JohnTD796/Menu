const { Schema, model} = require("mongoose");

const MainCourseSchema = new Schema({
  mcName: {
    type: String,
    required: true,
  },
  
  toppings: {
    type: String,
    required: true,
  },

  sauces: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

});

const MainCourse = model('MainCourse', MainCourseSchema);

module.exports = MainCourse