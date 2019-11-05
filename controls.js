class Controls {
    constructor(game) {
        this.game = game;
        this.player = this.game.player;
    }

    setControls() {
        window.addEventListener("keydown", event => {
            event.preventDefault();
            switch (event.keyCode) {
                //SPACEBAR
                case 32:
                    this.player.shift()
                    //this.game.isAccelerating = true;
                    //this.game.player= "player shifts, and accelerates"
                    console.log(game.player.progress);
                    break;
            }
        });

        window.addEventListener("keyup", event => {
            switch (event.keyCode) {
                //SPACEBAR
                case 32:
                    //this.game.isAccelerating = false;
                    //this.game.player="player decelerates"
                    break;
            }
        });
    }
}