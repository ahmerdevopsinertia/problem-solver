let s = "www.abc.xy";
// "1X7T4VrCs23k4vv08D6yQ3S19G4rVP188M9ahuxB6j1tMGZs1m10ey7eUj62WV2exLT4C83zl7Q80M";
// let k = 27;
let k = 87;

let alphabets = "abcdefghijklmnopqrstuvwxyz";
const alphabetsLength = 26;
let customString = Array.from(s);
for (let i = 0; i < customString.length; i++) {
  for (let j = 0; j < alphabetsLength; j++) {
    if (customString[i] === alphabets[j]) {
      if (j + k > alphabetsLength - 1) {
        let reIteration = j + k - alphabetsLength;
        if (reIteration >= 26) {
          reIteration -= alphabetsLength;
        }
        customString[i] = alphabets[reIteration];
      } else {
        customString[i] = alphabets[j + k];
      }
      j = alphabetsLength;
    } else if (customString[i].toLowerCase() === alphabets[j]) {
      if (j + k > alphabetsLength - 1) {
        let reIteration = j + k - alphabetsLength;
        if (reIteration >= 26) {
          reIteration -= alphabetsLength;
        }
        customString[i] = alphabets[reIteration].toUpperCase();
      } else {
        customString[i] = alphabets[j + k].toUpperCase();
      }
      j = alphabetsLength;
    }
  }
}
console.log(customString.join(""));
return customString.join("");

// 1Y7U4WsDt23l4ww08E6zR3T19H4sWQ188N9bivyC6k1uNHAt1n10fz7fVk62XW2fyMU4D83am7R80N

//my
// 1Y7U4WsDt23l4ww08E6zR3T19H4sWQ188N9bivyC6k1uNHZt1n10fz7fVk62XW2fyMU4D83zm7R80N
