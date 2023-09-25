// let testScore = prompt('Please enter your test score as a letter - (F->A)');
// testScore = testScore.toUpperCase();

// if (testScore === 'F') {
//     console.log('0-64 is a: "F"')
// }
// else if (testScore === 'D') {
//     console.log('65-69 is a: "D"')
// }

// else if (testScore === 'C') {
//     console.log('70-79 is a: "C"')
// }

// else if (testScore === 'B') {
//     console.log('80-89 is a: "B"')
// }

// else if (testScore === 'A') {
//     console.log('90-100 is a: "A"')
// }

// else {
//     window.alert('Not a Valid letter')
// }

let testScore1 = prompt('Please enter your test score as a letter - (0-100)');

if (testScore1 >= 0 && testScore1 <= 64) {
    console.log('0-64 is a: "F"')
}
else if (testScore1 >= 65 && testScore1 <= 69) {
    console.log('65-69 is a: "D"')
}

else if (testScore1 >= 70 && testScore1 <= 79) {
    console.log('70-79 is a: "C"')
}

else if (testScore1 >= 80 && testScore1 <= 89) {
    console.log('80-89 is a: "B"')
}

else if (testScore1 >= 90 && testScore1 <= 100) {
    console.log('90-100 is a: "A"')
}

else {
    window.alert('Not a Valid number')
}