let a = [4, 5, 3, 2, 4, 1];
let n = a.length;

// Iterate through array elements
for (let i = 0; i < n - 1; i++) {
  // Loop invariant : Elements till
  // a[i - 1] are already sorted.

  // Find minimum element from
  // arr[i] to arr[n - 1].
  let min = i;
  for (let j = i + 1; j < n; j++) if (a[min] > a[j]) min = j;

  // Move minimum element at current i.
  let key = a[min];
  while (min > i) {
    a[min] = a[min - 1];
    min--;
  }

  a[i] = key;
}
