import React from 'react';
import { connect } from "react-redux";
import { useDispatch } from 'react-redux';
import { removeFeature } from '../actions/index';



const AddedFeature = props => {
  const dispatch = useDispatch();

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onclick={() => dispatch(removeFeature)} className="button">X</button>
      {props.feature.name}
    </li>
  );
};
const mapStateToProps = state => {
  return {
    additionalFeatures: state.additionalFeatures
  }
}

export default connect(

  mapStateToProps, {}
)(AddedFeature)