import { gql } from "@apollo/client"
export const getpro =gql`
query getpro{
  category{
      products{
          id
          name
         }
  }    }
`
export const getallpro =gql`
query getallpro{
  category @client{
      products{
          id
          name
          category
         }
  }    }
`
export const GET_CART_ITEMS = gql`
  query GetCartItems {
    cartItems @client
  }
`;