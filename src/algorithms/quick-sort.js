function quickSort(array) {
  if (array.length < 2) {
    return array
  }

  const pivotPoint = Math.floor(Math.random() * array.length);
  const pivot = array[pivotPoint];
  array.splice(pivotPoint, 1);
  const less = array.filter(v => v <= pivot);
  const greater = array.filter(v => v > pivot);

  return [
    ...quickSort(less),
    pivot,
    ...quickSort(greater)
  ]
}

module.exports = quickSort
