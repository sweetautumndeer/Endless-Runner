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
        // UI here lol
        console.log("menu!");

        // Define menu controls
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        keyZ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
        keyX = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X);
    }

    update()
    {
        // User Input here
        if (Phaser.Input.Keyboard.JustDown(keyZ))
            this.scene.start("loadScene"); // load game
    }
}