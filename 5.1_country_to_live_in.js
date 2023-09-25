let leng = prompt('Please ENTER you nativ language');
let isl = prompt("will you consider to live in an island?");
let population = prompt('how much population do you LIKE? (NOTE: please write a all number. ect: 5,000,000');
let country;

let lengArr = ['english', 'hebrow', 'spanish', 'french', 'greek'];
let countryArr = ['USA', 'ISRAEL', 'SPAIN', 'FRANCE', "GREECE"];
let populationaArr =[300000000, 100000000, 400000000, 50000000, 150000000];

switch (leng) {
    case lengArr[0]:
    case countryArr[0]:
    case population[0]:
    case isl='no':
    window.alert(`You Should live in ${countryArr[0]}!!`);
    break;
    case lengArr[1]:
    case countryArr[1]:
    case countryArr[1]:
    case isl = 'no':
    window.alert(`You Should live in ${countryArr[1]}!!`);
    break;
}
