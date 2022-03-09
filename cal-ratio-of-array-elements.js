// Task output should be like this
// 0.x00000
// 0.x00000
// 0.x00000

let arr = [1, 1, 0, -1, -1];
let numberArray = {
  pos: 0,
  neg: 0,
  zero: 0,
};
arr.map((element) => {
  if (element > 0) {
    numberArray.pos += 1;
  } else if (element < 0) {
    numberArray.neg += 1;
  } else {
    numberArray.zero += 1;
  }
});

console.log((numberArray.pos / arr.length).toFixed(6));
console.log((numberArray.neg / arr.length).toFixed(6));
console.log((numberArray.zero / arr.length).toFixed(6));
