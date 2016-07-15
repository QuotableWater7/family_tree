'use strict';

import React from 'react';
import Node from './node';
import { connect } from 'react-redux';

const FamilyTree = ({ tree }) => {
  return (
    <div>
      <h3>Family Tree</h3>
      <Node key={1}></Node>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const wrapper = connect(mapStateToProps, mapDispatchToProps)(FamilyTree);

export default wrapper;
