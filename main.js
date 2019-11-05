const $canvas = document.querySelector('canvas');

const game = new Game($canvas);
const startBtn = document.getElementById("startBtn")
const medBtn = document.getElementById("medium")
const hardBtn = document.getElementById("hard")

//const vsBtn = document.querySelector(".vsBtn")


// play with bot
window.addEventListener('load', () => {
  startBtn.addEventListener('click', () => {
    if (game.started === false) {
      game.startGame();
      game.started = true;
    }
  });
});

window.addEventListener('load', () => {
  medBtn.addEventListener('click', () => {
    //if (game.started === true) {
      game.level = 'brian'
      //game.background.velocityX = 0;
      //game.maxRpm = 8800;
      //game.minRpm = 7200;
      game.restartGame();
      //game.started = true;
    //}
  });
});

window.addEventListener('load', () => {
  hardBtn.addEventListener('click', () => {
    game.level = 'toretto'
    game.restartGame();
    //game.started = true;

  });
});