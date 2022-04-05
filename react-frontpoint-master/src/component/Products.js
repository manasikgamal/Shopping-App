import React, { Component } from "react";
import { Link } from "react-router-dom";
import { cartItemsVar } from '../index';
import { useQuery,gql } from "@apollo/client";
import Deschoc from "./Deschoc";
export default class Products extends Component {
  state = {
    style:""
  }
  render() {
    const x=localStorage.getItem('cartitems')?JSON.parse(localStorage.getItem('cartitems')):[]
    console.log("productwwww",this.props.products)
    return (
      <div>
        <div className="pro">
          <h>{this.props.name===""?"ALL":this.props.name.toUpperCase()}</h>
        </div>
        <div className="products">
          {this.props.products.map((product) => (
            <div key={product.id} className="icon-pos">
                  <div className={
                      product.icon === 1
                        ? "product cardstyle"
                        : "product"
                    }
                  >
                    <Link to={`/description/${product.id}`}>
                      <img src={product.gallery[0]} alt={product.name} />
                      <div
                        className={this.props.isVisible ? "child" : ""}
                      ></div>
                      <p>{product.name}</p>
                      {product.brand}
                      <p>
                        
                        {product.prices
                          .filter((pro) => pro.currency === this.props.currn)
                          .map((p) => p.amount)}
                      </p>
                    </Link>
                  </div>
                  {x.find(n=>n.id===product.id)? (
                    <img className="icon-img" src="/images/icon.png" alt="" />
                  ) : (
                    ""
                  )}
              </div>
            ))}
        </div>
      </div>
    );
  }
}