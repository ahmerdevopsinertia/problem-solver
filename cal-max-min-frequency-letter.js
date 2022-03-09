let sequence = "bbacccabab";
let sequence = "bbaccccccccccabab";
let sequence = "abbbbbbaaaaaaaaaaabbbbccccccc";
let sequence = "abbaaaaaaaaaaa";

//This code is working fine but need to optimize and make less line of code

// return the frequencyDeviation as output
// formula of this is, maxFreq-minFreq
let freq = [];
for (var i = 0; i < sequence.length; i++) {
  let temp = {};
  let maxFreq = 1;
  temp[sequence[i]] = maxFreq;
  for (var j = i; j < sequence.length; ) {
    if (sequence[i] == sequence[j + 1]) {
      maxFreq += 1;
      temp[sequence[i]] = maxFreq;
      j++;
    } else {
      j = sequence.length;
    }
    if (
      !freq.some((e) => {
        if (e.hasOwnProperty(sequence[i])) {
          if (e[sequence[i]] < maxFreq) {
            e[sequence[i]] = maxFreq;
          }
          return true;
        } else {
          return false;
        }
      })
    ) {
      freq.push(temp);
    }
  }
}

console.log(freq);

// sorting in ascending order to get max and min val
// and then calculate it by subtracting the min val from the max value.
let sortedFreq = [];
let freqDev = 0;
for (var key in freq) {
  for (var i in freq[key]) {
    console.log(typeof freq[key][i]);
    sortedFreq.push(freq[key][i]);
  }
}

sortedFreq = sortedFreq.sort(function (a, b) {
  return a - b;
});
console.log(sortedFreq);
freqDev = sortedFreq[sortedFreq.length - 1] - sortedFreq[0];
console.log(freqDev);
console.log("##### Algo achieves its requirement correctly ####");
