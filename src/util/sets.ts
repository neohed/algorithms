function isSuperset<T>(set: Set<T>, subset: Set<T>) {
  for (const elem of subset) {
    if (!set.has(elem)) {
      return false
    }
  }

  return true
}

function union<T>(setA: Set<T>, setB: Set<T>) {
  const _union = new Set(setA);
  for (const elem of setB) {
    _union.add(elem)
  }

  return _union
}

function intersection<T>(setA: Set<T>, setB: Set<T>) {
  const _intersection = new Set();
  for (const elem of setB) {
    if (setA.has(elem)) {
      _intersection.add(elem)
    }
  }

  return _intersection
}

function symmetricDifference<T>(setA: Set<T>, setB: Set<T>) {
  const _difference = new Set(setA);
  for (const elem of setB) {
    if (_difference.has(elem)) {
      _difference.delete(elem)
    } else {
      _difference.add(elem)
    }
  }

  return _difference
}

function difference<T>(setA: Set<T>, setB: Set<T>) {
  const _difference = new Set(setA);
  for (const elem of setB) {
    _difference.delete(elem)
  }
  
  return _difference
}

module.exports = {
  isSuperset,
  union,
  intersection,
  symmetricDifference,
  difference,
}
