const candyStore = {
    candies: [
    {
    name: "mint gum",
    id: "as12f",
    price: 2,
    amount: 2
    },
    {
    name: "twix",
    id: "5hd7y",
    price: 5,
    amount: 4
    },
    ],
    cashRegister: 200
};

function getCandy(candyStore, id){
    let candyById = [];
    let candy = candyStore.map(element => {
        if(element.id.includes(id)){
            candyById.push(element)
        }
    });
    return candyById
    
}
//onsole.log(getCandy(candyStore.candies, 'as12f'))

function getPrice (candyStore, id){
    let candyPrice = [];
    let price =candyStore.map(element => {
        if(element.id.includes(id)){
            candyPrice.push(element.price)
        }
    })

    return candyPrice
    
}
//console.log(getPrice(candyStore.candies, '5hd7y'))

function getCandy(candyStore, id, name, price){
   let newCandy = {
        id,
        name,
        price,
        amount: 1
    };
    candyStore.push(newCandy)
}
    

getCandy(candyStore.candies,'jk5gh', 'loolipoop', 6);

//console.log(candyStore.candies)

