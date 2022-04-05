import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    gql,
    useQuery
  } from "@apollo/client";
  const getpro =gql`
  {
    currencies {
      edges {
        node {
          name
          code
          symbol
        }
      }
    }
  }  
`;
export default function CurrnAPI(){
     const client = new ApolloClient({
        uri: 'https://graphql.country/graphql',
        cache: new InMemoryCache()
      })
     client.query({query:getpro}).then(result => console.log("from currn",result.data.currencies.edges))
  return (
    <div>
  
    </div>
  )
}