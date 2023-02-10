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
let costPerDay = parseFloat(prompt(`What is the rental fee?`))
let lilMermaid = parseFloat(prompt(`How many days would you like to rent, "Little Mermaid"?`));
let broBear = parseFloat(prompt(`How many days would you like to rent, "Brother Bear"?`));
let grkHercules = parseFloat(prompt(`How many days would you like to rent, "Hercules"?`));

let rentTotal = (lilMermaid + broBear + grkHercules) * costPerDay;
alert(`Your total movie rental is ${rentTotal.toLocaleString("en-US", {style:"currency", currency:"USD"})}.`);

/*EX2   Suppose you're working as a contractor for 3
companies: Google, Amazon and Facebook, they pay you a
different rate per hour. Google pays $400, Amazon $380,
and Facebook $350. How much will you receive in payment
for this week? You worked 10 hours for Facebook, 6 hours
for Google and 4 hours for Amazon.*/
let googleCo = parseFloat(prompt(`How many hours did you work at, "Google"?`));
let googleWage = parseFloat(prompt(`How much do you make at "Google" per hour?`));
    let googleTot = (googleCo * googleWage);
let amaZone = parseFloat(prompt(`How many hours did you work at, "Amazon"?`));
let amaWage = parseFloat(prompt(`How much do you make at "Amazon" per hour?`));
    let amaTot = (amaZone * amaWage);
let faceBook = parseFloat(prompt(`How many hours did you work at, "Facebook(Meta)"?`));
let faceWage = parseFloat(prompt(`How much do you make at "Facebook(Meta)" per hour?`));
    let faceTot = (faceBook * faceWage);

let wageTot = (googleTot + amaTot + faceTot);
alert(`Your week's wage is ${wageTot.toLocaleString("en-US", {style:"currency", currency:"USD"})}.`);

/*EX3   A student can be enrolled in a class only if the class
is not full and the class schedule does not conflict with
her current schedule.*/
let classTime = parseInt(prompt(`What class start-time would you prefer?\n(enter a number in 24hr format)`));
    let classTimeConf = (classTime > 9) && (classTime < 14);
let classMaxSize = parseInt(prompt(`What is the max-size of the class?`));
let classCurSize = parseInt(prompt(`What is the current-size of the class?`));
    let classSpaceConf = classCurSize < classMaxSize;

let enrollCheck = classTimeConf && classSpaceConf;
alert(`Can student enroll? ${enrollCheck}`)

/*EX4   A product offer can be applied only if a person
buys more than 2 items, and the offer has not expired.
Premium members do not need to buy a specific amount of
products.*/
let cartSize = parseInt(prompt(`How many items would you like to add in cart?`));
    let bulkCheck = cartSize > 2;
let premMember = confirm('Are you a premium member?');
let offExp = confirm('Has the offer expired?');

let discountCheck = (bulkCheck || premMember) && offExp;
alert(`Qualifies for the bulk discount? ${discountCheck}`)


