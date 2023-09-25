let arr = [3 ,4 ,4 ,3 ,6 ,3 ];

function noDuplicate() {
    let arrNoDuplicate=[];
    for (let i=0; i<arr.length-1; i++){
    if(arr[i]!==arr[i+1] && arr[i]!==arr[i+2])
        arrNoDuplicate.push(arr[i])
    }
    return arrNoDuplicate
}
console.log(noDuplicate());