// ---------------------------------------------
// Autumn Moulios, Ethan Nguyen, Em Coo
// ---------------------------------------------

class Obstacle extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, damageVal) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);   // add to existing scene
        this.damage = damageVal;   // store pointValue
        this.lanePos = [ game.config.height * 5/6, game.config.height/2, game.config.height/6 ];
        this.y = this.lanePos[Math.floor(Math.random() * 3)];
        this.OutOfBounds = false;
        this.setScale(3)
               // pixels per frame
    }

    update() {
        // move spaceship left
        this.x -= 4;
        // wrap around from left edge to right edge
        if(this.x <= 0 - this.width) {
            this.OutOfBounds = true;;
        }
    }

}