'use strict';

import { Tree, Node } from '../util/tree';

let sample_data = [
  { id: 1, parent_id: null, full_name: 'A1' },
  { id: 2, parent_id: 1, full_name: 'B1' },
  { id: 3, parent_id: 1, full_name: 'B2' },
  { id: 4, parent_id: 2, full_name: 'C1' },
  { id: 5, parent_id: 4, full_name: 'D1' }
];

let nodes = sample_data.map((node) => new Node(node));
let tree = new Tree();
tree.bulkInsert(nodes);

export default function (state, action) {
  return tree;
}
