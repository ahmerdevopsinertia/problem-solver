// let grid = ["abc", "lmp", "qrt"];
let grid = ["mpxz", "abcd", "wlmf"];
let cur = [];
for (let index = 0; index < grid.length; index++) {
  cur.push(grid[index].split("").sort());
}

let column = cur[0].length;

for (let j = 0; j < cur.length - 1; j++) {
  for (let z = 0; z < column; z++) {
    if (cur[j][z] > cur[j + 1][z]) {
      return "NO";
    }
  }
}
return "YES";
