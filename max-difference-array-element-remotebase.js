let px = [7, 2, 6, 5, 1];
// let px = [7, 4, 3, 2, 1];
let maxDiff = px[1] - px[0];
let minElement = px[0];

for (let i = 1; i < px.length; i++) {
  if (px[i] - minElement > maxDiff) {
    maxDiff = px[i] - minElement;
  }

  if (px[i] < minElement) {
    minElement = px[i];
  }
}
if (maxDiff == 0) {
  return -1;
}
return maxDiff;
