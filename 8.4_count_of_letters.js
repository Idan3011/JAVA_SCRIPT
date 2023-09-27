const array = ["Hello","Good Day","Your Welcome","hotdog","hamburgers"];
let newArray = [];
let newArray1=[];


for(const item of array ) {
    for(const letter of item) {
    if(letter !== ' '){
     newArray += letter;
     newArray=newArray.toLowerCase();
    }
    }
}
for (let i=0; i<newArray.length; i++) {
    newArray1.push(newArray[i]);
}

const letterCounter = {};

for (letter of newArray) {
    if (!letterCounter[letter]) {
        letterCounter[letter] = 1;
    } else {
        letterCounter[letter] ++;
    }
}

console.log(letterCounter)

