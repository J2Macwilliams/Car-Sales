import React from 'react';

import { useSelector , connect } from 'react-redux';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = () => {
  const car = useSelector(state => state.car)
  const addOns = useSelector(state => state.additionalFeatures)
  const extraPrice = useSelector(state => state.additionalPrice)
  return (

    <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures car={car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={addOns} />
        <Total car={car} additionalPrice={extraPrice} />
      </div>
    </div>

  );
};

const MapStateToProps = state => {
  return{
    car: state.car,
    addOns: state.additionalFeatures,
    extraPrice: state.additionalPrice
  }
}
export default connect(MapStateToProps, {})(App);
