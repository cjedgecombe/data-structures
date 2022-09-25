

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  // hashing function returns an index for the given key
  var index = getIndexBelowMaxForKey(k, this._limit);
  // make a call to the set method targeting the storage array, passing in index and value
  this._storage.set(index, v);
};

HashTable.prototype.retrieve = function(k) {
  // hashing function returns an index for the given key
  var index = getIndexBelowMaxForKey(k, this._limit);
  // make a call to the get method targeting the storage array, passing in the index
  return this._storage.get(index);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


