// let arr = [
//   [11, 2, 4],
//   [4, 5, 6],
//   [10, 8, -12],
// ];

let arr = [
  [11, 2, 4, 6],
  [4, 5, 6, 7],
  [10, 8, 12, 9],
  [11, 12, 13, 9],
];

const dimension = arr.length;
let firstDiagonalSum = 0;
let secondDiagonalSum = 0;
let diff = 0;

for (let i = 0, j = dimension - 1; i < dimension, j > -1; i++, j--) {
  firstDiagonalSum += arr[i][i];
  secondDiagonalSum += arr[i][j];
}

console.log(firstDiagonalSum);
console.log(secondDiagonalSum);

diff = firstDiagonalSum - secondDiagonalSum;

console.log(diff);

if (diff > 0) {
  return diff;
} else if (diff < 0) {
  return diff * -1;
} else {
  return 0;
}
