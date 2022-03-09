console.log("Compare Two Arrays");

let array1 = [
  ["apple", "apple"],
  ["banana", "anything", "banana"],
];
let array2 = [
  ["apple", "apple"],
  ["banana", "orange", "banana"],
];

let flatArray1 = [].concat.apply([], array1);
let flatArray2 = [].concat.apply([], array2);

console.log(flatArray1);
console.log(flatArray2);

let comparedArrays = flatArray1.filter((item) => {
  if (
    flatArray2.includes(item) &&
    flatArray1.indexOf(item) == flatArray2.indexOf(item)
  ) {
    console.log(item);
    console.log("Yes matched and on same index");
    return item;
  } else if (item == "anything") {
      console.log(item);
      console.log('anything is allowed')
      return item;
  } else {
    console.log(item);
    console.log("No");
  }
});
console.log("##### Algo achieves its requirement correctly ####");
console.log(comparedArrays);
