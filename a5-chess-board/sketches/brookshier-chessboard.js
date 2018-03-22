/* Assignment 5: chess / checker board
    Brookshier
    2017-11-06
*/

// Define constants
const size = 100;
const boardWidth = 8;
const boardHeight = 8;
const xOrigin = 1;
const yOrigin = 1;

// Setup
function setup() {
  // Draw background
  createCanvas(1000, 1000);
  background('green');

  // For loops to draw chess squares
  // For x axis, loop through segments
  for (x = 0; x < boardWidth; x++) {

    // For y axis, loop through segments
    for (y = 0; y < boardHeight; y++) {

      // If modulo x+y is odd, draw a gold square
      if (isOdd(x + y)) {
        square(x + xOrigin, y + yOrigin, 'white');
      }

      // Else modulo x+y is even, draw a red square
      else {
        square(x + xOrigin, y + yOrigin, 'black');
      }
    }
  }

  // For loops to draw checkers
  for (i = 0; i < boardWidth; i++) {
    for (j = 0; j < boardHeight; j++) {
      
      // If in the top two rows, draw player 1 checkers
      if (j < 2) {
        checker(i + xOrigin, j + yOrigin, 'gold');
      }
      
      // If in the bottom two rows, draw player 2 checkers
      else if (j>boardHeight-3) {
      	checker(i + xOrigin, j + yOrigin, 'hotpink')
      }
    }
  }
}

// Function to draw a square
function square(x, y, col) {
  fill(col);
  rect(x * size, y * size, size, size);
}

// Function to draw a checker
function checker(x, y, col) {
  noStroke();
  fill(col);
  ellipse(x*size + size/2, y*size + size / 2, size / 2);
}

// Function checking modulo true or false 
function isOdd(n) {
  return (n % 2 == 1);
}

// Empty draw function
function draw() {}