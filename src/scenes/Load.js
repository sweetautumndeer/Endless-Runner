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
        this.load.atlas('stuff', './assets/endlessrunnerspritesheet.png', './assets/endlessrunnersprites.json');

        /*this.load.image('player', './assets/ship_sprite1.png');
        this.load.image('playerframe2', './assets/ship_sprite2.png');
        this.load.image('playerframe3', './assets/ship_sprite3.png');*/
        this.load.image('sky_bg', './assets/sky_bg2.png');
        this.load.image('clouds', './assets/clouds.png');
        this.load.image('shork', './assets/shork.png');
        this.load.image('coinboost', './assets/coinboost.png');
        this.load.image('heart', './assets/Heart.png');
        this.load.image('gun', './assets/gun_png_by_xx_thanosbeatbox_xx_ddxajtn-fullview.png');
        this.load.audio('music', './assets/SkyPirateSerenade.wav');
        this.load.audio('shipcrash', './assets/ShipCrash.wav');
        this.load.audio('laneswitch', './assets/LaneSwitch.wav');
    }

    create()
    {
        console.log("loading...");

        shipcrash = this.sound.add('shipcrash');
        laneswitch = this.sound.add('laneswitch');
        music = this.sound.add('music');
        music.setVolume(0.25);
        music.setLoop(true);
        music.play();

        this.scene.start("playScene");
    }

    update()
    {

    }
}