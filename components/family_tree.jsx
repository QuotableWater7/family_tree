'use strict';

import React from 'react';
import Node from './node';

const FamilyTree = ({ root }) => {
  return (
    <div>
      <h3>Family Tree</h3>
      <Node {...root}></Node>
    </div>
  );
};

export default FamilyTree;
