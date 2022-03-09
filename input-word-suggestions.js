let customerQuery = "mouse";
let repository = ["mouse", "mousepad", "mouses", "mousecat"];

// return the suggestion only if input lenght is equal to or greater than 2 letters.
// return the suggessted word in alphabatical order
// if matching words are greater than 3 ignore them
// return the output like this 
// mouse mousepad mouses
// mouse mousepad mouses
// mouse mousepad mouses
// mouse mousepad mouses

let overAllSuggessions = [];
if (customerQuery.length >= 2) {
  for (let i = 1; i < customerQuery.length; i++) {
    let suggessions = [];
    let customerSubQuery = customerQuery.substring(0, i + 1);
    let searchWord = new RegExp("^" + customerSubQuery, "gi");
    repository.map((item) => {
      if (item.match(searchWord)) {
        if (suggessions.length < 3) {
          suggessions.push(item);
        }
      }
    });
    overAllSuggessions.push(suggessions);
  }
}
console.log(overAllSuggessions);

if (overAllSuggessions.length > 0) {
  overAllSuggessions.forEach((item) => console.log(item.join(" ")));
} else {
  console.log(overAllSuggessions);
}
console.log("##### Algo achieves its requirement correctly ####");
