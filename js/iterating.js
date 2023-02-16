(function(){
    "use strict";
    /*
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
        let names = ['Bob', 'Karen', 'Toby', 'Michael']

    /*
     * Create a log statement that will log the number of elements in the names
     * array.
     */
        console.log(names.length)

    /*
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log(names[0])
    console.log(names[1])
    console.log(names[2])
    console.log(names[3])

    /*
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    for (let i = 0; i < names.length; i++) {
        console.log(`Names for loop found ${names[i]} at index ${i}`)
    }

    /*
     * Refactor your above code to use a `forEach` loop
     */
    names.forEach((name) => {
        console.log(name)
    })

    /*
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    const itemFirst = (inputArray) => {
        return inputArray[0];
    }
    const itemSecond = (inputArray) => {
        return inputArray[1];
    }
    const itemLast = (inputArray) => {
        let i = parseFloat(inputArray.length)
        return inputArray[i-1];
    }
    console.log(itemFirst([1, 2, 3, 4, 5]));
    console.log(itemSecond([1, 2, 3, 4, 5]));
    console.log(itemLast([1, 2, 3, 4, 5]));
})();