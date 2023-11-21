// ! ======================================! //

// Your task is to create a function that does four basic .
// The function should take three arguments - operation(string/char), value1(number),
// value2(number).
// The function should return result of numbers after applying the chosen operation.
// Examples


function basicOp(str, num1, num2){
   switch (str){
    case ('+'):
       return  num1+num2
    case ('-'):
         return num1-num2
    case ('*'):
     return    num1*num2
    case ('/'):
       if(num2 ===0){
        return 'can`t divide 0'
       }
       else{
        return num1/num2
       }
    }
    
}






// console.log(basicOp("+", 4, 7)); // Output: 11
// console.log(basicOp("-", 15, 18)); // Output: -3
// console.log(basicOp("*", 5, 5)); // Output: 25
// console.log(basicOp("/", 49, 7)); // Output: 7
// console.log(basicOp("/", 49, 0)); // Output: can't divide 0


// It's pretty straightforward. Your goal is to create a function that removes the first and last
// characters of a string. You're given one parameter, the original string. You don't have to worry
// with strings with less than two characters.


const strFirstAndLast = (str) =>{
   
   return  str.slice(1,str.length-1) 
   
}

console.log(strFirstAndLast('hello'))
