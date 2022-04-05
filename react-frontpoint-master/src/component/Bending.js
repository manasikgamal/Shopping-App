import { gql, useQuery ,useReactiveVar} from '@apollo/client';
import { cartItemsVar } from '../index';

export function Bending() {
  const cartItems = useReactiveVar(cartItemsVar);
  return (
    <div class="cart">
  my cart
  {console.log("bending",cartItems)}
      {cartItems.length === 0 ? (
        <p>No items in your cart</p>
      ) : (
        <p>
          {cartItems.map(productId => (
            <p key={productId}>{productId}</p>
          ))}
          </p>
      )}
    </div>
  );
}