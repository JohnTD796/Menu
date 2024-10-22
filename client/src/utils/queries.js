import { gql } from '@apollo/client';

export const GET_MENU = gql`
query GetMenu {
  getMenu {
    _id
    mainCourse {
      mcName
      price
    }
    toppings {
      tName
      price
    }
    sauce {
      sauceName
      type
      price
    }
    side {
      sideName
      price
    }
    drink {
      dName
      flavor
      size
      price
    }
  }
}
`;