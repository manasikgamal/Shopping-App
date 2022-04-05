import React, { Component } from 'react'
import Headerprice from './Headerprice';

export default class Currency extends Component {
    constructor(props) {
        super(props);
        this.state={isScrolling: false}
        this.wrapperRef = React.createRef();
       // this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }
    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
        window.addEventListener("scroll", this.onScroll);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
        window.removeEventListener("scroll", this.onScroll);
    }
    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
            this.props.currnvisible()
        }
    }
    onScroll = () => {
        this.props.currnvisible()
      };
    render() {
        console.log(this.props.currn);
        return (
            <div ref={this.wrapperRef} className="currncontainer">
                 {this.props.currn.slice(0, 1).map((pro)=>(
                    <div key={pro.id} >
                       <Headerprice currnvisible={this.props.currnvisible} change={this.props.change} onclick={this.props.onclick} price={pro.prices}/>
                    </div>
                ))}
            </div>
        )
    }
}
