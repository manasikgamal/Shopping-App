import React, { Component } from 'react'
export default class Gallary extends Component {
    constructor(props) {
        super(props);
        this.state = {
          src:props.images[0]
        }
    }
    handleimage=(src)=>{
        this.setState({src:src})
    }
    render() {
        return (
            <div className="thank">
              <div className="lmg">
              <div className={this.props.isVisible?"sdescshadow":""}></div>
                {this.props.images.map((img,index)=>(
                    <ul key={index}>
        <li><img src={img} alt="img" onClick={()=>this.handleimage(img)}></img></li>
        </ul>))} 
        </div>
        <div className="differ">
            <ul>
        <li><img src={this.state.src} alt="img"></img></li>
        <div className={this.props.isVisible?"ldescshadow":""}></div>
        </ul>
        </div>     
            </div>
        )
    }
}
