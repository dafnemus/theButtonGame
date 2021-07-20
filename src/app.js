const clicks = document.getElementById('clicks');
const timer = document.getElementById('timer');
const buttonClick = document.getElementById('buttonClick');
const progress = document.getElementById('progress');
const maxClicks = 5;
let initialClick = 0;
let time = 30;
let timerId;

const countClicks = () => initialClick += 1

const discountTime = () => {
  if (time === 0 && initialClick < maxClicks) {
    perder();
  }
  time--;
  timer.innerHTML = `00:${time}`;
};

const play = () => {
  buttonClick.removeAttribute('disabled');
  timerId = setInterval(discountTime, 1000)
};

const pause = () => {
  buttonClick.setAttribute('disabled', true);
  timerId = clearInterval(timerId)
};

const clickMe = () => {
  if (initialClick === maxClicks) {
    ganar();
  }
  console.log(initialClick)
  getProgress();
  countClicks();
  moveButton();
  clicks.innerHTML = `${initialClick}/${maxClicks} clicked`;
};

const ganar = () => {
  alert('Ganaste');
  document.location.reload();
};

const perder = () => {
  alert('Perdiste');
  document.location.reload();
};

const moveButton = () => {
  const move_y = Math.random() * 400;
  const move_x = Math.random() * 400;
  buttonClick.style.transform = `translate(${move_x}%, ${move_y}%)`;
};

const getProgress = () => {
  progress.style.background = `linear-gradient(
    to right,
    var(--green) 0%,
    var(--green) calc(20% * ${initialClick + 1}),
    #fff 20%,
    #fff 100%
  )`;
};
