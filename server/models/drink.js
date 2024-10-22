const { Schema, model } = require("mongoose");

const drinkSchema = new Schema({
  dName: {
    type: String,
    required: true,
  },

  size: {
    type: String,
    default: "12 oz",
    required: true,
  },

  flavor: {
    type: String,
    default: "Original",
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

});

const Drink = model('Drink', drinkSchema);

module.exports = Drink