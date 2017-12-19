/* 
Elizabeth Quepons
HCDE 598 A
Assignment 6: Chessboard

*/

//Canvas Size
const canvasWidth = 700;
const canvasHeight = 700;

//Board Coordinates
const xOrigin = canvasWidth / 10;
const yOrigin = canvasHeight / 10;

//Board Colors
const boxColor = 'white';
const bxColor = 'black';

//Box Sizes
const boxHeight = canvasHeight / 15;

//Rows and columns
const numColumns = 8;
const numRows = 8;


function setup() {

  //Canvas
  createCanvas(canvasWidth, canvasHeight);
  background('white');


  //Board Stroke
  stroke('black');

  //Draw Board

  //Rows and Columns

  for (j = 0; j < numRows; j++) {
    var y = yOrigin + j * boxHeight;
    for (i = 0; i < numColumns; i++) {
      var x = xOrigin + i * boxHeight;

      //Drawing a Square
      colorSquare(j, i)
      rect(x, y, boxHeight, boxHeight);

    }
  }
}


//Filling in Color
function colorSquare(j, i) {
  if (j % 2 == 0 && i % 2 == 0 ||
    j % 2 == 1 && i % 2 == 1) {
    fill(boxColor);
  } else {
    fill(bxColor);

  }
}


function draw() {}