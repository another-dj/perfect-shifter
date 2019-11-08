const $canvas = document.querySelector("canvas");

const game = new Game($canvas);
const startBtn = document.getElementById("startBtn");
const medBtn = document.getElementById("medium");
const hardBtn = document.getElementById("hard");
const vstBtn = document.getElementById("vsBtn");


document.querySelector('canvas').display= "hidden";
document.querySelector('canvas').style.width= "0px";
document.querySelector('canvas').style.height= "0px";

// play with bot
window.addEventListener("load", () => {
  startBtn.addEventListener("click", () => {
    if (game.started === false) {
      game.startGame();
document.querySelector('canvas').display= "hidden";
document.querySelector('canvas').style.width= "800px";
document.querySelector('canvas').style.height= "450px";
document.querySelector('img').display= "hidden";
document.querySelector('img').style.width= "0px";
document.querySelector('img').style.height= "0px";

    }
  });

  medBtn.addEventListener("click", () => {
    if (game.started === false) {
      game.level = "brian";
      game.restartGame();
      document.querySelector('canvas').display= "hidden";
document.querySelector('canvas').style.width= "800px";
document.querySelector('canvas').style.height= "450px";
document.querySelector('img').display= "hidden";
document.querySelector('img').style.width= "0px";
document.querySelector('img').style.height= "0px";
    }
  });

  hardBtn.addEventListener("click", () => {
    if (game.started === false) {
      game.level = "toretto";
      game.restartGame();
      document.querySelector('canvas').display= "hidden";
document.querySelector('canvas').style.width= "800px";
document.querySelector('canvas').style.height= "450px";
document.querySelector('img').display= "hidden";
document.querySelector('img').style.width= "0px";
document.querySelector('img').style.height= "0px";
    }
  });

  vsBtn.addEventListener("click", () => {
    if (game.started === false) {
      game.level = "player2";
      game.startGame();
      document.querySelector('canvas').display= "hidden";
document.querySelector('canvas').style.width= "800px";
document.querySelector('canvas').style.height= "450px";
document.querySelector('img').display= "hidden";
document.querySelector('img').style.width= "0px";
document.querySelector('img').style.height= "0px";
    }
  });
});
