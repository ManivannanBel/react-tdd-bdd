import React, { Component } from "react";
import Wallet from "./components/Wallet";

export default class App extends Component {
  render() {
    return (
      <div>
        <h2>Loot check</h2>
        <hr />
        <Wallet />
      </div>
    );
  }
}
