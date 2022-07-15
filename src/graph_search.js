const {dag_friends} = require('./_data/data-graphs');
const breadFirstSearch = require('./algorithms/breadth-first-search');

function personIsSeller(person) {
  return person.charAt(person.length - 1) === 'm'
}

const found = breadFirstSearch(dag_friends, dag_friends.get('me'), personIsSeller)
console.log(found)
