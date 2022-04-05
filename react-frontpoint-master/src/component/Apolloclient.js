import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Cartbtn } from './Cartbtn';

const GET_DOGS = gql`
  query GetProd($id:String) {
    product(id:$id) {
      id
      name
    }
  }
`;
export default function Apolloclient() {
    const { loading, error, data } = useQuery(GET_DOGS,{
        variables: { id:'apple-airpods-pro' }});
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
  return <div>
      <Cartbtn product={data.product}/>
  </div>;
}
