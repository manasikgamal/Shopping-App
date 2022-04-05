import React, { Component } from 'react'
export default class Headerprice extends Component {
    render() {
        return (
            <div className="hcurrnbtns">
                 {this.props.price.map((p,index)=>(
                    <div key={index}>
                        <button value={p.currency} onClick={e => {this.props.onclick(e, "value");this.props.currnvisible();}}>
                    {}
                     
                            {" "}
                            {p.currency}</button>
                    </div>
                ))}
            </div>
        )
    }
}
