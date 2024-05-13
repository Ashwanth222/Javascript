var arr = [4, 7, 8, 9,, 4, 7, 2, 1]
console.log(arr.concat(4))
console.log(arr)
arr.push(6)
console.log(arr)
arr.push(7,8)
console.log(arr)
console.log(arr.pop())
console.log(arr)
console.log(arr.shift())
console.log(arr)
console.log(arr.unshift(1))
console.log(arr)
console.log(arr.indexOf(2))
console.log(arr.lastIndexOf(7))
console.log(arr)
console.log(arr.filter(e => e%2 == 0).forEach(e => console.log(e)))
var arrr = ["erfg", "uygtyg", "dtyh", "tgbn", "edij", "qazz", "ujkm"]
console.log(arrr.map(e => e.toUpperCase()).forEach(e => console.log(e)))
console.log(arrr.map(e => e.toLocaleUpperCase().toLowerCase()).forEach(e => console.log(e)))
console.log(arr.join(","))
console.log(arrr.join(","))
console.log(arrr.reverse())
console.log(arrr.sort())
console.log(arr.includes(7))

const euros = [29.76, 41.85, 46.5];

const sum = euros.reduce((total, amount) => total + amount); 

console.log(sum)

//  print greate than 30

const euro = [29.76, 41.85, 46.5];

const above30 = euro.reduce((total, amount) => {
  if (amount > 30) {
    total.push(amount);
  }
  return total;
}, []);

console.log(above30) // [ 41.85, 46.5 ]

// count of fruits 

const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];

const count = fruitBasket.reduce( (tally, fruit) => {
  tally[fruit] = (tally[fruit] || 0) + 1 ;
  return tally;
} , {})

console.log(count)

//more conscise way

const countt = fruitBasket.reduce((tally, fruit) => {
    if (!tally[fruit]) {
      tally[fruit] = 1;
    } else {
      tally[fruit] = tally[fruit] + 1;
    }
    return tally;
  }, {});
  
  console.log(countt)

  //

  const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
var summ = data.flatMap(e => e)
.filter(r => r%2 == 0).forEach(e => console.log(e))

var summ = data.flatMap(e => e)
.filter(r => r%2 == 0).map(t => t*2).forEach(e => console.log(e))

console.log(arr)
console.log("arr.slice(4)" + arr.slice(4))
console.log(arr.slice(-3))
let sx = arr.splice(0,2)
console.log(arr.splice(0,2))
console.log(sx)

let languages = ['C', 'C++', 'Java', 'JavaScript'];
console.log(languages);
console.log(languages.splice(1, 1, 'Python'));
console.log(languages.splice(2,1,'C#','Swift','Go'))
const fruits = ["Banana", "Orange", "Apple", "Mango"];

// At position 2, add "Lemon" and "Kiwi"
const fruit = fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruit);

var arr = [4, 7, 8, 9, 4, 7, 2, 1]
console.log(arr.sort())

//second highest element in array
console.log(arr.sort().reverse().indexOf(1))




