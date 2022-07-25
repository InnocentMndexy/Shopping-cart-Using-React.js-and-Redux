import React, { Component } from "react";
import Filter from "../components/filter";
import Products from "../../src/components/products";
import Cart from "../components/cart";

export default class HomeScreen extends Component {
  render() {
    return (
      <div>
        <div className="content">
          <div className="main">
            <Filter></Filter>
            <Products></Products>
          </div>
          <div className="sidebar">
            <Cart />
          </div>
        </div>
      </div>
    );
  }
}