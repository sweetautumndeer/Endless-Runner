// ---------------------------------------------
// Autumn Moulios, Ethan Nguyen, Em Coo
// Game Title
// Date Completed: 
//
// Creative Tilt Jusification:
// 
//
//
// (Em) For the visuals of the endless runner, they are somewhat rudamentary looking but
// considering that many of the assets have animations and it was my first time doing 
// pixel art I am happy with how they came out. I also spent a lot of time on the background
// which has 3 different layers. One small detail I was proud of was the ship sails being
// sad when you get hit. 
//
// (Autumn) For the music, I tried making something akin to a sea shanty mixed with a couple elements
// of electronic music. I think it ended up turning out pretty well! I also put a lot of effort into
// making the sound effects, especially with making the ship crash sound crunchy like cracking wood (though
// it still kinda sounds like gravel to me but close enough).
//
// (Ethan) For the programming, Autumn implemented an input buffer for when the player will press
// a button quickly to move the player up and down. I implemented the high score system using global
// variables and also programmed a random obstacle spawner to generate different object. I also
// made it so the obstacle also does not spawn on the same lane two times in a row. Autumn also made a
// gun mode. If the player presses the Konami code in the menu scene, it will activate gun mode.
// It places a png gun on the player ship and grant 20 health.
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
    maxMoveSpeed: 1500, // movement speed after a good while
    moveSpeedIncreasePerSecond: 5, // how fast the movement speed increases
    backBGSpeed: 0.075, // speed factor for back background element
    frontBGSpeed: 0.5, // speed factor for front background element
    groundBGSpeed: .025, // speed factor for the ocean background element
    singleLaneObstacleSpeed: 2, // speed factor of shorks/octopi
    doubleLaneObstacleSpeed: 1.5, // speed factor of volcanoes
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