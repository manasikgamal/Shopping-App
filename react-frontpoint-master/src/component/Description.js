import React, { Component } from "react";
import { Markup } from "interweave";
import { Link } from "react-router-dom";
import Gallary from "./Gallary";
import chooseatt from "./Allfun"
import Size from "./Size";
import Price from "./Price";
import { Addtocart } from "./Addtocart";
import {cartItemsVar} from "../index"
import Cartquery from "./Cartquery";
export default class Description extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disable: true,
      isBack: false,
      pro_desc:this.props.desc.product
    };
  }
  
  componentWillUnmount(){
    localStorage.removeItem("items");
  }
  
  onattributclick=(value,pros,key)=>{
    const product=this.state.pro_desc;
  chooseatt(product,value,pros,key)
  }
  fullitems = () => {
    let n = 0;
    const x = localStorage.getItem("items")
      ? JSON.parse(localStorage.getItem("items"))
      : [];
    const y=x.map(n=>n.attributes.length)[0]
    x.forEach((item) => {
      item.attributes.forEach((att)=>{
        if (att.ctr === 1) {
          n++;
        }
      })
    });
    if (y === n) {
      this.setState({ disable: false })
      return true
    }
  };
  componentDidMount(){
    //console.log("stock",this.state.pro_desc.inStock)
    if (this.state.pro_desc.attributes.length === 0 && this.state.pro_desc.inStock || 
      this.fullitems()===true) {
      if (this.state.disable) this.setState({ disable: false })};
  }
  render() {
    const {pro_desc} = this.state;
    return (
      <div className="desc">
        {[pro_desc]
          .map((filteredPerson) => (
            <ul key={filteredPerson.id}>
              <Gallary
                images={filteredPerson.gallery}
                isVisible={this.props.isVisible}
              />
              <div className="real">
                <li className="base">{filteredPerson.name}</li>
                <div className="one">{filteredPerson.brand}</div>
                <div className="stock" style={{color:filteredPerson.inStock?"green":"red"}}>
                  {filteredPerson.inStock?"In-stock":"Out-of-stock"}</div>
                <li>
                  <h3 className="size">
                    <Size
                      fullitems={this.fullitems}
                      tocart={this.props.tocart}
                      proid={filteredPerson.id}
                      stoke={filteredPerson.inStock}
                      size={filteredPerson.attributes}
                      onattributclick={this.onattributclick}
                    />
                  </h3>
                </li>
                <div className="price">
                  <h3>PRICE:</h3>
                  <li>
                    <h2>
                      <Price
                        currn={this.props.currn}
                        price={filteredPerson.prices}
                      />
                    </h2>
                  </li>
                </div>
                <Link to="/cart">
                  <button
                    className="descbtn"
                    disabled={this.state.disable}
                    onClick={() => {
                      this.props.addtocart(localStorage.getItem("items")?JSON.parse(localStorage.getItem("items"))[0]:filteredPerson)
                      //this.props.addicon(filteredPerson);
                      //cartItemsVar([Addtocart(JSON.parse(localStorage.getItem("items"))[0])])
                      //localStorage.setItem("cartitems",...cartItemsVar())
                      localStorage.removeItem("items");
                    }}
                    style={{
                      background: this.state.disable
                        ? "darkgrey"
                        : "rgb(62, 231, 113)",
                    }}
                  >
                    ADD TO CART
                  </button>
                </Link>
                <div className="text">
                  <li>
                    <Markup content={filteredPerson.description} />
                  </li>
                </div>
              </div>
            </ul>
          ))}
      </div>
    );
  }
}

