/* leader board
kris everson, 11/26/17
this is a solution to assignment #6.
programmed to display and manipulate a "leader board" of scores, using arrays.
*/

// some colors to use in this program
// (named colors may be found here: w3schools.com/cssref/css_colors.asp)
const BACKGROUND_COLOR = 'lightgrey';
const ELEMENT_OUTLINE_COLOR = 'black';
const ELEMENT_SQUARE_COLOR = 'cornsilk';
const MIN_SQUARE_COLOR = 'pink';
const MAX_SQUARE_COLOR = 'aqua';
const MSG_BACKGROUND_COLOR = 'coral';
const TEXT_COLOR = '#b33000';

// the overall canvas
const CANVAS_WIDTH = 800
const CANVAS_HEIGHT = 1000;

// leader board configuration
const BOARD_ELEMENTS = 15;
const MIN_SCORE = 0;
const MAX_SCORE = 100;

// display settings
const BOARD_X_ORIGIN = CANVAS_WIDTH / 2.5;
const BOARD_Y_ORIGIN = CANVAS_HEIGHT / 8;
const ELEMENT_WIDTH = 200;
const ELEMENT_HEIGHT = 50;
const MSG_WIDTH = CANVAS_WIDTH / 2
const MSG_HEIGHT = 100;
const BORDER_WIDTH = 2;
const TEXT_STROKE = 1;
const TEXT_SIZE = ELEMENT_HEIGHT / 3;
const MSG_TEXT_COLOR = 'white';



// arrays for the various board data
const testBoard = // an initialized constant array of test data
  [44, 2, 33, 0, 50, 33, 100, 91, 92, 86, 100, 40, 95, 77, 99];
var displayBoard = []; // the array of scores to be displayed on screen

function setup() {
  // create the canvas
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  background(BACKGROUND_COLOR);

  // start off with the test data
  textSize(TEXT_SIZE);
  
  
  // text('press "r" to generate a random set of scores, and calculate average. press any other key to return to the default scores.', CANVAS_WIDTH/4, 0, MSG_WIDTH, MSG_HEIGHT);
  
  // the text placement here was driving me nuts, I'm not sure how to make it consistent with the other states...
  drawBoard(testBoard,
    BOARD_ELEMENTS, "TEST—press 'R' for random scores",
    BOARD_X_ORIGIN, BOARD_Y_ORIGIN,
    ELEMENT_WIDTH, ELEMENT_HEIGHT);
  noStroke();



}

// this function is not used in this application
function draw() {}


// instead we use key presses to trigger different actions
function keyPressed() {

  // this function is called by the system whenever a key is typed
  // so figure out which one was hit
  var theKey = key;
  print("key = ", theKey, " was typed");
  var boardLabel; // for the name of the board being displayed
  if (theKey == "R") {
    // do this
    // update the display with the new leader board scores
    drawBoard(displayBoard, 
      BOARD_ELEMENTS, "RANDOM—press any key to restore default",
      BOARD_X_ORIGIN, BOARD_Y_ORIGIN,
      ELEMENT_WIDTH, ELEMENT_HEIGHT)



  

    // here is where you reload the 'displayBoard' array based on the
    // particular keys pressed. you must at least be able to 
    // 1) regenerate the board with a set of randomly generated scores
    // 2) reload the constant test data array into the board
    // any other fun things you want to do are optional
  } else {
    drawBoard(testBoard, BOARD_ELEMENTS, "TEST—press 'R' for random scores",
      BOARD_X_ORIGIN, BOARD_Y_ORIGIN,
      ELEMENT_WIDTH, ELEMENT_HEIGHT)
  }

}




// writes the name of the board ('label') at the top of the 
// leader board display
function drawLabel(label) {
  // print the name of the leader board at the top of the display
  fill(TEXT_COLOR);
  noStroke();
  text(label, CANVAS_WIDTH / 4, 0, MSG_WIDTH, MSG_HEIGHT);

}

// draws the complete leaderboard found in 'array' on the canvas.
// the array has 'elements' items in it, is to be be drawn starting
// at the upper left corner indicated by (xOrigin, yOrigin), going 
// veritfically down for each element. it is identified by the text 
// 'label' which is drawn above the top of the board. 
// each element is displayed in a box, of size (elementWidth, elementHeight)
// and the corresponding array index is displayed on screen as well.
// at the bottom of the board, the average of all of the scores in the board
// is also displayed.

function drawBoard(array, elements, label,
  xOrigin, yOrigin, elementWidth, elementHeight) {
  // this is the guts of this program !!
  background(BACKGROUND_COLOR);
  // start accumulating values for the score totals and number of scores
  drawLabel(label);
  totalScores = 0;
  numScores = 0;
  
  for (i = 0; i < elements; i++) {
    fill(ELEMENT_SQUARE_COLOR);
    stroke(BORDER_WIDTH);
    rect(xOrigin, yOrigin + i * elementHeight, elementWidth, elementHeight);
    textSize(TEXT_SIZE);
    fill('black');
    textAlign(CENTER, CENTER);
    text(array[i], xOrigin, yOrigin + i * elementHeight, elementWidth, elementHeight);
    text([i], xOrigin - 150, yOrigin + i * elementHeight, elementWidth, elementHeight)


    // assign accumulator values to the total of scores and number of array elements 
    // add one to value of numScores each time through the loop
    numScores++;
    // add value of indexed numbers each time thru the loop
    totalScores += array[i];
    displayBoard[i] = round(random(MIN_SCORE, MAX_SCORE));
    print(displayBoard[i]);
  }
  avgScore();


}

// computes the average of all 'elements' scores in 'array'
// and returns that as a whole number
function avgScore(array, elements) {
  // add this code body
  var average = round(totalScores / numScores);
  text("average", BOARD_X_ORIGIN - 150, BOARD_Y_ORIGIN + (testBoard.length * ELEMENT_HEIGHT), ELEMENT_WIDTH, ELEMENT_HEIGHT);
  text(average, BOARD_X_ORIGIN, BOARD_Y_ORIGIN + (testBoard.length * ELEMENT_HEIGHT), ELEMENT_WIDTH, ELEMENT_HEIGHT);

}

// returns the lowest score in 'array'
// 'array' has 'elements' in it
function minScore(array, elements) {
  // add this code body
}


// returns the index of the lowest score in 'array' 
// 'array' has 'elements' in it
function minScoreIndex(array, elements) {
  // add this code body
}


// returns the highest score in 'array'
// 'array' has 'elements' in it
function maxScore(array, elements) {
  // add this code body
}


// returns the index of the highest score in 'array' 
// 'array' has 'elements' in it
function maxScoreIndex(array, elements) {
  // add this code body
}