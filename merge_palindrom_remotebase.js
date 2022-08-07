// Merge Palindrome

// Using unordered_map to store
// frequency of elements
// mapT will have freq of elements of T

function genABCMap(abc) {
  let abcMap = new Map();
  abc.forEach((x) => {
    abcMap.set(x, 0);
  });
  return abcMap;
}

// Function to find largest palindrome
// possible from S and P after rearranging
// characters to make palindromic string T

function largestPalindrome(s1, s2) {
  let abc = "abcdefghijklmnopqrstuvwxyz";
  abc = abc.split("");

  let mapS = genABCMap(abc);
  let mapP = genABCMap(abc);
  let mapT = genABCMap(abc);

  let n = s1.length;
  let m = s2.length;

  for (let i = 0; i < n; i++) {
    let temp = mapS.get(s1[i]);
    temp += 1;
    mapS.set(s1[i], temp);
  }

  for (let i = 0; i < m; i++) {
    let temp = mapP.get(s2[i]);
    temp += 1;
    mapP.set(s2[i], temp);
  }

  // Take all character in mapT which
  // occur even number of times in
  // respective strings & simultaneously
  // update number of characters left in map

  let abcLength = abc.length;

  for (let i = 0; i < abcLength; i++) {
    let mapSTemp = mapS.get(abc[i]);
    let mapPTemp = mapP.get(abc[i]);

    if (mapS.get(abc[i]) % 2 == 0 && mapS.get(abc[i]) != 0) {
      mapSTemp += 1;
      mapT.set(abc[i], mapSTemp);
      mapS.set(abc[i], 0);
    } else if (mapS.get(abc[i]) != 0) {
      mapSTemp -= 1;
      mapT.set(abc[i], mapSTemp);
      mapS.set(abc[i], 1);
    }

    if (mapP.get(abc[i]) % 2 == 0 && mapP.get(abc[i]) != 0) {
      mapPTemp += 1;
      mapT.set(abc[i], mapPTemp);
      mapP.set(abc[i], 0);
    } else if (mapP.get(abc[i]) != 0) {
      mapPTemp -= 1;
      mapT.set(abc[i], mapPTemp);
      mapP.set(abc[i], 1);
    }
  }

  // Check if a unique character is
  // present in both string S and P
  let check = 0;

  for (let i = 0; i < abcLength; i++) {
    if (mapS.get(abc[i]) > 0 && mapP.get(abc[i]) > 0) {
      let tempT = mapT.get(abc[i]);
      tempT += 2;
      mapT.set(abc[i], tempT);
      check = 1;
      break;
    }
  }

  // Making string T in two halves
  // half1 - first half
  // half2 - second half
  let half1 = "",
    half2 = "";

  for (let i = 0; i < abcLength; i++) {
    let tempT = mapT.get(abc[i]);
    for (let j = 0; 2 * j < tempT - 1; j++) {
      half1 += abc[i];
      half2 += abc[i];
    }
  }

  // Reverse the half2 to attach with half1
  // to make palindrome T
  half2 = half2.split("").reverse().join("");

  // If same unique element is present
  // in both S and P, then taking that only
  // which is already taken through mapT
  if (check) {
    return half1 + half2;
  }

  // If same unique element is not
  // present in S and P, then take
  // characters that make string T
  // lexicographically smallest
  for (let i = 0; i < abcLength; i++) {
    if (mapS.get(abc[i]) > 0 || mapP.get(abc[i]) > 0) {
      half1 += abc[i];
      return half1 + half2;
    }
  }

  // If no unique element is
  // present in both string S and P
  return half1 + half2;
}

// let x = "aeabb";
// let y = "dfedf";

let x = "abad";
let y = "eeff";

// output => abdeffedba
let output = largestPalindrome(x, y);
console.log(output);
