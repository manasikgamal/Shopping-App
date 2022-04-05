import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Addtocart } from "./Addtocart";
import { Removecard } from "./Removecart";
import Price from "./Price";
export default class Bag extends Component {
  //timeout = null;
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
      this.props.isElVisible()
    }
}
onScroll = () => {
  //this.setState({ isScrolling: true });
  this.props.isElVisible()
  //clearTimeout(this.timeout);

 // this.timeout = setTimeout(() => {
 //   //this.setState({ isScrolling: false });
 // }, 200);
};
  render() {
    const {cartitems}= this.props;
    return (
      <div>
        <div  ref={this.wrapperRef}
          className={
            cartitems.length <= 2 ? "bagcontainer" : "bagcontainer bar"
          }
        >
          <div className="formItem">
            <div className="frRow">
              <div className="wrapper">
                <div className="frRow">
                  <h>My Bag</h>,{cartitems.reduce(
                        (a, c) =>a +c.count,0)} items
                </div>

                {cartitems.map((item) => (
                  <div key={item.id}>
                    <div className="firstdiv">
                      <div className="frRowbagtitle">{item.name}</div>
                      <div className="frRow bagbrand">{item.brand}</div>
                      <div className="frRow bagprice">
                        <Price currn={this.props.currn} price={item.prices} />
                      </div>
                      <div className="frRow">
                        {item.attributes.map((pro, index) => (
                          <div className="sizeshow" key={index}>
                            <button
                              style={{
                                backgroundColor:
                                  pro.type === "swatch" ? pro.choose : "",
                                color: pro.type === "swatch" ? pro.choose : "",
                                border:
                                  pro.type === "swatch"
                                    ? "1px solid black"
                                    : "",
                              }}
                            >
                              {pro.choose}
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="seconddiv bagmaxmin">
                      <button
                        onClick={() => this.props.addtocart(item)}
                        className="frRow bagmax"
                      >
                        +
                      </button>
                      <p className="frRow par">{item.count}</p>
                      <button
                        onClick={() => this.props.removefromcard(item)}
                        className="frRow bagmin"
                      >
                        -
                      </button>
                    </div>
                    <div className="thirddiv bagimg">
                      <img src={item.gallery[0]} alt={item.name}></img>
                    </div>
                  </div>
                ))}
              </div>
              {cartitems.length !== 0 && (
                <div className="frRow">
                  <div className="frCell bagtotal">
                    <p>Total</p>
                  </div>
                  <div className="frCell bagtotal">
                    {" "}
                    <h>
                      {this.props.currn === "RUB"
                        ? this.props.getCurrencySymbol("ru", this.props.currn)
                        : this.props.getCurrencySymbol("en", this.props.currn)}
                      {cartitems.reduce(
                        (a, c) =>
                          a +
                          c.prices
                            .filter((pro) => pro.currency === this.props.currn)
                            .map((p) => p.amount) *
                            c.count,
                        0
                      )}
                    </h>
                  </div>
                </div>
              )}
            </div>
            <div className="frRow bagbtn">
              <Link to="/cart">
                <button
                  onClick={() => this.props.isElVisible()}
                  className="frCell bagbtnview"
                >
                  VIEW BAG
                </button>
              </Link>
              <button className="frCell bagbtncheck">CHECK OUT</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
