/* Toni Saylor
	 HCDE 598 Introduction to Programming
   Assignment 6: Leader Board
*/

// colors
const BACK_COLOR = 'white';
const OUT_COLOR = 'darkgrey';
const RECT_COLOR = 'lightgrey';
const TEXT_COLOR = 'black';

// canvas size
const CANV_WIDTH = 300
const CANV_HEIGHT = 600;

// leader board configuration
const NUM_RECTS = 15;
const MIN_SCORE = 0;
const MAX_SCORE = 100;

// display settings
const COLUMN_X = CANV_WIDTH / 2.5;
const COLUMN_Y = CANV_HEIGHT / 9;
const RECT_WIDTH = 100;
const RECT_HEIGHT = 30;
const LINE_STROKE = 2;
const TEXT_STROKE = 1;
const TEXT_SIZE = RECT_HEIGHT / 2;
// x position of the scores
const X_CENTER = COLUMN_X + RECT_WIDTH / 2;
// x position of the indexes
const X_INDEX = COLUMN_X - RECT_WIDTH / 4;
const LABEL = 'SCORES';

// arrays for the various board data
const testBoard = // an initialized constant array of test data
  [44, 2, 33, 100, 50, 33, 100, 91, 92, 86, 100, 40, 95, 77, 99, 85, 60, 78, 38, 37, 48];
var displayBoard = []; // the array of scores to be displayed on screen

// displays the first screen; the board with the test data
function setup() {
  // create the canvas
  createCanvas(CANV_WIDTH, CANV_HEIGHT);
  background(BACK_COLOR);

  // start off with the test data
  drawLabel(LABEL, X_CENTER, COLUMN_Y, RECT_WIDTH, RECT_HEIGHT)
  drawSquares(NUM_RECTS, COLUMN_X, COLUMN_Y, RECT_WIDTH, RECT_HEIGHT)
  drawNumbers(NUM_RECTS, COLUMN_Y, X_CENTER, X_INDEX, RECT_WIDTH, RECT_HEIGHT, testBoard)
  drawAverage(NUM_RECTS, COLUMN_Y, X_CENTER, X_INDEX, RECT_WIDTH, RECT_HEIGHT, testBoard)
}

// draws the header at the top of the column of scores
function drawLabel(label, xMidN, yPos, rctWidth, rctHeight) {
  textSize(TEXT_SIZE);
  stroke(TEXT_STROKE);
  fill(TEXT_COLOR)
  text(label, xMidN - rctWidth/3, yPos - rctHeight/3)
}

// draws the rectangles behind the scores
function drawSquares(num, xOrigin, yOrigin, rctWidth, rctHeight) {
  textSize(TEXT_SIZE);
  for (i = 0; i < num; i++) {
    stroke(OUT_COLOR);
    //noFill();
    fill(RECT_COLOR);
    rect(xOrigin, yOrigin + (i * rctHeight), rctWidth, rctHeight);
  }
}

// draws the scores and the indexes
function drawNumbers(num, yOrigin, xMidN, xMidI, rctWidth, rctHeight, values) {
  for (j = 0; j < num; j++) {
    stroke(TEXT_COLOR);
    fill(TEXT_COLOR);
    textAlign(CENTER);
    text(values[j], xMidN, yOrigin + (rctWidth / 5) + (j * rctHeight));
    text(j, xMidI, yOrigin + (rctWidth / 5) + (j * rctHeight));
  }
}

// draws the average score and the label "avg" on the side
function drawAverage(num, yOrigin, xMidN, xMidI, rctWidth, rctHeight, values) {
  var sum = 0;
  for (i = 0; i < values.length; i++) {
    sum = sum + values[i];
  }
  var average = round(sum / num);
  text('AVG', xMidI, yOrigin + (rctWidth / 5) + (num * rctHeight));
  text(average, xMidN, yOrigin + (rctWidth / 5) + (num * rctHeight));
}

// if the key is pressed, triggers the reload of the scores and displays the new scores and new average
function keyPressed(){
  reloadScores(NUM_RECTS, MIN_SCORE, MAX_SCORE);
  createCanvas(CANV_WIDTH, CANV_HEIGHT);
  background(BACK_COLOR);
  drawLabel(LABEL, X_CENTER, COLUMN_Y, RECT_WIDTH, RECT_HEIGHT)
  drawSquares(NUM_RECTS, COLUMN_X, COLUMN_Y, RECT_WIDTH, RECT_HEIGHT)
  drawNumbers(NUM_RECTS, COLUMN_Y, X_CENTER, X_INDEX, RECT_WIDTH, RECT_HEIGHT, displayBoard)
  drawAverage(NUM_RECTS, COLUMN_Y, X_CENTER, X_INDEX, RECT_WIDTH, RECT_HEIGHT, displayBoard)
}

// populates a list of scores with random numbers between 0 and 100
function reloadScores(num, min, max) {
  for (i = 0; i < num; i++) {
    displayBoard[i] = round(random(min,max));
  }
}








  