let guessAnumber = Math.floor(Math.random()*50)



userGuessF();

function userGuessF() {
    let userGuess = prompt('Hello, can YOU guess the number? (insert A number between 0-50):');
while(userGuess< guessAnumber){
    alert(`YOU need to try again! your number is: ${userGuess} and the correct answer is: ${guessAnumber} so your answer is smaller than the number. try again!`);
    prompt('try again (insert A number between 0-50):');
    
}
while (userGuess > guessAnumber){
    alert(`YOU need to try again! your number is:${userGuess} and the correct answer is: ${guessAnumber} so your answer is higher than the number. try again!`);
    prompt('try again (insert A number between 0-50):');
}
if (userGuess == guessAnumber) {
    alert('YOU guess the right number!! good job!');
    
}
}


//window.prompt('Hello, can YOU guess the number? (insret A number between 0-5):');
