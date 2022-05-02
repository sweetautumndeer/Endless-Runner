class Booster extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointIncrease) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);   // add to existing scene
        this.Points = pointIncrease;   // store pointValue
        this.OutOfBounds = false;
        this.y = lanePos[Math.floor(Math.random() * 3)];
        
    }

    update() {
        // move obstacle left
        this.x -= currentSpeed * deltaT * 2.5;
        // wrap around from left edge to right edge
        if(this.x <= 0 - this.width) {
            this.OutOfBounds = true;;
        }
    }

}