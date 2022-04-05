import React from 'react';
import { gql, useQuery } from '@apollo/client';
import Description from './Description';
import { useParams } from "react-router-dom";
const getpro =gql`
query($id:String!){
      product(id:$id){
        id
        name
        brand
        inStock
        category
        gallery
        description
        prices {
          currency
          amount
        }
        attributes{
          id
          name
          items{
            id
            value
          }
        }
        isInCart @client
      }
  }    
`;
export default function Deschoc({addtocart}) {
  const params = useParams();
    const { loading, error, data } = useQuery(getpro,{
        variables: {id:params.id}});
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
  return <div>
      <Description addtocart={addtocart} desc={data}/>
  </div>;
}
