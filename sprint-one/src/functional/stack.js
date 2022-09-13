var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    // create variable that contains the result of calling size on storage plus one
    var newKey = (someInstance.size(storage)) + 1;
    // add new property to storage with the key being the above variable and the value being the input
    storage[newKey] = value;
  };

  someInstance.pop = function() {
    // create topOfStack variable that contains the current stack size
    var topOfStack = someInstance.size(storage);
    // create var to hold top stack value
    var value = storage[topOfStack];
    // delete the top most property of the stack
    delete storage[topOfStack];
    // return removed value
    return value;
  };

  someInstance.size = function() {
    // create stackSize variable, set to zero
    var stackSize = 0;
    // iterate through storage object, incrementing stackSize for each property
    for (var key in storage) {
      stackSize ++;
    }
    // return stackSize
    return stackSize;
  };

  return someInstance;
};
