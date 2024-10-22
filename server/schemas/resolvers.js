const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const User = require('../models/user')
const Menu = require('../models/menu')
const MyOrder = require('../models/myOrder')
const MainCourse = require('../models/mainCourse')
const Topping = require('../models/topping')
const Sauce = require('../models/sauce')
const Side = require('../models/side')
const Drink = require('../models/drink')

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (!context.user) {
        throw new AuthenticationError('Not logged in');
      }
      return await User.findById(context.user._id);
    },
    getMenu: async (parent, args, context) => {
      try {
        const menu = await Menu.find().populate('mainCourse toppings sauce side drink');
        console.log(menu)
        return menu
      } catch (error) {
        console.error('Error fetching menu', error);
        throw new Error('Failed to fetch menu')
      }
    },
  },
};

module.exports = resolvers;