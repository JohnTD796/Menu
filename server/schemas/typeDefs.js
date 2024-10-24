const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Auth {
    token: ID!
    user: User
  }
  
  type User {
    _id: ID!
    username: String!
    email: String!
    myOrders: [MyOrder]
  }

  type Menu {
    _id: ID!
    mainCourse: [MainCourse]!
    toppings: [Topping]!
    sauce: [Sauce]!
    side: [Side]!
    drink: [Drink]!
  }

  type MainCourse {
    _id: ID!
    mcName: String!
    price: Float!
    description: String
  }
  
  type Topping {
    _id: ID!
    tName: String!
    price: Float!
    description: String
  }
  
  type Sauce {
    _id: ID!
    sauceName: String!
    type: String
    price: Float!
    description: String
  }

  type Side {
    _id: ID!
    sideName: String!
    price: Float!
    description: String
  }

  type Drink {
    _id: ID!
    dName: String!
    size: String!
    flavor: String!
    price: Float!
  }

  type MyOrder {
    _id: ID!
    userId: User!
    mainCourse: [ID]!
    toppings: [ID]!
    sauce: [Sauce]
    side: [Side]!
    drink: [Drink]!
  }

  input SauceInput {
    sauceType: ID
    quantity: Int
  }

  input SideInput {
    sideType: ID
    quantity: Int
  }

  input DrinkInput {
    drinkType: ID
    quantity: Int
  }

  input MyOrderInput {
    mainCourse: [ID]!
    toppings: [ID]!
    sauce: [SauceInput]!
    side: [SideInput]!
    drink: [DrinkInput]!
  }

  type Query {
    me: User
    getMenu: [Menu]
    getOrder(id: ID!): MyOrder
    getAllOrders: [MyOrder!]!
    
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    createOrder(input: MyOrderInput!): MyOrder!
  }

`;

module.exports = typeDefs;