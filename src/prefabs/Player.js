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
    laneSwitchTime: 250 // milliseconds taken to switch lanes
}

class Player extends Phaser.GameObjects.Sprite 
{
    constructor(scene, x, y, texture, frame) 
    {
      super(scene, x, y, texture, frame);
  
      // add object to existing scene
      scene.add.existing(this);

      this.moveSpeed = playerConfig.initMoveSpeed;
      this.startTime = game.getTime();
      // lane switching variables
      this.currentLane = playerConfig.startingLane;
      this.targetLane = null;
      this.nextTargetLane = null;
      this.isSwitchingLanes = false;
      // init configs
      this.playerConfig = playerConfig;
      

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
        if (Phaser.Input.Keyboard.JustDown(keyUP))
        {
            if (this.isSwitchingLanes) // if already switching lanes, queue this input
            {
                if (this.targetLane != lanes.top)
                    this.nextTargetLane = this.targetLane + 1;
            }
            else
            {
                if (this.currentLane != lanes.top)
                {
                    this.targetLane = this.currentLane + 1;
                    this.InitLaneSwitch();
                }
            }

        }
        if (Phaser.Input.Keyboard.JustDown(keyDOWN))
        {   
            if (this.isSwitchingLanes) // if already switching lanes, queue this input
            {
                if (this.targetLane != lanes.bottom)
                    this.nextTargetLane = this.targetLane - 1;
            }
            else 
            {
                if (this.currentLane != lanes.bottom)
                {
                    this.targetLane = this.currentLane - 1;
                    this.InitLaneSwitch();
                }
            }
        }
        
        if (this.isSwitchingLanes) {

            this.timeElapsed = (game.getTime() - this.startTime);
            let t = this.timeElapsed / playerConfig.laneSwitchTime; // range: 0-1
            t = -2 * t * t * t + 3 * t * t // -2t^3 + 3t^2 for attenuation function
            this.SwitchLanes(t);
        }
    }

    InitLaneSwitch()
    {   
        // reset time
        this.timeElapsed = 0;
        this.startTime = game.getTime();
        // start lerp
        this.isSwitchingLanes = true;
        this.SwitchLanes(this.timeElapsed)
    }

    SwitchLanes(timeElapsed)
    {
        if (timeElapsed >= 0.95) // tiny room for error 
        {
            // snap into new lane & change currentLane value
            this.isSwitchingLanes = false;
            this.y = this.lanePos[this.targetLane];
            this.currentLane = this.targetLane;
            // if another switch is queued, immediately start it
            if (this.nextTargetLane != null)
            {
                this.targetLane = this.nextTargetLane;
                this.InitLaneSwitch();
            }
            else
                this.targetLane = null;
            // clear queued action
            this.nextTargetLane = null;
        }
        else
        {
            let lerpPositions = [ this.lanePos[this.currentLane], this.lanePos[this.targetLane] ];
            this.y = Phaser.Math.Interpolation.Linear(lerpPositions, timeElapsed);
        }
    }
  }