class Player {
  constructor(game) {
    this.game = game;
    this.height = game.height;
    this.width = game.width;
    this.context = game.context;
    this.x = 45;
    //this.xx = 45;
    this.progress = 0;
    //this.progress2 = 0;
    this.y = 480;
    //this.yy = 380
    this.velocityX = 0;
    this.img = new Image();
    this.img.src =
      "/PNGPIX-COM-Red-Lamborghini-Huracan-Sports-Car-PNG-Image.png";
    this.gear = 1;
  }

  drawPlayer() {
    //this.context.fillStyle = "red";
    this.context.drawImage(this.img, this.x, this.y, 210, 65);
  }

  /*drawPlayer2(){
    this.context.fillStyle = "blue";
    this.context.fillRect(this.xx, this.yy, 200, 50)
  }*/

  shift() {
    if (this.game.rpm.revolutions > 4000 && this.gear < 6)
    
      if (
        this.progress < 100 &&
        (this.game.rpm.revolutions <= 8500 && this.game.rpm.revolutions >= 7800)
      ) {
        this.progress += 20;
        this.gear++;
        this.game.rpm.revolutions -= 3000;
        this.x += 20;
        this.velocityX = 3;

        console.log("PROGRESS", this.progress);
        console.log("PERFECT SHIFT", this.game.rpm.revolutions);
      } else if (this.progress < 100) {
        this.progress += 15;
        this.game.rpm.revolutions -= 4000;
        this.x += 10;
        this.velocityX = 2;
        this.gear++;

        console.log("PROGRESS", this.progress);
        console.log("NORMAL SHIFT", this.game.rpm.revolutions);
      }
  }

  winner() {
    // if (this.player.progress>this.player2.progress){
    this.context.clearRect(0, 0, this.width, this.height);
    this.context.font = "60px lucida console";
    this.context.fillStyle = "green";
    this.context.fillText("Player 1 WINS", 135, 180);
    this.game.started = false;
    //this.game.gamelost = false;
    // }else if (this.player2.progress>this.player.progress){
    //  this.background.context.fillText('Player 2 WINS', 135, 180)
  }
  acceleration() {
    console.log("player x", this.x);

    //console.log("x value:", this.x);
    // console.log("this.x", this.x);
    //console.log("this.xvelocity", this.velocityX);
    if (this.game.rpm.revolutions < 7800 || this.game.rpm.revolutions > 8500) {
      //normal shift
      if (this.x >= 95 && this.x < 96) {
        this.velocityX = 0;
      }
      if (this.x >= 145 && this.x < 146) {
        this.velocityX = 0;
      }
      if (this.x >= 195 && this.x < 196) {
        this.velocityX = 0;
      }
      if (this.x >= 245 && this.x < 246) {
        this.velocityX = 0;
      }
      if (this.x >= 295 && this.x < 296) {
        this.velocityX = 0;
      }
      if (this.x >= 345 && this.x < 346) {
        this.velocityX = 0;
      }
      if (this.x >= 395 && this.x < 396) {
        this.velocityX = 0;
      }
      this.x += this.velocityX;
    } else if (
      this.game.rpm.revolutions >= 7800 &&
      this.game.rpm.revolutions <= 8500
    ) {
      //perfect shift
      if (this.x >= 145 && this.x <= 147) {
        this.velocityX = 0;
      }
      if (this.x >= 245 && this.x <= 247) {
        this.velocityX = 0;
      }
      if (this.x >= 345 && this.x <= 347) {
        this.velocityX = 0;
      }
      if (this.x >= 445 && this.x <= 447) {
        this.velocityX = 0;
      }
      if (this.x >= 545 && this.x <= 547) {
        this.velocityX = 0;
      }
      this.x += this.velocityX;
    }
    //console.log(this.x)
  }
}
