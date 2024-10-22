const { Schema, model } = require("mongoose");

const sauceSchema = new Schema({
  sauceName: {
    type: String,
    required: true,
  },

  type: {
    type: String,
    required: false,
  },

  price: {
    type: Number,
    required: true,
    default: 0
  }

});

const Sauce = model('Sauce', sauceSchema);

module.exports = Sauce