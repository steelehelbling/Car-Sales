const ADD_ITEM = "ADD_ITEM";
const REMOVE_ITEM = "REMOVE_ITEM";
const ADD_PRICE = "ADD_PRICE";
const REMOVE_PRICE = "REMOVE_PRICE";

const addcarpart = (feature) => {
  return {
    type: ADD_ITEM,
    payload: feature,
  };
};

const removecarpart = (featurePrice) => {
  return {
    type: REMOVE_ITEM,
    payload: featurePrice,
  };
};

const addPrice = (feature) => {
  return {
    type: ADD_PRICE,
    payload: feature,
  };
};

const removeFeaturePrice = (featurePrice) => {
  return {
    type: REMOVE_PRICE,
    payload: featurePrice,
  };
};

export {
  ADD_ITEM,
  addcarpart,
  ADD_PRICE,
  addPrice,
  REMOVE_ITEM,
  removecarpart,
  REMOVE_PRICE,
  removeFeaturePrice,
};
