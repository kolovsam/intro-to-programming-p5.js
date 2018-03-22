/* leader board
ahdavidson, 11/2017

program to display and manipulate a "leader board" of scores, using arrays.
a solution to HCDE 598 "Intro to Programming" assignment 6

*/

// some colors to use in this program
// (named colors may be found here: w3schools.com/cssref/css_colors.asp)
const BACKGROUND_COLOR = 'lightgrey';
const ELEMENT_OUTLINE_COLOR = 'black';
const ELEMENT_SQUARE_COLOR = 'cornsilk';
const MIN_SQUARE_COLOR = 'pink';
const MAX_SQUARE_COLOR = 'aqua';

// the overall canvas
const CANVAS_WIDTH = 600
const CANVAS_HEIGHT = 1000;

// leader board configuration
const BOARD_ELEMENTS = 15;
const MIN_SCORE = 0;
const MAX_SCORE = 100;

// display settings
const BOARD_X_ORIGIN = CANVAS_WIDTH / 2.5;
const BOARD_Y_ORIGIN = 100;
const ELEMENT_WIDTH = 200;
const ELEMENT_HEIGHT = 50;
const BORDER_WIDTH = 2;
const TEXT_STROKE = 1;
const TEXT_SIZE = ELEMENT_HEIGHT / 2;

// arrays for the various board data
const testBoard = // an initialized constant array of test data
  [44, 2, 33, 0, 50, 33, 100, 91, 92, 86, 100, 40, 95, 77, 99];
var displayBoard = [];



//Main function that calls the keyTyped function, which draws the leaderboards
function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  background(BACKGROUND_COLOR);
  textSize(20);
  //Just some instructions
  text("Press 't' for test, or 'r' for random. Make sure to click the canvas.",20,100)
  keyTyped();
  //A for loop that populates the random leaderboard with random digits
    for (i=0;i<BOARD_ELEMENTS;i++) {
    displayBoard[i] = round(random(0,100));
}
}



// instead we use key presses to trigger different actions
function keyTyped() {
  //If t is typed, draw a leaderboard with the testBoard array
	if (key == 't') {
  var boardLabel = "testBoard";
  background(BACKGROUND_COLOR);
  drawBoard(
    testBoard, BOARD_ELEMENTS, boardLabel,
    BOARD_X_ORIGIN, BOARD_Y_ORIGIN,
    ELEMENT_WIDTH, ELEMENT_HEIGHT);
  }
  if (key == 'r') {
  var boardLabel = "Random";
    background(BACKGROUND_COLOR);
  drawBoard(
    //If t is typed, draw a leaderboard with the displayBoard (random) array
    displayBoard, BOARD_ELEMENTS, boardLabel,
    BOARD_X_ORIGIN, BOARD_Y_ORIGIN,
    ELEMENT_WIDTH, ELEMENT_HEIGHT);
  }
}



//The main function that draws the leaderboard
function drawBoard(array, elements, label,
  xOrigin, yOrigin, elementWidth, elementHeight) {
  for (i = 0; i < elements; i++) {
    fill(ELEMENT_SQUARE_COLOR);
    rect(xOrigin, yOrigin + i * elementHeight, elementWidth, elementHeight)
    fill(0);
    textAlign(CENTER);
    textSize(TEXT_SIZE);
    text(label, xOrigin + elementWidth / 2, yOrigin - elementHeight / 2);
    //Places elements inside each box
    text(array[i], xOrigin + elementWidth / 2, yOrigin + i * elementHeight + elementHeight / 1.5);
    //Places the index to the left of each box
    text(i, xOrigin - elementWidth / 2, yOrigin + i * elementHeight + elementHeight / 1.5);
  }
  //Calculates the average by creating a new variable, total, adding all elements in the array 
  //and dividing by the number of elements
  text("AVG", xOrigin - elementWidth / 2, yOrigin + i * elementHeight + elementHeight / 1.5);
  var total = 0;
  for (i = 0; i < elements; i++) {
    total += array[i];
  }
  //Rounds the result
  avg = round(total / elements);
  text(avg, xOrigin + elementWidth / 2, yOrigin + i * elementHeight + elementHeight / 1.5)
}


