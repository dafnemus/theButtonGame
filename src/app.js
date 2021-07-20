const clicks = document.getElementById('clicks');
const timer = document.getElementById('timer');
const buttonClick = document.getElementById('buttonClick');
const progress = document.getElementById('progress');
const maxClicks = 5;
let initialClick = 0;
const time = 30;

const countClicks = () => {
  return (initialClick += 1);
};

const play = () => {
  buttonClick.removeAttribute('disabled');
  discountTime()
  timer.innerHTML = `00:${time}`
};

const pause = () => {
  buttonClick.setAttribute('disabled', true);
};


const discountTime = () => {
  return (time -= 1);
};

const clickMe = () => {
  const move_y = (Math.random() * 450) - 1;
  const move_x = (Math.random() * 800) - 1;
  buttonClick.style.transform = `translate(${move_x}px, ${move_y}px)`;
  progress.style.background = `linear-gradient(
        to right,
        var(--green) 0%,
        var(--green) calc(20% * ${initialClick + 1}),
        #fff 20%,
        #fff 100%
      )`;
  if (initialClick === maxClicks) {
    window.alert('Ganaste');
    document.location.reload();
  }
  countClicks();
  clicks.innerHTML = `${initialClick}/${maxClicks} clicked`;
};
