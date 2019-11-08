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
    this.maxRpm = 7000;
    this.minRpm = 4000;
    this.level = "grandma";
    this.gamelost = false;
    this.vsmode = false;
    this.winner = [];
    //this.secondPlayer = false;
  }

  rpmLoop() {
    this.updateEverything();
    this.drawEverything();
  }

  startGame() {
    //debugger;
    this.gamelost = false;
    this.started = true;
    //this.rpmLoop();
    if (this.level === "player2") {
      this.player2 = new Player2(this);
    } else if (this.level === "grandma") {
      this.botplayer = new Botplayer(this, 7000, 4000);
    } else if (this.level === "brian") {
      this.botplayer = new Botplayer(this, 9000, 6000);
    } else if (this.level === "toretto") {
      this.botplayer = new Botplayer(this, 8500, 7800);
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
          if (this.player.progress>this.player2.progress) {
            this.player.winner();
          } else if (this.player.progress<this.player2.progress) {
            this.player2.winner();
          } 
          else if (this.player.progress === this.player2.progress) {
            this.context.clearRect(0, 0, this.width, this.height);
            this.context.font = "80px lucida console";
            this.context.fillStyle = "white";
            this.context.fillText("IT'S A DRAW", 135, 180);
            this.started = false;
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
        //this.botplayer.acceleration();
        if (this.rpm.botRevolutions === this.botplayer.randomNumber25) {
          console.log("random25", this.botplayer.randomNumber25);
          console.log("RPM REVOLUTIONS", this.rpm.botRevolutions);
          this.botplayer.shift();
        }
      } else {
        this.player2.drawPlayer2();
        this.rpm.updateRpm2();
        //this.player2.acceleration();
      }
    }
  }

  animation() {
    if (this.counter < 300) {
      this.counter++;
      // console.log(this.counter);
    }
    if (this.counter >= 20 && this.counter < 300) {
      // console.log("COUNTER");
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
        this.background.velocityX === 0
        //this.player.progress >= 100 ||
        //this.player2.progress >= 100
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
        this.background.velocityX === 0
        //this.player.progress >= 100 ||
        //this.botplayer.progress >= 100
      ) {
        this.gameover();
      }
    }
    this.drawEverything();
    this.player.acceleration();
    if (
      this.level === "grandma" ||
      this.level === "brian" ||
      this.level === "toretto"
    ) {
      this.botplayer.acceleration();
    } else {
      this.player2.acceleration();
    }
  }

  clearEverything() {
    // ...
  }

  restartGame() {
    switch (this.level) {
      case "grandma":
        console.log("this.level", this.level);

        this.startGame();

        break;
      case "brian":
        console.log("this.level", this.level);
        this.startGame();

        break;
      case "toretto":
        console.log("this.level", this.level);
        this.startGame();

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
