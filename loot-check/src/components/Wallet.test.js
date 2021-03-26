import React from "react";
import { shallow } from "enzyme";
import { Wallet } from "./Wallet";

describe("Wallet component", () => {
  const mockDeposit = jest.fn();
  const mockWithdraw = jest.fn();
  const props = { balance: 20, deposit: mockDeposit, withdraw: mockWithdraw };
  const wallet = shallow(<Wallet {...props} />);

  it("renders properly", () => {
    expect(wallet).toMatchSnapshot();
  });

  it("displays balance from props", () => {
    expect(wallet.find(".balance").text()).toEqual("Wallet Balance: 20");
  });

  it("creates an input field to deposit into or withdraw from the balance", () => {
    expect(wallet.find(".input-wallet").exists()).toBe(true);
  });

  describe("when user types into the wallet input", () => {
    const userBalance = "20";

    beforeEach(() => {
      wallet
        .find(".input-wallet")
        .simulate("change", { target: { value: userBalance } });
    });

    it("updates the local wallet balance in the state and converts it to a number", () => {
      expect(wallet.state().balance).toEqual(parseInt(userBalance, 10));
    });

    describe("When the user wants to make a deposit", () => {
      beforeEach(() => {
        wallet.find(".button-deposit").simulate("click");
      });

      it("dispatches the deposit() which is recieved as props with local balance", () => {
        expect(mockDeposit).toHaveBeenCalledWith(parseInt(userBalance, 10));
      });
    });

    describe("When user wants to make a withdrawal", () => {
      beforeEach(() => {
        wallet.find(".button-withdraw").simulate("click");
      });

      it("dispatches the withdraw() which is recieved as props with local balance", () => {
        expect(mockWithdraw).toHaveBeenCalledWith(parseInt(userBalance, 10));
      });
    });
  });
});
