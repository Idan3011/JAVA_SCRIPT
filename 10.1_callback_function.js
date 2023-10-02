// let sentece ='Hello World!';
// function isString(str,func){
//     if(typeof str ==='string'){
//         func()
//     } else{
//         console.log(`${str} isnt a string`)
//     }
// }

// function string(){
//     console.log(sentece)
// }

//isString(sentece,string)
let string = 'hello world!';

function firstWordUpperCase(str){
    const firstWord = str.split(' ');
    if (firstWord.length>0){
      firstWord[0]=firstWord[0].toUpperCase();
    }
    const joiningWord = firstWord.join('_');
    return joiningWord
   
}

console.log(firstWordUpperCase(string))

