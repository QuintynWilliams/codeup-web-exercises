"Use Strict";

// let discordName = "[YOLOBOSS]Quintyn"
// let guildCharEnd = discordName.indexOf(']') + 1;
// let guildName = discordName.substring(0, guildCharEnd);
// discordName = discordName.substring(guildCharEnd);
// let consoleMessage = `The user's name is ${discordName}. And they are a member of the ${guildName} guild.`
// //^^^ Only works with backticks ``
// console.log(consoleMessage)

// const parseDiscordName = (name) => {
//     let guildCharEnd = name.indexOf(']') + 1;
//     let guildName = name.substring(0, guildCharEnd);
//     let userName = name.substring(guildCharEnd);
//     let message = `The user's name is ${userName}.
//     And they are a member of the ${guildName} guild.`;
//     return message; //can only return one thing | is more needed use an array holding multi-vals
// }
//
// let discordName = parseDiscordName("[YoLoBob]Jason");
// let discordName = parseDiscordName("[GAMER]Billy")
// let message; // function never runs
// const highFive = (name1, name2) => {
//     message = `${name1} gives ${name2} a high five!`;
//     return message;
// }
//
// console.log(message);

//------------------------------------------------------------------------------------

const highFive = (name1, name2) => {                        // name1, name2 parameters
    let message = `${name1} gives ${name2} a high five!`;
    return message;  //end point, nothing runs after a return
}

console.log(highFive("Jason", "Javier")); // Jason, Javier arguments

// //this is a func & takes par||arg & returns etc.
// const highFive = (name1, name2) => `${name1} gives ${name2} a high five!`;

// // let nameSet1 = highFive("Jason", "Javier");
// console.log(highFive("Jason", "Javier"));

/*parameter in definition
argument in use   create an arrow function isEven(num) that takes an integer as an argument
it returns true if the integer is even and false if not*/
//co-Pilot, formatting and understanding terminology supports better use of ai procing

//------------------------------------------------------------------------------------

const isEven = (num) => {
    let result = num % 2 === 0;
    return result
}
let userNum = prompt("Enter a number:")
alert(`It is ${isEven(userNum)} that ${userNum} is an even number.`)