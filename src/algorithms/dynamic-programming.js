const sumItems = x => x.reduce((acc, item) => acc + item.price, 0);
const gapFillItems = (weight, row, col) => {
  if (row > 0 && col + 1 - weight > 0) {
    return rows[row - 1][col - weight]
  } else {
    return []
  }
}

const items = [
  {
    name: 'Guitar',
    price: 1500,
    weight: 1,
  },
  {
    name: 'Laptop',
    price: 2000,
    weight: 3,
  },
  {
    name: 'Stereo',
    price: 3000,
    weight: 4,
  },
  {
    name: 'iPad',
    price: 1800,
    weight: 1,
  },
]

const maxSize = 4;
const rows = Array(items.length)
  .fill(0)
  .map(() => Array(maxSize)
    .fill(0));

for (let row = 0; row < items.length; row++) {
  const currentItem = items[row];

  for (let col = 0; col < maxSize; col++) {
    const previousMax = (row > 0)
      ? sumItems(rows[row - 1][col])
      : 0;
    const currentItemThatFits = currentItem.weight <= (col + 1)
      ? currentItem.price + sumItems(gapFillItems(currentItem.weight, row, col))
      : 0;

    if (previousMax > currentItemThatFits) {
      rows[row][col] = [
        ...rows[row - 1][col]
      ]
    } else {
      rows[row][col] = [
        currentItem,
        ...gapFillItems(currentItem.weight, row, col)
      ]
    }
  }
}

console.log('Solution:')
console.log(rows[items.length - 1][maxSize - 1])
