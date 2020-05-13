import React from "react";
import AddedFeature from "./AddedFeature";
import { removecarpart, removeFeaturePrice } from "../actions";
import { connect } from "react-redux";

const AddedFeatures = (props) => {
  const removeFeatureHandler = (feature) => {
    props.removecarpart(feature);
    props.removeFeaturePrice(feature.price);
  };
  
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.features.length ? (
        <ol type="1">
          {props.car.features.map((item) => (
            <AddedFeature
              key={item.id}
              feature={item}
              removeFeatureHandler={removeFeatureHandler}
            />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    car: state.oncar,
  };
};

export default connect(mapStateToProps, { removecarpart, removeFeaturePrice })(
  AddedFeatures
);
