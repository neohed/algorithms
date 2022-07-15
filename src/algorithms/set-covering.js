const {intersection, difference} = require('../util/sets');

function setCovering(subset, universe) {
  const res = [];

  while (subset.size > 0) {
    let best_set_name = '';
    let best_set = new Set();

    for (let setName in universe) {
      const set = universe[setName];
      const covered = intersection(subset, set);

      if (covered.size > best_set.size) {
        best_set_name = setName;
        best_set = set
      }
    }

    subset = difference(subset, best_set);
    res.push(best_set_name)
  }

  return res
}

module.exports = setCovering
