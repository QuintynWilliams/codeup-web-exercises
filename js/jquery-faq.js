
let $reveal = $('#reveal');
let $answer = $('dd');

$reveal.on('click', function() {
    if ($answer.attr('class') === 'invisible') {
    $answer.removeClass('invisible')
    } else {
    $answer.addClass('invisible')
    }
})


/*
* Create a button that, when clicked, makes the last li in each ul have a yellow background.
* When any h3 is clicked, the lis underneath it should be bolded. Use font-weight: bold to achieve this.
* When any list item is clicked, first li of the parent ul should have a font color of blue.
*/

let $highlight = $('#highlight')
let $lists = $('ul > li:last-child')

//event listener when button is clicked
$highlight.on('click', function(){
//  toggles highlight of unhighlight
    $lists.toggleClass('highlight');
});

let $listHead = $('h3')
$listHead.on('click', function() {
    $listHead.next().toggleClass('bold')
})

let $listItem = $('li')
let $firstItem = $('ul > li:first-child')
$listItem.on('click', function() {
    $firstItem.toggleClass('blue');
})

/*
* BONUS
* Create 3 divs that each look like a picture frame. Each one should have a unique background image
* and a button underneath that swaps the image from the frame. Use the traversing functions of
* jQuery to accomplish this.
*   The rules are the following:
*     The left frame swaps to the right and takes the image from the frame in the center.
*     The center frame swaps randomly to either the left or right.
*     The right frame swaps to the left and takes the image from the frame in the center.
*/

let $scroll = $('.image-scroll')
let $preview = $('.gnp')
let $curr = $('#start')
let $start = $('#start')
let $first = $('#first')
let $last = $('#last')


$curr.toggleClass('hide');
$scroll.on('click', function() {
    if ($(this).text() === " < ") {
        if ($curr.attr('id') === 'start') {
            $curr.toggleClass('hide')
            $first.toggleClass('hide')
            $curr = $('#first')
        } else if ($curr.attr('id') === 'first') {
            $curr.toggleClass('hide')
            $last.toggleClass('hide')
            $curr = $('#last')
        } else if ($curr.attr('id') === 'last') {
            $curr.toggleClass('hide')
            $start.toggleClass('hide')
            $curr = $('#start')
        }
    } else if ($(this).text() === " > ") {
        if ($curr.attr('id') === 'start') {
            $curr.toggleClass('hide')
            $last.toggleClass('hide')
            $curr = $('#last')
        } else if ($curr.attr('id') === 'last') {
            $curr.toggleClass('hide')
            $first.toggleClass('hide')
            $curr = $('#first')
        } else if ($curr.attr('id') === 'first') {
            $curr.toggleClass('hide')
            $start.toggleClass('hide')
            $curr = $('#start')
        }
    }
});



















