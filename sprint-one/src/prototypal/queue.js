var Queue = function() {
  // use prototypal instantiation to create an instance that references queueMethods
  var someInstance = Object.create(queueMethods);
  // add a storage key to instance, set to empty object
  someInstance.storage = {};
  // return instance
  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    // create variable that contains current queue size + 1
    var newKey = this.size(this.storage) + 1;
    // assign value to key at above variable
    this.storage[newKey] = value;
  },

  dequeue: function () {
    storage = this.storage;
    // create variable that references value at the front of the queue
    var frontOfQueue = storage[1];
    // delete the property at the front of the queue
    delete storage[1];
    // iterate through storage, assign current value to key - 1
    for (var key in storage) {
      var keyMinusOne = Number(key) - 1;

      storage[keyMinusOne] = storage[key];
      // delete current value
      delete storage[key];
    }
    // return value previously at the front of the queue
    return frontOfQueue;
  },

  size: function () {
    // create queueSize variable, set to zero
    var queueSize = 0;
    // iterate through storage, incrementing count for each property
    for (var key in this.storage) {
      queueSize++;
    }
    // return count
    return queueSize;
  }
};


