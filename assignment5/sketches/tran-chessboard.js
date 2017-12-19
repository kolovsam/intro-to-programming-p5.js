/* Thomas Tran - Chess Board Assignment #5
 */

// Canvas Size (W and H)
const Width = 600;
const Height = 600;

// Canvas Background Color// Square Colors
const bgColor = 'grey';
const oddColor = 'green';
const evenColor = 'tan';

// Starting position of the first square
const xPos = 100;
const yPos = 100;

// Height and Width of each square
const HofSQ = 50;
const WofSQ = 50;

// Variable for number of rows/columns
const NumRows = 8;
const NumCols = 8;

// Checker Piece - Red and Black
const checkWidth = 15;
const checkHeight = 15;

// Placement of original Black Checker piece 
const xCheck = 125;
const yCheck = 125;

// Number of Checker rows/columns
const checkRow = 8;
const checkCol = 2;

// Placement of original Red Checker piece
const xRedCheck = 125
const yRedCheck = 425

// Red Checker Row paramater
const checkRowRed = 8;

function setup() {
  createCanvas(Width, Height);
  noStroke();
  background(bgColor);
  frameRate(1);

  // Duplicating Row from (0,0) to right side of canvas making 1 Row of 8 squares
  for (i = 0; i < NumRows; i++) {
    // Original x coordinate of first square adding square width multiplied by # of squares over
    var xSquare = xPos + i * WofSQ
    // Duplicating Column from (0,0) to bottom of canvas making 1 Column of 8 squares
    for (j = 0; j < NumCols; j++) {
      // Original y coordinate of first square adding square width multiplied by # of squares down
      var ySquare = yPos + j * HofSQ

      if ((i + j) % 2 == 0) {
        fill(evenColor);
      } else {
        fill(oddColor);
      }

      stroke('black')
      rect(xSquare, ySquare, HofSQ, WofSQ);
    }
  }
}

function draw() {

  // Drawing 8 checkers based on adding k (0-8) times Width of Square to the original X coordinate of Checker
  for (k = 0; k < checkRow; k++) {
    var xChecker = xCheck + k * WofSQ
    // Drawing 8 checkers based on adding l (0-2) times Height of Square to the original y coordinate of Checker
    for (l = 0; l < checkCol; l++) {
      var yChecker = yCheck + l * HofSQ
      if (k < 8) {
        RedCheckers() // manual function made below (thought this would simplify my nesting, perhaps there is a better way?)
      } else {
        return false;
      }


      fill('black')
      ellipse(xChecker, yChecker, checkWidth, checkHeight)

    }
  }
}


function RedCheckers() {

  // Drawing 8 checkers based on adding k (0-8) times Width of Square to the original X coordinate of Checker
  for (m = 0; m < checkRowRed; m++) {
    var xRedChecker = xRedCheck + m * WofSQ // Distance to next checker in same row increasing in x value
    // Drawing 8 checkers based on adding l (0-2) times Height of Square to the original y coordinate of Checker
    for (n = 0; n < checkCol; n++) {
      var yRedChecker = yRedCheck + n * HofSQ // Distance to the next checker in the same column increasing in y value
      fill('red')
      ellipse(xRedChecker, yRedChecker, checkWidth, checkHeight)

    }
  }
}