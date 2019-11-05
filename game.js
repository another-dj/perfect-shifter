class Game {
  constructor($canvas) {
    this.canvas = $canvas;
    this.context = $canvas.getContext("2d");
    this.height = $canvas.height;
    this.width = $canvas.width;
    this.rpm = new Rpm(this);
    this.player = new Player(this);
    this.botplayer = new Botplayer(this);
    this.background = new Background(this);
    this.controls = new Controls(this);
    this.controls.setControls();
    this.started = false;
    this.isAccelerating = false;
    this.timer = 0;
  }

  rpmLoop() {
    this.updateEverything();
    this.drawEverything();

  }


  startGame() {
    //this.rpmLoop();
    this.animation();


  }
  drawEverything() {
    this.background.drawRoad();
    this.background.update();
    this.player.drawPlayer();

    this.botplayer.drawBot();

    this.rpm.updateRpm();
  }

  animation() {
    this.drawEverything();
    window.requestAnimationFrame(timestamp => this.animation(timestamp))
  }

  updateEverything() {

  }
  clearEverything() {

  }
  newGame() {

  }
  looseScreen() {

  }
}