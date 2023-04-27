'use strict';
// data

const currentDate = new Date();
const pastDate = new Date();

pastDate.setDate(currentDate.getDate() - 5);

const pastDateStr = pastDate.toLocaleDateString();
const dateSpan = document.getElementById('data');

dateSpan.innerHTML = pastDateStr;

// pop-up window

const closeBtn = document.getElementById('close-btn');
const popup = document.getElementById('popup');
const closeBtn2 = document.getElementById('button');

closeBtn.addEventListener('click', function() {
  popup.style.display = 'none';
});

closeBtn2.addEventListener('click', function() {
  popup.style.display = 'none';
});

document.addEventListener('mouseleave', function() {
  popup.style.display = 'block';
});

setTimeout(function() {
  popup.style.display = 'block';
}, 20000);

// timer

const timerElement = document.getElementById('timer');
const timer2Element = document.getElementById('timer2');
let timeInSeconds = 600;

const intervalId = setInterval(function() {
  timeInSeconds--;

  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;
  const formattedTime = ('0' + minutes).slice(-2)
    + ':' + ('0' + seconds).slice(-2);

  timerElement.innerHTML = formattedTime;
  timer2Element.innerHTML = formattedTime;

  if (timeInSeconds === 0) {
    clearInterval(intervalId);
  }
}, 1000);
