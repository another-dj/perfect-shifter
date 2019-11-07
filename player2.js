class Player2 {
  constructor(game) {
    this.game = game;
    this.height = game.height;
    this.width = game.width;
    this.context = game.context;
    this.x = 45;
    this.gear = 1;
    this.progress = 0;
    this.velocityX = 0;
    this.y = 370;
    //this.yy = 380
    //this.acceleration =
    this.img = new Image();
    this.img.src = "/PNGPIX-COM-Aston-Martin-Vantage-GT4-White-Car-PNG-Image.png";
  }

  drawPlayer2() {
    
    this.context.drawImage(this.img, this.x, this.y,210,75);
  }

  /*drawPlayer2(){
    this.context.fillStyle = "blue";
    this.context.fillRect(this.xx, this.yy, 200, 50)
  }*/

  shift() {
    if (this.game.rpm.revolutions2 > 4000 && this.gear < 6)
      if (
        this.progress < 100 &&
        (this.game.rpm.revolutions2 <=8500 && this.game.rpm.revolutions2 >=7800)
      ) {
        this.progress += 20;
        this.game.rpm.revolutions2 -= 3000;
        this.gear++;
        this.x += 50;
        this.velocityX = 3;
        console.log("PROGRESS", this.progress);
        console.log("PERFECT SHIFT", this.game.rpm.revolutions2);
      } else if (this.progress < 100) {
        this.progress += 15;
        this.game.rpm.revolutions2 -= 4000;
        // ACCELERATION LOGIC
        this.velocityX = 1;
        // --------------
        this.gear++;
        this.x += 2;
        console.log("PROGRESS", this.progress);
        console.log("NORMAL SHIFT", this.game.rpm.revolutions2);
      }
    //}
  }

  winner() {
    //if (this.progress<this.player2.progress){
    this.game.background.context.clearRect(0, 0, this.width, this.height);
    this.game.background.context.font = "50px lucida console";
    this.game.background.context.fillStyle = "blue";
    this.game.background.context.fillText("Player 2 WINS", 135, 180);

    //}
  }
  acceleration() {
    //console.log("x value:", this.x);
    // console.log("this.x", this.x);
    // console.log("this.x", this.velocityX);
    if (this.game.rpm.revolutions2 < 7800 && this.game.rpm.revolutions2 > 8500) {
      if (this.x === 95) {
        this.velocityX = 0;
      }
      if (this.x === 145) {
        this.velocityX = 0;
      }
      if (this.x === 195) {
        this.velocityX = 0;
      }
      if (this.x === 245) {
        this.velocityX = 0;
      }
      if (this.x === 295) {
        this.velocityX = 0;
      }
      this.x += this.velocityX;
    }
    /* else if (this.game.rpm.revolutions2 > 7800 && this.game.rpm.revolutions2 < 8500){
      if (this.x >=95 && this.x<145){
        this.velocityX = 0;
      }
      if (this.x >=145 && this.x<195){
        this.velocityX = 0;
      }
      if (this.x >=195 && this.x<245){
        this.velocityX = 0;
      }
      if (this.x >=245 && this.x<295){
        this.velocityX = 0;
      }
      if (this.x >=295 && this.x<345){
        this.velocityX = 0;
      }
      this.x += this.velocityX;
    } */
  }
}
