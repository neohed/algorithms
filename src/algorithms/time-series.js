const {
  inputValid,
  inputValid_2,
  inputValid_3,
  inputValid_4,
  inputInValid,
  inputInValid_2,
  inputInValid_3,
  inputInValid_4,
  inputInValid_5,
  inputInValid_6,
} = require('../_data/data-time-series')

// O(nm)
function validate(series) {
  for (let j = 0; j < series.length - 1; j++) {
    const series1 = series[j];
    const series2 = series[j + 1];

    for (let i = 0; i < series1.length;) {
      if (series1[i] === series2[i]) {
        i++
      } else if (
        series1[i] !== series1[i + 1] &&
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
console.log(validate(inputValid_4) === true)

console.log(validate(inputInValid) === false)
console.log(validate(inputInValid_2) === false)
console.log(validate(inputInValid_3) === false)
console.log(validate(inputInValid_4) === false)
console.log(validate(inputInValid_5) === false)
console.log(validate(inputInValid_6) === false)
