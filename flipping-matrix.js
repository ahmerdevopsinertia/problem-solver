let sum = 0;
// let a = [
//   [112, 42, 83, 119],
//   [56, 125, 56, 49],
//   [15, 78, 101, 43],
//   [62, 98, 114, 108],
// ];

let a = [
  [1, 2],
  [3, 4],
];
let n = a.length / 2;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    sum += Math.max(
      Math.max(a[i][j], a[i][2 * n - j - 1]),
      Math.max(a[2 * n - i - 1][j], a[2 * n - i - 1][2 * n - j - 1])
    );
  }
}

console.log(sum);
