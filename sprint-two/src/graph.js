

// Instantiate a new graph
var Graph = function() {
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // create an object within the Graph object, the key of which is the input value
  this[node] = {};
  // contains value key equal to input value and edges key equal to an empty arrayz
  this[node].value = node;
  this[node].edges = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  // iterate over the properties of the graph
  for (var key in this) {
    // if current node's value matches the target value, return true
    if (this[key].value === node) {
      return true;
    }
  }
  // return false
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  //iterate over edges array of input node
  for (var i = 0; i < this[node].edges.length; i++) {
    var currentEdge = this[node].edges[i];
    //at each node of edges array call removeEdge on input node and current node
    this.removeEdge(node, currentEdge.value);
  }
  //delete the input node
  delete this[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {

  var fromEdges = this[fromNode].edges;
  // iterate over the edges array of the from node
  for (var i = 0; i < fromEdges.length; i++) {
    // if to node is present in the array
    if (fromEdges[i].value === this[toNode].value) {
      // return true
      return true;
    }
  }
  // return false
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // push reference to toNode into edges array of fromNode
  this[fromNode].edges.push(this[toNode]);
  // push reference to fromNode into edges array of toNode
  this[toNode].edges.push(this[fromNode]);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var fromEdges = this[fromNode].edges;
  var toEdges = this[toNode].edges;

  // create new function that takes in an array and a target
  Graph.prototype.removeHelper = function(array, target) {
    // iterate over input array
    for (var i = 0; i < array.length; i++) {
      // if current item equals target
      if (array[i] === this[target]) {
        // remove current item
        array.splice(i, 1);
      }
    }
  };

  // make a call to the helper function passing in fromEdges and toNode as args
  this.removeHelper(fromEdges, toNode);
  // make a call to the helper function passing in toEdges and fromNode as args
  this.removeHelper(toEdges, fromNode);
};



// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {

  // if 'this' is an object
  // iterate using for in loop

  // if 'this' is an array, iterate using for loop

  // iterate through the top level of the graph
  // apply callback function to current node
  // then, if the length of the edges array is greater than 0
  // call forEachNode on each node within the edges array


  // iterate through the graph
  // console.log(this);
  // for (var key in this) {
  //   console.log(key);
  //   cb(this[key]);
  // }
  // at each node, make a call to the callback function passing in the current node's value
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


