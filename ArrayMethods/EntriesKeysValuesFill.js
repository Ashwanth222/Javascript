var colours = ["Red", "Yellow", "Blue", "Black"];  
var show = colours.entries();
for(i of show){
   // console.log(i);
}
var show = colours.entries();
console.log(...show)

var keeys = colours.keys();
console.log(...keeys)

var colours = ["Red", "Yellow", "Blue", "Black"]; 
var valuees = colours.values();
console.log(...valuees)

var colours = ["Red", "Yellow", "Blue", "Black"];
var fillwithh = colours.fill('Green', 2,4);
console.log(fillwithh);

var colours = ["Red", "Yellow", "Blue", "Black"];
var fillwithh = colours.fill('Green', 2,3);
console.log(fillwithh);

var colours = ["Red", "Yellow", "Blue", "Black"];
var fillwithh = colours.fill('Green', 2,-1);
console.log(fillwithh);

