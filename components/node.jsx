'use strict';

import React from 'react';
import { connect } from 'react-redux';

const Node = ({ full_name }) => {
  return (
    <div>
      Node
    </div>
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
