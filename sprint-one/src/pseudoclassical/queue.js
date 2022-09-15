var Queue = function() {
  // create storage property on the instance to be
  this.storage = {};
};


// Enqueue
Queue.prototype.enqueue = function(value) {
  // create a storage alias
  var storage = this.storage;
  // create newKey variable to reference current size of queue + 1
  var newKey = this.size(storage) + 1;
  // assign input value to storage with a key of the newKey value
  storage[newKey] = value;
};


// Dequeue
Queue.prototype.dequeue = function () {
  // create storage alias
  var storage = this.storage;
  // create variable that references value at front of queue
  var frontOfQueue = storage[1];
  // delete property at front of queue
  delete storage[1];
  // iterate through storage properties
  for (var key in storage) {
    // create alias for the value of the current key - 1
    var keyMinusOne = Number(key) - 1;
    // reassign current value to its key - 1
    storage[keyMinusOne] = storage[key];
    // delete current (old) property
    delete storage[key];
  }
  // return value that was until recently at the front of queue
  return frontOfQueue;
};

// Size
Queue.prototype.size = function() {
  // create variable to store the count of the queue
  var queueSize = 0;
  // iterate over the storage property of the instance, incrementing the count
  for (var key in this.storage) {
    queueSize++;
  }
  // return the count
  return queueSize;
};

var lineAtDisneyWorld = new Queue;