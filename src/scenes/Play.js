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
        this.load.image('player', './assets/ship_sprite1.png');
        this.load.image('playerframe2', './assets/ship_sprite2.png');
        this.load.image('playerframe3', './assets/ship_sprite3.png');
        this.load.image('tempBackground', './assets/tempBackground.png');
        this.load.image('heart', './assets/heart.png');
    }

    create()
    {
        // initialize animation
        this.anims.create({
            key: 'waves',
            frames: [
               {key: 'player'},
               {key: 'playerframe2'},
               {key: 'playerframe3'}
            ],
            frameRate: 6,
            repeat: -1
        });     

        //defines background
        this.background = this.add.tileSprite(0, 0, 1366, 768, 'tempBackground').setOrigin(0, 0);
        console.log("play scene!!");

        //player definition
        this.player = new Player(this, game.config.width/8, game.config.height/2, 'player').play('waves');
        this.moveSpeed = this.player.playerConfig.initMoveSpeed;
        this.startTime = game.getTime();
        this.currentTime = this.startTime;

        // Define game controls
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        keyZ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
        keyX = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X);

        // initialize score
        this.p1Score = 0;

        // display score
        let scoreConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 100
        }
        this.scoreLeft = this.add.text(game.config.width/3, game.config.height/3, this.p1Score, scoreConfig);
        // small tutorial
        let tutorialConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            }
        }
        this.tutorial = this.add.text(game.config.width/2 , game.config.height/2, "Use ↑ and ↓ to move", tutorialConfig);

        // Health UI
        this.heart1 = this.add.sprite(game.config.width - 50, game.config.height/16, 'heart');
        this.heart2 = this.add.sprite(game.config.width - 120, game.config.height/16, 'heart');
        this.heart3 = this.add.sprite(game.config.width - 190, game.config.height/16, 'heart');
    }

    update()
    {
        this.player.update();
        this.updateScore();

        this.currentTime = game.getTime();
        this.deltaT = (this.currentTime - this.startTime) / 1000; // change in time in seconds
        this.startTime = this.currentTime;
        if (this.moveSpeed >= this.player.playerConfig.maxMoveSpeed)
            this.moveSpeed = this.player.playerConfig.maxMoveSpeed;
        else
            this.moveSpeed += this.player.playerConfig.moveSpeedIncreasePerSecond * this.deltaT;

        this.background.tilePositionX += this.moveSpeed * this.deltaT * 100;

        if (keyDOWN.isDown || keyUP.isDown)
        {
            console.log("h");
            this.tutorial.destroy();
        }
            
    }

    updateScore(){
        this.p1Score += 1/5 * this.moveSpeed;
        this.scoreLeft.text  = Math.floor(this.p1Score);
    }
}