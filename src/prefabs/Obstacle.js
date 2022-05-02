// ---------------------------------------------
// Autumn Moulios, Ethan Nguyen, Em Coo
// ---------------------------------------------

class Obstacle extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, damageVal) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);   // add to existing scene
        this.damage = damageVal;   // store pointValue
        this.y = lanePos[Math.floor(Math.random() * 3)] - 50;
        this.OutOfBounds = false;
        this.setSize(51,51)
        this.setScale(3)
               // pixels per frame
    }

    update() {
        // move obstacle left
        this.x -= currentSpeed * deltaT * 2;
        // wrap around from left edge to right edge
        if(this.x <= 0 - this.width) {
            this.OutOfBounds = true;;
        }
    }

}