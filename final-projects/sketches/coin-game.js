/*Final project - Jonathan Newth
This is a game in which the user uses the 
arrow keys to control the avatar (smiley 
face) and collect the limited edition HCDE 
598A coins by colliding with them.

I originally attempted to run the game 
inside of a for loop using the coinValues 
array but realized that this was not possible 
as the loop would cycle through all the coins 
as soon as I ran the program.

To allow the avatar to collect the coins in 
sequence, I was tutored to modularize the program
and separate the game data from the game sequences. This
was the approach I took below.

(NOTE: the array is called coinValues becasue it was originally
intended that the coins would increase in value each time one was
collected. Near completion of the program I decided this was pointless 
as there were no obstacles preventing the player from reaching the coins. 
So I just made 6 class coins - one for each of the assisngments that we
completed in this class.)

Enjoy!

*/

//some constants for the canvas and text attributes
const canvasWidth = 800;
const canvasHeight = 800;
const bgColor = 'green';

//some constants and variables for the coin generation - 
//both for drawing and location coords
const coinFill = 'yellow';
const coinStroke = 'orange';
const coinDiameter = 75;
const coinTxtSize = 25;
const coinTxt = '598A';
var coinX;
var coinY;

//variables and constants for the avatar generation
const avatarFill = 'orange';
const avatarStroke = 'black';
var avatarX = canvasWidth / 2;
var avatarY = canvasHeight - 50;
const avatarDiameter = 75;

//an array containing the number of coins
const coinValues = [0, 1, 2, 3, 4, 5];

//a variable to track the place in the array. Used for coin generation.
var currentCoin = 0;


//I put the  guts of the game in this setup function becasue I
//was able to modularize the rest of the game visuals and data separatley
function setup() {

  createCanvas(canvasWidth, canvasHeight);
  nextStep();
  draw();

}

//this function initiats the next step in the game. In this simple 
//game, the next step will always be to generate the next coin
//until all five have been collected. The length of the coinValues array
//determines the number of coins and their values.
function nextStep() {

  //call funtion to handle coin generation
  generateCoin(coinValues[currentCoin]);

}

//this function is called in setup and generates a coin with a 
//value from the array coinValues
function generateCoin(coin) {
  //first determine random coords for coin and it's text
  coinX = (random(canvasWidth - 100));
  coinY = (random(canvasHeight - 200));
}

//I used the draw function to call my functions that drew the coins and avatar
function draw() {

  background(bgColor);
  drawCurrentCoin();
  drawAvatar();

}

//a function to generate the current coin
function drawCurrentCoin() {

  if (currentCoin < coinValues.length) {

    //coin attributes
    fill(coinFill);
    stroke(coinStroke);
    strokeWeight(5);
    ellipse(coinX, coinY, coinDiameter);

    //text attributes for printing on coin
    textSize(coinTxtSize);
    textAlign(CENTER, CENTER);
    textAlign(CENTER, CENTER);
    strokeWeight(2);
    fill(coinStroke);
    text(coinTxt, coinX, coinY);

  }

}

//a function to generate the avatar
function drawAvatar() {

  fill(avatarFill);
  strokeWeight(5);
  stroke(avatarStroke);
  ellipse(avatarX, avatarY, avatarDiameter);
  ellipse(avatarX - avatarDiameter / 5, avatarY - avatarDiameter / 7, avatarDiameter / 10);
  ellipse(avatarX + avatarDiameter / 5, avatarY - avatarDiameter / 7, avatarDiameter / 10);
  line(avatarX - 15, avatarY + 15, avatarX + 15, avatarY + 15);

}

//a function to determine if the avatar coords are within coin space
function isWithin(pointX, pointY, coinX1, coinY1) {
  // if all 4 of these conditions are true, then it was inside,
  // otherwise it was outside
  if ((pointX > coinX1 - 55) && // to the right of the left edge
    (pointX < coinX1 + 55) && // to the left of the right edge
    (pointY > coinY1 - 55) && // below the top edge
    (pointY < coinY1 + 55)) { // above the bottom edge
    return true;
  } else {
    return false;
  }
}

//a function to coltrol the movement of the avatar on the canvas
function keyPressed() {  
  if (keyCode === LEFT_ARROW) {    
    avatarX -= avatarDiameter / 2;  
  } else if (keyCode === RIGHT_ARROW) {    
    avatarX += avatarDiameter / 2;  
  } else if (keyCode === UP_ARROW) {
    avatarY -= avatarDiameter / 2;  
  } else if (keyCode === DOWN_ARROW) {
    avatarY += avatarDiameter / 2;  
  }
  if (isWithin(avatarX, avatarY, coinX, coinY)) {
    currentCoin++;
    nextStep();
  }
}