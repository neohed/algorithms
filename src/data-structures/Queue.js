class Queue {
  #items = [];

  constructor(initialItems) {
    if (Array.isArray(initialItems) && initialItems.length > 0) {
      this.#items = [...initialItems]
    }
  }

  enqueue(element) {
    this.#items.push(element)
  }

  get dequeue() {
    return this.#items.shift()
  }

  get length() {
    return this.#items.length
  }

  get isEmpty() {
    return this.length === 0
  }

  get peek() {
    return this.#items[0]
  }
}

module.exports = Queue
