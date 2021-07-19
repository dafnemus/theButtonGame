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
    const move_y = Math.random() * 350
    const move_x = Math.random() * 400
    buttonClick.style.transform = `translate(${move_x}px, ${move_y}px)`
    if (initialClick === maxClicks) {
      window.alert('Ganaste');
      document.location.reload();
    }
    countClicks();
    clicks.innerHTML = `${initialClick}/${maxClicks} clicked`;
};


