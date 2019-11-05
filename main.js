const $canvas = document.querySelector('canvas');

const game = new Game($canvas);
const startBtn = document.querySelector(".startBtn")


window.addEventListener('load', () => {
    startBtn.addEventListener('click', () => {
      if (game.started === false){
      game.startGame();
      game.started = true;
      }
    });
});