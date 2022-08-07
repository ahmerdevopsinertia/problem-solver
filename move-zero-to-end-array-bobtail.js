// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Input: nums = [0,1,0,12,3]
// Output: [1,12,3,0,0]

// Input: nums = [0]
// Output: [0]

// Approach 1
// let nums = [0, 1, 0, 12, 3];
// // let nums = [0];
// let output = [];

// for (let index = 0; index < nums.length; index++) {
//   const element = nums[index];
//   if (element == 0) {
//     output.push(nums.splice(index, 1)[0]);
//   }
// }

// if (nums.length > 0) {
//   output = nums.concat(output);
// }

// console.log(output);

// Approach 2

// let nums = [0, 1, 0, 12, 3];
// // let nums = [0];

// nums.push(nums.splice(nums.indexOf(0), 1)[0]);

// console.debug(nums);

// Approach 3 [Best Approach]

let nums = [0, 1, 0, 12, 3];
// let nums = [0];

let count = 0; // Count of non-zero elements

let n = nums.length;
// Traverse the array. If element encountered is non-
// zero, then replace the element at index 'count'
// with this element
for (let i = 0; i < n; i++) {
  if (nums[i] !== 0) {
    nums[count++] = nums[i];
  }
}
// here count is
// incremented

// Now all non-zero elements have been shifted to
// front and 'count' is set as index of first 0.
// Make all elements 0 from count to end.
while (count < n) {
  nums[count++] = 0;
}

console.log(nums);

// Learning from the interview

// We usually decrease complexit of runtime and increase the complexity of space to optimize the solution

// For task 1 you can use map data structure, with frequency of each char along with it and then use the loop
