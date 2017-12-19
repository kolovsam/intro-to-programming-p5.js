/* chessboard assignment
Kris Everson, 11/12/17
This code draws a chessboard :)
*/

// set canvas size
const canvasWidth = 1000;
const canvasHeight = 10000;

// set upper left origin of board
const xOrigin = 100;
const yOrigin = 100;

// colors used
const bgColor = '#eceff1';
const barDark = '#102027';
const barWhite = '#62757f';
const borderColor = '#102027';

// parameters for each box in the progress bar
const segmentSize = 60;
const borderWidth = 3;

// how many segments to draw in the progress bar
const numCols = 8;
const numRows = 8;

// const squareDK = 'black';


function setup() {

  // create the canvas
  createCanvas(canvasWidth, canvasHeight);
  background(bgColor);

  // set drawing paraemeters for the bar segments
  // fill(barWhite);
  stroke(borderColor);
  strokeWeight(borderWidth);

  for (row = 0; row < numRows; row++) {
    var y = yOrigin + row * segmentSize;
    for (col = 0; col < numCols; col++) {
      isOdd(col, row);
      // ^^^ why does this placement here matter?

      print(col, "column Remainder: ", " ", col % 2, " ", row, " row Remainder: ", row % 2);
      rect(xOrigin + col * segmentSize, y, segmentSize, segmentSize);
    }

  }

}

/*function to determine wheter "col" or "row" is even/odd, using
the modulus operator. If/else statement to change the
the square fill to dark */

function isOdd(col, row) {
  var remainderCol = col % 2;
  var remainderRow = row % 2;

/* this conditional statement feels like a hack, but it works! there should be
a simpler way to write this.

how it works: if remainder col and row = 0 (even) or remainder col
and remainder row are both 1 (odd), then fill is equal to dark,
otherwise fill is light. */

  if ((remainderCol == 0 && remainderRow == 0) || (remainderCol == 1 && remainderRow == 1)) {
    fill(barDark);
  } else {
    fill(barWhite);
  }




  /* original half-solution —- two conditions that I couldn't get to
  work simultaneously.
  */


  // if (remainderCol == 0 && remainderRow == 1) {
  //   fill(barDark);
  // } else {
  //   fill(barWhite);
  // }
  // if (remainderCol == 1 && remainderRow == 1) {
  //   fill(barDark);
  // } else {
  //   fill(barWhite);
  // }



}

function draw() {}
