"use strict";

//Break and Continue

(() => {
    let userPrompt;     //declare outside, global scope
    let  userPropmtNum;
    while (true){
        userPrompt = prompt(`Enter a number between 1 and 49`); //defined in loop
        userPropmtNum = parseInt(userPrompt);
        if(userPropmtNum % 2 === 1 && userPropmtNum >= 1 && userPropmtNum <= 50) {
            break;
        }
    }
    for (let i = 1; i < 50; i += 2) {
        if (i === userPropmtNum) {
            console.log(`Yikes! Skipping number: ${i}`)
            continue;   //skips the increment under this condition
        }
        console.log(`Here is an odd number: ${i}`)
    }
})();

// const getOdd = (userInput) => {
//     if(userInput % 2 === 1) {
//         for (let i = 1; i <= 50; i += 2) {
//             if (i != parseFloat(userInput)) {
//                 console.log(`Here is an odd number: ${i}`)
//             } else {
//                 console.log(`Yikes! Skipping number: ${i}`)
//             }
//         }
//     } else {
//         getOdd(prompt('Enter an odd num between 1 and 50.'))
//     }
// }
// let userInput = prompt('Enter an odd num between 1 and 50.')
// getOdd(userInput);

// const getNum = (input) => {
//     do {
//         input = parseFloat(prompt(`Get Odd(2)`));
//     } while (input % 2 === 0);
//
//     console.log(`Number to skip is: ${input}`);
//
//     for (let i = 1; i <= 50; i += 2) {
//         if (i != parseFloat(input)) {
//                 console.log(`Here is an odd number: ${i}`);
//             } else {continue}
//     }
// }
// let userInput = parseFloat(prompt(`Get Odd`));
// getNum(userInput);
