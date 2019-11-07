import React from 'react';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from './reducer/reducer';
// import {} from './actions/index';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { buy , remove } from './actions/index'

const store = createStore(reducer);

const App = props => {
  // const [state , dispatch] = useReducer(reducer , initialState)
  // const state = {
  //   additionalPrice: 0,
  //   car: {
  //     price: 26395,
  //     name: '2019 Ford Mustang',
  //     image:
  //       'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
  //     features: []
  //   },
  //   additionalFeatures: [
  //     { id: 1, name: 'V-6 engine', price: 1500 },
  //     { id: 2, name: 'Racing detail package', price: 1500 },
  //     { id: 3, name: 'Premium sound system', price: 500 },
  //     { id: 4, name: 'Rear spoiler', price: 250 }
  //   ]
  // };

  const removeFeature = e => {
    // dispatch an action here to remove an item
    e.preventDefault();
    props.remove();
  };

  const buyItem = e => {
    // dipsatch an action here to add an item
    e.preventDefault();
   props.buy();
  };

  return (
    <Provider store={store} >
      <div className="boxes">
        <div className="box">
          <Header car={props.car} />
          <AddedFeatures car={props.car} />
        </div>
        <div className="box">
          <AdditionalFeatures additionalFeatures={props.additionalFeatures} />
          <Total car={props.car} additionalPrice={props.additionalPrice} />
        </div>
      </div>
    </Provider>
  );
};

export default App;
