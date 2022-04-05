import "./App.css";
import React from "react";
import Header from "./component/Header";
import Products from "./component/Products";
import { Route } from "react-router";
import Description from "./component/Description";
import Cart from "./component/Cart";
import Bag from "./component/Bag";
import { gql,ApolloConsumer } from "@apollo/client";
import { makeVar,InMemoryCache } from '@apollo/client';
import { withApollo } from '@apollo/client/react/hoc';
import axios from 'axios';
import { cartItemsVar } from "./index";
import  {Query}   from '@apollo/client/react/components'
import Test from "./Test";
import TestQurey from "./TestQurey"
import TestMutation from "./TestMutation"
import Apolloclient from "./component/Apolloclient";
import { Bending } from "./component/Bending";
import { Cartbtn } from "./component/Cartbtn";
import Deschoc from "./component/Deschoc";
import Cartquery from "./component/Cartquery";
import Prodhoc from "./component/Prodhoc";
import CurrnAPI from "./component/CurrnAPI";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
      cartitems: localStorage.getItem("cartitems")
        ? JSON.parse(localStorage.getItem("cartitems"))
        : [],
      isVisible: false,
      iscurrnvisible: false,
      currn: "USD",
      attribut: "",
      value: "",
      items: [],
      name: "", 
    };
  }
  changename = async(name) => {
    this.setState({name:name})
    //tryexe(this.props)
    //const products=await executeFilter(name,this.props)
    //this.setState({ products})
  };
  onattributclick = (value, pros, proid, size, key) => {
    const products = this.state.products.slice();
    products.forEach((pro) => {
      if(pro.id===proid){
      const newsize =
        localStorage.getItem("items") 
          ? JSON.parse(localStorage.getItem("items"))
          : size;
          console.log("newsize",newsize)
      const mno = newsize.map((item) =>
        item.id === pros
          ? { ...item, choose: value, key: key, ctr: 1, proid: proid }
          : item
      );
      //localStorage.setItem("size",JSON.stringify(newsize)
      localStorage.setItem(
        "items",
        JSON.stringify(
          newsize.map((item) =>
            item.id === pros
              ? { ...item, choose: value, key: key, ctr: 1, proid: proid }
              : item
          )
        )
      );
      this.setState({
        products: products.map((item) =>
          item.id === proid ? { ...item, attributes: mno } : item
        ),
      });
    }});
  };
  isElVisible = () => {
    this.setState({ isVisible: !this.state.isVisible });
    console.log(this.state.isVisible);
  };
  iscurrnv = () => {
    this.setState({ iscurrnvisible: !this.state.iscurrnvisible });
  };
  changecurrn = (e) => {
    this.setState({ currn: e.target.value });
    const products = this.state.products.slice();
    this.setState({ products });
  };
  addtocart = (product) => {
    const cartitems = localStorage.getItem('cartitems')
    ? JSON.parse(localStorage.getItem('cartitems')):[]
    let alreadyincart = false;
    cartitems.forEach((item) => {
      if (item.id === product.id) {
        const pro = product.attributes.map((p) => p.choose);
        const mno = item.attributes.map((a) => a.choose);
        if (JSON.stringify(mno) === JSON.stringify(pro)) {
          item.count++;
          alreadyincart = true;
        }
      }
    });
    if (!alreadyincart) {
      cartitems.push({ ...product, count: 1 });
    }
    localStorage.setItem("cartitems", JSON.stringify(cartitems));
   this.setState({cartitems})
  };
  removefromcard = (product) => {
    const cartitems = this.state.cartitems.slice();
    cartitems.forEach((element) => {
      if (element.id === product.id)
        if (
          JSON.stringify(element.attributes.map((a) => a.choose)) ===
          JSON.stringify(product.attributes.map((p) => p.choose))
        ) {
          if (element.count === 1) {
            // console.log("yes",exist)
            this.setState({
              cartitems: cartitems.filter((x) => x !== element),
            });
            localStorage.setItem(
              "cartitems",
              JSON.stringify(cartitems.filter((x) => x !== element))
            );
          }
          else{
            this.setState({
              cartitems: cartitems.map((x) =>
                x.id === product.id &&
                JSON.stringify(x.attributes.map((a) => a.choose)) ===
                  JSON.stringify(product.attributes.map((p) => p.choose))
                  ? { ...element, count: element.count - 1 }
                  : x
              ),
            });
            localStorage.setItem(
              "cartitems",
              JSON.stringify(
                cartitems.map((x) =>
                  x.id === product.id &&
                  JSON.stringify(x.attributes.map((a) => a.choose)) ===
                    JSON.stringify(product.attributes.map((p) => p.choose))
                    ? { ...element, count: element.count - 1 }
                    : x
                )
              )
            );
          }
        }
    });
  };
  
  getCurrencySymbol = (locale, currency) => {
    return (0)
      .toLocaleString(locale, {
        style: "currency",
        currency: currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      })
      .replace(/\d/g, "")
      .trim();
  };

  render() {
    //console.log("new",this.props.products.category.products)
    return (
      <div className="trybar">
        <div></div>
        <header>
          <Header
          client={this.props.client}
            changename={this.changename}
            iscurrnvisible={this.state.iscurrnvisible}
            currn={this.state.currn}
            currnvisible={this.iscurrnv}
            currency={this.state.products}
            onclick={this.changecurrn}
            cartitems={this.state.cartitems}
            isElVisible={this.isElVisible}
          />
          <CurrnAPI/>
          {this.state.isVisible ? (
            <Bag
              isElVisible={this.isElVisible}
              currn={this.state.currn}
              getCurrencySymbol={this.getCurrencySymbol}
              cartitems={this.state.cartitems}
              addtocart={this.addtocart}
              removefromcard={this.removefromcard}
            />
          ) : (
            ""
          )}
        </header>
        
        <Route path="/" exact>
          <main>
            <div className={this.state.isVisible ? "container" : ""}>
             <Prodhoc title={this.state.name}/>
            </div>
          </main>
        </Route>
        <div className={this.state.isVisible ? "container" : ""}>
          <Route path={"/description/:id"}>
           <Deschoc addtocart={this.addtocart}/>
          </Route>
        </div>
        <div className={this.state.isVisible ? "container" : ""}>
          <Route path="/cart">
            <Cart cartitems={this.state.cartitems}
            addtocart={this.addtocart}
            removefromcard={this.removefromcard}/>
          </Route>
          <Route path="/test">
            <Test/>
          </Route>
        </div>
      </div>
    );
  }
}
const getpro =gql`
query getproducts($title:String!){
  category(input:{title:$title}){
      products{
          id
          name
          category
          gallery
         prices {
          currency
          amount
         } 
         }
  }    }
`;

const getpro2 =gql`
query cache($title:String!){
  category(input:{title:$title}){
      products{
          id
          name
          category
          gallery
         prices {
          currency
          amount
         } 
         }
  }    }
`;
const executeFilter = async (name,props) => {
  const result = await props.client.query({
   query: getpro,
   variables: {  title: name },
  })
 const products = result.data.category.products
 return products
}
const execute = (props) => {
  const result = props.client.cache.readQuery({
   query: getpro2,
   variables: {  title: "" }
  })
  console.log("from",result)
 //const products = result.data.category.products
 //return products
}

//export default ()=>(<Query query={getpro} variables={{title:this.state.name}}>
  //{({ loading, error, data }) => {
    //if (loading) return <p>Loading…</p>;
    //if (error) return <p>Error :(</p>;
 //return <App products={data} />}}
  //</Query>)