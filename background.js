class Background {
    constructor(game) {
        this.height = game.height
        this.width = game.width
        this.context = game.context
        this.x = 0;
        this.velocityX = -5;
        this.game = game;
  }
  
    drawRoad(){
        const context = this.context;
        
        context.fillStyle ="grey";
        context.fillRect(0, 367, 800, 183);
        for (let i = 7000; i>0; i-=120) {
            context.lineWidth = 10;
            context.strokeStyle = "white";
            context.beginPath();
            context.moveTo(i+this.x, 457);
            context.lineTo(i-50+this.x, 457);
            context.stroke();
            context.closePath();
            context.fillStyle="green"
            context.fillRect(this.x+7000, 367, 25, 183);
          }
          
    }

    update(){
        const context = this.context;
        context.clearRect(0, 457, this.width, 183);
        this.drawRoad();
        if (this.x === -6950){
            //this.x = 0;
            this.velocityX = 0;
        }else{ 
            this.x += this.velocityX;
        }
        }

        readySetGo(){
            //const context = this.context;
           // this.context.save()
            this.context.fillStyle="orange";
            this.context.font = "150px palatino"
            this.context.clearRect(0,0,this.width,this.height)
            if (this.game.counter>=80){
                this.context.clearRect(0,0,this.width,this.height)
                this.context.fillText('3',this.width/2.4,this.height/3)
            } if(this.game.counter>=140){
                this.context.clearRect(0,0,this.width,this.height)
                this.context.fillText('2',this.width/2.4,this.height/3)
            } if(this.game.counter>=210){
                this.context.clearRect(0,0,this.width,this.height)
                this.context.fillText('1',this.width/2.4,this.height/3)
            } if(this.game.counter>=280){
                this.context.clearRect(0,0,this.width,this.height)
                this.context.fillText('GO!',this.width/3,this.height/3)
            } if (this.game.counter>=299){
                
                this.context.clearRect(0,0,this.width,this.height)
            }
           // this.context.restore();
        }
}
