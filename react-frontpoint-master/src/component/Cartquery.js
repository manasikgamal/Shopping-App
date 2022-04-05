import React from 'react'
import { useReactiveVar } from '@apollo/client';
import {cartItemsVar} from "../index"
import Cart from './Cart';
import Bag from './Bag';
import ShopIcon from './ShopIcon';
import Header from './Header';
export default function Cartquery() {
    const cartItems = useReactiveVar(cartItemsVar);
  return (
    <div><Cart cartitems={cartItems}/>{console.log("fromnewwwwww",cartItems)}
    </div>
  )
}
