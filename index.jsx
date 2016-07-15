'use strict';

import React from 'react';
import { createStore, combineReducers } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import FamilyTree from './components/family_tree';
import tree from './reducers/tree';

const store = createStore(tree);

render(
  <Provider store={store}>
    <FamilyTree/>
  </Provider>,
  document.getElementById('app')
);
