"use strict";

// EX 1
const showMultiplicationTable = (num) => {
    for (let i = 1; i <= 10; i++) {
        let product = num * i;
        console.log (`${num} x ${i} = ${product}`)
    }
}
console.log(showMultiplicationTable(7))

// EX 2
for (let i = 1; i <= 10; i++) {
    let random = Math.floor((Math.random() * 200) + 2);
    let check = random % 2;
    if (check === 0){
        console.log(`${random} is even`);
    } else {
        console.log(`${random} is odd`)
    }
}

// EX 3
for (let i = 1; i < 10; i++) {
    console.log(`${i}`.repeat(i))
}

// EX 4
for (let i = 0; i <= 19; i++) {
    console.log(100 - (i * 5))
}

