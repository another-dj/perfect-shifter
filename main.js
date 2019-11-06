const $canvas = document.querySelector("canvas");

const game = new Game($canvas);
const startBtn = document.getElementById("startBtn");
const medBtn = document.getElementById("medium");
const hardBtn = document.getElementById("hard");
const vstBtn = document.getElementById("vsBtn");

// play with bot
window.addEventListener("load", () => {
  startBtn.addEventListener("click", () => {
    if (game.started === false) {
      game.startGame();
    }
  });

  medBtn.addEventListener("click", () => {
    if (game.started === false) {
      game.level = "brian";
      game.restartGame();
    }
  });

  hardBtn.addEventListener("click", () => {
    if (game.started === false) {
      game.level = "toretto";
      game.restartGame();
    }
  });

  vsBtn.addEventListener("click", () => {
    if (game.started === false) {
      game.level = "player2";
      game.startGame();
    }
  });
});
