import React, { Component } from 'react'
import Items from './Items';

export default class Size extends Component {
    render() {
        return (
            <div >
                {this.props.size.map((pro,index)=>(
                    <div key={index}>
                    <p>{pro.id}</p>
                     <p><Items key={index} fullitems={this.props.fullitems} 
                     tocart={this.props.tocart} type={pro.type} 
                     size={this.props.size} 
                     proid={this.props.proid} 
                     stoke={this.props.stoke}
                     id={pro.id} onattributclick={this.props.onattributclick} items={pro.items}/></p>
                    </div>        
                ))}
                
            </div>
        )
    }
}
