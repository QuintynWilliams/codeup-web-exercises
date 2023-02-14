"use strict";

//Challenge Function Drills
/*  Write a function called `identity(input)` that takes in an argument called
    input and returns that input. */
const identity = (input) => {
    return input
}
console.log(identity("Return Me"))

/*Write a function called `getRandomNumber(min, max)` that returns a random
number between min and max values sent to that function call.*/
const getRandomNumber = (min, max) => {
    return Math.random() * (max - min) + min;
}
console.log(`Random number between 5 and 30: ${getRandomNumber(5, 30)}`)

/*Write a function called `first(input)` that returns the first character in the
provided string.*/
const first = (input) => {
    let splitInput = input.split('')
    return splitInput[0]
}
console.log(`First letter of "Robert": ${first("Robert")}`)

/*Write a function called `last(input)` that returns the last character of a
string*/
const last = (input) => {
    return input.slice(-1)
}
console.log(`Last letter of "Franklin": ${last("Franklin")}`)

/*Write a function called `rest(input)` that returns everything but the first
character of a string.*/
const rest = (input) => {
    let inputLen = input.length;
    return input.substring(1, inputLen)
}
console.log(`String w/o first character: ${rest("michael")}`)

/*Write a function called `reverse(input)` that takes a string and returns it
reversed.*/
const reverse = (input) => {
    return input.split('').reverse().join('')
}
console.log(`String reversed: ${reverse("Google")}`)

/*Write a function called `isNumeric(input)` that takes an input and returns a
boolean if the input is numeric.*/
const isNumeric = (input) => {
    if (typeof input === 'number') {
        return true
    } else {
        return false
    }
}
console.log(`The input is a number:`, isNumeric(4))

/*Write a function called `count(input)` that takes in a string and returns the
number of characters.*/
const count = input => {
    return input.length
}
console.log(`Length of input:`, count("User has input"))

/*Write a function called `add(a, b)` that returns the sum of a and b*/
const add = (a, b) => {
    return a + b;
}
console.log(`Sum of 17 and 32:`, add(17, 32))

/*Write a function called `subtract(a, b)` that return the difference between
the two inputs.*/
const subtract = (a, b) => {
    return Math.abs(a - b);
}
console.log(`Difference of 23 and 12:`, subtract(23, 12))

/*Write `multiply(a, b)` function that returns the product*/
const multiply = (a, b) => {
    return a * b
}
console.log(`Product of 3 and 57:`, multiply(3, 57))

/*Write a `divide(numerator, denominator)` function that returns a divided by b*/
const divide = (numerator, denominator) => {
    return numerator/denominator
}
console.log(`Quotient of 63 and 3:`, divide(63, 3))

/*Write a `remainder(number, divisor)` function that returns the remainder left
over when dividing `number` by the `divisor`*/
const remainder = (number, divisor) => {
    return number % divisor
}
console.log(`Remainder of 54 and 7:`, remainder(54, 7))

/*Write the function `square(a)` that takes in a number and returns the number
multiplied by itself.*/
const square = (a) => {
    return Math.pow(a, 2)
}
console.log(`Square of 9:`, square(9))

/*Write a function called `sumOfSquares(a, b)` that uses only your `add()` function
and your square function and not + or * operators*/
const sumofSquares = (a, b) => {
    return add(square(a), square(b))
}
console.log(`Sum of 3 and 7,\nusing defined functions:`, sumofSquares(3, 7))

/*Write a function called `doMath(operator, a, b)` that takes 3 parameters. The
first parameter is the name of the math function you want to apply. a and b
are the two numbers to run that function on.*/
const doMath = (operator, a, b) => {
    return operator(a, b)
}
console.log(`Result of input JS Math and values:`, doMath(Math.pow, 4, 2))

//EVEN MORE FUNCTION BONUSES

/*Create a function that will return how many whitespace characters are at the
beginning and end of a string.*/
const whiteSpace = (userString) => {
    let inputLength = userString.length
    let textLength = userString.trim().split('').length
    return inputLength - textLength
}
console.log(`Number of whitespaces at beginning and end of, "   whiteSpace   ":`, whiteSpace("   whiteSpace   "))

/*Create a function that takes in two string inputs.
    - If the second string input is present in the first, return the first input
    string with the second input string removed from it.
    - If the second string input is present multiple times in the first, the
    second string will only be removed where it first occurs in the first
    string.
    - If the second string input is not present in the first, return the first
    string as entered in the function.*/
const twoString = (str1, str2) => {
    if (str1.includes(str2)) {
        return str1.replace(str2, '')
    } else {
        return console.log(str1)
    }
}
console.log(`Find and remove second string from first:`, twoString("where is waldo", "waldo"))

/*Create a function that takes in a string and returns true if the last letter
is an "a" (otherwise, return false).*/
const lastLetter = (input) => {
    let array = input.split('');
    let endLetter = (input.length) - 1;
    if (array[endLetter] === 'a') {
        return true
    } else {
        return false
    }
}
console.log(`The last letter is "a":`, lastLetter('Castlevania'))

/*EXTRA CHALLENGE: create a function that will return how many whitespace
characters are at the beginning of a string (hint: use regex).*/
const spaceCount = (input) => {
    let inLen = input.length
    let firstChar = input.search(/\S|$/)
    let inptEnd = input.substring(firstChar, inLen)
    let modLen = inptEnd.length
    return inLen - modLen
}
console.log(`Number of whitespace at the beginning:`, spaceCount("   whiteSpace "))

/*Create a function, `willLoginUser()` that takes in a username string,
    password string, user age, a boolean indicating if they are an admin.
    The function will return true if the username is not the same as the
    password and the user is at least 18 years old. If the user is an admin,
    they do not have to be a certain age but the password must still not match
    the username.*/
const willLoginUser = (username, password, userAge, adminBool) => {
    if (username !== password && (userAge >= 18 || adminBool === true)) {
        return true;
    } else {
        return false
    }
}
console.log(`Check if username and password are unique and is old enough or admin:`, willLoginUser("bob", "password123", 19, false))