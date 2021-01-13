'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
const refresh = document.querySelector('.again');
const res = document.querySelector('.message').textContent;
const initialScore = document.querySelector('.score').textContent;
const check = document.querySelector('.check');
const body = document.querySelector('body');
const highScore = document.querySelector('.highscore');
let score = 20;

refresh.addEventListener('click', function () {
  document.querySelector('.message').textContent = res;
  document.querySelector('.score').textContent = initialScore;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  body.style.backgroundColor = '#222';
});
check.addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess').value);

  if (!guessNumber) {
    document.querySelector('.message').textContent = 'No number!';
  } else if (guessNumber === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    score++;
    document.querySelector('.score').textContent = score;
    body.style.backgroundColor = 'green';
    if (highScore.textContent < score) highScore.textContent = score;
  } else if (guessNumber > secretNumber && score > 1) {
    document.querySelector('.message').textContent = 'Too high!';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guessNumber < secretNumber && score > 1) {
    document.querySelector('.message').textContent = 'Too low!';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (score == 1 && guessNumber != secretNumber) {
    document.querySelector('.message').textContent = 'You lost!';
    score--;
    document.querySelector('.score').textContent = score;
  }
});
