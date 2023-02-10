"use strict";

console.log("Hello from external JavaScript!");

alert("Welcome to my Website!");

/*  Use a prompt to ask for the user's favorite color.
Use the user's response to alert a message that says
that the color entered is your favorite color too.*/

let favColor = prompt(`What is your favorite color?`);
alert(`Great, ${favColor} is my favorite color too!`);

/*  Write some JavaScript code, that is, variables and
operators, to describe the following scenarios. Do not
worry about the real operations to get the values, the
goal of these exercises is to understand how real world
conditions can be represented with code.*/

/*EX1   You have rented some movies for your kids: The
little mermaid (for 3 days), Brother Bear (for 5 days,
they love it), and Hercules (1 day, you don't know yet
if they're going to like it). If price for a movie per
day is $3, how much will you have to pay?*/
let lilMermaid = parseFloat(prompt(`How long would you like to rent,"Little Mermaid"?`));
let broBear = parseFloat(prompt(`How long would you like to rent,"Brother Bear"?`));
let grkHercules = parseFloat(prompt(`How long would you like to rent,"Hercules"?`));

let rentTotal = (lilMermaid + broBear + grkHercules) * 3;
alert(`Your total movie rental is $${rentTotal}.`);

/*EX2   Suppose you're working as a contractor for 3
companies: Google, Amazon and Facebook, they pay you a
different rate per hour. Google pays $400, Amazon $380,
and Facebook $350. How much will you receive in payment
for this week? You worked 10 hours for Facebook, 6 hours
for Google and 4 hours for Amazon.*/
let googleCo = parseFloat(prompt(`How long did you work at, "Google"?`)), googleWage = 400;
    let googleTot = (googleCo * googleWage);
let amaZone = parseFloat(prompt(`How long did you work at, "Amazon"?`)), amaWage = 380;
    let amaTot = (amaZone * amaWage);
let faceBook = parseFloat(prompt(`How long did you work at, "Facebook(Meta)"?`)), faceWage = 350;
    let faceTot = (faceBook * faceWage);

let wageTot = (googleTot + amaTot + faceTot);
alert(`Your week's wage is $${wageTot}!`);

/*EX3   A student can be enrolled in a class only if the class
is not full and the class schedule does not conflict with
her current schedule.*/
let classTime = parseInt(prompt(`What class start-time would you prefer?(enter a number in 24hr format)`));
    let classTimeConf = (classTime > 9) && (classTime < 14);
let classSpace = (Math.random() * 100).toFixed(0);
    alert(`There are ${classSpace} of 100 students already enrolled.`);
    let classSpaceConf = classSpace < 100;

let enrollCheck = classTimeConf && classSpaceConf
alert(`Can student enroll? ${enrollCheck}`)

/*EX4   A product offer can be applied only if a person
buys more than 2 items, and the offer has not expired.
Premium members do not need to buy a specific amount of
products.*/
let cartSize = parseInt(prompt(`How many items would you like to add in cart?`));

let response = cartSize > 2;
alert(`Qualifies for the bulk discount? ${response}`)


