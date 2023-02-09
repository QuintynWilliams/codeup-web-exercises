// this is SL comment {CMD + / "highlight shortkey to comment or un"}
/* this is a ML comment
    and I start again */

//DATA TYPES
let var1 = true;            //boolean
let var2 = 356321.01;       //number
let var3 = "hello CodeUp";  //string even if "356321.01 or true, etc"
let var4 = "2" + "2";       //outputs concat string "22" | "" or '' never '"
let var5 = 2 + 2;           //outputs sum of nums 4
let var6 = "The fox\'s lazy jump"     //escape character
let var7 = `The fox's "lazy" jump`    //alternate to allow for grammar | `` allow for "" or ' w/n string

let var8;                   //undefined variable, no val exists | null, object is expected

//console.log(typeof 'true');

//LOGICAL BOOLEAN

// console.log(true && true)   //
// console.log(true && !true)  //
// console.log(true && false)  //
// console.log(true || false)  //ids first TRUE
// console.log(true || !true)  //


let var9 = false;
let var10 = "Bob"
let var11 = "Logged in user";

// console.log(var9 || var11);
// console.log("Hello " + (var10 || var11));

let var12;
// console.log("Hello " + (var12 || var10))

//COMPARISON

let userName = "rick_james";
let nameBadguy = "rick_james";
let realBadguy = "Rick_james"

// console.log(userName == nameBadguy)  // == loosely, eq in val | True if true
// console.log(userName === realBadguy) // === strictly, eq in val && type | True if true
// console.log("12" == 12)              // == true in w/ nums || NOT DEPENDABLE
// // != not eq in val | True if false
// // !== not eq in val && type | True if false

//VARIABLES

var myOutfit = "warm";      //assignment can be changed || NOT DEPENDABLE !*later lesson
let myShoes = "boots";      //assignment can be changed
const myName = "Quintyn";   //assignment cannot be changed

// var d = false;
// var e = true;
// console.log(`d = false, iterates ` + (d++))
// console.log(`e = true, iterates ` + (e++))

//SHORTHAND

// let bob = 0 // + 1
// bob += 1    //adds += to existing value
// let joe = 1 //
// joe -= 1    //subtract -= from existing value
// let dan = 2 //
// dan /= 2    //divide /= from existing value
// let niv = 4 //
// niv %= 3    //remainds %= from existing value
//
// let myCounter = 0   //
// myCounter++         //increments by 1, AFTER value
// ++myCounter         //decrements by 1, Before value
//
// let pi = 3.1415     //pi is a num as assigned
// pi.toFixed(2)  //sigFigs is now changed, pi is now a str | allows for trailing zeros
//
// let students = 24   //
// students.toString() //strictly changes num to str
//
// let students = `24` //
// students = parseInt(students)   //change str to a num | REQUIRES: start w/ a num

// let price = `24.99`   //
// price = parseFloat(price)   //allows to pull decimal ints | like number(variable)
//
// console.log(isNaN(price))   //provides boolean T if NaN||F if a num of a variable |F even if a num as str

//STRING MANIPUALTION

// .length: property that describes the number of characters in the string.
// .indexOf(char): returns the index of the specified character in the string.
// .replace(find, replace): returns a copy of the string after performing a substitution.
// .substring(fromIndex, toIndex): returns a subset of the original string based on the provided indices.
// .toUpperCase(): returns a copy of the string in all upper case.
// .toLowerCase(): returns a copy of the string in all lower case.
// .trim(): returns a copy of the string with whitespace at the beginning and end removed.

// let discordName = "[YOLOBOSS]Quintyn"
// let guildCharEnd = discordName.indexOf(']') + 1;
// let guildName = discordName.substring(0, guildCharEnd);
// discordName = discordName.substring(guildCharEnd);
// let consoleMessage = `The user's name is ${discordName}. And they are a member of the ${guildName} guild.`
// //^^^ Only works with backticks ``
// console.log(consoleMessage)

//EXERCISE
let a = 1;   //a is 1
let b = a++; //a is 1, sends as 2
let c = ++a; //a is 3
//console.log(a, b, c) //a is reassigned as 3 globally
//3 1 3

let d = "hello";
let e = false;
//console.log(d++, e++)
//NaN 0

var perplexed; // perplexed is undefined (no value is assigned)
// console.log(perplexed + 2); //Commented out known Error
//NaN

var price = 2.7;
//console.log(price.toFixed(2))
//2.70

var price2 = "2.7";
// console.log(price2.toFixed(2)) //Comment out known Error
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

var sample = "Hello Codeup";