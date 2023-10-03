const data = [
    {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
    meats: ["hamburgers", "sausages"],
    fish: ["salmon", "pike"],
    },
    },
    {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
    meats: ["hamburgers", "steak", "lamb"],
    fish: ["tuna", "salmon", "barracuda"],
    },
    },
    {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
    meats: ["ham", "chicken"],
    fish: ["pike"],
    },},
    {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
    meats: ["bird", "rooster"],
    fish: ["salmon"],
    },
    },
    {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
    meats: ["hamburgers", "lamb"],
    fish: ["anchovies", "tuna"],
    },
    },
];

function allNames(array){
    let names = [];
    let name = array.forEach(arr => {
        names.push(arr.name)
    })
    return names
}

//console.log(allNames(data))

function bornBefore(array){
    let birthDay = {};
    let birth = array.map(arr => {
        let d = new Date(arr.birthday);
        if(d.getFullYear() < 1990){
           birthDay[arr.name]=arr.birthday
        }
    })
    return birthDay
}

//console.log(bornBefore(data));

function howManyFood(array){
    let countOfFood1 = {};
    let meatFood = array.map(food => {return food.favoriteFoods.meats}).join(',').split(',');
    let fishFood = array.map(food => {return food.favoriteFoods.fish}).join(',').split(',');
    meatFood.forEach(meat=>{
        if(meatFood.includes(meat)){
            countOfFood1[meat] =(countOfFood1[meat] || 0) +1;
        }
    });
    fishFood.forEach(fish => {
        if(fishFood.includes(fish)) {
            countOfFood1[fish] = (countOfFood1[fish] || 0) +1;
        }
    })
    return countOfFood1
};


console.log(howManyFood(data))
//console.log(data[0].favoriteFoods.meats[0])