'use strict';

import React from 'react';
import Node from './node';
import { connect } from 'react-redux';

const FamilyTree = ({ root }) => {
  return (
    <div>
      <h3>Family Tree</h3>
      <ul>
        <Node {...root}></Node>
      </ul>
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
