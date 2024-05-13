// function with ...args rest parameter
function show(a, b, ...args) {
    console.log("a:", a);
    console.log("b:", b);
    console.log("args:", args);
}

// call function with extra parameters
show(1, 2, 3, 4, 5);

//spread operator

let numArr = [1, 2, 3];

// without spread operator
console.log([numArr, 4, 5]);  // [[1, 2, 3], 4, 5]

// with spread operator
console.log([...numArr, 4, 5]);  // [1, 2, 3, 4, 5]