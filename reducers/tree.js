'use strict';

const _ = require('lodash');

class Tree {

  constructor(parent) {
    // because the nodes will be in an unpredictable order, having an
    // index of the nodes will allow O(1) lookup when inserting/deleting nodes
    this.nodes = {};
  }

  addRoot(parent) {
    this.root = parent;
    this.indexNode(parent);
  }

  insert(parent_id, node) {
    let parent = this.nodes[parent_id];
    parent.addChild(node);

    this.indexNode(node);
  }

  indexNode(node) {
    this.nodes[node.id] = node;
  }

}

class Node {

  constructor(opts = {}) {
    this.children = opts.children || [];
    this.parent = opts.parent || null;

    this.opts = opts;
  }

  setParent(node) {
    this.parent = node;
  }

  addChild(node) {
    // do not mutate array (ImmutableJS would handle this given more time)
    this.children = this.children.concat([node]);
  }

  removeChild(id) {
    this.children = this.children.filter((child) => child.opts.id === id);
  }

};
