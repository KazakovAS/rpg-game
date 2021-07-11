import './index.scss';
import ClientGame from './client/ClientGame';

window.addEventListener('load', () => {
  ClientGame.init({ tagId: 'game' });
});

// import Female from './assets/Female.png';
// import terrainAtlas from './assets/terrain.png';
// import worldCfg from './configs/world.json';
// import sprites from './configs/sprites';
//
// const canvas = document.getElementById('game');
// const ctx = canvas.getContext('2d');
//
// const img = document.createElement('img');
// img.src = Female;
//
// const spriteW = 48;
// const spriteH = spriteW;
//
// const terrain = document.createElement('img');
// terrain.src = terrainAtlas;
//
// terrain.addEventListener('load', () => {
//   const { map } = worldCfg;
//   map.forEach((cfgRow, y) => {
//     cfgRow.forEach((cfgCell, x) => {
//       const [sX, sY, sW, sH] = sprites.terrain[cfgCell[0]].frames[0];
//
//       ctx.drawImage(
//         terrain,
//         sX,
//         sY,
//         sW,
//         sH,
//         x * spriteW,
//         y * spriteH,
//         spriteW,
//         spriteH);
//     });
//   });
// });
//
// const step = 10;
//
// const shorts = 3;
// let cycle = 0;
//
// let buttonPressed = false;
// let pY = canvas.height / 2 - spriteH / 2;
// let pX = canvas.width / 2 - spriteW / 2;
//
// img.addEventListener('load', () => {
//   ctx.drawImage(
//     img,
//     0,
//     0,
//     spriteW,
//     spriteH,
//     canvas.width / 2 - spriteW / 2,
//     canvas.height / 2 - spriteH / 2,
//     spriteW,
//     spriteH,
//   );
// });
//
// function switchPositionSprite(posX, posY) {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   ctx.drawImage(img, posX, posY, spriteW, spriteH, pX, pY, spriteW, spriteH);
// }
//
// function walk(e) {
//   if (buttonPressed) {
//     cycle = (cycle + 1) % shorts;
//
//     if (e.key === 'Left' || (e.key === 'ArrowLeft' && pX > step)) {
//       switchPositionSprite(cycle * spriteW, spriteH);
//       return (pX -= step);
//     }
//     if (
//       e.key === 'Right' ||
//       (e.key === 'ArrowRight' && pX < canvas.width - (spriteW + step))
//     ) {
//       switchPositionSprite(cycle * spriteW, 2 * spriteH);
//       return (pX += step);
//     }
//     if (e.key === 'Up' || (e.key === 'ArrowUp' && pY > step)) {
//       switchPositionSprite(cycle * spriteW, 3 * spriteH);
//       return (pY -= step);
//     }
//     if (
//       e.key === 'Down' ||
//       (e.key === 'ArrowDown' && pY < canvas.height - (spriteH + step))
//     ) {
//       switchPositionSprite(cycle * spriteW, 0);
//       return (pY += step);
//     }
//   }
// }
//
// function keyUpHandler(e) {
//   if (
//     e.key === 'Down' ||
//     e.key === 'ArrowDown' ||
//     e.key === 'Up' ||
//     e.key === 'ArrowUp' ||
//     e.key === 'Left' ||
//     e.key === 'ArrowLeft' ||
//     e.key === 'Right' ||
//     e.key === 'ArrowRight'
//   ) {
//     buttonPressed = false;
//   }
// }
//
// function keyDownHandler(e) {
//   if (
//     e.key === 'Down' ||
//     e.key === 'ArrowDown' ||
//     e.key === 'Up' ||
//     e.key === 'ArrowUp' ||
//     e.key === 'Left' ||
//     e.key === 'ArrowLeft' ||
//     e.key === 'Right' ||
//     e.key === 'ArrowRight'
//   ) {
//     buttonPressed = true;
//     walk(e);
//   }
// }
//
// document.addEventListener('keyup', keyUpHandler);
// document.addEventListener('keydown', keyDownHandler);
