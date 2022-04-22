// ---------------------------------------------
// Autumn Moulios, Ethan Nguyen, Em Coo
// ---------------------------------------------

// Lanes enum
let lanes = {
    top: 2,
    middle: 1,
    bottom: 0,
}
// Player Stats
let playerConfig = {
    initMoveSpeed: 2, // movement speed at game start
    maxMoveSpeed: 10, // movement speed after a good while
    startingLane: lanes.middle, // starting position
    laneSwitchTime: 5000 // milliseconds taken to switch lanes
}

class Player extends Phaser.GameObjects.Sprite 
{
    constructor(scene, x, y, texture, frame) 
    {
      super(scene, x, y, texture, frame);
  
      // add object to existing scene
      scene.add.existing(this);
      this.moveSpeed = playerConfig.initMoveSpeed;
      this.currentLane = playerConfig.startingLane;
      this.targetLane = null;
      this.isSwitchingLanes = false;
      this.startTime = game.getTime();

      // define lane positions
      this.lanePos = [ game.config.height * 5/6, game.config.height/2, game.config.height/6 ];

      //this.sfxRocket = scene.sound.add('sfx_'); // sfx
    }

    preload()
    {

    }

    update() 
    {
        // switching lanes
        if (Phaser.Input.Keyboard.JustDown(keyUP) && !this.isSwitchingLanes)
        {
            if (this.currentLane != lanes.top)
            {
                this.targetLane = this.currentLane + 1;
                this.timeElapsed = 0;
                this.startTime = game.getTime();
                this.isSwitchingLanes = true;
                this.SwitchLanes(this.timeElapsed);
            }
        }
        if (Phaser.Input.Keyboard.JustDown(keyDOWN) && !this.isSwitchingLanes)
        {
            if (this.currentLane != lanes.bottom)
            {
                this.targetLane = this.currentLane - 1;
                this.timeElapsed = 0;
                this.startTime = game.getTime();
                this.isSwitchingLanes = true;
                this.SwitchLanes(this.timeElapsed);
            }
        }
        
        if (this.isSwitchingLanes) {

            this.timeElapsed += (game.getTime() - this.startTime);
            this.SwitchLanes(this.timeElapsed);
        }
    }

    SwitchLanes(timeElapsed)
    {
        if (timeElapsed / playerConfig.laneSwitchTime >= 1)
        {
            this.isSwitchingLanes = false;
            this.y = this.lanePos[this.targetLane];
            this.currentLane = this.targetLane;
            this.targetLane = null;
        }
        else
        {
            let pos = [ this.lanePos[this.currentLane], this.lanePos[this.targetLane] ];
            this.y = Phaser.Math.Interpolation.Linear(pos, timeElapsed / playerConfig.laneSwitchTime);
        }
    }
  }