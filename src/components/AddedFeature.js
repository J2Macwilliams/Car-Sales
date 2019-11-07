import React from 'react';
import { connect } from "react-redux";
import { useDispatch } from 'react-redux';
import { remove } from '../actions/index';



const AddedFeature = props => {
  const dispatch = useDispatch();

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onclick={() => dispatch(remove)} className="button">X</button>
      {props.feature.name}
    </li>
  );
};
export default AddedFeature