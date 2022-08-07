// let s = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab";
// let s = "quyjjdcgsvvsgcdjjyuq";
// 'hgygsvlfwcwnswtuhmyaljkqlqjjqlqkjlaymhutwsnwcflvsgygh'
// 'fgnfnidynhxebxxxfmxixhsruldhsaobhlcggchboashdlurshxixmfxxxbexhnydinfngf'
// 'bsyhvwfuesumsehmytqioswvpcbxyolapfywdxeacyuruybhbwxjmrrmjxwbhbyuruycaexdwyfpaloyxbcpwsoiqtymhesmuseufwvhysb'
// 'fvyqxqxynewuebtcuqdwyetyqqisappmunmnldmkttkmdlnmnumppasiqyteywdquctbeuwenyxqxqyvf'
// 'mmbiefhflbeckaecprwfgmqlydfroxrblulpasumubqhhbvlqpixvvxipqlvbhqbumusaplulbrxorfdylqmgfwrpceakceblfhfeibmm'
// 'tpqknkmbgasitnwqrqasvolmevkasccsakvemlosaqrqwntisagbmknkqpt'
// 'lhrxvssvxrhl'
// 'prcoitfiptvcxrvoalqmfpnqyhrubxspplrftomfehbbhefmotfrlppsxburhyqnpfmqlaorxcvtpiftiocrp'
// 'kjowoemiduaaxasnqghxbxkiccikxbxhgqnsaxaaudimeowojk'

// let s = "wykkttfghdvbyxbxefnltpnbdkkdbnptlnfexbxybvdhgfttkkyw";
// let s =
//   "iynilxchelphhsjiftgmbtaxlnbrbhsrptfxfddmhoerxaaaaxreohmddfxftprshbrbnlxatbmgtfishhplehcxlinyi";
// "xfsxrgylhgebvagwhmctvsbnqbqwwcpuhisbrtmbawsdyulxccxluydsabmtrbsihupcwwqbqnbsvtcmhwgavbeghlygrxsfx";
// 'uaklbdlxfbvypmqselghnbmmwyywmmbnhglesqmpvbfxldblkau'
// 'xthxhvykhasivjiwmbbmwivisahkyvhxhtx'
// 'oladkyolbdmqwlkejjeklwmdbloykdalo'
// 'kbkseyyvccgpqtqterkrrkretqtqpgccvyyskbk'
// 'crwlgqeubhhvigsliydbuvvvvubdyilsgivhhbueqglwrc'
// 'slwaebreoxussybaujipwtqdwlayumpeicdiifaafiidciepmuylwdqtwpijuabyssuxoerbeawls'
// 'nujquecofwcbnfyaayfnbcwfceuqjun'

// let s = "quyjjdcgsvvsgcdjjyq";
// hgygsvlfwcwnswtuhmyaljkqlqjjqlqkjlaymhutwsnwcflvsgygh;
// fgnfnidynhxebxxxfmxixhsruldhsaobhlcggchboashdlurshxixmfxxxbexhnydinfngf;
// bsyhvwfuesumsehmytqioswvpcbxyolapfywdxeacyuruybhbwxjmrrmjxwbhbyuruycaexdwyfpaloyxbcpwsoiqtymhesmuseufwvhysb;
// fvyqxqxynewuebtcuqdwyetyqqisappmunmnldmkttkmdlnmnumppasiqyteywdquctbeuwenyxqxqyvf;
// mmbiefhflbeckaecprwfgmqlydfroxrblulpasumubqhhbvlqpixvvxipqlvbhqbumusaplulbrxorfdylqmgfwrpceakceblfhfeibmm;
// tpqknkmbgasitnwqrqasvolmevkasccsakvemlosaqrqwntisagbmknkqpt;
// lhrxvssvxrhl;
// prcoitfiptvcxrvoalqmfpnqyhrubxspplrftomfehbbhefmotfrlppsxburhyqnpfmqlaorxcvtpiftiocrp;
let s = "kjowoemiduaaxasnqghxbxkiccikxbxhgqnsaxaaudimeowojk";

let a = function pallindrome(str) {
  console.log("the string", str);
  let p = "";

  for (let index = str.length - 1; index >= 0; index--) {
    const element = str[index];
    p = p.concat(element);
  }

  if (p == str) {
    return true;
  } else {
    return false;
  }
};

if (a(s)) {
  console.log(-1);
  return -1;
} else {
  for (let index = 0; index < s.length; index++) {
    let temp = s.slice(0, index) + s.slice(index + 1);
    if (a(temp)) {
      console.log("yes", index);
      return index;
    } else {
      console.log("failed");
    }
  }
}
