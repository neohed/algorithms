namespace DataStructures {
  class Node<T> {
    value: T;
    next: Node<T>;

    constructor(value) {
      this.value = value;
      this.next = null
    }
  }
}

module.exports = DataStructures
