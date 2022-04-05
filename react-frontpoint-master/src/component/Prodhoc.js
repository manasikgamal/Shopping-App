import React from 'react'
import { gql, useQuery,useReactiveVar } from '@apollo/client';
import { productVar } from '..';
import Products from './Products';
const getpro =gql`
query getproducts($title:String!){
  category(input:{title:$title}){
      products{
          id
          name
          category
          gallery
         prices {
          currency
          amount
         } 
         }
  }    }
`;
export default function Prodhoc({title}) {
    const { loading, error, data } = useQuery(getpro,{
        variables: {title:title}});
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
  return (
    <div>
  <Products products={data.category.products} name={title}/>
    </div>
  )
}
