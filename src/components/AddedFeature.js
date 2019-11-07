import React from 'react';
import { connect } from "react-redux";

import { removeFeatures } from '../actions/index';

const AddedFeature = props => {

  
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={} className="button">X</button>
      {props.feature.name}
    </li>
  );
};
const mapDispatchToProps = {
  
}

export default connect(
  state => state,
  mapDispatchToProps
)(AddedFeature)