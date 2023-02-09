//Data Types, Operators, and Variables EXERCISE
//SET 1
let a = 1;   //a is 1
let b = a++; //a is 1, sends as 2
let c = ++a; //a is 3
console.log(a, b, c) //a is reassigned as 3 globally
//3 1 3

let d = "hello";
let e = false;
console.log(d++, e++)
//NaN 0

var perplexed; // perplexed is undefined (no value is assigned)
console.log(perplexed + 2); //Commented out known Error
//NaN

var price = 2.7;
console.log(price.toFixed(2))
//2.70

var price2 = "2.7";
// console.log(price2.toFixed(2)) //Commented out due to known Error
// Error

isNaN(0)    // False

isNaN(1)    // False

isNaN("")   // False

isNaN("string") // True

isNaN("0")  // False

isNaN("1")  // False

isNaN("3.145")  // False

isNaN(Number.MAX_VALUE) // False

isNaN(Infinity)     // False

isNaN("true")   // True

isNaN(true) // False

isNaN("false")  // True

isNaN(false)    // False

NaN == NaN          //False

!true      //False

!false     //True

!!true     //True

!!false    //False

!!0        //False

!!-0       //False

!!1        //True

!!-1       //True

!!0.1      //True

!!"hello"  //True

!!""       //False

!!''       //False

!!"false"  //True

!!"0"      //True

//SET 2
var sample = "Hello Codeup";
sample.length           //12
// sample.toUpperCase()    //HELLO CODEUP
// sample.toLowerCase()    //hello codeup
sample += ` Students`      //Hello Codeup Students
sample.replace('Students', 'Class') //Hello Codeup Class
sample.indexOf('c') // -1, assume meaning not present on any index
sample.indexOf('C') // 6

let startChar = sample.indexOf('C');
let endChar = sample.indexOf('p') + 1;
let className = sample.substring(startChar, endChar)
console.log(className)
// Codeup

//SET 3
let littleMermaid = 3;  //variables assigned to num of days rented
let broBear = 5;
let hercules = 1;
totalCost = (littleMermaid + broBear + hercules) * 3 // 3 is the rental rate
console.log(`$${totalCost}`)
// $27

let googlePay = 400;    //Wage per hour
let amazonPay = 380;
let facebookPay = 350;
googlePay *= 6;         //Wage per hour FOR Hours worked
amazonPay *= 4;
facebookPay *= 10;
totalIncome =  googlePay + amazonPay + facebookPay
console.log(totalIncome)
// 7420

let classFull = false;
let classSched = false;

if (!classFull && !classSched) {
    studentStatus = 'enrolled';
} else {
    studentStatus = 'not enrolled';
}
console.log(studentStatus)
// enrolled

let applyDisc = true;
let discReq = 2;
let discExp = `12/25`;

let cartSize = 4;
let cartDate = `12/23`;

let discDay = (discExp.indexOf('/') + 1);
let discVal = discExp.substring(discDay, discExp.length)
let cartDay = (cartDate.indexOf('/') + 1);
let cartVal = cartDate.substring(cartDay, cartDate.length)

if ((cartVal <= discVal) && (cartSize > discReq)) {
    applyDisc = true;
} else {
    applyDisc = false;
}
console.log(applyDisc)
// true

//SET 4
let username = 'codeup';
let password = 'notastrongpassword';
let pswrdAccept = true;

let whiteSpace = true;
let userTest = username.indexOf(' ');
let pswrdTest = password.indexOf(' ');

if ((userTest < 0) || (pswrdTest < 0)) {
    whiteSpace = true;
} else {
    whiteSpace = false;
}


if ((password.length > 5) && (password !== username) && (username.length < 20) && (whiteSpace)) {
    pswrdAccept = true;
} else {
    pswrdAccept = false;
}

console.log(pswrdAccept)
// true