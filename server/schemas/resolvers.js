const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const User = require('../models/user')
const Menu = require('../models/menu')
const MyOrder = require('../models/myOrder')
const MainCourse = require('../models/mainCourse')
const Cheese = require('../models/cheese');
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

    // user: async (parent, { _id }, context) => {
    //   if (context.user) {
    //     return User.findOne({ _id: context.user._id });
    //   }
    //   throw new AuthenticationError('You need to be logged in!');
    // },

    getMenu: async (parent, args, context) => {
      try {
        const menu = await Menu.find().populate('mainCourse cheese toppings sauce side drink');
        console.log(menu)
        return menu
      } catch (error) {
        console.error('Error fetching menu', error);
        throw new Error('Failed to fetch menu')
      }
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },

    addItemToOrder: async (parent,
      {
        orderId,
        mainCourseId,
        cheeseId,
        toppingId,
        sauceId,
        sauceQuantity,
        sideId,
        sideQuantity,
        drinkId,
        drinkQuantity,
      },
      context
    ) => {
      if (!context.user) {
        throw new AuthenticationError('Not logged in');
      }

      const updateFields = {};

      if (maincourseId) {
        updateFields.$push = { mainCourse: mainCourseId };
      };
      if (cheeseId) {
        updateFields.$push = { cheese: cheeseId };
      };
      if (toppingId) {
        updateFields.$push = { topping: toppingId };
      };
      if (sauceId) {
        updateFields.$push = {
          sauce: sauceId,
          Quantity: sauceQuantity
        };
      };
      if (sideId) {
        updateFields.$push = {
          side: sideId,
          Quantity: sideQuantity
        };
      };
      if (drinkId) {
        updateFields.$push = {
          drink: drinkId,
          Quantity: drinkQuantity
        };
      }

      try {
        const updatedOrder = await MyOrder.findByIdAndUpdate(
          orderId,
          updateFields,
          { new: true}
        ).populate('mainCourse cheese toppings sauce side drink');

        return updatedOrder
      } catch (error) {
        console.error('Error updateding order:', error);
        throw new Error("Failed to update order");
      }
    }

  }
};

module.exports = resolvers;