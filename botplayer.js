class Botplayer {
    constructor(game) {
        this.height = game.height;
        this.width = game.width;
        this.context = game.context;
        this.progress = 0;
        
        this.img = new Image();
      
      //this.img.src = "";
    }
    drawBot(){
      this.context.fillStyle = "blue";
      this.context.fillRect(45, 380, 200, 50)
    }
    updateBot(){
      
    }
}