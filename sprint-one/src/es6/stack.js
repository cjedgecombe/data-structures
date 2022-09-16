class Stack {

  constructor() {
    // add storage variable set to an empty object
    this.storage = {};
  }

  // Push
  push(value) {
    // create storage alias
    var storage = this.storage;
    // create a newKey variable that references the current stack size + 1
    var newKey = this.size(storage) + 1;
    // add input value to stack with newKey as the key
    storage[newKey] = value;
  }


  // Pop
  pop() {
    // create storage alias
    var storage = this.storage;
    // create variable that references the current stack size
    var topOfStack = this.size(storage);
    // create variable that references the value at the top of the stack
    var topValue = storage[topOfStack];
    // delete the property at the top of the stack
    delete storage[topOfStack];
    // return value that was until recently at the top of the stack
    return topValue;
  }


  // Size
  size () {
    // create count variable
    var stackSize = 0;
    // iterate through storage, incrementing count for each property
    for (var key in this.storage) {
      stackSize++;
    }
    // return count
    return stackSize;
  }

}

var paperwork = new Stack;