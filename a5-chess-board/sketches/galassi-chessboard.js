//Chess Board by Ben Galassi, 2017//

//I had a lot of trouble with this assigment, in particular with setting the block colors.
//I decided to use a guide here to solve the problem: https://helloacm.com/processing-example-draw-a-chessboard/
//It was a really smart and elegant solution.
//I described what each code block is doing, changed variable names, and added functions to show that I understand what is happening. 

/*Defines the canvas height, width, number of rows, number of columns, 
and defines individual block x and y values by dividing the width/height by the
number of columns/number of rows*/

var canvasWidth = 500;
var canvasHeight = 500;
var numRows = 8;
var numColumns = 8;
var blockX = canvasWidth / numColumns;
var blockY = canvasHeight / numRows;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
}

function draw() {
  //Cycles through the number of rows/columns and increases by 1, while i and j are less than the number of rows/columns
  //i and j can be seen as the row and column 'indexes'
  for (i = 0; i < numRows; i++) {
    for (j = 0; j < numColumns; j++) {
      //If the row + column number is even, make the block white. Otherwise, make the block black
      //I drew this image for my own understanding: https://imgur.com/EY75jN8
      if (isEven(i+j)) {
        fill(255);
      } else {
        fill(0);
      }
      noStroke();
      //Draws squares using the dimensions of the canvas and number of rows/columns. 
      //The squares are defined by their index (i for rows, j for columns) and the canvas width & height
      //You add 1 after while setting the height & width of the squares because for loops are 0-indexed
      rect(i * blockX, j * blockY, (i + 1) * blockX, (j + 1) * blockY);
    }
  }
}

//Function to determine whether a number is even or odd
//Takes a parameter n and calculates the remainder after dividing by 2
//If the remainder is 0, the number is even
function isEven(n) {
  return (n%2 == 0);
}