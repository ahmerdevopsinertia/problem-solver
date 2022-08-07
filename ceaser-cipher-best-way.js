const alphabets = "abcdefghijklmnopqrstuvwxyz";
// let str = "www.abc.xy";
let str =
  "1X7T4VrCs23k4vv08D6yQ3S19G4rVP188M9ahuxB6j1tMGZs1m10ey7eUj62WV2exLT4C83zl7Q80M";
let k = 87;
let newStr = "";

for (let i = 0; i < str.length; i++) {
  if (str[i] === str.toUpperCase()) {
    let index = alphabets.indexOf(str[i].toLocaleLowerCase());
    if (index == -1) {
      newStr += str[i];
    } else {
      let newIndex = (index + k) % alphabets.length;
      newStr += alphabets[newIndex].toUpperCase();
    }
  } else {
    let index = alphabets.indexOf(str[i]);
    if (index == -1) {
      newStr += str[i];
    } else {
      let newIndex = (index + k) % alphabets.length;
      newStr += alphabets[newIndex];
    }
  }
}
console.log(newStr);
