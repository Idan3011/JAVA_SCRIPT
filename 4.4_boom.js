let arr = [];
let n = 100;
for (i=1; i <=n ; i++) {
    arr.push(i);
}

for (j=1; j<=n ; j++) {
    if (arr[j]%7 ===0 & arr.includes(7) === true) {
        arr[j]= 'boom-boom';
    }
    else if (arr[j]%7 === 0) {
        arr[j]='boom';
    }
}

console.log(arr);

