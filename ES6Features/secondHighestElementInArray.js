
var arr = [4, 7, 8, 9, 4, 7, 2, 1]
console.log(arr.sort())
console.log(arr.sort().reverse())
console.log(arr.sort().reverse().splice(2).at(0))

//
let randomArr = [1,3,5,2,7,6,22,45,67,44];
let sortedArr = randomArr.sort( (a,b) => a-b); // sort array in ASC order
console.log(sortedArr.at(-2)); // gives 2nd last item in array

