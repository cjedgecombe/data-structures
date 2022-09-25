var BinarySearchTree = function(value) {
  //declare a new BST var, set equal to an empty object
  var newBST = {};
  newBST.value = value;
  //add left and right properties
  newBST.left = null;
  newBST.right = null;
  //add BST methods to instance
  _.extend(newBST, bstMethods);
  //return new BST
  return newBST;
};

//declare BST methods variable and set equal to empty object
var bstMethods = {};

bstMethods.insert = function(value) {
  if (value < this.value && this.left) {
    this.left.insert(value);
  } else if (value > this.value && this.right) {
    this.right.insert(value);
  }

  if (value < this.value && this.left === null) {
    this.left = BinarySearchTree(value);
  } else if (value > this.value && this.right === null) {
    this.right = BinarySearchTree(value);
  }
};

bstMethods.contains = function(value) {

};

bstMethods.depthFirstLog = function(callback) {

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
