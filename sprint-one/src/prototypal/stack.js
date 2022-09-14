var Stack = function() {
  // use prototypal instantiation to create an instance that references the stackMethods obj
  var someInstance = Object.create(stackMethods);
  // add a storage key to the instance with the value of an empty object
  someInstance.storage = {};
  // return the instancez
  return someInstance;
};

var stackMethods = {
  push: function(value) {
    var storage = this.storage;
    // create newKey variable, assign to value of current storage size + 1
    var newKey = (this.size(storage)) + 1;
    // add value to storage with newKey as its key
    storage[newKey] = value;
  },

  pop: function () {
    var storage = this.storage;
    // create topOfStack variable, set to current size of storage
    var topOfStack = this.size(storage);
    // create variable to store value at top of stack
    var value = storage[topOfStack];
    // delete proptery at top of stack
    delete storage[topOfStack];
    // return stored value
    return value;
  },

  size: function () {
    // create stackSize variable, set to 0
    var stackSize = 0;
    // iterate through storage object, incrementing stackSize for each property
    for (var key in this.storage) {
      stackSize++;
    }
    // return stackSize
    return stackSize;
  }
};


