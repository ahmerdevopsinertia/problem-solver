// Bobtail interview

// Given a string of characters, find the first duplicate character

// Test Case 1
// ----------------
// Input: "abccbc"
// Output: "b"

// Test Case 2
// ----------------
// Input: "abcddaa"
// Output: "a"

let x = "abccbc";
// let x = "abcddaa";
let output = null;

// Approach 1
// for (let index = 0; index < x.length; index++) {
//   for (let char = index + 1; char < x.length; ) {
//     if (x[index] === x[char]) {
//       output = x[char];
//       char = x.length;
//       x = x.length;
//     } else {
//       char++;
//     }
//   }
// }
// console.log(output);

// Approach 2
for (let index = 0; index < x.length; ) {
  const element = x[index];
  if (element === x[index + 1]) {
    output = element;
    index = x.length;
  } else {
    index++;
  }
}
console.log(output);
// Given a string of characters, find the first duplicate character

// Test Case 1
// ----------------
// Input: "abccbc"
// Output: "b"

// Test Case 2
// ----------------
// Input: "abcddaa"
// Output: "a"

let x = "abccbc";
// let x = "abcddaa";
let output = null;

// Approach 1
// for (let index = 0; index < x.length; index++) {
//   for (let char = index + 1; char < x.length; ) {
//     if (x[index] === x[char]) {
//       output = x[char];
//       char = x.length;
//       x = x.length;
//     } else {
//       char++;
//     }
//   }
// }
// console.log(output);

// Approach 2
for (let index = 0; index < x.length; ) {
  const element = x[index];
  if (element === x[index + 1]) {
    output = element;
    index = x.length;
  } else {
    index++;
  }
}
console.log(output);
