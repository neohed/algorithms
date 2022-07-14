function quickSort(array) {
  if (array.length < 2) {
    return array
  }

  const pivot = array[0];
  const less = array.filter(v => v <= pivot);
  const greater = array.filter(v => v > pivot);

  return [
    ...quickSort(less),
    pivot,
    ...quickSort(greater)
  ]
}

module.exports = quickSort
