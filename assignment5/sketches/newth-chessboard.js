//chess board by Jonathan Newth

//canvas demensions
const canvasWidth = 600;
const canvasHeight = 600;

//top left corner of each segment
const xOrigin = 100;
const yOrigin = 100;

//colors of the board
const bgColor = 'grey';
const barColor = 'red';
const borderColor = 'black';

//parameters for each box in the matrix
const segmentWidth = 50;
const segmentHeight = 50;
const borderWidth = 2;

//number of segments to draw in each row
const barSegments = 8;
const numRows = 8;


function setup() {

  createCanvas(canvasWidth, canvasHeight);
  background(bgColor);

  //set drawing paraemeters for the bar segments
  fill(barColor);
  stroke(borderColor);
  strokeWeight(borderWidth);

  // draw the required number of rows
  for (j = 0; j < numRows; j++) {

    // for each row, calcluate its y coordinate
    var yCorner = yOrigin + j * segmentHeight;

    // draw the required number of bar segments in that row
    for (i = 0; i < barSegments; i++) {

      // first calculate the x coordinate of this segment
      var xCorner = xOrigin + i * segmentWidth;

      drawSquare(xCorner, yCorner, segmentWidth, segmentHeight);
    }

  }

}

/*
This next function draws the squares of the chess board. It uses the odd/even status of j (the row number)
first, and then uses the odd/even status of i (the segment number) to alternate the colors. This allows
for alternating colors that are offset by one each row.
*/

function drawSquare(x, y, w, h) {

  var remainderJ;
  var remainderI;
  remainderJ = j % 2;
  remainderI = i % 2;

  if (remainderJ == 0) {

    if (remainderI == 0) {
      //draw one segment with fill color black
      fill('black');
      rect(x, y, w, h);
    } else {
      //draw one segment with fill color white
      fill('white');
      rect(x, y, w, h);
    }
  } else {
    
   if (remainderI == 0) {
      //draw one segment with fill color white
      fill('white');
      rect(x, y, w, h);
    } else {
    	//draw one segment with fill color black
      fill('black');
      rect(x, y, w, h);
    }  
  }
}

function draw() {}