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

//  MINI-EXERCISES
//    FILTER | BONUS: Order these arrays alphabetically.
        const smashers = ["Mario", "Donkey Kong", "Link", "Samus","Dark Samus", "Yoshi", "Kirby",
        "Fox", "Pikachu", "Luigi", "Ness", "Captain Falcon", "Jigglypuff", "Peach", "Daisy",
        "Bowser", "Ice Climbers", "Sheik", "Zelda", "Dr. Mario", "Pichu", "Falco", "Marth",
        "Lucina", "Young Link", "Ganondorf", "Mewtwo", "Roy", "Chrom", "Mr. Game & Watch",
        "Meta Knight", "Pit", "Dark Pit", "Zero Suit Samus", "Wario", "Snake", "Ike",
        "Pokemon Trainer", "Squirtle", "Ivysaur", "Charizard", "Diddy Kong", "Lucas", "Sonic",
        "King Dedede", "Olimar", "Lucario", "R.O.B.", "Toon Link", "Wolf", "Villager",
        "Mega Man", "Wii Fit Trainer", "Rosalina & Luma", "Little Mac", "Greninja",
        "Mii Brawler", "Mii Swordfighter", "Mii Gunner", "Palutena", "Pac-Man", "Robin",
        "Shulk", "Bowser Jr.", "Duck Hunt", "Ryu", "Ken", "Cloud", "Corrin", "Bayonetta",
        "Inkling", "Ridley", "Simon", "Richter", "King K. Rool", "Isabelle", "Incineroar",
        "Piranha Plant", "Joker", "Hero", "Banjo & Kazooie", "Terry", "Byleth", "Min Min",
        "Steve", "Sephiroth", "Pyra", "Mythra", "Kazuya", "Sora"];

//    Create an array with all the smash characters whose names contain only 5 letters.
        let fiveLong = smashers.filter(n => n.length === 5).sort()
        console.log(fiveLong)

//    Create an array with all the smash characters whose names contain over 10 letters.
        let tenLong = smashers.filter(n => n.length > 10).sort()
        console.log(tenLong)

//    REDUCE
//    Find the total and average of the array of a hundred numbers.
        const aHundredNums = [9225, 6397, 97, 5062, 2149, 4656, 6551, 2145, 1073,
        7963, 6279, 2873, 1820, 1468, 9611, 6431, 797, 3433, 5518, 4932, 7880,
        6996, 5761, 6828, 6909, 9431, 4313, 2265, 7709, 5131, 2054, 8212, 9285,
        7945, 612, 6055, 7189, 8539, 8201, 2209, 98, 9329, 4281, 441, 7230,
        3582, 2502, 8432, 9749, 1267, 4111, 4289, 6793, 8238, 6892, 7665, 9252,
        2065, 9817, 8868, 2133, 4519, 1916, 3035, 7547, 9217, 9438, 4473, 7162,
        6652, 2540, 5290, 1502, 7302, 3917, 6100, 6211, 286, 8413, 8380, 5514,
        5858, 7280, 3490, 3907, 1, 1428, 8825, 8339, 8809, 7713, 7770, 3873,
        3474, 6775, 9126, 3081, 7613, 4017, 445];

        let totalNums = aHundredNums.reduce((total, nameExp) => {
            return total + nameExp
        }, 0);
        console.log(totalNums)

        const averageNums = aHundredNums.reduce((total, nameExp) => {
            return total + nameExp/aHundredNums.length
        }, 0);
        console.log(averageNums);

//    with a second argument to find the total mileage of all the cars in the cars array.
        const cars = [
        {
            make: "Honda",
            model: "Civic",
            mileage: 10428
        },
        {
            make: "Toyota",
            model: "Corolla",
            mileage: 9425
        },
        {
            make: "Ford",
            model: "Mustang",
            mileage: 2567
        },
        {
            make: "Audi",
            model: "A3",
            mileage: 14500
        },
        {
            make: "Mazda",
            model: "3",
            mileage: 11248
        }
    ];

        let totalMiles = cars.reduce((acc, curr) => {
            return acc + curr.mileage
        }, 0)
        console.log(totalMiles)

//  FURTHER EXERCISES
        const dogs = [
            {
                dogName: 'Bubbles',
                age: 10,
                isTrained: false
            },
            {
                dogName: 'Lexie',
                age: 3,
                isTrained: true
            },
            {
                dogName: 'Doggy',
                age: 5,
                isTrained: false
            },
            {
                dogName: 'Flopper',
                age: 3,
                isTrained: true
            },
            {
                dogName: 'Lexie',
                age: 1,
                isTrained: true
            },
            {
                dogName: 'Skip',
                age: 7,
                isTrained: true
            },
            {
                dogName: 'Blue',
                age: 4,
                isTrained: false
            }
        ];

//    MAP
//    TODO 1: using map, create a new array of dog names from the dogs array
        let dogNames = dogs.map(n => n.dogName);
        console.log('Exercise 1:', dogNames);

//    TODO 2: using map, create a new array of dog ages from the dogs array
        let dogAges = dogs.map(n => n.age)
        console.log('Exercise 2:', dogAges);

//    TODO 3: using map, create a new array of dog objects from the dogs array that only have dog names and age properties and values
        let dogAgeName = dogs.map (n => {
            let name = n.dogName;
            let age = n.age
            return {name, age}
        })
        console.log('Exercise 3:', dogAgeName);


//    FILTER
//    TODO 4: using filter, create a new array containing only dogs younger than 10 years old
        let yungTen = dogs.filter(n => n.age < 10)
        console.log('Exercise 4:', yungTen);

//    TODO 5: using filter, create a new array containing only dogs named 'Lexie'
        let lexieDog = dogs.filter(n => n.dogName === "Lexie")
        console.log('Exercise 5:', lexieDog);

//    TODO 6: using filter, create a new array containing only dogs that are trained and younger than 10
        let yungTrained = dogs.filter(n => n.isTrained && n.age < 10)
        console.log('Exercise 6:', yungTrained);


// REDUCE
//    TODO 7: using reduce, return a string containing all dog names together with no spaces            ("BubblesLexieDoggy...")
        let dogsConcate = dogs.reduce((acc, curr) => {
            return acc + curr.dogName
        }, '')
        console.log('Exercise 7:', dogsConcate);

//    TODO 8: using reduce, return the total of adding all dog ages together (18)
        let dogsTotal = dogs.reduce((acc, curr) => {
            return acc + curr.age
        }, 0)
        console.log('Exercise 8:', dogsTotal);

//    TODO 9: using reduce, return an array of dog objects with all isTrained properties set to true
        let dogsTrained = dogs.reduce((acc, curr) => {
            if (curr.isTrained === true) {
                acc.push(curr)
            }
            return acc
        }, [])
        console.log('Exercise 9:', dogsTrained);


// EXTRA CHALLENGES
//    TODO 10: what is the average age of each dog?
        let avgDog = dogs.reduce((acc, curr, index, array) => {
            let total = acc + curr.age
            if (index === array.length - 1) {
                return total /array.length
            }
            return total
        }, 0)
        console.log('Exercise 10:', avgDog);

//    TODO 11: what is the average age of dogs that are trained?
        let trainedAvg = dogs.reduce((acc, curr) => {
            if (curr.isTrained === true) {
                return acc + curr.age
            }
            return acc / dogsTrained.length
        }, 0)
        console.log('Exercise 11:', trainedAvg);

//    TODO 12: what is the average length of names of untrained dogs?
        const sumthing = (things) => {
            let lengths = things.filter(n => n.isTrained === false).map(n => n.dogName.length);
            let totalName = lengths.reduce((acc, curr) => {
                return acc + curr
            })
            return totalName / lengths.length
        }
        let avgNameLength = sumthing(dogs)

        console.log('Exercise 12:', avgNameLength);

// //    TODO 13: what are the combined ages of all dogs in dog years? (7x more than a human year)
//         console.log('Exercise 13:', dogYears);
//
// //    TODO 14: create a string of the first letters of each dog name for dogs three years old (should be "LF")
//         console.log('Exercise 14:');

})();