class Botplayer {
    constructor(game) {
        this.game = game
        this.height = game.height;
        this.width = game.width;
        this.context = game.context;
        this.progress = 0;
        this.x = 45;
        this.img = new Image();
      
      //this.img.src = "";
    }
    drawBot(){
      this.context.fillStyle = "purple";
      this.context.fillRect(this.x, 380, 200, 50)
    }

    randNumber25(minNum,maxNum){
      let arrMultiples25 =  []
      for(let i = minNum; i <= maxNum; i++){
      if(i % 25===0)
      arrMultiples25.push(i)
      }
    
      let randomIndex = Math.floor(Math.random() * arrMultiples25.length-1)
    
      return arrMultiples25[randomIndex]
    }
    
    

    shift() {
      
      if ((this.progress < 100) && (this.randNumber25(this.game.minRpm, this.game.maxRpm) >=7800 && this.randNumber25(this.game.minRpm, this.game.maxRpm) <=8500)) {
        this.progress += 20;
        this.game.rpm.botRevolutions -= 3000;
        this.x +=100;
        console.log("PROGRESS",this.progress);
        console.log("PEFECT SHIFT",this.randNumber25(this.game.minRpm, this.game.maxRpm))
      } else if ((this.progress < 100) && (this.randNumber25(this.game.minRpm, this.game.maxRpm) <9001)) {
        this.progress += 13;
        this.game.rpm.botRevolutions -= 4000
        this.x +=10;
        console.log("PROGRESS",this.progress);
        console.log("NORMAL SHIFT",this.randNumber25(this.game.minRpm, this.game.maxRpm))
      }
      }

      results(){
        if (this.game.player.progress > this.progress) {
          this.game.background.context.clearRect(0, 0, this.width, this.height);
          this.game.background.context.font = "100px lucida console"
          this.game.background.context.fillStyle = "green"
          this.game.background.context.fillText('YOU WIN', 150, 180);
        } else {
          this.game.background.context.clearRect(0, 0, this.width, this.height);
          this.game.background.context.font = "100px lucida console"
          this.game.background.context.fillStyle = "red"
          this.game.background.context.fillText('YOU LOSE', 135, 180);
        }
      }

    }

    
    
