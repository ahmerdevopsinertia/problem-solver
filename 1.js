let a = " aaab   ";
// console.log(a.trim().length);
let temp = a.substring(0, 5);
console.log(temp);
console.log(temp.length);



let peopleSum = sumOfPeople(P);
let sortedSeat = sortAvailableSeat(S);
let identifier = 0;
while (peopleSum > 0) {
  peopleSum -= sortedSeat[identifier];
  identifier += 1;
}
let output = identifier;
return output;

Example test:   ([1, 4, 1], [1, 5, 1])
OK

Example test:   ([4, 4, 2, 4], [5, 5, 2, 5])
OK

Example test:   ([2, 3, 4, 2], [2, 5, 7, 2])
OK


const charLimit = K;
    const messageLength = message.length;

    if (messageLength <= charLimit) return message.trim();

    let result = message.split(/\s+/);
    let i = 1;

    while (result.slice(0, i).join(' ').length < charLimit) i++;
return result.slice(0, i - 1).join(' ');
    
// Factories test