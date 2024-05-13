var arr = [4, 7, 8, 9, 4, 7, 2, 1, 8, 9, 1]

var unique = new Set(arr)
console.log(unique)

//alternate using forEach
let uniquee = [];
arr.forEach( e => {
    if( !uniquee.includes(e)){
        uniquee.push(e)
    }}
    );
console.log(uniquee)

//alternate using filter
let Arr = [
    'g', 'e', 'e', 'k', 's', 
    'f', 'o', 'r', 'g', 'e', 
    'e', 'k', 's'
];

let outputArray = [];

function removewithfilter(arr) {
    let outputArray = arr.filter(function (v, i, self) {

        // It returns the index of the first
        // instance of each value
        return i == self.indexOf(v);
    });

    return outputArray;
}

console.log(removewithfilter(Arr));

//alternate using indexOf
let arre = ["apple", "mango",
        "apple", "orange", "mango", "mango"];

function removeDuplicates(arre) {
    let unique = [];
    for (i = 0; i < arre.length; i++) {
        if (unique.indexOf(arre[i]) === -1) {
            unique.push(arre[i]);
        }
    }
    return unique;
}
console.log(removeDuplicates(arr));

//using for loop

// Creating a 3x4 two-dimensional array
let Arrrr = [
    "Manish", "Chandan", "Piyush",
    "Sunil", "Pankaj", "Piyush",
    "Pankaj", "Tiny", "Chandan",
    "Manish"];

let outputArrayy = [];

// Count variable is used to add the
// new unique value only once in the
// outputArray.
let count = 0;

// Start variable is used to set true
// if a repeated duplicate value is
// encontered in the output array.
let start = false;

for (let j = 0; j < Arrrr.length; j++) {
    for (let k = 0; k < outputArrayy.length; k++) {
        if (Arr[j] == outputArrayy[k]) {
            start = true;
        }
    }
    count++;
    if (count == 1 && start == false) {
        outputArrayy.push(Arr[j]);
    }
    start = false;
    count = 0;
}

console.log(outputArrayy);
