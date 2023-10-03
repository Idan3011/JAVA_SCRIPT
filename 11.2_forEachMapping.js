let array = [1,2,3,4,5,6,7,8,];

function doubleValue(array){
    const arrayDouble =[];
    const dblvlu =array.forEach(index =>{
        arrayDouble.push(index*2);
    })
    console.log(arrayDouble)
}

//doubleValue(array)

const onlyEvenValues = function (array) {
    const arrayEven = [];
    const evenValue = array.forEach(number =>{
        if(number%2 == 0){
            arrayEven.push(number);
        };
    });
    console.log(arrayEven)

}

//onlyEvenValues(array)
const array1 = ["hey",123,4,3,5,'Hello World!', 'heyyyy', 3,4,5,1,2,3, 'byyyyeee','okkkkk', 11, 'come on!!!', 234];
function showFirstAndLast(array){
    const firstlst = [];
    let first;
    let last;
    const firstAndLast = [];
    const firstlast = array.map(str =>{
        if(typeof str === 'string'){
            firstlst.push(str);
        }
    })
    firstAndLast.push(firstlst[0]);
    firstAndLast.push(firstlst[firstlst.length-1]);
    return firstAndLast;
}

//console.log(showFirstAndLast(array1))

const str = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit porro, itaque fugiat rem enim quidem!';

function vowelCount(array){
    let vowelCounter= {};
    const split = array.toLowerCase().split('');
    let counter = [];
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    vowels.map(vowel => {
        for(let i=0; i<split.length; i++){
            if(vowel === split[i]){
                counter.push(vowel);
        }}})   
            counter.forEach(vowel => {
                if(vowels.includes(vowel)){
                    vowelCounter[vowel]= (vowelCounter[vowel] || 0) + 1;
                }
            })      
     return vowelCounter
}


    

//console.log(vowelCount(str))


function capitalaizing(str){
    arr = str.split(' ')
    const arrUpper = arr.map(word => {
        return word.toUpperCase()
        
    });
    return arrUpper.join(' ')
};

//console.log(capitalaizing('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit porro, itaque fugiat rem enim quidem!'));

function shiftLetters(str){
    let arr = str.split('')
    let abc = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let arrQ = arr.map(element => {
        for(let i=0; i<abc.length; i++){
         if(element == 'a'){
             return abc[abc.length-1]
        } else if (element == abc[i] ){
            return abc[i-1];
        } else if (element == ' ') {
            return ' '
        }
        }
     })
    return arrQ.join('')
}


//console.log(shiftLetters('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit porro, itaque fugiat rem enim quidem!'))

function swapCase(str){
    let arr = str.toLowerCase().split(' ');
    let arrswap1 = [];
    let arrSawp = arr.forEach((word) => {
        if (arr.indexOf(word)%2 ==0){
            arrswap1.push(word.toUpperCase())
        } else if(arr.indexOf(word)%2 !=0){
            arrswap1.push(word)
        }
    })
    return arrswap1.join(' ')

}

console.log(swapCase('Lorem ipsum dolor sit amet, Reprehenderit porro, itaque fugiat rem enim quidem!'))