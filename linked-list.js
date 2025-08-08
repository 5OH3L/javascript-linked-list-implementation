const LinkedListPrototype = {
  Node(value) {
    return {
      value: value ? value : null,
      nextNode: null,
    };
  },
  append(value) {
    const node = this.Node(value);
    if (this._head === null) {
      this._head = node;
    } else {
      let currentNode = this._head;
      while (currentNode.nextNode) {
        currentNode = currentNode.nextNode;
      }
      currentNode.nextNode = node;
    }
  },
  prepend(value) {
    const node = this.Node(value);
    if (this._head === null) {
      this._head = node;
    } else {
      node.nextNode = this._head;
      this._head = node;
    }
  },
  size() {
    let count = 0;
    let currentNode = this._head;
    while (currentNode) {
      currentNode = currentNode.nextNode;
      count++;
    }
    return count;
  },
  head() {
    return this._head;
  },
  tail() {
    let currentNode = this._head;
    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  },
  at(index) {
    let nodeIndex = 0;
    let currentNode = this._head;
    while (currentNode && index > nodeIndex) {
      nodeIndex++;
      currentNode = currentNode.nextNode;
    }
    if (nodeIndex === index) {
      return currentNode;
    } else {
      return null;
    }
  },
  pop() {
    let currentNode = this._head;
    if (!currentNode && !currentNode.nextNode && !currentNode.nextNode.nextNode) return null;
    while (currentNode.nextNode.nextNode) {
      currentNode = currentNode.nextNode;
    }
    let poppedNode = currentNode.nextNode;
    currentNode.nextNode = null;
    return poppedNode;
  },
  contains(value) {
    let currentNode = this._head;
    if (!currentNode) return false;
    while (currentNode.nextNode) {
      if (currentNode.value === value) return true;
      currentNode = currentNode.nextNode;
    }
    return false;
  },
  find(value) {
    let currentNode = this._head;
    if (!currentNode) return null;
    let nodeIndex = 0;
    while (currentNode) {
      if (currentNode.value === value) return nodeIndex;
      currentNode = currentNode.nextNode;
      nodeIndex++;
    }
    return null;
  },
  toString() {
    let currentNode = this._head;
    if (!currentNode) return null;
    let stringRepresentaion = "";
    while (currentNode) {
      stringRepresentaion += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.nextNode;
    }
    stringRepresentaion += "null";
    return stringRepresentaion;
  },
  insertAt(value, index) {
    let currentNode = this._head;
    if (!currentNode) return null;
    const node = this.Node(value);
    if (index === 0) {
      node.nextNode = currentNode;
      this._head = node;
      return node;
    }
    index--;
    let nodeIndex = 0;
    while (index > nodeIndex && currentNode.nextNode) {
      currentNode = currentNode.nextNode;
      nodeIndex++;
    }
    console.log(index === nodeIndex, currentNode);
    if (index === nodeIndex) {
      node.nextNode = currentNode.nextNode;
      currentNode.nextNode = node;
      return node;
    } else {
      return null;
    }
  },
  removeAt(index) {
    let currentNode = this._head;
    if (!currentNode) return null;
    if (index === 0) {
      const removedNode = this._head;
      if (currentNode.nextNode) {
        this._head = currentNode.nextNode;
      } else {
        this._head = null;
      }
      return removedNode;
    }
    index--;
    let nodeIndex = 0;
    while (index > nodeIndex && currentNode.nextNode) {
      currentNode = currentNode.nextNode;
      nodeIndex++;
    }
    console.log(index === nodeIndex, currentNode);
    if (index === nodeIndex) {
      const removedNode = currentNode.nextNode;
      currentNode.nextNode = currentNode.nextNode.nextNode;
      return removedNode;
    } else {
      return null;
    }
  },
};
function LinkedList() {
  const linkedList = Object.create(LinkedListPrototype);
  linkedList._head = null;
  return linkedList;
}
export default LinkedList;