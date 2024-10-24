const { Schema, model } = require("mongoose");

const sideSchema = new Schema({
  sideName: {
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

const Side = model('Side', sideSchema);

module.exports = Side