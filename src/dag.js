const {DirectedAcyclicGraph} = require('./data-structures/DirectedAcyclicGraph')

const dag = new DirectedAcyclicGraph('Test');

dag.addNodes(['a', 'b', 'c', 'd'])
  .addNodes('e')
  .node('a')
  .addEdges(['b', 'd'])
  .node('b')
  .addEdges(['c', 'e'])
  .node('c')
  .addEdges(['d', 'e']);

console.log('a dependencies')
console.log(dag.dependencies('a'))

console.log('c dependencies')
console.log(dag.dependencies('c'))
