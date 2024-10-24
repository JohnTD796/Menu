const { Schema, model } = require("mongoose");

const cheeseSchema = new Schema({
  cName: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: false,
  },
  
});

const Cheese = model('Cheese', cheeseSchema);

module.exports = Cheese