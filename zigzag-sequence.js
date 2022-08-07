let a = [1, 2, 4, 5, 6, 3, 7];
let n = a.length;
a.sort();
let mid = (n + 1) / 2 - 1;
let temp = a[mid];
a[mid] = a[n - 1];
a[n - 1] = temp;

let st = mid + 1;
let ed = n - 2;
while (st <= ed) {
  temp = a[st];
  a[st] = a[ed];
  a[ed] = temp;
  st = st + 1;
  ed = ed - 1;
}
for (let i = 0; i < n; i++) {
  if (i > 0) console.log(" ");
  console.log(a[i]);
}
console.log();
