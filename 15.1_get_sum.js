let arr1 = [1,2,3];
let arr2 = [5,66,23];

function getSum(arr1, arr2){
    let sum = 0;
    for (let i=0; i < arr1.length; i++){
    sum += arr1[i];
    }
    for (let i=0; i < arr2.length; i++){
    sum += arr2[i];
    }
    return sum
}
console.log(getSum(arr1, arr2));

// 1. arr1.length ///

// 2. i use DEBUG CONSOLE///

// 3. arr1 & arr2 arn`t defined, sum is const, there is no value to be return /////
