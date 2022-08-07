// function unique(array) {
//     return array.reduce((uniqueArray, number) => {
//         if (uniqueArray.indexOf(number) === -1) {
//             uniqueArray.push(number);
//         }
//         return uniqueArray;
//     }, []);
// }

// var numbers = [1, 2, 3, 4, 1, 2, 3];
// var numbers = [1];
var numbers = [18, 49, 15, 30, 56, 20, 49, 67, 82, 69, 84, 63, 93, 87, 66, 17, 38, 32, 17, 32, 94, 66, 67, 63, 48, 64, 84, 82, 87, 18, 79, 64, 79, 15, 71, 94, 59, 5, 22, 59, 4, 98, 81, 4, 98, 73, 69, 88, 30, 81, 48, 56, 71, 20, 93, 22, 73, 5, 88];
let unique = 0;
numbers = numbers.sort(function (a, b) {
  return a - b;
});

if (numbers.length == 1) {
    unique = numbers[0];
    return unique;
}
for (var i = 0; i < numbers.length; i++) {
  for (var j = 1; j < numbers.length; j++) {
    if (numbers[i] != numbers[j]) {
      unique = numbers[i];
    } else {
      j = numbers.length;
    }
  }
}
return unique;
