'use strict';

import React from 'react';
import { connect } from 'react-redux';

const Node = ({ id, full_name, children }) => {
  children = children || [];

  return (
    <li key={id}>
      <b>Name:</b> {full_name}
      <br/>
      <ul>
        {children.map((child) => <Node {...child} key={child.id}/>)}
      </ul>
    </li>
  );
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const wrapper = connect(mapStateToProps, mapDispatchToProps)(Node);

export default wrapper;
