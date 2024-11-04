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
    cheese: [Cheese]!
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
  
  type Cheese {
    _id: ID!
    cName: String!
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

  type SauceOrder {
    sauceType: Sauce!
    Quantity: Int!
  }

  type Side {
    _id: ID!
    sideName: String!
    price: Float!
    description: String
  }

  type SideOrder {
    sideType: Side!
    Quantity: Int!
  }

  type Drink {
    _id: ID!
    dName: String!
    size: String!
    flavor: String!
    price: Float!
  }
  
  type DrinkOrder {
    drinkType: Drink!
    Quantity: Int!
  }

  type MyOrder {
    _id: ID!
    userId: User!
    mainCourse: [MainCourse]
    cheese: [Cheese]
    toppings: [Topping]
    sauce: [SauceOrder]
    side: [SideOrder]
    drink: [DrinkOrder]
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
    orderId: ID!
    mainCourse: [ID]
    cheese: [ID]
    toppings: [ID]
    sauce: [SauceInput]
    sauceQuantity: Int
    side: [SideInput]
    sideQuantity: Int
    drink: [DrinkInput]
    drinkQuantity: Int
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
    addItemToOrder(input: MyOrderInput!): MyOrder
  }

`;

module.exports = typeDefs;