var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  //if the input value doesnt already exist
  if (!this.contains(item)) {
    //add value to storage with identical key
    this._storage[item] = item;
  }
};

setPrototype.contains = function(item) {
  //if the set contains the input value
  if (this._storage[item]) {
    //return true
    return true;
  }
  //return false
  return false;
};

setPrototype.remove = function(item) {
  //if the input value exists within the set
  if (this.contains(item)) {
    //remove corresponding property from the set
    delete this._storage[item];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
