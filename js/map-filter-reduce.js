"use strict";

(() => {
    const users = [
        {
            id: 1,
            name: 'ryan',
            email: 'ryan@codeup.com',
            languages: ['clojure', 'javascript'],
            yearsOfExperience: 5
        },
        {
            id: 2,
            name: 'luis',
            email: 'luis@codeup.com',
            languages: ['java', 'scala', 'php'],
            yearsOfExperience: 6
        },
        {
            id: 3,
            name: 'zach',
            email: 'zach@codeup.com',
            languages: ['javascript', 'bash'],
            yearsOfExperience: 7
        },
        {
            id: 4,
            name: 'fernando',
            email: 'fernando@codeup.com',
            languages: ['java', 'php', 'sql'],
            yearsOfExperience: 8
        },
        {
            id: 5,
            name: 'justin',
            email: 'justin@codeup.com',
            languages: ['html', 'css', 'javascript', 'php'],
            yearsOfExperience: 9
        }
    ];

//  Array of users w/ 3 or more languages
    let filteredUsers = users.filter(n =>  n.languages.length > 2);
    console.log(filteredUsers)

//  Array of user emails
    let emailUsers = users.map(n =>  n.email);
    console.log(emailUsers)

//  Get total years of experience
    let totalExp = users.reduce((total, nameExp) => {
        return total + nameExp.yearsOfExperience
    }, 0);
    console.log(totalExp)

//  Then calculate the average
//     w/ previous func
    let avgExp = (totalExp/users.length)

    console.log(avgExp)

//     as stand-alone func
    const average = users.reduce((total, nameExp) => {
        return total + nameExp.yearsOfExperience/users.length
    }, 0);
    console.log(average);

//  List of usernames to a string
    const listUsers = users.reduce((prevVal, currVal, idx) => {
        return idx === 0 ? currVal.name : prevVal + ', ' + currVal.name
    }, '')
    console.log(listUsers)

//  BONUS: Unique list of languages from the list of users
    let eachLang = [];

    const langArray = users.map(n => n.languages);

    langArray.map(n => {
        for(let lang of n) {
            eachLang.push(lang)
        }
    });

    let uniqueLang = [...new Set(eachLang)]
    console.log(uniqueLang)


})();