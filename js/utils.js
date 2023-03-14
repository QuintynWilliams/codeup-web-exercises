function formatToLocaleString(number, language='en', country='US', currency='USD'){
    return parseFloat(number).toLocaleString(`${language}-${country}`,
        {style: 'currency', currency: currency}
    );
}

function isNumericAndNotNaN(input){
    return !isNaN(parseFloat(input)) && input !== null && typeof input !== "boolean" && typeof input !== "string";
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function arrayOfUniqueRandomNumbers(lengthOfArray){
    const array = [];
    for (let i = 0; i < lengthOfArray; i++){
        let newRandomNumber = randomNumber(1, lengthOfArray + 100);
        while(array.includes(newRandomNumber)){
            newRandomNumber = randomNumber(1, lengthOfArray + 100);
        }
        array.push(newRandomNumber);
    }
    return array;
}

// - - - - - BURGER && MENU RESPONSIVENESS - - - - -
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