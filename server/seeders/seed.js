const mongoose = require('mongoose');
const MainCourse = require('../models/mainCourse');
const Topping = require('../models/topping');
const Sauce = require('../models/sauce');
const Side = require('../models/side');
const Drink = require('../models/drink');
const User = require('../models/user');
const { Menu } = require('../models');

const seedDB = async () => {

let profileSeed = [
    {
      "username": "John",
      "email": "john@example.com",
      "password": "password123"
    }
]
    
let mcSeed = [
    {
      "mcName": "Burger",
      "price": 8,
      "description": "This is a Burger"
    },
    {
      "mcName": "Hot Dog",
      "price": 5,
      "description": "This is a Hot Dog"
    },
]

let tSeed = [
  {
    "tName": "Cheddar Cheese",
    "price": 0,
  },

  {
    "tName": "American Cheese",
    "price": 0,
  },

  {
    "tName": "PepperJack Cheese",
    "price": 0,
  },

  {
    "tName": "Swiss Cheese",
    "price": 0,
  },

  {
    "tName": "Provolone Cheese",
    "price": 0,
  },

  {
    "tName": "Lettuce",
    "price": 0,
    "description": "Shoestring lettuce is thinly sliced, crisp lettuce that adds a light."
  },

  {
    "tName": "Tomato",
    "price": 0,
    "description": "Thinly sliced tomato adds a fresh, juicy layer of flavor."
  },

  {
    "tName": "Red Onion",
    "price": 0,
    "description": "Thinly sliced red onion offers a crisp, tangy bite, adding vibrant color and flavor."
  },

  {
    "tName": "Sweet Onion",
    "price": 0,
    "description": "Thinly sliced sweet onion provides a mild, deliciously sweet flavor."
  },
  
  {
    "tName": "Sautéed Onion",
    "price": 0,
    "description": "Cooked to golden-brown perfection, adding a rich, sweet, and savory flavor."
  },

  {
    "tName": "Dill Pickles",
    "price": 0,
    "description": "Dill pickles bring a delightful crunch and tangy flavor."
  },

  {
    "tName": "Bacon",
    "price": 1.5,
    "description": "Savory and crispy, our bacon topping delivers a deliciously smoky flavor and satisfying crunch."
  },

  {
    "tName": "Relish",
    "price": 0,
    "description": "Sweet pickle relish adds a burst of flavor with its tangy and sweet notes."
  },

  {
    "tName": "Sauerkraut",
    "price": 0,
    "description": "Finely shredded cabbage that has been fermented, giving it a tangy, slightly sour flavor with a crunchy texture."
  },

  {
    "tName": "Jalapeños",
    "price": 0,
    "description": "These bold, tangy peppers add a delightful zesty kick."
  },
  
]

let sauceSeed = [
  {
    "sauceName": "Ketchup",
    "description": "Ketchup on your sandwich."
  },

  {
    "sauceName": "Ketchup",
    "type": "packets",
    "description": "Heinz ketchup packets."
  },

  {
    "sauceName": "Ketchup",
    "type": "4 oz",
    "price": .5,
    "description": "Heinz ketchup in a 4 ounce container"
  },

  {
    "sauceName": "Mayo",
    "description": "Hellmann's mayo on your sandwich."
  },

  {
    "sauceName": "Mayo",
    "type": "packets",
    "description": "Hellmann's mayo packets."
  },

  {
    "sauceName": "Yellow Mustard",
    "description": "Yellow mustard on your sandwich."
  },

  {
    "sauceName": "Yellow Mustard",
    "type": "packets",
    "description": "Yellow mustard packets."
  },

  {
    "sauceName": "Stadium Mustard",
    "description": "Stadium mustard on your sandwich."
  },

  {
    "sauceName": "Stadium Mustard",
    "type": "packets",
    "description": "Stadium mustard packets."
  },

  {
    "sauceName": "Thousand Island",
    "type": "2 oz",
    "price": ".25",
    "description": "Homemade Thousand Island in a 2 ounce container."
  },

  {
    "sauceName": "Thousand Island",
    "type": "4 oz",
    "price": ".5",
    "description": "Homemade Thousand Island in a 4 ounce container."
  },
]

let sideSeed = [
  {
    "sideName": "French Fries",
    "price": 2.5,
    "description": "Crispy and golden, our freshly cut French fries are made from premium potatoes, hand-cut and fried to perfection. Enjoy them hot and lightly salted."
  },

  {
    "sideName": "Chips",
    "price": 1,
    "description": "Enjoy a variety of 8 oz bags of crispy chips! Be sure to ask our staff what flavors we have available today."
  },

  {
    "sideName": "Coleslaw",
    "price": 1,
    "description": "A refreshing blend of finely shredded cabbage and carrots, tossed in a creamy dressing. Our cole slaw is the perfect balance of crunchy and tangy, making it an ideal side dish for your meal."
  }
]

let dSeed = [
  {
    "dName": "Dr. Pepper",
    "price": 1
  },

  {
    "dName": "Coke",
    "price": 1
  },

  {
    "dName": "Coke",
    "flavor": "Diet",
    "price": 1
  },

  {
    "dName": "Coke",
    "flavor": "Zero",
    "price": 1
  },

  {
    "dName": "Coke",
    "flavor": "Cherry",
    "price": 1
  },

  {
    "dName": "Pepsi",
    "price": 1
  },

  {
    "dName": "Pepsi",
    "flavor": "Diet",
    "price": 1
  },

  {
    "dName": "Sprite",
    "price": 1
  },
]
  

  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/MenuDB', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Database connected.');
    
    await Menu.deleteMany({});
    await MainCourse.deleteMany({});
    await Topping.deleteMany({});
    await Sauce.deleteMany({});
    await Side.deleteMany({});
    await Drink.deleteMany({});
    await User.deleteMany({});

    const mainCourses = await MainCourse.create(mcSeed);
    const toppings = await Topping.create(tSeed);
    const sauces = await Sauce.create(sauceSeed);
    const sides = await Side.create(sideSeed);
    const drinks = await Drink.create(dSeed);
    await User.create(profileSeed);

    const menuEntry = {
      mainCourse: mainCourses.map(mc => mc._id),
      toppings: toppings.map(t => t._id),
      sauce: sauces.map(s => s._id),
      side: sides.map(s => s._id),
      drink: drinks.map(d => d._id)
    };

    await Menu.create(menuEntry);

    console.log('Database seeded.');
    mongoose.connection.close();
  } catch (err) {
    console.error(err);
  }
};

seedDB();