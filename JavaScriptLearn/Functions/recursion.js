//when a function calls itself from it's body
let x = function (n) {

//  if I need to summary  1+2+3+4....n, I've had to create loop:
 let total = 0;
 for(let i = 1; i <= 3; i++) {
     total += i;
 }
console.log(total);
}
x();


let add = function (i) {
    if(i <= 0){
        return 0;
    } else {
        return i + add(--i);
    }
}
console.log(add(11000));// 13000 will give RangeError: Maximum call stack size exceeded
