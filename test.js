function squaresInRect(a, b) {
    const squares = [];
  
    while (a > 0 && b > 0) {
      if (a >= b) {
        squares.push(b);
        a -= b;
      } else {
        squares.push(a);
        b -= a;
      }
    }
  
    console.log(squares);
  }


//squaresInRect(5,3)



var v = [88, 44, 32, 30, 31, 19, 74];

function isPrime(element) {
  let start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

// console.log([88, 44, 32, 30, 31, 19, 74].find(isPrime))


var w = [1,2,0,0,0,0,5,7,-6,0,0,0,8,0,0];



var x = w.filter((a,b) =>{

  if(w.indexOf(a, 0) !== w.lastIndexOf(a, 0)){
    return w
    
  }

})
console.log(x)

