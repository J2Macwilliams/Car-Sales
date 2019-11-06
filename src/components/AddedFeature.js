import React from 'react';
import { connect } from "react-redux";

import { removeFeatures } from '../actions/index';

const AddedFeature = props => {

  const handleRemove = () => {
    props.removeFeatures();
  }
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={handleRemove} className="button">X</button>
      {props.feature.name}
    </li>
  );
};
const mapDispatchToProps = {
  removeFeatures
}

export default connect(
  state => state,
  mapDispatchToProps
)(AddedFeature)