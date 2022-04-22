// ---------------------------------------------
// Autumn Moulios, Ethan Nguyen, Em Coo
// ---------------------------------------------

class Play extends Phaser.Scene
{
    constructor()
    {
        super("playScene");
    }

    preload()
    {
        this.load.image('player', './assets/tempChar.png');
        this.load.image('player', './assets/tempBackground.png');
    }

    create()
    {
        this.background = this.add.tileSprite(0, 0, 1366, 768, 'background').setOrigin(0, 0);
        console.log("play scene!!");

        this.player = new Player(this, game.config.width/2, game.config.height/2, 'player');

        // Define game controls
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        keyZ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
        keyX = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X);
    }

    update()
    {
        this.player.update();
    }
}