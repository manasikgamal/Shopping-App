import { cartItemsVar } from '../index';
// ... other imports

export function Cartbtn({product}) {
    console.log("btn",product.name)
  return (
    <div class="add-to-cart-button">
      <button onClick={() => cartItemsVar([...cartItemsVar(), product.name])}>Add to Cart
      </button>
    </div>
  );
}