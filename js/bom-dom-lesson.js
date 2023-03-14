'use strict';

//- - - - - Browser Object Model BOM LESSON - - - - -
/*
let count = 0;
let max = 10;
let interval = 1000;


//  v allows exit of the setInterval function
//      clearInterval(intervalId)
// works as a loop, WITH a concept of REAL-TIME
*   let intervalId = setInterval(function() {
*       if (count >= max) {
*           clearInterval(intervalId);
*           console.log(`All done`);
*       } else {
*           count++;
*           console.log(`Repeating this line ` + count);
*       }
*   }, interval)


// Waits, until time is reached before running
console.log(`5 seconds, from now...`)
setTimeout(function () {
    console.log(`It has been 5 seconds!`)
}, 5000)

//window is an array of data in the BOM that cna be accessed using array methods; such as...
// window.location = 'https://google.com';
setTimeout(function () {
    window.location.href = 'https://google.com';
}, 10000)
*/


//- - - - - Document Object Model DOM LESSON - - - - -
/*
// Represents a tree-like hierarchy of nodes in an HTML document and allows
// querying and modification of individual parts of the document.
//       V saves to variable to enable use elsewhere
//       |           V DOM phone book method IOT select a node on the DOM
//       |           |            V method to enable selection of ONE node in the DOM
//       |           |            |         V call it by class/id selector
//       |           |            |         |
let myButton = document.querySelector('.btn');
let clickMe = document.querySelector('#clickMe');
let myClassOfButton = document.getElementByClassName('.btn');
let allButtons = document.querySelectorAll('.btn');


clickMe.innerText("Hello Worlds")
clickMe.remove()
let btnColumn = document.querySelector('#btn-column')
btnColumn.insertAdjacentHTML('afterbegin', '<p>New Html Element</p>');

let pageWrapper = document.querySelector('.page-wrapper')
clickMe.addEventListener('click', function() {
    pageWrapper.classList.toggle('red')
})

// Creating Nodes
let btnColumn = document.querySelector('#btn-column')
let buttonNode = document.createElement('button');
buttonNode.classList.add('btn');
buttonNode.innerHTML = 'I am new button';
buttonNode.addEventListener('click', function() {
    alert('it works');
});
btnColumn.appendChild(buttonNode);

// Adding Str HTML on Document
let newHtml = `
    <button class="btn" id="newButton">
        New Button
    </button>
`


// DOM EVENTS
let clickMe = document.querySelector('#clickMe')

// with an ANONYMOUS function
clickMe.addEventListener('click', function () {
    alert(`yay, you clicked me!`)
})

// with a NAMED fucntion...
const handleClick = () => {
alert(`yay, you ran my Click-function`)
}
clickMe.addEventListener('click', handleClick)

// ...  Allows you to remove the function later, anon-event listeners
//      have no means of removal.
clickMe.addEventListener('click', function (){
    alert(`Yay, a second listener`)
})

clickMe.removeEventListener('click', handleClick)

allButtons.forEach(function(element) {
    element.addEventListener('click', handleClick)
});

let btnColumn = document.querySelector('#btn-column')
let buttonNode = document.createElement('button');
buttonNode.classList.add('btn');
buttonNode.innerHTML = 'I am new button';
btnColumn.appendChild(buttonNode);
// let allButtons = document.querySelectorAll('.btn');
btnColumn.addEventListener('click', function (e) {
    console.log(e)
    if (e.target.classList[0] === 'btn') {
        alert(`Yay, you clicked the First!`)
    }
})
*/


//- - - - - DOM EVENTS LESSON - - - - -
let pageWrapper = document.querySelector('.page-wrapper');
let toggleMenu = document.querySelector('.das-burger-wrapper');
let menuBg = document.querySelector('.mobile-menu-overlay');

toggleMenu.addEventListener('click', function (){
    // Does not require '.' since we are already in classList
    pageWrapper.classList.toggle('mobile-menu-open')
})

toggleMenu.addEventListener('click', function (){
    // Does not require '.' since we are already in classList
    menuBg.classList.toggle('mobile-menu-open')
})

//- - - - - Dropdown Responsiveness - - - - -
let dropdowns = document.querySelectorAll('[data-dropdown="parent"]');

// Close previous open dropdown and open next
dropdowns.forEach(function(dropdown){
    let toggle = dropdown.querySelector('[data-dropdown= "toggle"]');
    toggle.addEventListener('click', function (){
        dropdowns.forEach(function(element) {
            if (element.classList.contains('open') && element !== dropdown) {
                element.classList.remove('open')
            }
        })
        dropdown.classList.toggle('open');
    })
})

// Closes dropdowns when clicking outside of options
pageWrapper.addEventListener('click', function() {
    if (!event.target.closest('[data-dropdown="parent"]')) {
        dropdowns.forEach(function(dropdown) {
            dropdown.classList.remove('open')
        })
    }
})