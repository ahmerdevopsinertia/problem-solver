// find pallindrome

// Bad Way performance wise

const str = "tibits";
// let p = "";

// for (let index = str.length - 1; index >= 0; index--) {
//   const element = str[index];
//   p = p.concat(element);
// }

// if (p == str) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }

// Best way

let strLen = str.length;
for (let index = 0; index < strLen / 2; index++) {
  if (str[index] != str[strLen - index - 1]) {
    console.log("No");
    return;
  }
}
console.log("Yes");
return;
