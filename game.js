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
    this.lose = false;
    this.maxRpm = 9000;
    this.minRpm = 6700;
    this.level = 'grandma';
    this.gamelost = false;
    //this.secondPlayer = false;
  }

  rpmLoop() {
    this.updateEverything();
    this.drawEverything();

  }


  startGame() {
    //this.rpmLoop();
    this.animation();
  }


  //startVsGame(){



  drawEverything() {
    console.log("true or false", this.gamelost);

    if (this.gamelost) {
      console.log("LOSTTTTOTOTOOT", this.gamelost);

      this.background.context.clearRect(0, 0, this.width, this.height);
      this.background.context.font = "100px arial"
      this.background.context.fillStyle = "red"
      if (this.player.progress > this.botplayer.progress) {
        this.background.context.fillText('YOU WIN', 150, 180);
      } else {
        this.background.context.fillText('YOU LOSE', 135, 180);
      }
    } else {
      this.background.drawRoad();
      this.background.update();
      this.player.drawPlayer();
      this.botplayer.drawBot();
      this.rpm.updateRpm();
      this.rpm.updateBotRpm();
      if (this.rpm.botRevolutions > this.minRpm && this.rpm.botRevolutions < this.maxRpm) {
        this.botplayer.shift();
      }
    }
  }
  animation() {

    this.updateEverything();
    window.requestAnimationFrame(timestamp => this.animation(timestamp))
  }
  updateEverything() {
    if (this.background.velocityX === 0 || this.player.progress >= 100 || this.botplayer.progress >= 100) {
      this.gameover();
    }
    this.drawEverything();
  }


  clearEverything() {

  };
  restartGame() {

    switch (this.level) {

      case 'grandma':
        console.log("this.level", this.level)
        this.startGame();
        this.maxRpm = 9000;
        this.minRpm = 6700;

        break;
      case 'brian':
        console.log("this.level", this.level)
        this.startGame();
        this.maxRpm = 8800;
        this.minRpm = 7200;
        break;
      case 'toretto':
        console.log("this.level", this.level)
        this.startGame();
        this.minRpm = 7700;
        this.maxRpm = 8600;
        break;
    }

  }
  gameover() {
    this.gamelost = true;
  }
}