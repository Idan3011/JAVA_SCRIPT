const welcome1 = function welcome() {
let welcome = 'Welcome to Appleseeds Bootcamp!';
return welcome;
} 
//console.log(welcome1())

const power1 =function power(a) {
    let myNumber = a;
    let result = Math.pow(myNumber, 2);
    return result;
    } 
    //console.log(power1(5))


    const add1 = function add(a, b = 5) {
    let myNumber = a;
    let sum = myNumber + b;
    return sum;
    }

    //console.log(add1(4));

function hello() {console.log("Hello!")};
function squareRoot(a){ console.log(Math.sqrt(a))};
function randomNumbers(a, b) { console.log(Math.random() * (a - b) + b)};

//hello()
//squareRoot(9)
randomNumbers(5,4)

