/*
Assignment 5
Andrea Sequeira
*/

// Define colors
const color1 = 'white';
const color2 = 'black';

// Define origin points
const xOrigin = 0;
const yOrigin = 0;

// Define sizes
// Program also works when width =/= height
const canvasWidth = 500;
const canvasHeight = 500;
const sqWidth = canvasWidth / 8;
const sqHeight = canvasHeight / 8;

function setup() {
  
  // Draw canvas
  createCanvas(canvasWidth, canvasHeight);
  
  // Draw all squares without an outline
  noStroke();
  
  // Draw 8 x 8 board of squares
  for (row = 0; row < 8; row++) {
    for (column = 0; column < 8; column++) {
      drawSq(column, row);
    }
  }
}

function draw() {}

function drawSq(column, row) {
  
  // Define fill colors to alternate colors for board,
  // depending on whether row and/or column are odd/even
	if (column % 2 == 0 && row % 2 == 0 ||
     column % 2 == 1 && row % 2 ==1) {
    fill(color1);
  } else {
    fill(color2)
  }
  
  // Draw an individual square
  rect(xOrigin + sqWidth * column, yOrigin + sqHeight * row, sqWidth, sqHeight);
}