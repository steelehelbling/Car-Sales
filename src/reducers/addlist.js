import { ADD_ITEM, REMOVE_ITEM } from "../actions";

const initialState = [
  { id: 1, name: "V-6 engine", price: 1500 },
  { id: 2, name: "Racing detail package", price: 1500 },
  { id: 3, name: "Premium sound system", price: 500 },
  { id: 4, name: "Rear spoiler", price: 250 },
];

const addlist = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return state.filter((feature) => feature.id !== action.payload.id);
    case REMOVE_ITEM:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default addlist;
