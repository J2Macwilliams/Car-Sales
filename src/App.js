import React from 'react';

import { useSelector , connect } from 'react-redux';


import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = () => {
  const vehicle = useSelector(state => state.car)
  const addOns = (state => state.additionalFeatures)
  const extraPrice = (state => state.additionalPrice)
  return (

    <div className="boxes">
      <div className="box">
        <Header car={vehicle} />
        <AddedFeatures car={vehicle} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={addOns} />
        <Total car={vehicle} additionalPrice={extraPrice} />
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
