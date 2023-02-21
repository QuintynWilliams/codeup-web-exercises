(function() {
    "use strict";

    /*
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    let person = {firstName: "Quintyn", lastName: "Williams"};
    console.log(person.firstName)
    console.log(person.lastName)


    /*
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello = function (name1, name2) {
        console.log(`Hello from ${name1} ${name2}!`)
    }
    person.sayHello(person.firstName, person.lastName)


    /*
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    let shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];
    let x = shoppers.amount;
    for (x of shoppers) {
        let discount = (x.amount * 0.12).toLocaleString("en-US", {style:"currency", currency:"USD"});
        let afterCount = (x.amount * 0.88).toLocaleString("en-US", {style:"currency", currency:"USD"});
        if (x.amount > 200) {
            console.log(`Congrats ${x.name}, your cart of ${shoppers.amount} qualifies for the 12% discount.\nYour total is ${afterCount}, saving you ${discount}.`)
        } else {
            console.log(`Sorry ${x.name}, you do not qualify for the 12% discount.`)
        }
    }


    /*
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    let books = [
        {title: "Crime and Punishment", author:{firstName: "Fyodor", lastName: "Dostoevsky"}},
        {title: "War and Peace", author:{firstName: "Leo", lastName: "Tolstoy"}},
        {title: "Tom Sawyer", author:{firstName: "Mark", lastName: "Twain"}},
        {title: "For Whom the Bell Tolls", author:{firstName: "Ernest", lastName: "Hemingway"}},
        {title: "The Hobbit", author:{firstName: "J.R.R", lastName: "Tolkien"}},
    ]
    console.log(books[0].title)
    console.log(books[2].author.firstName)
    console.log(books[4].author.lastName)

    /*
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    for (let i = 0; i < books.length; i++) {
        console.log(`Book # ${i + 1}\nTitle: ${books[i].title}\nAuthor: ${books[i].author.firstName} ${books[i].author.lastName}\n---`)
    }


    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
    let userTitle = prompt(`Enter a title:`);
    let userAuthor = prompt(`Enter an author:`);

    const createBook = (title, author) => {
        let firstLast = author.split(" ");
        let userFirst = firstLast[0];
        let userLast = firstLast[1];
        books.push({title: title,
                    author: {
                    firstName: userFirst,
                    lastName: userLast
        }})
        return books[books.length - 1];
    }

    const showBookInfo = (obj) => {
        console.log(`Book # 1\nTitle: ${obj.title}\nAuthor: ${obj.author.firstName} ${obj.author.lastName}\n---`)
    }
    console.log(showBookInfo(createBook(userTitle, userAuthor)))
})();