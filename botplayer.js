class Botplayer {
  constructor(game) {
    this.game = game;
    this.height = game.height;
    this.width = game.width;
    this.context = game.context;
    this.progress = 0;
    this.x = 45;
    this.img = new Image();
    this.gear = 1;
    this.velocityX = 0;
    //this.img.src = "";
  }
  drawBot() {
    this.context.fillStyle = "purple";
    this.context.fillRect(this.x, 380, 200, 50);
  }

  randNumber25(minNum, maxNum) {
    let arrMultiples25 = [];
    for (let i = minNum; i <= maxNum; i++) {
      if (i % 25 === 0) arrMultiples25.push(i);
    }

    let randomIndex = Math.floor(Math.random() * arrMultiples25.length - 1);
    // console.log("result of random number", arrMultiples25[randomIndex]);
    return arrMultiples25[randomIndex];
  }

  shift() {
    if (this.game.level === "grandma") {
      this.game.maxRpm = 7000;
      this.game.minRpm = 4000;
    }
    let randomNumber25 = this.randNumber25(this.game.minRpm, this.game.maxRpm);
    // console.log("RANDOM 25", randomNumber25);
    if (this.gear < 6)
      if (
        this.progress < 100 &&
        randomNumber25 > this.game.minRpm &&
        randomNumber25 < this.game.maxRpm
      ) {
        // if (
        //   this.progress < 100 &&
        //   //this.randNumber25(this.game.minRpm, this.game.maxRpm) < 9001 &&
        //   this.randNumber25(this.game.minRpm, this.game.maxRpm) > 900 &&
        //   this.randNumber25(this.game.minRpm, this.game.maxRpm) < 7800
        // )

        this.progress += 15;
        this.game.rpm.botRevolutions -= 4000;
        this.x += 2;
        this.gear++;
        this.velocityX = 1;
        console.log("PROGRESS", this.progress);
        console.log("NORML SHIFT", randomNumber25);
      } else if (
        this.progress < 100 &&
        (randomNumber25 >= 7800 && randomNumber25 <= 8500)
      ) {
        this.progress += 20;
        this.game.rpm.botRevolutions -= 3000;
        this.x += 100;
        this.gear++;
        this.velocityX = 3;
        console.log("PROGRESS", this.progress);
        console.log("PEFECT SHIFT", randomNumber25);
      }
  }

  results() {
    if (this.game.player.progress > this.progress) {
      this.game.background.context.clearRect(0, 0, this.width, this.height);
      this.game.background.context.font = "100px lucida console";
      this.game.background.context.fillStyle = "green";
      this.game.background.context.fillText("YOU WIN", 150, 180);
    } else {
      this.game.background.context.clearRect(0, 0, this.width, this.height);
      this.game.background.context.font = "100px lucida console";
      this.game.background.context.fillStyle = "red";
      this.game.background.context.fillText("YOU LOSE", 135, 180);
    }
  }

  acceleration() {
    //console.log("x value:", this.x);
    // console.log("this.x", this.x);
    // console.log("this.x", this.x);
    if (this.game.rpm.botRevolutions < 9000) {
      if (this.x === 95) {
        this.velocityX = 0;
        console.log("reached a interval");
      }
      if (this.x === 145) {
        this.velocityX = 0;
        console.log("reached a interval");
      }
      if (this.x === 195) {
        this.velocityX = 0;
        console.log("reached a interval");
      }
      if (this.x === 245) {
        this.velocityX = 0;
        console.log("reached a interval");
      }
      if (this.x === 295) {
        this.velocityX = 0;
      }
      this.x += this.velocityX;
    }
  }
}
