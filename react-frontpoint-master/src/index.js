import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  {Query}   from '@apollo/client/react/components'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
  makeVar 
} from "@apollo/client";
export const cartItemsVar = makeVar([]);
export const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache({
    typePolicies:{
      Query:{
        fields:{
          product(_,{args,toReference}){
            return toReference({
              __typename:'Product',
              id:args?.id
            })
          },
          cartItems: {         
             read() {            
               return cartItemsVar();          
              }        },
        }
      }
    }
  }),
});
const getdata=client
.query({
  query: gql`
    query getpro {
          category{
            products{
              name
              gallery
             prices {
              currency
              amount
            } 
            
                }
              }    
    }
  `
})
.then(result => console.log(result.data.category));
ReactDOM.render(
  
  <BrowserRouter><ApolloProvider client={client}>
   <App />
  </ApolloProvider></BrowserRouter>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
