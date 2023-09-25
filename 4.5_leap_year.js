let N =2012;


function leapYear(N) {
    if (N %4===0) {
        console.log(`This year: ${N} ,is indeed a leap year!`)
    }
    return leapYear(N)
};
