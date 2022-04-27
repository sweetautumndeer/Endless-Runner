// ---------------------------------------------
// Autumn Moulios, Ethan Nguyen, Em Coo
// ---------------------------------------------

class Menu extends Phaser.Scene
{
    constructor()
    {
        super("menuScene");
    }

    preload()
    {
        //load menu stuff here

    }

    create()
    {
        // menu text configuration
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#AA11AA',
            color: '#FF77FF',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        
        // show menu text
        this.add.text(game.config.width/2, game.config.height/2, 'Unnamed Pirate Runner', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2 + 50, 'Press \'Z\' to start!', menuConfig).setOrigin(0.5);

        // Define menu controls
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        keyZ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
        keyX = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X);

        // Code Taken From https://phaser.io/examples/v3/view/input/keyboard/konami-code-key-combo
        var combo = this.input.keyboard.createCombo([ Phaser.Input.Keyboard.KeyCodes.UP, Phaser.Input.Keyboard.KeyCodes.UP, 
                                                      Phaser.Input.Keyboard.KeyCodes.DOWN, Phaser.Input.Keyboard.KeyCodes.DOWN,
                                                      Phaser.Input.Keyboard.KeyCodes.LEFT, Phaser.Input.Keyboard.KeyCodes.RIGHT,
                                                      Phaser.Input.Keyboard.KeyCodes.LEFT, Phaser.Input.Keyboard.KeyCodes.RIGHT,
                                                      Phaser.Input.Keyboard.KeyCodes.B, Phaser.Input.Keyboard.KeyCodes.A,
                                                      Phaser.Input.Keyboard.KeyCodes.ENTER], { resetOnMatch: true });

        this.input.keyboard.on('keycombomatch', function (event) 
        {
            console.log('Konami Code entered!');
            playerConfig.gunMode = true; // enable gun mode
        });
    }

    update()
    {
        // User Input here
        if (Phaser.Input.Keyboard.JustDown(keyZ))
            this.scene.start("loadScene"); // load game
    }
}