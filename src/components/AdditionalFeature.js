import React from 'react';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { buy } from '../actions/index';


const AdditionalFeature = props => {
  const dispatch = useDispatch();
  
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={() => dispatch(buy)} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};
const mapStateToProps = state => {
  return {
    price: state.price,
  additionalFeatures: state.additionalFeatures
  }
  
}
export default connect(
  mapStateToProps, {}
)(AdditionalFeature);
