const a = [
  [1, 5],
  [10, 3],
  [3, 4],
];

// where 1 is petrol and 5 is distance

function truckTour(a) {
  let start = 0;
  let requiredFuel = 0;
  let extraFuel = 0;

  for (let i = 0; i < a.length; i++) {
    extraFuel += a[i][0] - a[i][1];
    if (extraFuel < 0) {
      start = i + 1;
      requiredFuel += extraFuel;
      extraFuel = 0;
    }
  }

  if (requiredFuel + extraFuel >= 0) return start;
  return -1;
}

const ans = truckTour(a);
console.log(ans);
