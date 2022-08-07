// let a = [1, 1, 1, 2, 1, 1, 1];
// let a = [4, 9, 95, 93, 57, 4, 57, 93, 9];
// let a = [1, 2, 3, 4, 1, 2, 3, 1, 2, 3];
let a = [1, 2, 1];
// let a = [];

// Approach - Using bitwise operations (XOR)

// let result = 0;
// for (let i = 0; i < a.length; i++) {
//   result = a[i] ^ result;
//   console.log(result);
// }
// console.log("answer");
// console.log(result);
// return result;

// Approach - Using sort and iteration

if (a.length == 0) {
  return 0;
} else if (a.length == 1) {
  return a[0];
} else {
  a.sort();
  for (let index = 0; index < a.length; index++) {
    const element = a[index];
    if (element !== a[index + 1] && element !== a[index - 1]) {
      console.log(element);
      return element;
    }
  }
}
