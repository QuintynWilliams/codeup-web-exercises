"use strict";
let i = 1;
while (i <= 16) {
    console.log(Math.pow(2, i));
    i++
}

// This is how you get a random number between 50 and 100
let allCones = Math.floor(Math.random() * 50) + 50;
console.log(allCones)
// This expression will generate a random number between 1 and 5
// let boughtCones = Math.floor(Math.random() * 5) + 1;
// console.log(boughtCones)

do {
    let boughtCones = Math.floor(Math.random() * 5) + 1;
    if (boughtCones < allCones) {
        console.log(`${boughtCones} sold`)
    } else {
        console.log(`Cannot sell, only ${allCones} left`)
    }
    allCones -= boughtCones
} while (allCones > 0);

console.log(`no cones left`)




