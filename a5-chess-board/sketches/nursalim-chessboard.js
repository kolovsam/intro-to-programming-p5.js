/*
HCDE 598
Hannah Nursalim
Chess Board HW
*/

//canvas size
const canvasWidth = 500;
const canvasHeight = 500;

//constants for colors
const bgColor = "#c6d9ec";
const squareColor = "#b366ff";
const altSquareColor = "#d9b3ff";
const lineColor = "white";

//starting left corner
const xStart = canvasWidth/10;
const yStart = canvasHeight/10;

//sizes for squares
const squareWidth = canvasWidth/10;
const squareHeight = canvasHeight/10;
const lineThickness = 2;

//number of columns
const numColumns = 8;

//number of rows
const numRows = 8;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  background(bgColor);
  chessBoard();
}

//below function houses all pieces & parameters for creating a chess board
function chessBoard(x, y, size, color) {

  //border lines
  stroke(lineColor);
  strokeWeight(lineThickness);

  //create 8 rows
  for (row = 0; row < numRows; row++) {
    var moreRows = yStart + row * squareHeight;

    //create 8 columns  
    for (column = 0; column < numColumns; column++) {

      
      /*set alternating colors
      I struggled with the alternating colors at first
      because I had fill() after rect(). It alternated, but...
      first 2 columns had matching colors. After moving, fill() now works
      
      creating remainder variable to house calculation for the remainder 
      using row & column to calculate the remainder
      will then use the remainder in if/else to alternate square colors
      */
      var remainder = (row + column) % 2;
      
  
      //using if/else logic based on remainder calculation to fill squares
      if (remainder == 0) {
        fill(altSquareColor);
      } else {
        fill(squareColor);
      }
      
      //create squares
      rect(xStart + column * squareWidth, moreRows, squareWidth, squareHeight);

      //for debugging purposes
      print("column: ", column, "row: ", row, "remainder:", remainder);
    }
  }
}

function draw() {}