const { Schema, model } = require('mongoose')

const myOrderSchema = new Schema({
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
      sauceType: {
        type: Schema.Types.ObjectId,
        ref: "Sauce",
        required: false,
      },

      Quantity: {
        type: Number,
        required: true,
        default: 1
      }
    }  
  ],

  side:
    [
      {
        sideType: {
          type: Schema.Types.ObjectId,
          ref: "Side",
          required: true
        },

        Quantity: {
          type: Number,
          required: true,
          default: 1
        }
      }
    ],
  
  drink:
    [
      {
        drinkType: {
          type: Schema.Types.ObjectId,
          ref: "Drink",
          required: true
        },

        Quantity: {
          type: Number,
          required: true,
          default: 1
        }
      }
    ]
});

const MyOrder = model('MyOrder', myOrderSchema)

module.exports = MyOrder;
