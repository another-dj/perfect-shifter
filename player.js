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
    this.y = 490;
    //this.yy = 380
    this.velocityX = 0;
    this.img = new Image();
    //this.img.src = "";
  }

  drawPlayer() {
    this.context.fillStyle = "red";
    this.context.fillRect(this.x, this.y, 200, 50);
  }

  /*drawPlayer2(){
    this.context.fillStyle = "blue";
    this.context.fillRect(this.xx, this.yy, 200, 50)
  }*/

  shift() {
    if (this.game.rpm.revolutions > 4000)
      if (
        this.progress < 100 &&
        (this.game.rpm.revolutions < 8500 && this.game.rpm.revolutions > 7800)
      ) {
        this.progress += 20;

        this.game.rpm.revolutions -= 3000;
        this.x += 100;
        console.log("PROGRESS", this.progress);
        console.log("PERFECT SHIFT", this.game.rpm.revolutions);
      } else if (this.progress < 100) {
        this.progress += 13;
        this.game.rpm.revolutions -= 4000;
        //this.x += 10;
        this.x += 20;
        this.velocityX = 4;

        if (this.game.rpm.revolutions >= 8999) {
          this.game.rpm.revolutions = 8500;
        }
        console.log("PROGRESS", this.progress);
        console.log("NORMAL SHIFT", this.game.rpm.revolutions);
      }
  }

  winner() {
    // if (this.player.progress>this.player2.progress){
    this.context.clearRect(0, 0, this.width, this.height);
    this.context.font = "100px lucida console";
    this.context.fillStyle = "green";
    this.context.fillText("Player 1 WINS", 135, 180);
    this.game.started = false;
    //this.game.gamelost = false;
    // }else if (this.player2.progress>this.player.progress){
    //  this.background.context.fillText('Player 2 WINS', 135, 180)
  }
  acceleration() {
    // console.log("this.x", this.x);
    // console.log("this.x", this.velocityX);

    if (this.x >= 200 && this.x <= 215) {
      this.velocityX = 0;
    }
    if (this.x >= 300 && this.x <= 315) {
      this.velocityX = 0;
    }
    if (this.x >= 400 && this.x <= 415) {
      this.velocityX = 0;
    }
    this.x += this.velocityX;
  }
}
