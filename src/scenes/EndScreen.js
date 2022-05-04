// ---------------------------------------------
// Autumn Moulios, Ethan Nguyen, Em Coo
// ---------------------------------------------
class EndScreen extends Phaser.Scene
{
    constructor()
    {
        super("endScene");
    }

    preload()
    {
        this.load.image('title', './assets/endlessrunnertitlescreen.png');
        
    }

    create()
    {
        this.title_screen = this.add.tileSprite(0, 0, 1366, 768, 'title').setOrigin(0, 0).setScrollFactor(0);

        // menu text configuration
        let menuConfig = {
            fontFamily: 'Georgia',
            fontSize: '40px',
            //backgroundColor: '#AA11AA',
            color: '#ED1C24',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        keyZ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
        
        // show menu text
        console.log(this.game.config.currentScore);
        
        console.log(this.game.config.highScore);
        if(this.game.config.currentScore > this.game.config.highScore){
          this.game.config.highScore = this.game.config.currentScore;     
          this.add.text(game.config.width/2, game.config.height/2, 'New High Score: ' +  this.game.config.highScore, menuConfig).setOrigin(0.5);
          this.add.text(game.config.width/2, game.config.height/2 + 75, 'Press \'Z\' to restart', menuConfig).setOrigin(0.5);      
        }
        else{
            this.add.text(game.config.width/2, game.config.height/2 - 75, 'High Score: ' + this.game.config.highScore, menuConfig).setOrigin(0.5);
            this.add.text(game.config.width/2, game.config.height/2, 'Your Score: ' + this.game.config.currentScore, menuConfig).setOrigin(0.5);
            this.add.text(game.config.width/2, game.config.height/2 + 75, 'Press \'Z\' to restart!', menuConfig).setOrigin(0.5);
    
        }
        
        
    }

    update()
    {
        // User Input here
        if (Phaser.Input.Keyboard.JustDown(keyZ))
            this.scene.start("playScene"); // load game
    }
}