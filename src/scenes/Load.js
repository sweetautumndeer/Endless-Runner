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

    }

    create()
    {
        console.log("loading...");

        this.scene.start("playScene");
    }

    update()
    {

    }
}