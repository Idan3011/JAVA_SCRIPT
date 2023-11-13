//Ex 1.1

const bool = false;

function trueOrFalse(val){
    if(val === true){
        console.log('YES')
    } else{
        console.log('NO')
    }
}


//....solution....//
//trueOrFalse(bool)



//....Ex2.1 - Sum of lowest numbers....//

let arr1 = [19, 5, 42, 2, 77];
let arr2 = [10, 343445353, 3453445, 3453545353453];


function sumOfLowest(arr){
    let check = arr.sort(function(a,b){return a-b});
    for(let i=0; i<=1; i++){
        return check[i]+check[i+1]
    }
}


//....solution....//
//console.log(sumOfLowest(arr2))



//....Ex2.2 - One and Zero - Binary....//

let testing = ['01101000','01100101','01101100','01101100','01101111','00100000','01110111','01101111','01110010','01101100','01100100','00100001'];
const join = testing
let text = [];

function toBinary(arr){
    arr.forEach(element => {
       text.push((parseInt(element,2)))
    });
    let val = [];
    const convert = text.forEach(num => {
         val.push(String.fromCharCode(num));
    })

    return val.join('')
}


//....solution....//
//console.log(toBinary(join))



//....Ex2.3 - Find the Next Perfect Square....//


function findNextSquare(num){
    let sqr = Math.sqrt(num);
    if(sqr%1 ===0){
        return (sqr+1)**2;
    } else{
        return -1
    }
}

//....solution....//
//console.log(findNextSquare(729))



//....Ex2.4 - Unique....//

function findUniq(arr){
    let arr1 = [];
    arr.forEach((uniq) => {
        if(arr.indexOf(uniq) == arr.lastIndexOf(uniq)){
            arr1.push(uniq)
        }
    })
    return arr1.join()
}


//....solution....//
// console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));
// console.log(findUniq([ 0, 0, 0.55, 0, 0,0.55,1 ]));



//....Ex2.5 - Summation....//

function summation(num){
    let counter = 0;
    let sum=0;
    for(let i=0; i<=num ; i++){
        sum += counter
        counter++
    }
    return sum

}


//....solution....//
// console.log(summation(14))



//....Ex2.6 - Years and Centuries....//

function centuryFromYear(num){

    if((num/100)%1 === 0 ){
        return Math.floor(num/100)
    } else{
    return Math.floor((num/100)+1)
    }
}

//....solution....//
// console.log(centuryFromYear(2000))

//....Ex2.7 - Basic Math....//

function basicOp(operation, value1, value2){
    switch(operation){
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '/':
            return value1/value2;
        case '*':
            return value1*value2;
    }
}

//....solution....//
// console.log(basicOp('-', 49, 7))

//....Ex3.1 - Growth Of population....//

function nb_year(p0,percent,aug,p){
    let counter = 0;
    let calc = p0 +(percent/100)*p0 + aug;   
    while(calc <= p){
        calc = calc +(percent/100)*calc + aug;
        counter++
        if(calc >= p){
            counter++
        }
    } 
    console.log(counter)
    
}
//....solution....//
//nb_year(1000, 2, 50, 1200);



//....Ex4.1 - Fibonacci....//

function fibonacci(n){
    let n1 =0;
    let n2 =1;
    let next;
    let arr =[];
   for(let i=0; i<=n; i++){
        arr.push(n1);
        next = n1 +n2;
        n1 = n2;
        n2 = next; 
    }
    console.log(arr)
}
//....solution....//


//fibonacci(25)


//....Ex4.2 - Tribonacci....//

function tribonacci(n){
    let n1 = 0;
    let n2 = 0;
    let n3 = 1;
    let next;
    let arr = [];
    for(let i=0; i<=n; i++){
        arr.push(n1);
        next= n1+n2+n3;
        n1= n2
        n2= n3;
        n3 = next;
    }
    console.log(arr)
}

//....solution....//


//tribonacci(10)


//....Ex5.1 - trimming string....//

function trimming(str){
    let split = str.split('')
    split.pop();
    split.shift()
    console.log(split.join(''))
}

//....solution....//


//trimming('hello world')


//....Ex5.2 - String Repeat....//

function repeat_str(n, str){
    let text='';
    for(let i=0; i<=n; i++){
        text +=str
    }
    console.log(text)
}

//....solution....//

//repeat_str(5,'|')

//....Ex5.3 - To Camel Case....//

function toCamelCase(str){
    let text=str.split('')
    for(let i=0; i<text.length; i++){
        if(text[i] == '-'){
            text.splice(i,1)
        }
    }

console.log(text.join(''))
}

//....Solution....//

// toCamelCase("The-stealth-warrior");

//....Ex5.4 - To Weird Case....//

function toWeirdCase(str) {
    let text = str.split(' ')
    let newArr = [];
    text.forEach((element, index) => {
        for(let i=0; i<element.length; i++){
            if(i % 2 === 0){
                newArr.push(element[i].toUpperCase())
            } else {
                newArr.push(element[i].toLowerCase())
            }
        }
        if (index <= element.length + 1){
            newArr.push(' ')
        }
    })

    console.log(newArr.join(''))
}

//....Solution....//


//toWeirdCase('Weird string case')

//....Ex5.5 - Abbreviate two words....//

function twoWords(str){
    let text = str.split(' ');
    let newText = [];
    text.forEach((element, index) => {
        if(index <= element.length){
            if(index%2 ===0) {
            newText.push(`${element[0]}` + '.')
            } else{
                newText.push(element[0])
            }
        }
        
    }
    )

    console.log(newText.join(''))
}


//....Solution....//


//twoWords('Sam Harris')


//....Ex5.6 - Mask....//

function maskify(input){
    if(input.length <= 1){
        console.log(input)
    }else{
    let mask = input.split('');
    let maskPass = [];
    for(let i=0; i<mask.length; i++){
        if(i<mask.length-4){
            maskPass.push('#')
        } else{
            maskPass.push(mask[i])
        }
    } if(mask.length<=1){
        maskPass.push(mask[i])
    }

    console.log(maskPass.join(''))
    }
}

//....Solution....//


// maskify('4556364607935616')
// maskify('64607935616')
// maskify('1')
// maskify('"')
// maskify("Skippy")
// maskify("Nananananananananananananananana Batman!") 

//....Ex5.7 - shortest words....//

function shortestWords(str) {
    let text = str.split(' ');
    let shortestWord =[] ;
   text.forEach((element,index) =>{
    if(element.length <=4)
    shortestWord.push(element.length);
   })
    
    console.log(shortestWord.sort())
}

//....Solution....//

//shortestWords('Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias assumenda vitae minus mollitia necessitatibus ipsam pariatur, quaerat vero dolorum nulla?');

//....Ex6.1 - Mumbling....//

function accum(str){
    let strLower = str.toLowerCase();
    let strArr = strLower.split('');
    let abLArr = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let display = [];
    strArr.filter((element) =>{
        for(let i=0; i<abLArr.length; i++){
        let counter= strArr.indexOf(element)
        if(abLArr[i] == element){
            while(counter>=0){
            if(counter==strArr.indexOf(element)){
                display.push(element.toUpperCase())
                counter--
        } else{
            if(counter != 0){
                display.push(element);
                counter--
            } else{
                display.push(element);
                display.push('-');
                counter--
            }
        }
            }}}
    });
    display.pop();
    display.splice(1,0,'-');
    console.log(display.join(''))
}



//....Solutions....//

// accum("abcd");
// accum("RqaEzty");
// accum("cwAt");

//....Ex6.2 - Counting Duplicates....//

function countingDuplicates(str){
    let strLower = str.toLowerCase();
    let counter = 0;
    for(let i=0; i<strLower.length; i++){
     const first = strLower.indexOf(strLower[i], i+1);
     const last = strLower.lastIndexOf(strLower[i]);
     if(first != -1 && first===last){
        counter++
     }   
    }
    console.log(counter);
}

//....Solutions....//

// countingDuplicates('abcde');
// countingDuplicates('aabbcde');
// countingDuplicates('aabBcde');
// countingDuplicates('indivisibility');
// countingDuplicates('Indivisibilities');
// countingDuplicates('aA11');
// countingDuplicates('ABBA');

//....Ex6.3 - organize strings....//

function longest(a,b){
let longestArr = [];
let aArr = a.split('');
let bArr = b.split('');
if(aArr.length>=bArr.length){
  
    aArr.map((a, ai) => {
     bArr.map((b,i) => {   
            if(a.charCodeAt(a[ai]) > b.charCodeAt(b[i])){
                longestArr.push(a); 
        } else{
                longestArr.push(b);
        }
    })
    })
};
    let newArr = longestArr.sort().join('');
    let total = '';
    for(let i=0; i<newArr.length; i++){
        const first = newArr.indexOf(newArr[i], i+1);
        const last = newArr.lastIndexOf(newArr[i]);
        if(first != -1 && first===last){
            total += newArr[i]  
        }
    }
    console.log(total)
}

//....Solution....//

// /longest("xxxxyyyyabklmopq","xyaabbbccccdefww");


//....Ex6.4 - isogram....//

function isIsogram(str){
    let newStr = str;
    const isogram = [...new Set(newStr)].join('').toLowerCase();
    console.log(`str: ${isogram}`)
    if(str.length === isogram.length){
        console.log(`${str} is an isogram`) 
    } else{
        console.log(`${str} is NOT an isogram`)
    }

}

//....Solution....//

//isIsogram('abac');
//isIsogram('Subdermatoglyphic');
//isIsogram('isogram');


