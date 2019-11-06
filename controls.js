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
                        this.player.shift()
                        console.log(game.player.progress);
                        break;
                    case 13:
                        this.game.player2.shift()
                        console.log(game.player2.progress)
                        break;
                }
            }
        });
    }
}