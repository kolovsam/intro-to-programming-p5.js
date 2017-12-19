/* chessBoard - 1
Tucker Standlee 11/11/2017

Using constants, paramenters, and an "Odd or Even" function to create a simple chessboard

*/

// the size of the overall canvas
const canvasWidth = 640;
const canvasHeight = 640;

// the uppper left corner of the chess board
const xOrigin = 0;
const yOrigin = 0;

// some colors
const borderColor = 'black';

// parameters for each box in the matrix
const segmentWidth = 80;
const segmentHeight = 80;
const borderWidth = 2;

// how many segments to draw in each row
const barSegments = 8;
const numRows = 8;


function setup() {

  // create the canvas
  createCanvas(canvasWidth, canvasHeight);

  // set drawing parameters for the bar segments
  stroke(borderColor);
  strokeWeight(borderWidth);

  // drawing the required number of rows
  for (j = 0; j < numRows; j++) {

    // calculating the y coordinate for each row
    var yCorner = yOrigin + j * segmentHeight;

    // drawing the required number of bar segments a row
    for (i = 0; i < barSegments; i++) {

      // calculating the x coordinate of a segment
      var xCorner = xOrigin + i * segmentWidth;

      //enter the square colors based on the function below
      squareColor(i);

      // drawing the standard bar segment
      rect(xCorner, yCorner, segmentWidth, segmentHeight);

    }

  }

}

//functioning for determing square color. If the sum of "I" and "J" then divided by 2 is odd, then the square is black or else it is white.
function squareColor(i) {
  var remainder;
  remainder = (i + j) % 2;
  if (remainder == 1) {
    fill('black');
  } else {
    fill('white');
  }

}