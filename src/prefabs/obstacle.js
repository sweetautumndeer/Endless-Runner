// ---------------------------------------------
// Autumn Moulios, Ethan Nguyen, Em Coo
// ---------------------------------------------

class Obstacle extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, damageVal) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);   // add to existing scene
        this.damage = damageVal;   // store pointValue
        this.lanePos = [ game.config.height * 5/6, game.config.height/2, game.config.height/6 ];
               // pixels per frame
    }

    update() {
        // move spaceship left
        this.x -= 2;
        // wrap around from left edge to right edge
        if(this.x <= 0 - this.width) {
            this.reset();
        }
    }

    // position reset
    reset() {
        this.destroy();
    }
}