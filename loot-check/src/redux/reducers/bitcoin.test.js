import bitcoinReducer from "./bitcoin";
import * as types from "../actions/types";

describe("bitcoin reducer", () => {
  const bitcoinData = { bpi: "bitcoin price index" };

  it("fetches and sets the bitcoin data", () => {
    expect(
      bitcoinReducer({}, { type: types.FETCH_BITCOIN, bitcoin: bitcoinData })
    ).toEqual(bitcoinData);
  });
});
