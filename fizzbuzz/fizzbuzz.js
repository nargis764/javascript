function fizzbuzz() {
let arr = [];
for(i=1;i<=100;i++) {
if(i%3 == 0 && i%5 != 0) {
arr.push("fizz");   
} else if (i%3 != 0 && i%5 == 0) {
arr.push("buzz"); 
} else if (i%3 == 0 && i%5 == 0) {
arr.push("fizzbuzz"); 
} else {
arr.push(i); 
} 
}
console.log(arr);
}
fizzbuzz();