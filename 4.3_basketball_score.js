const johnTeam = [89, 120, 103];
let jhonSum = 0;
const mikeTeam =[116, 94, 123];
let mikeSum = 0;
const maryTeam =[97, 134, 105];
let marySum = 0;

for (let number of johnTeam) {
    jhonSum += number;
}

let average = jhonSum/johnTeam.length;

for (let number of mikeTeam) {
    mikeSum += number;
}

let average1 = mikeSum/mikeTeam.length;


for (let number of maryTeam) {
    marySum += number;
}

let average2 = marySum/maryTeam.length;

if (average > average1 & average > average2) {
    console.log(`Jhon team is the Winner with an average score of ${average}`)
}

else if (average < average1 & average2 < average1) {
    console.log(`Mike team is the Winner with an average score of ${average1}`);
}
else if (average2 > average1 & average2 > average1) {
    console.log(`Mary team is the Winner with an average score of ${average2}`);
}

else {
    console.log('it`s a DRAW')
}


