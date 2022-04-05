import React, { Component } from 'react'

export default class ShopIcon extends Component {
  render() {
    const cartitems = localStorage.getItem('cartitems')
    ? JSON.parse(localStorage.getItem('cartitems')): this.props;
    return (
      <div className='newshop'>
          {cartitems.length === 0 ? (
        ""
      ) : (
        <span id="lblCartCount"> {cartitems.reduce(
          (a, c) =>a +c.count,0)} </span>
      )}</div>
    )
  }
}
