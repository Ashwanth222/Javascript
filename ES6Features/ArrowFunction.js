// function expression
let product = function(x, y) {
    return x * y;
 };
 
 result = product(5, 10);
 
 console.log(result);  // 50

 let prductt = (x, y) => x*y
 resultt = prductt(6, 8)
 console.log(resultt)

//  // function expression  
  
var myfun1 = function show() {  
    console.log("It is a Function Expression");     
   }  
     
   // Anonymous function  
     
   var myfun2 = function () {  
       console.log("It is an Anonymous Function");     
      }  
        
   //Arrow function  
     
   var myfun3 = () => {  
       console.log("It is an Arrow Function");     
      };  
     
   myfun1();  
   myfun2();  
   myfun3(); 

//   
 var show = () => console.log("Hello World");  
show(); 

//
var show = (a,b,c) => {  
    console.log(a + " " + b + " " + c );  
}  
show(100,200,300);  

// arrow function with default parameters
var show = (a , b= 23) => {
    console.log(a+b)
}
show(25,25)
show(24)

// 
var showw = (a, ...args) => {
    console.log(a + " " + args);
}
showw(100,200,300,400,500,600,700,800); 

var showw = x => {
    console.log(x)
}
showw(25)
