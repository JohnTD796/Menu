import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_TO_ORDER = gql`
  mutation addItemToOrder($input: MyOrderInput!) {
    addItemToOrder(input: $input) {
      _id
      userId {
        email
        username
      }
      mainCourse {
        _id
        mcName
        price
      }
      cheese {
        _id
        cName
      }
      toppings {
        _id
        tName
        price
      }
      sauce {
        sauceType {
          _id
          sauceName
          price
        }
        Quantity
      }
      side {
        sideType {
          _id
          sideName
          price
        }
        Quantity
      }
      drink {
        drinkType {
          _id
          dName
          flavor
          price
          size
        }
        Quantity
      }
    }
  }`