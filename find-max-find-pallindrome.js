// find max
// const arr = [-5, 0, -10, -1, -6];

// let max = null;

// for (let index = 0; index < arr.length; index++) {
//   const element = arr[index];
//   for (let j = 0; j < arr.length; j++) {
//     if (element > arr[j + 1]) {
//       if (max != null) {
//         if (element > max) {
//           max = element;
//         }
//       } else {
//         max = element;
//       }
//     }
//   }
// }

// console.log(max);

// find pallindrome

const str = "tibit";
let p = "";

for (let index = str.length - 1; index >= 0; index--) {
  const element = str[index];
  p = p.concat(element);
}

if (p == str) {
  console.log("Yes");
} else {
  console.log("No");
}
