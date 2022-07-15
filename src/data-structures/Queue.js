class Queue {
  #items = [];

  constructor(initialItems) {
    if (Array.isArray(initialItems) && initialItems.length > 0) {
      this.#items = [...initialItems]
    }
  }

  enqueue(...elements) {
    elements.forEach(element => this.#items.push(element))
  }

  dequeue() {
    return this.#items.shift()
  }

  get peek() {
    return this.#items[0]
  }

  get length() {
    return this.#items.length
  }

  get isEmpty() {
    return this.length === 0
  }
}

module.exports = Queue
