'use strict';

import React from 'react';
import { createStore, combineReducers } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import FamilyTree from './components/family_tree';
import reducer from './reducers/index';

const store = createStore(reducer);

render(
  <Provider store={store}>
    <FamilyTree/>
  </Provider>,
  document.getElementById('app')
);
