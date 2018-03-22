/* Chessboard
Yi Tang

*/

// the size of the overall canvas
const canvasWidth = 500;
const canvasHeight = 500;

// the uppper left corner of the chessboard
const xOrigin = 50;
const yOrigin = 50;

// colors
const bgColor = 'grey';
const borderColor = 'blue';
var squareColor1 = 'black';
var squareColor2 = 'white';

// parameters for each square in the chessboard
const squareSize = 50;
const borderWidth = 2;

// how many squares to draw in the chessboard
const rowNum = 8;
const columnNum = 8;


function setup() {

  // create the canvas
  createCanvas(canvasWidth, canvasHeight);
  background(bgColor);

  // set drawing paraemeters for squares

  // draw the required number of squares
  for (i = 0; i < rowNum; i++) {
    for (j = 0; j < columnNum; j++) {
      // When the remainder of rowNum = columnNum, they are the black. Otherwise, they are white. 
      if (isOdd(i) == isOdd(j)) {
        drawSquare(xOrigin + i * squareSize, yOrigin + j * squareSize,
          squareColor1, squareSize, borderWidth);
      } else {
        drawSquare(xOrigin + i * squareSize, yOrigin + j * squareSize,
          squareColor2, squareSize, borderWidth);
      }
    }
  }
}
// Draw the squares
function drawSquare(x, y, squareColor, squareSize, borderWidth) {
  fill(squareColor);
  stroke(borderWidth);
  rect(x, y, squareSize, squareSize);
}
//Define the remainders
function isOdd(Num) {
  var remainder = Num % 2;
  if (remainder == 0) {
    return true;
  } else {
    return false;
  }

}