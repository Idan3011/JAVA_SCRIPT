const myCountry = {
    country: 'Finland',
    capital: 'Helsinki',
    language: 'Finnish',
    population: '6 million people',
    neighbours: '3 neighbouring countries',
    describe() {
        const {country, capital, language, population, neighbours}=this;
        console.log(`${country} has ${population}, their mother tongue is ${language}, they have ${neighbours} and a capital called ${capital}.`)
    },
    checkIsland() {
        const {country, capital, language, population, neighbours}=this;
        if (!neighbours.length){
            console.log(`${country} as NO neigbours`)
        }
        else {
            console.log(`${country} as ${neighbours}`)
        }
    }
}

// myCountry.describe();
myCountry.checkIsland();
