const {makeArray} = require('../util/arrays');

/*
 * Example use:
 * const dag = new DirectedAcyclicGraph('Test');
 *
 * dag.addNodes(['a', 'b', 'c', 'd']).addNodes('e')
 *     .node('a').addEdges(['b', 'd'])
 *     .node('b').addEdges(['c', 'e'])
 *     .node('c').addEdges(['d', 'e']);
 *
 * const resolutionOrder = dag.dependencies('a');
 */

class DirectedAcyclicGraph {
  #name = '';
  #nodes = {};

  constructor(name) {
    this.#name = name
  }

  addNodes(nodes) {
    const arrNodes = makeArray(nodes);

    for (let n in arrNodes) {
      const nodeName = arrNodes[n];

      if (!this.contains(nodeName)) {
        this.#nodes[nodeName] = new Node(nodeName, this)
      }
    }

    return this
  }

  node(nodeName) {
    return this.#nodes[nodeName]
  }

  contains(nodeName) {
    return this.#nodes[nodeName] !== undefined
  }

  dependencies(startNodeName) {
    const startNode = this.#nodes[startNodeName];
    const unresolved = {};
    const resolved = {};

    function dependencyResolve(node) {
      unresolved[node.name()] = true;

      for (let i = 0, len = node.countEdges(); i < len; ++i) {
        const n = node.getEdge(i);

        if (resolved[n.name()] === undefined) {
          if (unresolved[n.name()]) {
            throw 'cyclic ref ' + n.name()
          } else {
            dependencyResolve(n)
          }
        }
      }

      resolved[node.name()] = true
    }

    dependencyResolve(startNode)

    return resolved
  }

  get name() {
    return this.#name
  }

  DOT(gdl, startNode) {
    ///	<summary>
    ///     If no parameter supplied return current graph in
    ///     gdl  (graph description language).
    ///		If parameter supplied build a graph from gdl.
    ///     Ex: 'digraph myGraph { a -> b -> c; b -> d; }'
    ///	</summary>

    const gdlRows = [];
    const resolved = {};
    let visitedIndex = 0;

    function makeGdl(node) {
      if (node.countEdges() === 0) {
        gdlRows[visitedIndex++] += node.name()
      } else {
        for (let i = 0, len = node.countEdges(); i < len; ++i) {
          if (gdlRows[visitedIndex] === undefined) {
            gdlRows[visitedIndex] = ''
          }

          gdlRows[visitedIndex] += node.name();

          const newNode = node.getEdge(i),
            namePair = node.name() + newNode.name();

          if (resolved[namePair] === undefined) {
            resolved[namePair] = true;
            gdlRows[visitedIndex] += ' -> ';
            makeGdl(newNode)
          } else {
            ++visitedIndex
          }
        }
      }
    }

    if (startNode !== undefined) {
      makeGdl(startNode)

      return 'digraph {0} {{1}}'.replace('{0}', this.#name)
        .replace('{1}', gdlRows.join('; ') + ';')
    }

    const reGdlRow = /[{\s;]?\w+(\s?->\s?\w+)+[^;]*;/gi,
      reNode = /(\w+)/i,
      reEdge = /->\s?(\w+)/gi,
      commands = [];
    let matchGdlRow;

    this.#name = /^digraph\s(\w+)/i.exec(gdl)[1];

    while (matchGdlRow = reGdlRow.exec(gdl)) {
      const gdlRow = matchGdlRow[0];
      let nextNode = reNode.exec(gdlRow);
      const nodesToProcess = [nextNode[1]];

      this.addNodes(nextNode[1]);

      while (nextNode = reEdge.exec(gdlRow)) {
        nodesToProcess.push(nextNode[1]);
        this.addNodes(nextNode[1])
      }

      commands.push(nodesToProcess)
    }

    while (commands.length > 0) {
      const nodesToProcess = commands.shift();

      let a = nodesToProcess[0],
        b;
      for (let i = 1, len = nodesToProcess.length; i < len; ++i) {
        b = nodesToProcess[i];
        this.node(a).addEdges(b);
        a = b
      }
    }

    return this
  }
}

class Node {
  #name = '';
  #dag = null;
  #edges = []

  constructor(name, dag) {
    this.#name = name;
    this.#dag = dag
  }

  addEdges(nodes) {
    const arrNodes = makeArray(nodes);

    for (let n in arrNodes) {
      const node = arrNodes[n];

      if (this.#dag.contains(node)) {
        this.#edges.push(this.#dag.node(node))
      }
    }
  }

  edgesContain(nodeName) {
    return this.#edges.some(nn => nn === nodeName)
  }

  getEdge(i) {
    return this.#edges[i]
  }

  get name() {
    return this.#name
  }

  get countEdges() {
    return this.#edges.length
  }
}

module.exports = {
  DirectedAcyclicGraph,
  Node,
}
