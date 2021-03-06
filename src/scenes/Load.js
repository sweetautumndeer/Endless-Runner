// ---------------------------------------------
// Autumn Moulios, Ethan Nguyen, Em Coo
// ---------------------------------------------

class Load extends Phaser.Scene
{
    constructor()
    {
        super("loadScene");
    }

    preload()
    {
        this.title_screen = this.add.tileSprite(0, 0, 1366, 768, 'title').setOrigin(0, 0).setScrollFactor(0);
        this.logo = this.add.image(60, 200, 'logo').setOrigin(0, 0);

        this.load.atlas('stuff', './assets/endlessrunnerspritesheet.png', './assets/endlessrunnersprites.json');
        this.load.image('sky_bg', './assets/sky_bg2.png');
        this.load.image('clouds', './assets/clouds.png');
        this.load.image('ocean', './assets/ocean.png');
        this.load.image('shork', './assets/shork.png');
        this.load.image('coinboost', './assets/coinboost.png');
        this.load.image('heart', './assets/Heart.png');
        this.load.image('gun', './assets/gun_png_by_xx_thanosbeatbox_xx_ddxajtn-fullview.png');
        this.load.audio('music', './assets/SkyPirateSerenade.wav');
        this.load.audio('shipcrash', './assets/ShipCrash.wav');
        this.load.audio('laneswitch', './assets/LaneSwitch.wav');
        this.load.audio('coincollect', './assets/CoinCollect.wav');
    }

    create()
    {
        

        console.log("loading...");

        shipcrash = this.sound.add('shipcrash');
        laneswitch = this.sound.add('laneswitch');
        laneswitch.setVolume(1.35);
        coincollect = this.sound.add('coincollect');
        
        music = this.sound.add('music');
        music.setVolume(0.25);
        music.setLoop(true);

        
    }

    update()
    {
        if (!menuselect.isPlaying)
        {
            music.play();
            this.scene.start("playScene");
        }
    }
}