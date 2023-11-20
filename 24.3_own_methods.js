
const arr2 = [2,2,3,4,4,5];

class NewArray{
    constructor(array, num1, filter){
        this.array = array;
        this.num1 = num1;
        this.filter = filter
    }
   myFilter(){
    if(this.num1 > this.filter)
    return [...(this.num1)];
        
}
}   

const  arr1 =new NewArray([1,2,3,4,5],3);
console.log(arr1.myFilter());



