import React, { Component } from 'react'

export default class Cartgallary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index:0
        }
    }
    increaseimg=()=>{
        this.setState({index:this.state.index+1})
    }
    decreaseimg=()=>{
        this.setState({index:this.state.index-1})
    }
    stopincrease=(x)=>{
        this.setState({index:x})
    }
    stopdecrease=()=>{
        this.setState({index:0})
    }
    render() {
        return (
            <div> 
                <li> <div className="cartimg">
                <div className={this.props.isVisible?"cartimgshadow":""}></div>
                                 <button className="carddecrease" onClick={this.state.index<=0?()=>this.stopdecrease():()=>this.decreaseimg()}>&lt;</button>
                                <img src={this.props.images[this.state.index]} alt="img"></img>
                                <button className="cartincrease" onClick={this.state.index>=this.props.images.length-1?()=>this.stopincrease(this.props.images.length-1):()=>this.increaseimg()}>&gt;</button>
                
                                </div>
                                  </li>
                              </div>
            
        )
    }
}
