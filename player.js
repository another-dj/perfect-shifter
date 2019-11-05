class Player {
  constructor(game) {
    this.game = game
    this.height = game.height;
    this.width = game.width;
    this.context = game.context;
    this.x = 45;
    this.progress = 0;


    //this.acceleration = 

    this.img = new Image();

    //this.img.src = "";
  }

  drawPlayer() {
    this.context.fillStyle = "red";
    this.context.fillRect(this.x, 490, 200, 50);
  }

  shift() {

    if (this.progress < 100 && (this.game.rpm.revolutions < 8500 && this.game.rpm.revolutions > 7800)) {
      this.progress += 19;
      this.game.rpm.revolutions -= 3400;
      console.log("FIRST CONDITION",this.progress);
      console.log("FIRST CONDITION",this.game.rpm.revolutions)
    } else if (this.progress < 100) {
      this.progress += 12;
      this.game.rpm.revolutions -= 3800
      console.log("SECOND  CONDITION",this.progress);
      console.log("SECOND  CONDITION",this.game.rpm.revolutions)
    }
  }
}