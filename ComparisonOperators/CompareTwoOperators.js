let a = 6;
let b = 4.0;
console.log(a<b);
console.log(b>a);
console.log(a>b);
console.log(b<a);

console.log(a==b);
console.log(b===a);
console.log(a>=b);
console.log(b<=a);

// same value, same type
console.log(5 == 5);  // true

// same value, different type
console.log(2 == "2");  // true

// different values, same type
console.log("hello" == "Hello");  // false

// same value, same type
console.log(2 != 2);  // false

// same value, different type
console.log(2 === "2");  // false
console.log(2 == "2");  
console.log(2 != "2");  // false



// different value, same type
console.log(2 != 3);  // true

// same value, same type
console.log(2 !== 2);  // false

// same value, different type
console.log(2 !== "2");  // true

// different value, same type
console.log("Hello" !== "World");  // true

// left operand is greater
console.log(3 >= 2);  // true

// both operands are equal
console.log(4 >= 4);  // true

// left operand is smaller
console.log(2 >= 5);  // false

// left operand is smaller
console.log(2 < 5);  // true

// both operands are equal
console.log(4 < 4);  // false

// left operand is greater
console.log(3 < 2);  // false

// left operand is smaller
console.log(2 <= 5);  // true

// both operands are equal
console.log(4 <= 4);  // true

// left operand is greater
console.log(3 <= 2);  // false

const x = 5, y = 3;

console.log("x and y "+((x < 6) && (y < 5)));

// Output: true

console.log("x and y " + ((x < 6) && (y > 5)));

let xy = 2;

// both expressions are true
console.log((xy < 4) && (4 >= xy));  // true

// only one expression is true
console.log((xy <= 4) && (2 == 4));  // false

// both expressions are false
console.log((xy > 4) && (xy == 4));  // false

// both expressions are true
console.log((x < 4) || (4 >= x));  // true

// only one expression is true
console.log((x <= 4) || (2 == 4));  // true

// both expressions are false
console.log((x > 4) || (x == 4));  // false

// NOT on true
console.log(!true);  // false

// NOT on false
console.log(!false);  // true

// comparison example
console.log(!(2 < 3));  // false