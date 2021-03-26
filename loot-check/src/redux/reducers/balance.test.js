import balanceReducer from "./balance";
import balanceReducer2 from "./balance";
import * as types from "../actions/types";

describe("balanceReducer", () => {
  describe("when initializing", () => {
    const balance = 10;

    it("sets the balance", () => {
      expect(
        balanceReducer(undefined, { type: types.SET_BALANCE, balance })
      ).toEqual(balance);
    });

    describe("then, reinitializing", () => {
      it("reads balance from cookies", () => {
        expect(balanceReducer2(undefined, {})).toEqual(balance);
      });
    });
  });

  it("deposits amount to balance", () => {
    const deposit = 10;
    const initialState = 5;
    expect(
      balanceReducer(initialState, { type: types.DEPOSIT, deposit })
    ).toEqual(deposit + initialState);
  });

  it("withdraws amount from balance", () => {
    const withdraw = 10;
    const initialState = 20;

    expect(
      balanceReducer(initialState, { type: types.WITHDRAW, withdraw })
    ).toEqual(initialState - withdraw);
  });
});
