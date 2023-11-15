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

const x = (w) => {
  for(let i=0; i<=w.length; i++){
  while((w[i] == 0 && w[i+1]==0)){
    w.splice(i+1,1);
  } 
}
return w

}

// console.log(x(w))

var w = [6, 7, 4, 3, 5, 2];

function replaceWithNextMax(arr){
     let array = arr.map((previousValue, currentValue) => {
        if(previousValue< currentValue){
          previousValue = currentValue
        } 
      })
      return array
}
var n = replaceWithNextMax(w);
console.log(n); //print [7, 5, 5, 5, 2, 0]


