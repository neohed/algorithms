type NumStr = number | string;
type Res = NumStr | undefined;

function search(items: NumStr[], item: NumStr): Res {
  let low = 0;
  let high = items.length;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guess = items[mid];

    if (guess === item) {
      return mid
    }

    if (guess > item) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }

  return undefined
}

export default search
