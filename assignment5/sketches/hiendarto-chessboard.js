/* 

Assignment 5 - chessboard
11/2017

*/

// the size of the overall canvas
const canvasWidth = 500;
const canvasHeight = 500;

// the uppper left corner of the progress bar
const xOrigin = 0;
const yOrigin = 0;

// some colors
const bgColor = 'grey';
const mainColor = 'white';
const altColor ='black';

// parameters for each box in the matrix
const segmentWidth = 50;
const segmentHeight = 50;
const borderWidth = 2;

// how many segments to draw in each row
const barSegments = 8;
const numRows = 8;


function setup() {

  // create the canvas
  createCanvas(canvasWidth, canvasHeight);
  background(bgColor);
  fill(mainColor);
  
  // draw the required number of rows
  for (j = 1; j <= numRows; j++) {

    // for each row, calcluate its y coordinate
    var yCorner = yOrigin + j * segmentHeight;

    // draw the required number of bar segments in that row
    for (i = 1; i <= barSegments; i++) {

      // first calculate the x coordinate of this segment
      var xCorner = xOrigin + i * segmentWidth;
      
      // alternate colors
      if ((i % 2 == 0) && (j % 2 == 0)) {
        fill(altColor);
      } else if ((i % 2 == 1) && (j % 2 == 1)) {
        fill(altColor);
      } else {
        fill(mainColor);
      } 
      
      // then draw one bar segment
      rect(xCorner, yCorner, segmentWidth, segmentHeight);
    }

  }

}
