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
      this.context.fillStyle = "black";
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
        this.progress += 19;
        this.game.rpm.botRevolutions -= 3200;
        this.x +=100;
        console.log("FIRST CONDITION",this.progress);
        console.log("FIRST CONDITION",this.randNumber25(this.game.minRpm, this.game.maxRpm))
      } else if ((this.progress < 100) && (this.randNumber25(this.game.minRpm, this.game.maxRpm) <9001)) {
        this.progress += 12;
        this.game.rpm.botRevolutions -= 3800
        this.x +=9;
        console.log("SECOND  CONDITION",this.progress);
        console.log("SECOND  CONDITION",this.randNumber25(this.game.minRpm, this.game.maxRpm))
      }
      }
    }

    //updateBot()
    
