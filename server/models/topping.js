const { Schema, model } = require("mongoose");

const toppingSchema = new Schema({
  tName: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    default: 0,
  },

  description: {
    type: String,
    required: false,
  },
});

const Topping = model('Topping', toppingSchema);

module.exports = Topping