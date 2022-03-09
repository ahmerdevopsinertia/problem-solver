// let values = [1,2,11,10,5,6,7];
let values = [1,2,11,10,5,6,7,8];
if(values.length ===0) throw new Error("No inputs");

values.sort(function(a,b){
  return a-b;
});

var half = Math.floor(values.length / 2);

if (values.length % 2)
  return values[half];

return (values[half - 1] + values[half]) / 2.0;