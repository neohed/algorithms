const {Node} = require('./Node');

//TODO Implement API from: https://www.npmjs.com/package/linked-list

class LinkedList {
  constructor(head = null) {
    this.headNode = head
  }

  get size() {
    let size = 0;
    let node = this.headNode;
    while (node) {
      size++;
      node = node.next
    }
    return size
  }

  get head() {
    return this.headNode
  }

  get tail() {
    let node = this.headNode;
    while (node.next) {
      node = node.next
    }
    return node
  }

  get toArray() {
    const res = [];
    let node = this.headNode;
    while(node) {
      res.push(node.value);
      node = node.next
    }
    return res
  }

  set add(value) {
    const temp = new Node(value);
    const node = this.tail;
    if (node === null) {
      this.headNode = temp
    }

    node.next = temp
  }

  clear() {
    this.headNode = null
  }
}
