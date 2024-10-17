const { Schema, model } = require("mongoose");

const sidesSchema = new Schema({
  sName: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

});

const Sides = model('Sides', sidesSchema);

module.exports = Sides