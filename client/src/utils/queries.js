import { gql } from '@apollo/client';

export const GET_MENU = gql`
query GetMenu {
  getMenu {
    _id
    mainCourse {
      mcName
      price
      description
    }
    toppings {
      tName
      price
      description
    }
    sauce {
      sauceName
      type
      price
      description
    }
    side {
      sideName
      price
      description
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