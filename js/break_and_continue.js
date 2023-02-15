"use strict";

//Break and Continue


const getOdd = (userInput) => {
    if(userInput % 2 === 1) {
        for (let i = 1; i <= 50; i += 2) {
            if (i != parseFloat(userInput)) {
                console.log(`Here is an odd number: ${i}`)  //Makes here
            } else {
                console.log(`Yikes! Skipping number: ${i}`)
            }
        }
    } else {
        getOdd(prompt('Enter an odd num between 1 and 50.'))
    }
}
let userInput = prompt('Enter an odd num between 1 and 50.')
getOdd(userInput);

