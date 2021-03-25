import React from "react";
import { shallow } from "enzyme";
import App from "./App";

const app = shallow(<App />);

it("App Component renders correctly", () => {
  expect(app).toMatchSnapshot();
});

it("initializes the state with empty list on gifts", () => {
  expect(app.state().gifts).toEqual([]);
});

describe("When clicking add button", () => {
  const id = 1;

  beforeEach(() => {
    app.find(".btn-add").simulate("click");
  });

  afterEach(() => {
    app.setState({ gifts: [] });
  });

  it("adds new gift to `state`", () => {
    expect(app.state().gifts).toEqual([{ id }]);
  });

  it("add new gift", () => {
    expect(app.find(".gift-list").children().length).toEqual(1);
  });

  it("creates a gift component", () => {
    expect(app.find("Gift").exists()).toBe(true);
  });

  describe("When user removes a gift", () => {
    const id = 1;

    beforeEach(() => {
      app.instance().removeGift(id);
    });

    it("removes the gift from `state`", () => {
      expect(app.state().gifts).toEqual([]);
    });
  });
});
