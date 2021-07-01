import './index.scss';
import Female from './assets/Female.png';

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

const img = document.createElement('img');
img.src = Female;

const spriteW = 48;
const spriteH = spriteW;

const shorts = 3;
let cycle = 0;

let buttonPressed = false;
let pY = canvas.height / 2 - spriteH / 2;

img.addEventListener('load', () => {
  setInterval(() => {
    if (buttonPressed) {
      pY += 10;
      cycle = (cycle + 1) % shorts;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(img, cycle * spriteW, 0, spriteW, spriteH, canvas.width / 2 - spriteW / 2, pY, spriteW, spriteH);
  }, 120);
});

function keyUpHandler(e) {
  if (e.key === 'Down' || e.key === 'ArrowDown') {
    buttonPressed = false;
  }
}

function keyDownHandler(e) {
  if (e.key === 'Down' || e.key === 'ArrowDown') {
    buttonPressed = true;
  }
}

document.addEventListener('keyup', keyUpHandler);
document.addEventListener('keydown', keyDownHandler);
