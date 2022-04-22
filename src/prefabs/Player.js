// ---------------------------------------------
// Autumn Moulios, Ethan Nguyen, Em Coo
// ---------------------------------------------

let lanes = {
    top: 2,
    topPosition: null,
    middle: 1,
    middlePosition: null,
    bottom: 0,
    bottomPosition: null
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
      lanes.topPosition = game.config.height/3 + game.config.height/6;
      lanes.middlePosition = game.config.height/2;
      lanes.bottomPosition = game.config.height * 5/6;

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
            console.log("up");
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
            console.log("down");
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
        console.log("switching lanes...");
        if (timeElapsed / playerConfig.laneSwitchTime >= 1)
        {
            this.isSwitchingLanes = false;
            this.y = 100;
        }
        else
        {
            let pos = [ lanes.middlePosition, lanes.topPosition ];
            this.y = Phaser.Math.Interpolation.Linear(pos, timeElapsed / playerConfig.laneSwitchTime);
        }
    }
  }