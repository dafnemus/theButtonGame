const clicks = document.getElementById('clicks');
const timer = document.getElementById('timer');
const buttonClick = document.getElementById('buttonClick');
const progress = document.getElementById('progress');
const MAX_CLICKS = 5;
let pressedClicks = 0;
let time = 30;
let timerId;

const countClicks = () => (pressedClicks += 1);

const discountTime = () => {
  if (time === 0 && pressedClicks < MAX_CLICKS) {
    perder();
  }
  time--;
  timer.innerHTML = `00:${time}`;
};

const play = () => {
  buttonClick.removeAttribute('disabled');
  timerId = setInterval(discountTime, 1000);
};

const pause = () => {
  buttonClick.setAttribute('disabled', true);
  clearInterval(timerId);
};

const clickMe = () => {
  if (pressedClicks === MAX_CLICKS) {
    ganar();
  }
  console.log(pressedClicks);
  getProgress();
  countClicks();
  moveButton();
  clicks.innerHTML = `${pressedClicks}/${MAX_CLICKS} clicked`;
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
    var(--green) calc(20% * ${pressedClicks + 1}),
    #fff 20%,
    #fff 100%
  )`;
};
