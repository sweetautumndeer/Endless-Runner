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
        this.load.image('title', './assets/endlessrunnertitlescreen.png');
        this.load.image('logo', './assets/endlessrunner_logo.png');
        this.load.audio('menuselect', './assets/Menu.wav');
        
    }

    create()
    {
        menuselect = this.sound.add('menuselect');

        this.title_screen = this.add.tileSprite(0, 0, 1366, 768, 'title').setOrigin(0, 0).setScrollFactor(0);
        this.logo = this.add.image(60, 200, 'logo').setOrigin(0, 0);

        // menu text configuration
        let menuConfig = {
            fontFamily: 'Georgia',
            fontSize: '48px',
            //backgroundColor: '#AA11AA',
            color: '#ED1C24',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        this.game.config.currentScore = 0;
        
        this.game.config.highScore = 0;
        
        // show menu text
        //this.add.text(game.config.width/2, game.config.height/8, 'Sky Pirates', menuConfig).setOrigin(0.5);
        this.startText = this.add.text(game.config.width/2, game.config.height/2+50, 'Press \'Z\' to start!', menuConfig).setOrigin(0.5);

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
            playerConfig.health = 20;
        });
    }

    update()
    {
        // User Input here
        if (Phaser.Input.Keyboard.JustDown(keyZ))
        {
            menuselect.play();
            this.started = true;
            this.startText.destroy();
        }

        if (!menuselect.isPlaying && this.started)
        {
            this.scene.start("loadScene"); // load game
        }
    }
}