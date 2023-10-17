let str ='hello world!';

function test() {
    let letter ='';
    for(let i=0; i<str.length; i++){
        letter += str[i];
        console.log(letter)
    }
}
setInterval(test, 1000)
