class Rpm {
    constructor(game) {
        this.context = game.context;
        this.revolutions = 900;
        this.botRevolutions = 900
        this.ratio = 25;
    }

    drawRpm() {
        this.context.save()
        this.context.strokeStyle = "brown";
        this.context.strokeRect(10, 10, 150, 63);
        this.context.font = "40px arial"
        this.context.fillStyle = "orange"
        this.context.fillText(this.revolutions, 37, 60)
        this.context.restore()
    }
    drawBotRpm(){
        
        this.context.save()
        this.context.strokeStyle = "brown";
        this.context.strokeRect(635, 10, 150, 63);
        
        this.context.font = "40px arial"
        this.context.fillStyle = "orange"
        this.context.fillText(this.botRevolutions, 635+37, 60)
        this.context.restore()
    }

    updateRpm() {
        if (this.revolutions<=9001){
            
        
        //for (let i = 0; i < 10; i++) {
            
            this.context.save()
            this.context.clearRect(10, 10, 150, 63);

            this.drawRpm();
            this.revolutions += this.ratio;
            //console.log(this.revolutions);
            this.context.restore()
        }
    }

    updateBotRpm() {
        if (this.botRevolutions<=9001){
            
        
        //for (let i = 0; i < 10; i++) {
            
            this.context.save()
            this.context.clearRect(635, 10, 150, 63);

            this.drawBotRpm();
            this.botRevolutions += this.ratio;
            //console.log(this.revolutions);
            this.context.restore()
        }
    }
}