let count = 0;
let max = 10;
let interval = 1000;

//  v allows exit of the setInterval function
//      clearInterval(intervalId)
// works as a loop, WITH a concept of REAL-TIME
// let intervalId = setInterval(function() {
//     if (count >= max) {
//         clearInterval(intervalId);
//         console.log(`All done`);
//     } else {
//         count++;
//         console.log(`Repeating this line ` + count);
//     }
// }, interval)


// Waits, until time is reached before running
console.log(`5 seconds, from now...`)
setTimeout(function () {
    console.log(`It has been 5 seconds!`)
}, 5000)

//window is an array of data in the BOM that cna be accessed using array methods; such as...
// window.location = 'https://google.com';
setTimeout(function () {
    window.location.href = 'https://google.com';
}, 10000)

