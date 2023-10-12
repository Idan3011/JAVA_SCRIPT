//Block One//

var b = 1;
function someFunction(b) {
function otherFunction(input) {
return b;
} b
= 5;
return otherFunction;
} 
// var firstResult = someFunction(9);
// var result = firstResult(2);

//firstResult will display 5//

//Block Two//

var a = 1;
function b2() {
a = 10;
return;
function a() { }
} 
// console.log(b2());
// console.log(a);

//a will be display as 1. b2 will no dislay because there is no console.log declaration and therer is nothing to return && there is no function a //

//Block Three//

let i;
for (i = 0; i < 3; i++) {
const log = () => {
console.log(i);
} 
setTimeout(log, 3000);
}


//
