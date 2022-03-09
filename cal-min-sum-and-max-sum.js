// Task - Calculate sum of array elements by ignoring
// element having min value and by calculating element having max value
// Write your code here
let arr = [1, 3, 5, 7, 9];
arr.sort(function (a, b) {
  return a - b;
});
let clonedArray = [...arr];
arr.shift();
clonedArray.pop();
const maxSum = arr.reduce((acc, a) => acc + a, 0);
const minSum = clonedArray.reduce((acc, a) => acc + a, 0);
console.log(`${minSum} ${maxSum}`);
