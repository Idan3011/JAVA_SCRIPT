const food1 = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber",
"Olives"];

const food2 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];

let trueOrFalse = [];
for (item of food1) {
for (let i=0;i<food2.length; i++){
if(item !== food2[i]){
    trueOrFalse.push(false)
}else {
    trueOrFalse.push(true)}
} 
}
console.log(trueOrFalse)