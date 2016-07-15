'use strict';

const _ = require('lodash');

export class Tree {

  constructor(parent) {
    // because the nodes will be in an unpredictable order, having an
    // index of the nodes will allow O(1) lookup when inserting/deleting nodes
    this.nodes = {};
  }

  bulkInsert(nodes) {
    nodes.forEach((node) => this.insert(node));
  }

  insert(node) {
    if (node.parent_id) {
      let parent = this.nodes[node.parent_id]

      // link up parent and child
      parent.addChild(node);
      node.setParent(parent);
    } else {
      this.root = node;
    }

    // index for fast retrival via events triggered from React
    this.indexNode(node);
  }

  indexNode(node) {
    this.nodes[node.id] = node;
  }

}

export class Node {

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
