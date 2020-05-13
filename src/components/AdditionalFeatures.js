import React from "react";
import AdditionalFeature from "./AdditionalFeature";
import { addcarpart, addPrice } from "../actions";
import { connect } from "react-redux";

const AdditionalFeatures = (props) => {
  return (
    <div className="content">
      <h4>Additional Features</h4>

      {props.addlist.length ? (
        <ol type="1">
          {props.addlist.map((item) => (
            <AdditionalFeature
              key={item.id}
              feature={item}
              addFeatureHandler={props.addFeatureHandler}
            />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    addlist: state.addlist,
  };
};

export default connect(mapStateToProps, { addcarpart, addPrice })(
  AdditionalFeatures
);
