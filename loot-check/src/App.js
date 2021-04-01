import React from "react";
import Wallet from "./components/Wallet";
import Loot from "./components/Loot";

export default () => {
  return (
    <div>
      <h2>Loot check</h2>
      <hr />
      <Wallet />
      <hr />
      <Loot />
    </div>
  );
};
