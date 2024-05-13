let num = 23;
let isPrime = false;
count = 0;
for(let i = 2; i<=23; i++){
    if(num % i == 0){
        count = count +1;
    }
}
if(count >1){
    console.log("number is not a prime")
}else{
    console.log("number is prime number")
}
