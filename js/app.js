/*
 * Create a list that holds all of your cards
 */
$(function() {



let cards = document.querySelectorAll('.card');
const desk = document.querySelector('.deck');


let moves = document.querySelector('.moves');
moves.textContent = 0;
let num_moves = moves.textContent;
num_moves = Number(num_moves);

function play_again() {
  const congrats_box = document.querySelector('.wrapper_congrats_box').style.display = "none";
  const container = document.querySelector('.container').style.display = "flex";
  let cards = document.querySelectorAll('.card');
  card.classList.remove('open','match','show');
}

function create_summary() {

  const body = document.querySelector('body');
  const container = document.querySelector('.container').style.display = "none";
  const wrapper = document.createElement('div');
  wrapper.setAttribute('class','wrapper_congrats_box')
  wrapper.style.cssText = 'width:100%; height:100%; display: flex; justify-content:center; align-items:center; flex-direction:column; text-align:center';
  const icon_box = document.createElement('div');
  icon_box.setAttribute('class','icon_box_wrapper');
  const icon = document.createElement('i');
  icon.setAttribute('class','fa fa-check');
  const congrats = document.createElement('h1');
  congrats.textContent = "Congratulations! You Won!";
  const summary_points = document.createElement('p');
  const btn_play_again = document.createElement('button');
  btn_play_again.setAttribute('class','button_play_again');
  btn_play_again.textContent = "play again";
  summary_points.textContent = "With just " + num_moves + " moves and some stars"
  summary_points.style.color ='green';
  wrapper.appendChild(icon_box);
  icon_box.appendChild(icon);
  wrapper.appendChild(congrats)
  wrapper.appendChild(btn_play_again);
  congrats.appendChild(summary_points);
  body.appendChild(wrapper);
  btn_play_again.addEventListener('click',play_again);
}

function winning_game() {
  const matched_card = document.querySelectorAll('.match');
  if(matched_card.length === 16){
    create_summary()
    console.log("end_of_game");
  }
}

function count_moves() {
    num_moves = num_moves + 1;
    moves.textContent = num_moves;
}

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
    count_moves();
    winning_game();
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
