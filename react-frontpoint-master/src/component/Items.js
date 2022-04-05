import React, { Component } from 'react'
export default class Items extends Component {
    constructor() {
        super();
        this.state = {
            choose:-1,
            x:true
        }}
        bgcolor=(sizearray,size,value,items,key)=>{
            sizearray.forEach(element => {
                if(element.id===size){
                    items.forEach(item=>{
                        if(item.value===value){
                        this.setState({choose:key})
                        }  })} });}
    defaultvalue=()=>{
        const product=localStorage.getItem("items")
            ? JSON.parse(localStorage.getItem("items"))
            : [];
        const x=product.map(p=>p.attributes)
        x.forEach(element=>{
            element.forEach(e=>{
               if(e.id===this.props.id)
               this.setState({choose:e.key})
                    console.log("enshaalla",e)
            })
})
    } 
componentDidMount(){
    this.defaultvalue()
}
//chandex=()=>{
    //this.setState({x:false})
//}
    render() {
       // if(this.state.x===true){
            //this.defaultvalue(this.props.size,this.props.id,this.props.items,this.props.proid)
           // this.props.fullitems(this.props.size)
           // this.setState({x:false})
        //}
        return (
            <div className="sizeshow">
                 {this.props.items.map((pro,index)=>(
                    <ul >
                     <li> <button disabled={!this.props.stoke} key={index} style={{backgroundColor:this.props.type==="swatch"?pro.value:"",
                     color:this.props.type==="swatch"?pro.value:"",
                     border:index===this.state.choose?"red solid":""
                     }} 
                     value={pro.value} 
                     onClick={(event)=>{this.props.onattributclick(pro.value,this.props.id,index);
                     this.bgcolor(this.props.size,this.props.id,pro.value,this.props.items,index);
                     this.props.fullitems()
                    //this.chandex()
                    }}>{pro.value}</button>
                     </li>
                    </ul>
                ))}
              
            </div>
        )
    }
}
