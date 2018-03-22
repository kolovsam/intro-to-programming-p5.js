/* Chessboard 
Sally Tsang, 11/11/2017

Drawing a resizeable Chessboard with nested for loop and parameters

*/

// the size of the overall canvas
const canvasWidth=600;
const canvasHeight = 600;

// the uppper left corner of the chessboard
const xOrigin = 100;
const yOrigin = 100;

// some colors
const bgColor = 'grey';
const sqColor1 = 'yellow';
const sqColor2 = 'brown';
const borderColor = 'black';

// parameters for each box of chessboard
var segmentSize = 50;
const segmentHeight = 50;
const borderWidth = 2;

// how many rows on chessboard
const numRows = 8;


function setup() {

  // create the canvas
  createCanvas(canvasWidth, canvasHeight);
  background(bgColor);

  // set drawing paraemeters for the square segments
  stroke(borderColor);
  strokeWeight(borderWidth);


  //For Loop for Row #1, 3, 5, 7
  for (j = 0; j < numRows / 2; j++) {

    for (i = 0; i < numRows / 2; i++) {
      drawSquareYellow();
    }

    for (i = 0.5; i < numRows / 2; i++) {
      print("i;", i, "j", j);
      drawSquareBrown();
    }
  }

  //For Loop for Row #2, 4, 6, 8
  for (j = 0.5; j < numRows / 2; j++) {

    for (i = 0; i < numRows / 2; i++) {
      drawSquareBrown();
    }

    for (i = 0.5; i < numRows / 2; i++) {
      drawSquareYellow();
    }
  }
}

// Draw yellow squares
function drawSquareYellow() {
  fill(sqColor1);
  rect(xOrigin + i * 2 * segmentSize, yOrigin + j * 2 * segmentHeight, segmentSize, segmentHeight);
}

// Draw brown squares
function drawSquareBrown() {
  fill(sqColor2);
  rect(xOrigin + i * 2 * segmentSize, yOrigin + j * 2 * segmentHeight, segmentSize, segmentHeight);
}