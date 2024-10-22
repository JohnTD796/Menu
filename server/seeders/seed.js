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
      "price": 8
    },
    {
      "mcName": "Hot Dog",
      "price": 5
    },
]

let tSeed = [
  {
    "tName": "Cheddar Cheese",
    "price": 0
  },
  {
    "tName": "American Cheese",
    "price": 0
  },
  {
    "tName": "PepperJack Cheese",
    "price": 0
  },
  {
    "tName": "Swiss Cheese",
    "price": 0
  },
  {
    "tName": "Provolone Cheese",
    "price": 0
  },

  {
    "tName": "Tomato",
    "price": 0
  },

  {
    "tName": "Red Onion",
    "price": 0
  },

  {
    "tName": "Sweet Onion",
    "price": 0
  },
  
  {
    "tName": "Sautéed Onion",
    "price": 0
  },

  {
    "tName": "Dill Pickles",
    "price": 0
  },

  {
    "tName": "Bacon",
    "price": 1.5
  },

  {
    "tName": "Relish",
    "price": 0
  },

  {
    "tName": "Sauerkraut",
    "price": 0
  },

  {
    "tName": "Jalapeños",
    "price": 0
  },
  
]

let sauceSeed = [
  {
    "sauceName": "Ketchup"
  },

  {
    "sauceName": "Ketchup",
    "type": "packets"
  },

  {
    "sauceName": "Ketchup",
    "type": "4 oz",
    "price": .5
  },

  {
    "sauceName": "Mayo"
  },

  {
    "sauceName": "Mayo",
    "type": "packets"
  },

  {
    "sauceName": "Yellow Mustard"
  },

  {
    "sauceName": "Yellow Mustard",
    "type": "packets"
  },

  {
    "sauceName": "Stadium Mustard"
  },

  {
    "sauceName": "Stadium Mustard",
    "type": "packets"
  },

  {
    "sauceName": "Thousand Island",
    "type": "2 oz",
    "price": ".25"
  },

  {
    "sauceName": "Thousand Island",
    "type": "4 oz",
    "price": ".5"
  },
]

let sideSeed = [
  {
    "sideName": "FrenchFries",
    "price": 2.5
  },

  {
    "sideName": "Chips",
    "price": 1
  },

  {
    "sideName": "Coleslaw",
    "price": 1
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