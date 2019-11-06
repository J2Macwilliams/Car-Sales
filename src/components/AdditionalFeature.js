import React from 'react';
import { connect } from 'react-redux';
import { addFeatures } from '../actions/index'

const AdditionalFeature = props => {

  const handleAdd = () => {
    props.addFeatures()
  }
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={handleAdd} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};
const mapDispatchToProps = {
  addFeatures
}
export default connect(
  state => state, 
  mapDispatchToProps
)(AdditionalFeature);
