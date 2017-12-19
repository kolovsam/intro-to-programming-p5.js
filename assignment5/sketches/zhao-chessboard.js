/*
Can Zhao
Assignment 5 Chessboard

*/

// the size of the overall canvas
const canvasWidth = 1000;
const canvasHeight = 1000;
//size of the canvas

const xOrigin = 40;
const yOrigin = 10;
// the uppper left corner of the chessboard

const bgColor = 'white';
const barColor1 = 'rgb(255,206,158)';
const barColor2 = 'rgb(209,139,71)';
const borderColor = 'white';
//colors of the canvas, the first and second color of the squares, and the border color of each square if there's space

const size = 50;
const borderWidth = 0;
//size of each square and the space between squares

const numCols = 7;
const numRows = 7;
//size of the chessboard

function setup() {
  // create the canvas
  createCanvas(canvasWidth, canvasHeight);
  background(bgColor);
	drawChessboard();
}

function isOdd(n) {
	var remainder;
  remainder = n % 2;
  if (remainder == 1) {
  return true;
   } else {
    return false;
  }
}
//a boolean function to alternate the color of each square
  
function drawChessboard (squareColor){
	for (j = 0; j < numRows; j++) {
    var yCorner = yOrigin + j * size;
		for (i = 0; i < numCols; i++) {
      	 var xCorner = xOrigin + i * size;
         if (isOdd(i+j) == false){
           //call the boolean function to alternate the color
           squareColor = barColor1;
         } else {
           squareColor = barColor2;
         }
  		  drawSquare(xCorner, yCorner, size, squareColor);
      //call the function of drawing one square
      }
  }
}
//draw the chessboard

function drawSquare(xOrigin, yOrigin, size, color){
	fill(color);
  stroke(borderColor);
  strokeWeight(borderWidth);
	rect(xOrigin, yOrigin, size, size);
}
//draw one square

function draw() {}