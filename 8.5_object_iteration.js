const swaping = {key1: 'value1', key2: 'value2'};


function swap (obj){
    for(let key in obj){
        console.log(obj[key], key)
    }
}

console.log(swap(swaping))