//Block One//

function funcA() {
    console.log(foo());
    var a = 1;
    console.log(a);
    function foo() {
    return 2;
    }
}
// funcA();

//the console will display 2. a will not display because the 'console.log' i declare before the var a//

//Block Two//
var fullName = 'John Doe';
var obj = {
fullName: 'Colin Ihrig',
prop: {
fullName: 'Aurelio De Rosa',
getFullName: function () {
return this.fullName;
}
}
};
// console.log(obj.prop.getFullName());
// var test = obj.prop.getFullName();
// console.log(test);

//var inst declare properly and there is a missing or '()'//

//Block Three//

function funcB() {
    let a = b = 0;
    a++;
    return a;
} 
//     console.log(funcB());
// console.log(typeof a);
// console.log(typeof b);

//funcB will return a & typeof a will be undifined & typeof b will bw number//

//Block Four//

function funcC() {
    console.log("1");
} 
// funcC();
    function funcC() {
    console.log("2");
} 
// funcC();

// the console will return 2 , 2 and 1 will not display because funcC is declare twice and its overwirte the first declartation//

//Block Five//

function funcD1() {
    d = 1;
} 
funcD1();
    console.log(d);
    function funcD2() {
    var e = 1;
} 
// funcD2();
//     console.log(funcD1());

//the function funcD1 is w/o an input therefore the console eill log error.//

//Block Six//

var f = 1;
function funcE(f) {
    console.log("Value of f in local scope: ", f);
} 
console.log("Value of f in global scope: ", f);
   
funcE(f);

// f is declare after function funcE and the function nedded to be with and input//