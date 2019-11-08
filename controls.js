let audio = new Audio("/gear up lambo.mp3");
let audio2 = new Audio("/gear up lambo.mp3");
class Controls {
  constructor(game) {
    this.game = game;
    this.player = this.game.player;
    //this.player2 = this.game.player2;
  }

  

  setControls() {
    window.addEventListener("keydown", event => {
      if (event.keyCode === 32 || event.keyCode === 13) {
        event.preventDefault();
        switch (event.keyCode) {
          //SPACEBAR
          case 32:
              
            if (audio.paused) {
              audio.play();
            } else {
              audio.currentTime = 0;
            }
            this.game.player.shift();
            console.log(game.player.progress);
            break;
          //ENTER
          case 13:
              
                if (audio2.paused) {
                    audio2.play();
                  } else {
                    audio2.currentTime = 0;
                  }
            this.game.player2.shift();
            console.log(game.player2.progress);
            break;
        }
      }
    });
  }
}
