import React, { Component } from 'react';

export default class Button extends Component {
    constructor() {
        super();
        this.state = {
            choose:-1,
            x:true
        }}
        componentDidMount(){
            this.defaultvalue()
        }
        defaultvalue=(sizearray,size,items,proid)=>{
            const product=localStorage.getItem("items")
            ? JSON.parse(localStorage.getItem("items"))
            : [];
            const x=product.map(p=>p.attributes)
           x.forEach(element=>{
            element.forEach(e=>{
               if(e.choose===this.props.pro)
               this.setState({choose:e.key})
                    //this.setState({choose:e.key})
            })
            //this.setState({choose:element})
        })
        }
        bgcolor=(sizearray,size,value,items,key)=>{
            sizearray.forEach(element => {
                if(element.id===size){
                    items.forEach(item=>{
                        if(item.value===value){
                        this.setState({choose:key})
                        console.log("color",key)
                        }  })} });}
  render() {
      console.log("foooo",this.props.pro)
    return <div>
        <ul >
                     <li> <button key={this.props.index} style={{backgroundColor:this.props.type==="swatch"?this.props.pro:"",
                     color:this.props.type==="swatch"?this.props.pro:"",
                     border:this.props.index===this.state.choose?"red solid":""
                     }} 
                     value={this.props.pro} 
                     onClick={(event)=>{this.props.onattributclick(this.props.pro,this.props.id,this.props.index);
                     this.bgcolor(this.props.size,this.props.id,this.props.pro,this.props.items,this.props.index);
                     //this.props.fullitems(this.props.size,this.props.proid)
                    //this.chandex()
                    }}>{this.props.pro}</button>
                     </li>
                    </ul>



    </div>;
  }
}
