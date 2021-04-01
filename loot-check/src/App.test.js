import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App component", () => {
  const app = shallow(<App />);

  it("renders properly", () => {
    expect(app).toMatchSnapshot();
  });

  it("contains a connected wallet component", () => {
    expect(app.find("Connect(Wallet)").exists()).toBe(true);
  });

  it("contains a connected loot component", () => {
    expect(app.find("Connect(Loot)").exists()).toBe(true);
  });
});
