import React from 'react'
import Bag from './Bag'
import { useReactiveVar } from '@apollo/client';
import {cartItemsVar} from "../index"
export default function Bagquery() {
    const cartItems = useReactiveVar(cartItemsVar);
  return (
    <div><Bag isElVisible={this.isElVisible}
    currn={this.state.currn}
    getCurrencySymbol={this.getCurrencySymbol} cartitems={cartItems}/></div>
  )
}
