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

// define game canvas
let game = new Phaser.Game(config);

// reserve keyboard controls
let keyUP, keyDOWN, keyZ, keyX;