function countOccurrences (str, char){
    let counter = 0 ;
    for ( let i = 0 ; i < str .length; i ++ ){
    if ( str . charAt ( i ) === char ){
    counter++ ;
    }
    } return counter ;
}
console.log(countOccurrences ( "ini mini miny moe" , "o" ));

// 1. counter add inst declare properly///

// 2. i used DEABUG CONSOLE.///