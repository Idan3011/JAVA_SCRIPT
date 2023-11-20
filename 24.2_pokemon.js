function Pokemon(pokemonName, pokemonType,
    pokemonAttackList){
    this.name = pokemonName;
    this.type = pokemonType;
    this.attackList = pokemonAttackList;
}

const pickacho = new Pokemon('Pickachu', 'elecricity', ['electirc', 'kick', 'jump' ]);
const charmander = new Pokemon('Charmander', 'Fire', ['Fire', 'Kick', 'Jump' ]);
const balbazur = new Pokemon('Balbazur', 'Water', ['Water Shoot', 'kick', 'jump' ]);
Pokemon.prototype.callPokemon = function (){
        console.log(`I choose you ${this.name}`)
}
// pickacho.callPokemon()

Pokemon.prototype.atteck = function(n){
    console.log(`${this.name} used ${this.attackList[n]}`);
}

// charmander.atteck(0)

