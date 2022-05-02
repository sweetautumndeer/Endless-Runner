// ---------------------------------------------
// Autumn Moulios, Ethan Nguyen, Em Coo
// ---------------------------------------------

class Obstacle2 extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, damageVal) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);   // add to existing scene
        this.damage = damageVal;   // store pointValue
        this.y = game.config.height/5.5;
        this.OutOfBounds = false;
        this.setScale(1.5);
        this.setSize(128,256);
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