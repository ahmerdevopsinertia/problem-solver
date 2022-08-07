// find max
const arr = [-5, 1, -10, -1, -6];

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

// Best Approach using reduce

function arrayMax(arr) {
  var len = arr.length,
    max = -Infinity;
  while (len--) {
    if (arr[len] > max) {
      max = arr[len];
    }
  }
  return max;
}

function arrayMin(arr) {
  var len = arr.length,
    min = Infinity;
  while (len--) {
    if (arr[len] < min) {
      min = arr[len];
    }
  }
  return min;
}

function arrayMinUsingReduce(arr) {
  console.log(
    arr.reduce(function (p, v, i) {
      console.log(p, v, i);
      return p < v ? p : v;
    }, 5)
  );
}

function arrayMaxUsingReduce(arr) {
  console.log(
    arr.reduce(function (p, v, i) {
      console.log(p, v, i);
      return p > v ? p : v;
    })
  );
}

console.log(arrayMaxUsingReduce(arr));
