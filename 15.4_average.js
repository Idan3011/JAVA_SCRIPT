arr = [ 85 , 90 , 92 ]

function calcAverage (arr){
    var sum =0 ;
    for ( var i = 0 ; i < arr .length; i ++ ){
    sum += arr [ i ];
    } return sum/arr.length;
}
    console.log(calcAverage (arr));

// 1. i use DEABUG CONSOLE.//

//2. SUM ISNT DECLARE && sum inst divided by the length of the array//