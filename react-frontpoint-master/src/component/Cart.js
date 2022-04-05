import React, { Component } from "react";
import { Addtocart } from "./Addtocart";
import{Removecard} from "./Removecart"
import Cartgallary from "./Cartgallary";
import Price from "./Price";
export default class Cart extends Component {
  render() {
    const  {cartitems}=this.props;
    return (
      <div className="carcontainert">
        <div className={this.props.isVisible ? "cartbtnshadow" : ""}></div>
        <div className="cardc">CART</div>

        <ul>
          {cartitems.map((item) => (
            <li key={item.id}>
              <div>
                <div
                  className={
                    this.props.isVisible ? "cartdet container" : "cartdet"
                  }
                >
                  <hr />
                  <div className="cardtitle">{item.name}</div>
                  <div className="brand">{item.brand}</div>
                  <div className="cardprice">
                    <Price currn={this.props.currn} price={item.prices} />
                  </div>
                  <div>
                    {item.attributes.map((pro, index) => (
                      <div className="sizeshow" key={index}>
                        <li className="atname">{pro.name}</li>
                        <li>
                          <button
                            style={{
                              backgroundColor:
                                pro.type === "swatch" ? pro.choose : "",
                              color: pro.type === "swatch" ? pro.choose : "",
                              border:
                                pro.type === "swatch" ? "1px solid black" : "",
                            }}
                          >
                            {pro.choose}
                          </button>
                        </li>
                      </div>
                    ))}
                  </div>
                </div>
                <div
                  className={
                    this.props.isVisible ? "maxmin container" : "maxmin"
                  }
                >
                  <hr />
                  <button
                    onClick={() => this.props.addtocart(item)}
                    className="max"
                  >
                    +
                  </button>
                  <p>{item.count}</p>
                  <button
                    onClick={() => this.props.removefromcard(item)}
                    className="min"
                  >
                    -
                  </button>
                </div>
                <li>
                  {" "}
                  <div className="cartimg">
                    <hr />
                    <Cartgallary
                      images={item.gallery}
                      isVisible={this.props.isVisible}
                    />
                  </div>
                </li>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
