const { Schema, model } = require('mongoose');

const menuSchema = new Schema ({
  mainCourse: [
    {
      type: Schema.Types.ObjectId,
      ref: "MainCourse"
    },
  ],

  toppings: [
    {
      type: Schema.Types.ObjectId,
      ref: "Topping"
    }
  ],

  sauce: [
    {
      type: Schema.Types.ObjectId,
      ref: "Sauce"
    }
  ],

  side: [
    {
      type: Schema.Types.ObjectId,
      ref: "Side"
    }
  ],

  drink: [
    {
      type: Schema.Types.ObjectId,
      ref: "Drink"
    }
  ]
});

const Menu = model('Menu', menuSchema)

module.exports = Menu;