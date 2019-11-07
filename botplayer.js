class Botplayer {
  constructor(game, maxRpm, minRpm) {
    this.game = game;
    this.height = game.height;
    this.width = game.width;
    this.context = game.context;
    this.progress = 0;
    this.x = 45;
    this.img = new Image();
    this.gear = 1;
    this.velocityX = 0;
    this.maxRpm = maxRpm;
    this.minRpm = minRpm;
    this.randomNumber25 = this.randNumber25(this.minRpm, this.maxRpm);
    //this.batata = 0;
    this.img.src = "/mustang full.png";
  }
  drawBot() {
    //this.context.fillStyle = "purple";
    this.context.drawImage(this.img, this.x, 380, 210, 60);
  }

  randNumber25(minNum, maxNum) {
    let arrMultiples25 = [];
    for (let i = minNum; i <= maxNum; i++) {
      if (i % 25 === 0) arrMultiples25.push(i);
    }

    let randomIndex = Math.floor(Math.random() * arrMultiples25.length - 1);
    //console.log("result of random number", arrMultiples25[randomIndex]);
    return arrMultiples25[randomIndex];
  }

  shift() {
    // if (this.game.level === "grandma") {
    //   this.game.maxRpm = 7000;
    //   this.game.minRpm = 4000;
    // } else if (this.game.level === "brian") {
    //   this.game.maxRpm = 9000;
    //   this.game.minRpm = 6000;
    // } else if (this.game.level === "toretto") {
    //   this.game.maxRpm = 8500;
    //   this.game.minRpm = 7800;
    // }
    // console.log("RANDOM 25", randomNumber25);

    //FOR THE NORMAL SHIFT
    if (this.gear < 6)
      if (
        (this.progress < 100 && this.randomNumber25 < 7800) ||
        this.randomNumber25 > 8500
      ) {
        this.progress += 15;
        this.game.rpm.botRevolutions -= 4000;
        this.x += 2;
        this.gear++;
        this.velocityX = 1;

        console.log("PROGRESS", this.progress);
        console.log("NORML SHIFT", this.randomNumber25);
      }

      // PERFECT
      else if (
        this.progress < 100 &&
        (this.randomNumber25 >= 7800 && this.randomNumber25 <= 8500)
      ) {
        this.progress += 20;
        this.game.rpm.botRevolutions -= 3000;
        this.x += 20;
        this.gear++;
        this.velocityX = 3;
        console.log("PROGRESS", this.progress);
        console.log("PERFECT SHIFT", this.randomNumber25);
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
      console.log("x value:", this.x);
    // console.log("this.x", this.x);
    // console.log("this.x", this.x);
    if (
      this.game.rpm.botRevolutions < 7800 ||
      this.game.rpm.botRevolutions > 8500
    ) {
      if (this.x >= 95 && this.x < 96) {
        this.velocityX = 0;
        this.randomNumber25 = this.randNumber25(this.minRpm, this.maxRpm);
      }
      if (this.x >= 145 && this.x < 146) {
        this.velocityX = 0;
        this.randomNumber25 = this.randNumber25(this.minRpm, this.maxRpm);
      }
      if (this.x >= 195 && this.x < 196) {
        this.velocityX = 0;
        this.randomNumber25 = this.randNumber25(this.minRpm, this.maxRpm);
      }
      if (this.x >= 245 && this.x < 246) {
        this.velocityX = 0;
        this.randomNumber25 = this.randNumber25(this.minRpm, this.maxRpm);
      }
      if (this.x >= 295 && this.x < 296) {
        this.velocityX = 0;
        this.randomNumber25 = this.randNumber25(this.minRpm, this.maxRpm);
      }
      if (this.x >= 345 && this.x < 346) {
        this.velocityX = 0;
        this.randomNumber25 = this.randNumber25(this.minRpm, this.maxRpm);
      }
      if (this.x >= 395 && this.x < 396) {
        this.velocityX = 0;
        this.randomNumber25 = this.randNumber25(this.minRpm, this.maxRpm);
      }
      if (this.x >= 445 && this.x < 446) {
        this.velocityX = 0;
        this.randomNumber25 = this.randNumber25(this.minRpm, this.maxRpm);
      }
      this.x += this.velocityX;
    } else if (
      this.game.rpm.botrevolutions >= 7800 &&
      this.game.rpm.botrevolutions <= 8500
    ) {
      //perfect shift
      if (this.x >= 145 && this.x <= 147) {
        this.velocityX = 0;
        this.randomNumber25 = this.randNumber25(this.minRpm, this.maxRpm);
      }
      if (this.x >= 245 && this.x <= 247) {
        this.velocityX = 0;
        this.randomNumber25 = this.randNumber25(this.minRpm, this.maxRpm);
      }
      if (this.x >= 345 && this.x <= 347) {
        this.velocityX = 0;
        this.randomNumber25 = this.randNumber25(this.minRpm, this.maxRpm);
      }
      if (this.x >= 445 && this.x <= 447) {
        this.velocityX = 0;
        this.randomNumber25 = this.randNumber25(this.minRpm, this.maxRpm);
      }
      if (this.x >= 545 && this.x <= 547) {
        this.velocityX = 0;
        this.randomNumber25 = this.randNumber25(this.minRpm, this.maxRpm);
      }
      this.x += this.velocityX;
    }
  }
}
