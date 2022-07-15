const Queue = require('../data-structures/Queue');

//TODO Needs a graph implementation!
function breadthFirstSearch(graph, startNode, isTargetNode) {
  const searchQueue = new Queue(startNode);
  const searched = [];

  while (searchQueue.length > 0) {
    const person = searchQueue.dequeue();

    if (!searched.includes(person)) {
      if (isTargetNode(person)) {
        return person
      } else {
        searchQueue.enqueue(...graph.get(person));
        searched.push(person)
      }
    }
  }
}

module.exports = breadthFirstSearch
