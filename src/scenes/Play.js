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
        this.load.atlas('ship', './assets/shipspritesheet.png', './assets/shipsprites.json');

        /*this.load.image('player', './assets/ship_sprite1.png');
        this.load.image('playerframe2', './assets/ship_sprite2.png');
        this.load.image('playerframe3', './assets/ship_sprite3.png');*/
        this.load.image('sky_bg', './assets/sky_bg.png');
        this.load.image('clouds', './assets/clouds.png');
        this.load.image('shork', './assets/shork.png');
        this.load.image('heart', './assets/Heart.png');
        this.load.image('gun', './assets/gun_png_by_xx_thanosbeatbox_xx_ddxajtn-fullview.png')
    }

    create()
    {
        // initialize animations
        var shipframes = this.anims.generateFrameNames('ship', { prefix: 'ship', start: 0, end: 1, zeroPad: 2})
        this.anims.create({ key: 'sails', frames: shipframes, frameRate: 4, repeat: -1 });
        var shiphurts = this.anims.generateFrameNames('ship', { prefix: 'shiphurt', start: 1, end: 2, zeroPad: 2 });
        this.anims.create({ key: 'hurt', frames: shiphurts, frameRate: 6, repeat: 3});

        //defines background
        this.background = this.add.tileSprite(0, 0, 2600, 768, 'sky_bg').setOrigin(0, 0);
        this.clouds = this.add.tileSprite(0, 0, 1366, 768, 'clouds').setOrigin(0, 0);
        console.log("play scene!!");

        //player definition
        this.player = new Player(this, game.config.width/8, game.config.height/2, 'ship').play('sails');
        this.obstacle1 = new Obstacle(this, game.config.width, game.config.height/2 - 50, 'shork', 0, 1).setOrigin(0,0);
        this.obstacle1.setScale(3);
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
        this.scoreLeft = this.add.text(game.config.width/16, game.config.height/16, this.p1Score, scoreConfig);

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
        this.heartArray = [];
        let initialHeartOffset = 60;
        let heartOffset = 70 - 2 * playerConfig.health;
        for (let i = 0; i < playerConfig.health; ++i)
        {
            this.heartArray.push(this.add.sprite(game.config.width - initialHeartOffset - heartOffset * i, game.config.height/16, 'heart'))
        }

    }

    update()
    {
        this.currentTime = game.getTime();
        deltaT = (this.currentTime - this.startTime) / 1000; // change in time in seconds
        this.startTime = this.currentTime;
        if (currentSpeed >= playerConfig.maxMoveSpeed)
            currentSpeed = playerConfig.maxMoveSpeed;
        else
            currentSpeed += playerConfig.moveSpeedIncreasePerSecond * deltaT;

        // background scrolling
        this.background.tilePositionX += currentSpeed * deltaT;
        this.clouds.tilePositionX += currentSpeed * deltaT * 1.5;

        if (keyDOWN.isDown || keyUP.isDown)
        {
            this.tutorial.destroy();
        }

        if(this.checkCollision(this.player, this.obstacle1)){
            console.log("hit");
            this.obstacle1.destroy()
            this.obstacle1 = this.spawnNewObstacle();

            // play damage animation
            this.player.play('hurt');
            this.player.on('animationcomplete', () => {    // callback after anim completes
                this.player.play('sails');
            });

            if(this.heartArray != 0){
                this.damagedHeart = this.heartArray.pop()
                this.damagedHeart.destroy()
            }
            if(this.heartArray.length == 0){
                console.log("game over")
            }
        }

        if(this.obstacle1.OutOfBounds){
            console.log("out of bounds");
            this.obstacle1.destroy()
            this.obstacle1 = this.spawnNewObstacle();
        }
        
    
        this.player.update();
        this.obstacle1.update();
        this.updateScore();
    }

    updateScore(){
        this.p1Score += currentSpeed / 100;
        this.scoreLeft.text  = Math.floor(this.p1Score);
    }

    checkCollision(player, obstacle) {
        // simple AABB checking
        if (player.x < obstacle.x + obstacle.width && 
            player.x + player.width > obstacle.x && 
            player.y < obstacle.y + obstacle.height &&
            player.height + player.y > obstacle.y) {
                return true;
        } else {
            return false;
        }
    }

    spawnNewObstacle(){
        return new Obstacle(this, game.config.width, game.config.height/2 - 50, 'shork', 0, 1).setOrigin(0,0);
    }
   
}