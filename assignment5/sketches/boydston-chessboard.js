/*
Andrew Boydston
This program produces a chess board at any size, location, and color.
*/

// the size of the overall canvas
const canvasWidth = 600;
const canvasHeight = 500;

// the uppper left corner of the progress bar
const xOrigin = 100;
const yOrigin = 100;

// canvas color
const bgColor = 'white';

// chessboard colors
const color1 = 'grey';
const color2 = 'black';
evenSquareColor = color1;
oddSquareColor = color2;

// parameters for each box in the matrix
const segmentWidth = 50;
const segmentHeight = 50;

// how many segments to draw in each row and column
const numColumns = 8;
const numRows = 8;


function setup() {
  // create the canvas
  createCanvas(canvasWidth, canvasHeight);
  background(bgColor);

  // builds out the rows
  for (i = 0; i < numRows; i++) {

    // builds out the columns
    for (j = 0; j < numColumns; j++) {
      // changes the order of the colors based on whether row is odd or even
      if (!isEven(i)) {
        evenSquareColor = color2;
        oddSquareColor = color1;
      } else {
        evenSquareColor = color1;
        oddSquareColor = color2;
      }
      
      // alternates drawing the square based on whether the column is even or odd
      if (isEven(j)) {
        drawSquare(xOrigin + j * segmentWidth, yOrigin + i * segmentHeight, segmentWidth, segmentHeight, evenSquareColor);
      } else {
        drawSquare(xOrigin + j * segmentWidth, yOrigin + i * segmentHeight, segmentWidth, segmentHeight, oddSquareColor);
      }
    }
  }
}


// returns a boolean whether a num is even or odd
function isEven(n) {
  return (n % 2 == 0);
}

// draws a single square in a x and y location and with a width and height, and finally a color
function drawSquare(xOrigin, yOrigin, segmentWidth, segmentHeight, squareColor) {
  fill(squareColor);
  rect(xOrigin, yOrigin, segmentWidth, segmentHeight);
}

function draw() {}