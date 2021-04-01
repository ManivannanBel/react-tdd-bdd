import { FETCH_BITCOIN } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_BITCOIN:
      return action.bitcoin;
    default:
      return state;
  }
};
