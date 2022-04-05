import { makeVar,InMemoryCache,gql,useQuery } from "@apollo/client";

export const cache = new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          cartItems: {          read() {            return cartItemsVar();          }        }      }
      }
    }
  });
  export function AddToCartButton({ productId }) {
    
    cartItemsVar([...cartItemsVar(), productId])
         console.log("hhhhh",cartItemsVar())
  }
export const cartItemsVar = makeVar([]);
export const GET_CART_ITEMS = gql`
  query GetCartItems {
    cartItems @client
  }
`;
export function Cart() {
  const { data, loading, error } = useQuery(GET_CART_ITEMS);  if (loading) return <p>Loading;</p>
  if (error) return <p>ERROR: {error.message}</p>;  return (
    <div class="cart">
      <h1>My Cart</h1>
      {data && data.cartItems.length === 0 ? (
        <p>No items in your cart</p>
      ) : (
        <body>
          {data && data.cartItems.map(productId => (
             <p>key={productId} <h>{productId}</h></p>
          ))}
        </body>
      )}
    </div>
  );
}