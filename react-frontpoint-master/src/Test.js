import React, { Component } from 'react'
import { AddToCartButton } from './UpdateCache';
import Test2 from './Test2';
export default class Test extends Component {  
    render() {
        return (
            <div>
              hello from client
              {this.props.products.map(p=>(<button onClick={AddToCartButton(p.id)}>{p.name}</button>))}
            </div>
        )
    }
}
