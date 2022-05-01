class Booster extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, speedIncrease) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);   // add to existing scene
        this.speedBoast = speedIncrease;   // store pointValue
        this.y = game.config.height/5;
        this.OutOfBounds = false;
    }

    update() {
        // move obstacle left
        this.x -= currentSpeed * deltaT;
        // wrap around from left edge to right edge
        if(this.x <= 0 - this.width) {
            this.OutOfBounds = true;;
        }
    }

}