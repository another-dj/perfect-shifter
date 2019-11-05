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
                    
                    console.log(game.player.progress);
                    break;
            }
        });

        window.addEventListener("keydown", event => {
            switch (event.keyCode) {
                //ENTER
                case 13:
                   //this.player.shift()
                    break;
            }
        });
    }
}