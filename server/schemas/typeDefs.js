const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Auth {
    token: ID!
    user: User
  }
  
  type User  {
    _id: ID!
    username: String!
    email: String!
    cart: [MyCart]
  }

  type MainCourse {
    _id: ID!
    mcName: String!
    toppings: String!
    sauces: String!
    price: Number!
  }

  type Sides {
    _id: ID!
    sName: String!
    price: Number!
  }

  type MyCart {
    _id: ID!
    userId: User!
    mainCourse: [MainCourse]!
    sides: [Sides]!
    }

  type Query {
    me: User
    
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }

`;

module.exports = typeDefs;