const pythagoreanDistance = (x1, y1, x2, y2) => Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
const pythagoreanDistanceN = (dataPoints1, dataPoints2) => Math.sqrt(dataPoints1.reduce((acc, point1, i) => {
  const point2 = dataPoints2[i];

  return acc + Math.pow(point1 - point2, 2)
}, 0))

module.exports = {
  pythagoreanDistance,
  pythagoreanDistanceN,
}
