import React from "react";
import { addcarpart, addPrice } from "../actions";
import { connect } from "react-redux";

const AdditionalFeature = (props) => {
  const addFeatureHandler = (feature) => {
    feature.preventDefault();
    props.addcarpart(props.feature);
    props.addPrice(props.feature.price);
  };
  
  return (
    <li>
      <button onClick={addFeatureHandler} className="button">
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(null, { addcarpart, addPrice })(
  AdditionalFeature
);
