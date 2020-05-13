import { ADD_PRICE, REMOVE_PRICE } from "../actions";

const initialState = {
  additionalPrice: 0,
};

const priceupdate = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRICE:
      return {
        ...state,
        additionalPrice: state.additionalPrice + action.payload,
      };
    case REMOVE_PRICE:
      return {
        ...state,
        additionalPrice: state.additionalPrice - action.payload,
      };
    default:
      return state;
  }
};

export default priceupdate;
