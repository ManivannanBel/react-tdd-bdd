import { FETCH_BITCOIN } from "./types";

export const fetchBitcoin = () => async dispatch => {
  const response = await fetch(
    "https://api.coindesk.com/v1/bpi/currentprice.json"
  );
  const json = await response.json();
  dispatch({
    type: FETCH_BITCOIN,
    bitcoin: json
  });
};
