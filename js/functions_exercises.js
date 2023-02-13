// // SIMPLE FUNCTION DRILLS
// /*   Make a function called returnTwo() that returns the number 2 when called
// *       Test this function with `console.log(returnTwo())` */
// const returnTwo = (num) => {
//     return 2
// }
// console.log(returnTwo('two'))
//
// /*   Make a function called sayHowdy() which console.logs the string “Howdy!”
// *       Test this function by directly calling `sayHowdy()`
// *       Remember this function does not need a defined return value */
// const sayHowdy = () => {
//     return console.log('Howdy!')
// }
// sayHowdy()
//
// /*  Make a function called returnName() that returns the string of your name
// *       Test this function with `console.log(returnName())`*/
// const returnName = () => {
//     return "Quintyn"
// }
// console.log(returnName())
//
// /*   Make a function called addThree() which takes in a number input and returns the number plus 3.
// *       Test this function with `console.log(addThree(5))` */
// const addThree = (num) => {
//     return num + 3
// }
// console.log(addThree(5))
//
// /*   Make a function called sayString() which returns the string input passed in.
// *       Test this function with `console.log(sayString('codeup'))` */
// const sayString = (str) => {
//     return str
// }
// console.log(sayString('codeup'))
//
//
// // Write a function named `lowerCase(string)`
// const lowerCase = (str) => {
//     return str.toLowerCase()
// }
// console.log(lowerCase("WBFPSJNNSX"))
//
// // Write a function named `double(n)` that returns a number times two
// const double = (num) => {
//     return num *= 2
// }
// console.log(double(1))
//
// // Write a function named `triple(n)` that returns a number times 3
// const triple = (num) => {
//     return num *= 3
// }
// console.log(triple(1))
//
// // Write a function named `quadruple(n)` that returns a number times 4
// const quadruple = (num) => {
//     return num *= 4
// }
// console.log(quadruple(1))
//
// // Write a function named `half(n)` that returns 1/2 of the provided input
// const half = (num) => {
//     return num /= 2
// }
// console.log(half(4))
//
// // Write a function named `subtract(a, b)` that returns `a` minus `b`
// const subtract = (a, b) => {
//     return a - b
// }
// console.log(subtract(2, 1))
//
// // Write a function named `multiply(a, b)` that returns the product of `a` times `b`
// const multiply = (a, b) => {
//     return a * b
// }
// console.log(multiply(2, 3))
//
//  // Write a function named divide(a, b) that returns `a` divided by ~b~
// const divided = (a, b) => {
//     return a / b
// }
// console.log(divided(4, 2))
//
// // Write a function named `remainder(a, b)` that returns the remainder after dividing a by b
// const remainder = (a, b) => {
//     return a % b
// }
// console.log(remainder(5, 2))
//
// // Make a function named `modulo(a, b)` that returns the returns the remainder after dividing a by b
// const modulo = (a, b) => {
//     return a % b
// }
// console.log(modulo(5, 2))
//
// // Write a function named `cube(n)` that returns n * n * n
// const cube = (n) => {
//     return Math.pow(n, 3)
// }
// console.log(cube(3))
//
// // Write a function named `squareRoot(n)` that returns the square root of the input
// const squareRoot = (n) => {
//     return Math.sqrt(n)
// }
// console.log(squareRoot(4))
//
// // Write a function named `cubeRoot(n)` that returns the cube root of the input
// const cubeRoot = (n) => {
//     return Math.cbrt(n)
// }
// console.log(cubeRoot(8))
//
// const makeNeg = (num) => {
//     return 0 - Math.abs(num)
// }
// console.log(makeNeg(Math.random()))

function serveIceCream (flavor) {
    if (flavor === "chocolate"
        || flavor === "strawberry"
        || flavor === "vanilla"){
        alert(`One ${flavor} coming right up!`);
    } else {
        alert(`We don't have that flavor, sorry :(`);
    }
}

serveIceCream(prompt(`Welcome to CodeUp Iced, What flavor do you want?`).toLowerCase());