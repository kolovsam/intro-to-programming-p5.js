/* 
Program to draw a Chess Board on the screen
*/

// the size of the overall canvas
const canvasWidth = 800;
const canvasHeight = 700;

// some colors and text
const bgColor = 'white';
const lineColor = 'white';
const textColor = 'purple';
const lineWeight = 1;
const hint = "Press any key to draw a Chess Board";

// number of ranks and files on the Chess board
const ranks = 8;
const files = 8;

// for the alt colors of squares
var remainderX;
var remainderY;

function setup() {

  // create the canvas
  createCanvas(canvasWidth, canvasHeight);
  background(bgColor);
  fill(textColor);
  strokeWeight(0);
  textSize(width / 30);
  text(hint, 0.1 * width, 0.1 * height);
}

function draw() {}


// draws a Chess Board starting at (x, y)
// with each square of the size sideSquare pixels.

function drawChess(x, y, sideSquare, randomColor1, randomColor2) {

  background(bgColor);
  stroke(lineColor);
  strokeWeight(lineWeight);

  // draw the required number of ranks
  for (j = 0; j < ranks; j++) {

    // for each rank, calcluate its y coordinate
    var yCorner = y + j * sideSquare;

    // draw the required number of files in that rank
    for (i = 0; i < files; i++) {

      // alternate colors for alternate squares
      remainderX = i % 2;
      remainderY = j % 2;
      if ((remainderX == 0) & (remainderY == 0)) {
        fill(randomColor1);
      } else if ((remainderX == 1) & (remainderY == 0)) {
        fill(randomColor2);
      } else if ((remainderX == 0) & (remainderY == 1)) {
        fill(randomColor2);
      } else if ((remainderX == 1) & (remainderY == 1)) {
        fill(randomColor1);
      }

      // first calculate the x coordinate of the square
      var xCorner = x + i * sideSquare;

      // then draw one square
      rect(xCorner, yCorner, sideSquare, sideSquare);
    }
  }
}


// whenever a key is pressed on the keyboard,
// draws a chess board on the current position
// of the mouse with a random size design each time
function keyPressed() {
  var lengthSquare = random(20, 70);
  randomColor1 = color(random(255), random(255), random(255));
  randomColor2 = color(random(255), random(255), random(255));
  drawChess(mouseX, mouseY, lengthSquare, randomColor1, randomColor2);
}