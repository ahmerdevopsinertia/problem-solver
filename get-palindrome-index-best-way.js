let s = "radar";
// "iynilxchelphhsjiftgmbtaxlnbrbhsrptfxfddmhoerxaaaaxreohmddfxftprshbrbnlxatbmgtfishhplehcxlinyi";
let isValidPalindrom = (str) => {
  let strLen = str.length;
  for (let index = 0; index < strLen / 2; index++) {
    if (str[index] != str[strLen - index - 1]) {
      return false;
    }
  }
  return true;
};

let len = s.length;
let palindromIndex = -1;

for (let i = 0; i < len / 2; i++) {
  if (s[i] != s[len - i - 1]) {
    if (i + 1 < len) {
      let validitiy = isValidPalindrom(s.substring(i + 1, len - i));
      if (validitiy) {
        console.log(i);
        return i;
      } else {
        console.log(len - i - 1);
        return len - i - 1;
      }
    }
  }
}

console.log(palindromIndex);
return palindromIndex;
