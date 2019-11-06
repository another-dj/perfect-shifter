class Game {
  constructor($canvas) {
    this.canvas = $canvas;
    this.context = $canvas.getContext("2d");
    this.height = $canvas.height;
    this.width = $canvas.width;
    this.rpm = new Rpm(this);
    this.player = new Player(this);
    this.player2 = null;
    this.botplayer = null;
    this.background = new Background(this);
    this.controls = new Controls(this);
    this.controls.setControls();
    this.started = false;
    this.isAccelerating = false;
    this.timer = 0;
    this.counter = 0;
    //this.lose = false;
    this.maxRpm = 9000;
    this.minRpm = 6700;
    this.level = "grandma";
    this.gamelost = false;
    this.vsmode = false;
    //this.secondPlayer = false;
  }

  rpmLoop() {
    this.updateEverything();
    this.drawEverything();
  }

  startGame() {
    debugger;
    this.gamelost = false;
    this.started = true;
    //this.rpmLoop();
    if (this.level === "player2") {
      this.player2 = new Player2(this);
    } else if (
      this.level === "grandma" ||
      this.level === "brian" ||
      this.level === "toretto"
    ) {
      this.botplayer = new Botplayer(this);
    }
    //console.log(this.player2, this.botplayer)
    this.animation();
  }

  //startVsGame(){

  drawEverything() {
    //console.log("true or false", this.gamelost);
    if (this.gamelost) {
      switch (this.level) {
        case "player2":
          if (this.player.progress > this.player2.progress) {
            this.player.winner();
          } else if (this.player.progress < this.player2.progress) {
            this.player2.winner();
          }
          break;

        case "grandma":
          this.botplayer.results();
          break;

        case "brian":
          this.botplayer.results();
          break;

        case "toretto":
          this.botplayer.results();

          break;
      }
    } else {
      this.background.drawRoad();
      this.background.update();
      this.player.drawPlayer();
      this.rpm.updateRpm();
      if (
        this.level === "grandma" ||
        this.level === "brian" ||
        this.level === "toretto"
      ) {
        this.botplayer.drawBot();
        this.rpm.updateBotRpm();
        if (
          this.rpm.botRevolutions > this.minRpm &&
          this.rpm.botRevolutions < this.maxRpm
        ) {
          this.botplayer.shift();
        }
      } else {
        this.player2.drawPlayer2();
        this.rpm.updateRpm2();
      }
    }
  }

  animation() {
    if (this.counter < 300) {
      this.counter++;
      console.log(this.counter);
    }
    if (this.counter >= 20 && this.counter < 300) {
      console.log("COUNTER");
      this.background.readySetGo();
    }
    if (this.counter >= 300) {
      this.updateEverything();
    }
    window.requestAnimationFrame(timestamp => this.animation(timestamp));
  }

  updateEverything() {
    if (this.level === "player2") {
      if (
        this.background.velocityX === 0 ||
        this.player.progress >= 100 ||
        this.player2.progress >= 100
      ) {
        this.gameover();
      }
    }
    if (
      this.level === "grandma" ||
      this.level === "brian" ||
      this.level === "toretto"
    ) {
      if (
        this.background.velocityX === 0 ||
        this.player.progress >= 100 ||
        this.botplayer.progress >= 100
      ) {
        this.gameover();
      }
    }
    this.drawEverything();
  }

  clearEverything() {
    // ...
  }

  restartGame() {
    switch (this.level) {
      case "grandma":
        console.log("this.level", this.level);

        this.startGame();
        this.maxRpm = 9000;
        this.minRpm = 7000;

        break;
      case "brian":
        console.log("this.level", this.level);
        this.startGame();
        this.maxRpm = 8800;
        this.minRpm = 7500;
        break;
      case "toretto":
        console.log("this.level", this.level);
        this.startGame();
        this.minRpm = 7775;
        this.maxRpm = 8525;
        break;
      case "player2":
        this.vsmode = true;
        this.startGame();
        break;
    }
  }

  gameover() {
    this.gamelost = true;
    this.started = false;
  }
}
