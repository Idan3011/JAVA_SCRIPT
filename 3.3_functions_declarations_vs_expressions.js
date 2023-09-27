const worldPopulation = 7900000000;
function percentageOfWorld1(population,countryName){
    let precentege = (population/worldPopulation*100).toFixed(2);

    return (`${countryName} as a ${precentege}% of the all World population!`);
}
// console.log(percentageOfWorld1(1441000000, 'China'))
// console.log(percentageOfWorld1(100000000, 'Israel'))
// console.log(percentageOfWorld1(300000000, 'USA'))

const percentageOfWorld2= (population, countryName) => {
    let precentege = (population/worldPopulation*100).toFixed(2);

    return (`${countryName} as a ${precentege}% of the all World population!`);
}

console.log(percentageOfWorld2(1441000000, 'China'))
console.log(percentageOfWorld2(100000000, 'Israel'))
console.log(percentageOfWorld2(300000000, 'USA'))