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
    scene: [ Menu, Load, Play, EndScreen ],
    highscore: 0,
    currentScore: 0
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
    health: 3,
    initMoveSpeed: 200, // movement speed at game start
    maxMoveSpeed: 4000, // movement speed after a good while
    moveSpeedIncreasePerSecond: 5, // how fast the movement speed increases
    backBGSpeed: 1, // speed factor for back background element
    frontBGSpeed: 1.5, // speed factor for front background element
    singleLaneObstacleSpeed: 2, // speed factor of shorks/octopi
    doubleLaneObstacleSpeed: 1, // speed factor of volcanoes
    coinSpeed: 2.5, // speed factor for coins
    coinValue: 2000, // amount of points coins give
    coinTextDuration: 0.75, // amount of time the text after picking up a coin stays on screen
    coinTextScrollSpeed: 2, // speed at which coin text scrolls vertically
    startingLane: lanes.middle, // starting position
    laneSwitchTime: 250, // milliseconds taken to switch lanes
    godMode: false,
    gunMode: false
}
//  vars for moving objects/background
let currentSpeed = playerConfig.initMoveSpeed;
let deltaT;
let prevPosObs = lanePos[0];
let prevPosCoin = lanePos[1];

// reserve audio vars
let music, shipcrash, laneswitch, coincollect, menuselect;

// define game canvas
let game = new Phaser.Game(config);


// reserve keyboard controls
let keyUP, keyDOWN, keyZ, keyX;