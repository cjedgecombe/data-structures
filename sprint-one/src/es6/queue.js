class Queue {

  constructor() {
    // add storage object
    this.storage = {};
  }

  // Enqueue
  enqueue(value) {
    // create storage alias
    var storage = this.storage;
    // create newKey variable that references the size of storage + 1
    var newKey = this.size(storage) + 1;
    // add input value to queue with newKey as the key
    storage[newKey] = value;
  }


  // Dequeue
  dequeue() {
    // create storage alias
    var storage = this.storage;
    // create variable that references the value at the front of the queue
    var frontOfQueue = storage[1];
    // delete the property at the front of the queue
    delete storage[1];
    // iterate through the queue
    for (var key in storage) {
      // re-assign each value to its key - 1
      storage[(key - 1)] = storage[key];
      // delete the old property
      delete storage[key];
    }
    // return value that was until recently at the front of the queue
    return frontOfQueue;
  }


  // Size
  size() {
    // create count variable
    var queueSize = 0;
    // iterate through storage, incrementing count for each property
    for (var key in this.storage) {
      queueSize++;
    }
    // return count
    return queueSize;
  }

}

var lineAtTheDMV = new Queue;