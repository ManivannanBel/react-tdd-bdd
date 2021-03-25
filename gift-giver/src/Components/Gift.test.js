import React from "react";
import { shallow } from "enzyme";
import Gift from "./Gift";

describe("Gift", () => {
  const mockRemove = jest.fn();
  const id = 1;
  const props = { gift: { id: 1 }, removeGift: mockRemove };
  const gift = shallow(<Gift {...props} />);

  it("gift renders properly", () => {
    expect(gift).toMatchSnapshot();
  });

  it("initialize person and present in the `state`", () => {
    expect(gift.state()).toEqual({ person: "", present: "" });
  });

  describe("when typing into person input", () => {
    const person = "Uncle";

    beforeEach(() => {
      gift
        .find(".person-input")
        .simulate("change", { target: { value: person } });
    });

    it("updates the person in state", () => {
      expect(gift.state().person).toEqual(person);
    });
  });

  describe("When typing input into present input", () => {
    const present = "Golf clubs";

    beforeEach(() => {
      gift
        .find(".present-input")
        .simulate("change", { target: { value: present } });
    });

    it("updates the present in the state", () => {
      expect(gift.state().present).toEqual(present);
    });
  });

  describe("When clicking remove remove gift button", () => {
    beforeEach(() => {
      gift.find(".btn-remove").simulate("click");
    });

    it("calls the removeGift callback", () => {
      expect(mockRemove).toHaveBeenCalledWith(id);
    });
  });
});
