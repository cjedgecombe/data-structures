var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.head === null) {
      list.head = Node(value);
      list.tail = list.head;
    } else {
      var currentNode = list.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = Node(value);
      list.tail = currentNode.next;
    }
  };

  list.removeHead = function() {
    var headValue = list.head.value;
    list.head = list.head.next;
    return headValue;
  };

  list.contains = function(target) {
    var containsTarget = false;
    var currentNode = list.head;
    while (currentNode.next) {
      if (currentNode.value === target) {
        containsTarget = true;
      }
      currentNode = currentNode.next;
    }
    if (currentNode.value === target) {
      containsTarget = true;
    }
    return containsTarget;

  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
