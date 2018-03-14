/*
 * Create a list that holds all of your cards
 */
$(function() {



let cards = document.querySelectorAll('.card');
const desk = document.querySelector('.deck');

function anim_incorrect_match() {
  let card_open_incorrect = document.querySelectorAll('.incorrect');
  card_open_incorrect[0].classList.remove('show','incorrect');
  card_open_incorrect[1].classList.remove('show','incorrect');
}

function incorrect_match() {
  let card_open = document.querySelectorAll('.open');
  let how_many_open = card_open.length;
  card_open[0].classList.add('incorrect');
  card_open[1].classList.add('incorrect');
  card_open[0].classList.remove('open');
  card_open[1].classList.remove('open');
  setTimeout(anim_incorrect_match, 500);
}

function check_match() {
  let card_open = document.querySelectorAll('.open');
  let how_many_open = card_open.length;

  if(card_open[0].firstElementChild.classList.value === card_open[1].firstElementChild.classList.value) {
    console.log("win");
    card_open[0].classList.add('match');
    card_open[1].classList.add('match');
    card_open[0].classList.remove('open');
    card_open[1].classList.remove('open');
  } else {
    console.log("no win");
    incorrect_match();
  }
}


function open_cards() {

  let card_open = document.querySelectorAll('.open');
  let how_many_open = card_open.length;
  if(how_many_open > 1) {
    check_match();
  }
}

function showCard() {
  this.classList.add('show','open');
}


cards.forEach(function(card, index, array) {
  const empty_space = card.firstChild.remove();
  const card_icon = card.firstElementChild;
  card.classList.remove('open','match','show');
  card.appendChild(card_icon);
  card.addEventListener('click', showCard);
  card.addEventListener('click', open_cards);
})

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
});
