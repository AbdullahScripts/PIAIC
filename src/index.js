"use strict";
let sum = 0;
let result = [];
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        sum = sum + i;
        result.push(i);
    }
}
console.log('====================================');
console.log(sum);
console.log('====================================');
console.log(result);
