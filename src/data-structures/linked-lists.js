class LinkedList {
  constructor(head = null) {
    this.head = head
  }

  get size() {
    let size = 0;
    let node = this.head;
    while (node) {
      size++;
      node = node.next
    }
    return size
  }

  get last() {
    let node = this.head;
    while (node.next) {
      node = node.next
    }
    return node
  }

  get first() {
    return this.head
  }

  get toArray() {
    const res = [];
    let node = this.head;
    while(node) {
      res.push(node.value);
      node = node.next
    }
    return res
  }

  set add(value) {
    const temp = new ListItem(value);
    const node = this.last;
    if (node === null) {
      this.head = temp
    }

    node.next = temp
  }

  clear() {
    this.head = null
  }
}

class ListItem {
  constructor(value) {
    this.value = value;
    this.next = null
  }
}
