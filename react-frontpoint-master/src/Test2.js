import React, { Component } from 'react'

export default class Test2 extends Component {
    render() {
        return (
            <div>
               {this.props.products.map(p=>(<p>{p.name}<br/></p>))}
            </div>
        )
    }
}
