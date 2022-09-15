var Stack = function() {
  // add a storage property to the instance that will be
  this.storage = {};
};


// Push
Stack.prototype.push = function(value) {
  // create storage alias
  storage = this.storage;
  // create newKey variable that references current size of stack + 1
  var newKey = this.size(storage) + 1;
  // assign input as a value to stack with newKey as its key
  storage[newKey] = value;
};

// Pop
Stack.prototype.pop = function() {
  // create storage alias
  var storage = this.storage;
  // create top of stack variable that references the stack size
  var topOfStack = this.size(storage);
  // create variable to reference the top stack value
  var topValue = storage[topOfStack];
  // delete the property at the top of the stack
  delete storage[topOfStack];
  // return deleted value
  return topValue;
};


// Size
Stack.prototype.size = function () {
  // create a variable to store a stack count
  var stackSize = 0;
  // iterate through object, incrementing stack count for each property
  for (var key in this.storage) {
    stackSize++;
  }
  // return stack count
  return stackSize;
};

var pancakes = new Stack;
