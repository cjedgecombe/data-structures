var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    // create variable that contains the current queue size + 1
    var newKey = (someInstance.size(storage)) + 1;
    // add input value to queue with the key being the result of the above variable
    storage[newKey] = value;
  };

  someInstance.dequeue = function() {
    // create var that contains the value of the property at the front of the queue
    var frontOfQueue = storage[1];
    // delete the property at the front of the queue
    delete storage[1];
    // iterate through object, reassigning values to their key - 1
    for (var key in storage) {
      var keyMinusOne = Number(key) - 1;

      storage[keyMinusOne] = storage[key];
      // once new property has been created, delete the old one
      delete storage[key];
    }
    // return front of queue value
    return frontOfQueue;
  };

  someInstance.size = function() {
    // create queueSize variable, set to zero
    var queueSize = 0;
    // iterate through storage, incrementing count for each property
    for (var key in storage) {
      queueSize++;
    }
    // return count
    return queueSize;
  };

  return someInstance;
};
