let arr = [3 ,4 ,4 ,3 ,6 ,3 ,5 ,3 ,7 ,6 ,5 ,4 ,5];

function noDuplicate() {
    let arrNoDuplicate=[];
    for (let i=0; i<arr.length; i++){
    if(arrNoDuplicate.indexOf(arr[i]) === -1)
        arrNoDuplicate.push(arr[i])
    }
    return arrNoDuplicate
}
console.log(noDuplicate());