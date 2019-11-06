class Player2 {
  constructor(game) {
    this.game = game
    this.height = game.height;
    this.width = game.width;
    this.context = game.context;
    this.x = 45;
    //this.xx = 45;
    this.progress = 0;
    //this.progress2 = 0;
    this.y = 380
    //this.yy = 380
    //this.acceleration = 
    this.img = new Image();
    //this.img.src = "";
  }

  drawPlayer2() {
    this.context.fillStyle = "blue";
    this.context.fillRect(this.x, this.y, 200, 50);
  }

  /*drawPlayer2(){
    this.context.fillStyle = "blue";
    this.context.fillRect(this.xx, this.yy, 200, 50)
  }*/

  
  shift() {
    if(this.game.rpm.revolutions2>4000)
    if (this.progress < 100 && (this.game.rpm.revolutions2 < 8500 && this.game.rpm.revolutions2 > 7800)) {
      this.progress += 20;
      
      this.game.rpm.revolutions2 -= 3000;
      this.x +=100;
      console.log("PROGRESS",this.progress);
      console.log("PERFECT SHIFT",this.game.rpm.revolutions2)
    } else if (this.progress < 100) {
      this.progress += 13;
      this.game.rpm.revolutions2 -= 4000
      this.x +=10;
      
      console.log("PROGRESS",this.progress);
      console.log("NORMAL SHIFT",this.game.rpm.revolutions2)
    }
    //}
}

winner(){
  if (this.player.progress<this.player2.progress){
    this.game.background.context.clearRect(0, 0, this.width, this.height);
    this.game.background.context.font = "100px lucida console"
    this.game.background.context.fillStyle = "blue"
    this.game.background.context.fillText('Player 2 WINS', 135, 180)

}
}
}