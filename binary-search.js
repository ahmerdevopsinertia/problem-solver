let arr = [2, 3, 4, 10, 40, 41];
let x = 10;
let n = arr.length;
l = 0;
r = n - 1;

// Recursive Approach

function binarySearchRecursive(arr, l, r, x) {
  if (r >= l) {
    let mid = l + Math.floor((r - l) / 2);

    // If the element is present at the middle
    // itself
    if (arr[mid] == x) {
      console.log(x);
      return mid;
    }

    // If element is smaller than mid, then
    // it can only be present in left subarray
    if (arr[mid] > x) return binarySearchRecursive(arr, l, mid - 1, x);

    // Else the element can only be present
    // in right subarray
    return binarySearchRecursive(arr, mid + 1, r, x);
  }

  // We reach here when element is not
  // present in array
  return -1;
}

// binarySearchRecursive(arr, 0, n - 1, x);

// Iterative approach

function binarySearchIterative(arr, x) {
  let l = 0;
  let r = arr.length - 1;
  let mid;

  while (r >= l) {
    mid = l + Math.floor((r - l) / 2);

    if (arr[mid] == x) {
      console.log(x);
      return x;
    } else {
      if (arr[mid] > x) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
  }
  console.log(-1);
  return -1;
}

binarySearchIterative(arr, x);
