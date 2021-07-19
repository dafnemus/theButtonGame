const clicks = document.getElementById('clicks');
const timer = document.getElementById('timer');
const buttonClick = document.getElementById('buttonClick');
const maxClicks = 5;
let initialClick = 0;

const countClicks = () => {
  return (initialClick += 1);
};

const play = () => {
  buttonClick.removeAttribute('disabled');
};

const pause = () => {
    buttonClick.setAttribute('disabled', true)
}

const clickMe = () => {
  countClicks();
  clicks.innerHTML = `${initialClick}/${maxClicks} clicked`;
};
