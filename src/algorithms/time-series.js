const inputValid = [
  [1, 0, 0, 1],
  [0, 1, 1, 0],
]

const inputValid_2 = [
  [1, 1, 0, 0, 1, 0],
  [1, 0, 1, 1, 0, 0],
]

const inputValid_3 = [
  [1, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0],
  [0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 1],
]

const inputInValid = [
  [1, 0, 0, 0, 1],
  [1, 0, 1, 0, 0],
]

const inputInValid_2 = [
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 0],
]

const inputInValid_3 = [
  [1, 1, 0, 0, 1, 0],
  [1, 0, 1, 1, 0, 1],
]

function validate(series) {
  for (let j = 0; j < series.length - 1; j++) {
    const series1 = series[j];
    const series2 = series[j + 1];

    for (let i = 0; i < series1.length;) {
      if (series1[i] === series2[i]) {
        i++
      } else if (
        series1[i] + series2[i] === 1 &&
        series1[i + 1] + series2[i + 1] === 1
      ) {
        i += 2
      } else {
        return false
      }
    }
  }

  return true
}

console.log(validate(inputValid) === true)
console.log(validate(inputValid_2) === true)
console.log(validate(inputValid_3) === true)
console.log(validate(inputInValid) === false)
console.log(validate(inputInValid_2) === false)
console.log(validate(inputInValid_3) === false)
