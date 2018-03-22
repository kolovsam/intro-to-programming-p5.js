/* chessboard
dong li, 11/2017
*/

// the size of the overall canvas
const canvasWidth = 600;
const canvasHeight = 600;

// the upper left corner of the chessboard
const xOrigin = 100;
const yOrigin = 100;

// some colors
const bgColor = 'white';
const barColor1 = 'pink';
const barColor2 = 'purple';

// parameters for each sqyare in the chessboard
const segmentSize = 50;
const borderWidth = 2;

// how many segments to draw in the chessboard
const barSegments = 8;


function setup() {

  // create the canvas
  createCanvas(canvasWidth, canvasHeight);
  background(bgColor);

  // set drawing paraemeters for the squares
  stroke(bgColor);
  strokeWeight(borderWidth);

}

function draw() {
  // draw the segments
  for (i = 0; i < barSegments; i++) {
    for (j = 0; j < barSegments; j++) {
      drawSquare(i, j);
    }
  }
}


// draw the segments
function drawSquare(xCount, yCount) {
  
  // the upper left corner of the square
  var xCorner = xOrigin + xCount * segmentSize;
  var yCorner = yOrigin + yCount * segmentSize;

  // the color of the square
  if (isOdd(xCount + yCount)) {
    fill(barColor1);
  } else {
    fill(barColor2);
  }

  // draw the square
  rect(xCorner, yCorner, segmentSize, segmentSize);
}

// check if a number is odd
function isOdd(n) {
  if (n % 2 == 1) {
    return true;
  } else {
    return false;
  }
}