let array = [100, 333, 454, 32, 65, 6667, 654, 98];

const maxValue = array.reduce((max, currValue) =>{
    return Math.max(max, currValue)
});
//console.log(maxValue);
const evenVlues = array.reduce((num1,num2,evenNumber)=>{
    if(evenNumber %2 === 0){
        return num1 + num2
    } else {
        return num1
    }
}, 0)

//console.log(evenVlues);

const avarage = array.reduce((accumulator, currentValue) => {
    return {
        sum: accumulator.sum + currentValue,
        count: accumulator.count + 1
    };
}, { sum: 0, count: 0 });


let averageOfAllNumbers = avarage.sum / avarage.count;



console.log(averageOfAllNumbers)