// let a = [2, 3, 34, 22, 11];
// let a = [11, 17, 18, 26, 23];
let a = [64, 34, 25, 12, 22, 11, 90];

let swapped;
let temp = 0;

for (let index = 0; index < a.length; index++) {
  swapped = false;
  for (let j = 0; j < a.length - index - 1; j++) {
    if (a[j] > a[j + 1]) {
      temp = a[j];
      a[j] = a[j + 1];
      a[j + 1] = temp;

      swapped = true;
    }
  }

  if (!swapped) {
    break;
  }
}

console.log(a);
