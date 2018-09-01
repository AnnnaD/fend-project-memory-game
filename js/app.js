
$(function() {


 //main variables cards, stars and deck, restart button

 let myTimer;
 let countClicker;
 countClicker = 0;


const desk = document.querySelector('.deck');
let restart_game_button = document.querySelector('.restart');
let nodeCards = document.querySelectorAll('.card');
let nodeStars = document.querySelectorAll('.fa-star');
let cards = [...nodeCards];
let stars = [...nodeStars];

for(star of stars) {
  star.style.color = '#FFEE7F';
}


// COUNTABLE ELEMENTS: MOVES, STARS, TIMER


// let restart_game_button = document.querySelector('.restart');

let moves = document.querySelector('.moves');
let num_moves = 0;
moves.textContent = num_moves;
let stars_num = stars.length;

  const body = document.querySelector('body');
  const score_panel = document.querySelector('.score-panel');
  const timer_container = document.createElement('div');
  timer_container.setAttribute('class', 'timer_container');
  const timer_inputs_wrapper = document.createElement('div');
  timer_inputs_wrapper.setAttribute('class', 'timer_inputs_wrapper');
  const span_seconds = document.createElement('span');
  span_seconds.setAttribute('class','seconds');
  const span_minutes = document.createElement('span');
  span_minutes.setAttribute('class','minutes');
  const button_stop = document.createElement('button');
  button_stop.textContent = "stop";
  button_stop.setAttribute('class','button_stop');

timer_container.appendChild(timer_inputs_wrapper);
timer_container.appendChild(button_stop);
timer_inputs_wrapper.appendChild(span_minutes);
timer_inputs_wrapper.appendChild(span_seconds);
timer_container.appendChild(timer_inputs_wrapper)
score_panel.appendChild(timer_container);

// end of creating timer


// timer functions

let num_sec = 0;
span_seconds.textContent = num_sec;

let num_minut = 0;
span_minutes.textContent = num_minut;

function addMinute(){
  num_minut = num_minut + 1;
  span_minutes.textContent = num_minut;
}

function startYourTimer() {
  myTimer = setInterval(startTimer, 1000);
}

function startTimer() {
  num_sec = num_sec + 1;
  span_seconds.textContent = num_sec;

  if(num_sec % 60 === 0){
    addMinute();
    num_sec = 0;
  }
}

function stopTimer() {
  clearInterval(myTimer);
  console.log('click');
}

let stop_timer_button = document.querySelector('.button_stop');
stop_timer_button.addEventListener('click',stopTimer);

// end of timer functions


// playing again and restart function for play again

function play_again() {
  const congrats_box = document.querySelector('.wrapper_congrats_box').style.display = "none";
  const container = document.querySelector('.container').style.display = "flex";
    restart_game();
}


function restart_game() {

    num_moves = 0;
    moves.textContent = 0;
    num_sec = 0;
    num_minut = 0;
    span_minutes.textContent = num_minut;
    span_seconds.textContent = num_sec;
    countClicker = 0;

    let cards = document.querySelectorAll('.card');
      for(const card of cards){
        card.classList.remove('open','match','show');
      }
    let nodeStars = document.querySelectorAll('.fa-star');
    let stars = [...nodeStars];
      for(star of stars){
        star.classList.remove('invisible');
        console.log(star)
      }
      stopTimer();
      create_cards();
      shuffle(cards);
      count_moves();

      let congrats = document.querySelector('.wrapper_congrats_box');
      congrats.remove;

}

restart_game_button.addEventListener('click', restart_game);

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
    icon.classList.add('start_check_anim');
    const congrats = document.createElement('h1');
    congrats.textContent = "Congratulations! You Won!";
    const summary_points = document.createElement('p');
    const btn_play_again = document.createElement('button');
    btn_play_again.setAttribute('class','button_play_again');
    btn_play_again.textContent = "play again";
      if(stars_num === 1){
        summary_points.textContent = "With just " + num_moves + " moves and " + num_minut + " minutes " + num_sec + " seconds " + stars_num + " star."
      } else {
        summary_points.textContent = "With just " + num_moves + " moves and " + num_minut + " minutes " + num_sec + " seconds " + stars_num + " star."
      }
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
      create_summary();
      stopTimer();
    }
}


// count moves and remove star after 10 moves

let index = 0;

function remove_star() {
  let nodeStars = document.querySelectorAll('.fa-star');
  let stars = [...nodeStars];
    for(let i=0; i < stars.length; i++) {
      stars[index].classList.add('invisible')
    }
      stars_num = stars_num-1;
      return stars_num;
}

console.log(stars_num);
console.log(num_moves);

function count_moves() {
  num_moves = num_moves + 1;
   moves.textContent = num_moves;
      if(num_moves % 10 === 0 && num_moves < 30) {
        index = index + 1;
        remove_star();
    }
    return count_moves;
}


// correct and incorrect moves and animation add as a class

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
    setTimeout(anim_incorrect_match, 600);
}

function check_match() {
    let card_open = document.querySelectorAll('.open');
    let how_many_open = card_open.length;

      if(card_open[0].firstElementChild.classList.value === card_open[1].firstElementChild.classList.value) {
        card_open[0].classList.add('match');
        card_open[1].classList.add('match');
        card_open[0].classList.remove('open');
        card_open[1].classList.remove('open');
      } else {
        incorrect_match();
      }
}


// creat and shuffle cards when card is clicked add class open to open cards

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

create_cards();

function countClicks() {
  countClicker = countClicker + 1;
  console.log(countClicker)
  if(countClicker === 1){
    startYourTimer()
  }
}

function create_cards(){
for(card of cards){
    let card_icon = card.firstElementChild;
    card.appendChild(card_icon);
    desk.appendChild(card);
    card.classList.remove('open','show', 'match');
      card.addEventListener('click', showCard);
      card.addEventListener('click', open_cards);
      card.addEventListener('click',countClicks);
    }
  shuffle(cards);
  }

});
