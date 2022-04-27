// ---------------------------------------------
// Autumn Moulios, Ethan Nguyen, Em Coo
// Game Title
// Date Completed: 
//
// Creative Tilt Jusification
// a
// 
// ---------------------------------------------

let config = {
    type: Phaser.CANVAS,
    width: 1366,
    height: 768,
    scene: [ Menu, Load, Play ]
};

// Lanes enum
let lanes = {
    top: 2,
    middle: 1,
    bottom: 0,
}
let lanePos = [ config.height * 5/6, config.height/2, config.height/6 ];
// Player Stats
let playerConfig = {
    initMoveSpeed: 200, // movement speed at game start
    maxMoveSpeed: 1000, // movement speed after a good while
    moveSpeedIncreasePerSecond: 5, // how fast the movement speed increases
    startingLane: lanes.middle, // starting position
    laneSwitchTime: 250 // milliseconds taken to switch lanes
}
//  vars for moving objects/background
let currentSpeed = playerConfig.initMoveSpeed;
let deltaT;

// define game canvas
let game = new Phaser.Game(config);

// reserve keyboard controls
let keyUP, keyDOWN, keyZ, keyX;