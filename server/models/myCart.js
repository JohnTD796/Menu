const { Schema, model } = require('mongoose')

const myCartSchema = new Schema({
  mainCourse:
  [
    {
      type: Schema.Types.ObjectId,
      ref: "MainCourse"
    },
  ],

  sides:
  [
    {
      type: Schema.Types.ObjectId,
      ref: "Sides"
    },
  ]
});

const MyCart = model('MyCart', myCartSchema)

module.exports = MyCart;
