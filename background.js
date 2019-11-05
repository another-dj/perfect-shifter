class Background {
    constructor(game) {
        this.height = game.height
        this.width = game.width
        this.context = game.context
        this.x = 0;
        this.velocityX = -5;
  }
  
    drawRoad(){
        const context = this.context;

        context.fillStyle ="grey";
        context.fillRect(0, 367, 800, 183);
        for (let i = 8000; i>0; i-=120) {
            context.lineWidth = 10;
            context.strokeStyle = "white";
            context.beginPath();
            context.moveTo(i+this.x, 457);
            context.lineTo(i-50+this.x, 457);
            context.stroke();
            context.closePath();
            context.fillStyle="green"
            context.fillRect(this.x+1600, 490, 200, 50);
          }
          
    }

    update(){
        const context = this.context;
        context.clearRect(0, 457, this.width, 183);
        this.drawRoad();
        if (this.x === -7950){
            //this.x = 0;
            this.velocityX = 0;
        }else{ 
            this.x += this.velocityX;
        }
        
    }
}
