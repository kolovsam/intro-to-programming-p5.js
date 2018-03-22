/* Leaderboard
Program to display and manipulate a "leader board" of scores, using arrays.
*/

// some colors to use in this program
// (named colors may be found here: w3schools.com/cssref/css_colors.asp)
const BACKGROUND_COLOR = 'lightgrey';
const ELEMENT_OUTLINE_COLOR = 'black';
const ELEMENT_SQUARE_COLOR = 'cornsilk';
const MIN_SQUARE_COLOR = 'pink';
const MAX_SQUARE_COLOR = 'aqua';

// the overall canvas
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 1000;

// leader board configuration
const BOARD_ELEMENTS = 15;
const MIN_SCORE = 0;
const MAX_SCORE = 100;

// display settings
const BOARD_X_ORIGIN = CANVAS_WIDTH / 2.5;
const BOARD_Y_ORIGIN = 150;
const ELEMENT_WIDTH = 200;
const ELEMENT_HEIGHT = 50;
const BORDER_WIDTH = 2;
const TEXT_STROKE = 1;
const TEXT_SIZE = ELEMENT_HEIGHT / 2;

// arrays for the various board data
const testBoard = // an initialized constant array of test data
  [44, 2, 33, 0, 50, 33, 100, 91, 92, 86, 100, 40, 95, 77, 99];
var displayBoard = []; // the array of scores to be displayed on screen

// display instructions on top of screen
const hint = "Press any key for random scores, and 't' for test scores."

function setup() {
  // create the canvas
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  background(BACKGROUND_COLOR);

  // start off with the test data
  drawBoard(
    testBoard, BOARD_ELEMENTS, "TEST",
    BOARD_X_ORIGIN, BOARD_Y_ORIGIN,
    ELEMENT_WIDTH, ELEMENT_HEIGHT);
}

// this function is not used in this application
function draw() {}

// instead we use key presses to trigger different actions
function keyTyped() {

  // this function is called by the system whenever a key is typed
  // if 't' is typed, the testboard scores are loaded
  // else random scores are loaded on any other key

  var theKey = key;
  print("key = ", theKey, " was typed");

  if (theKey == "t") {

    background(BACKGROUND_COLOR);
    drawBoard(
      testBoard, BOARD_ELEMENTS, "TEST",
      BOARD_X_ORIGIN, BOARD_Y_ORIGIN,
      ELEMENT_WIDTH, ELEMENT_HEIGHT);

  } else {

    //reset background
    background(BACKGROUND_COLOR);

    //loop to draw board with displayBoard data
    for (i = 0; i < testBoard.length; i++) {
      displayBoard[i] = round(random(100));
    }
    drawBoard(
      displayBoard, BOARD_ELEMENTS, "RANDOM",
      BOARD_X_ORIGIN, BOARD_Y_ORIGIN,
      ELEMENT_WIDTH, ELEMENT_HEIGHT);
  }

}


// displays the instructions on the top of the screen
function drawHint(hint, xOrigin, yOrigin, elementWidth, elementHeight) {
  // print the name of the leader board at the top of the display
  text(hint, xOrigin + elementWidth / 2, yOrigin - elementHeight / 0.5);
}

// writes the name of the board ('label') at the top of the 
// leader board display
function drawLabel(label, xOrigin, yOrigin, elementWidth, elementHeight) {
  // print the name of the leader board at the top of the display
  text(label, xOrigin + elementWidth / 2, yOrigin - elementHeight / 2);
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

  textSize(TEXT_SIZE);
  textAlign(CENTER);

  //label board
  drawHint(hint, xOrigin, yOrigin, elementWidth, elementHeight);
  drawLabel(label, xOrigin, yOrigin, elementWidth, elementHeight);

  //display average by calculating totalscore
  var average = avgScore(array, elements);
  text("AVG", xOrigin - elementWidth / 4, yOrigin + (elementHeight * (array.length + 1)));
  text(average, xOrigin + elementWidth / 2, yOrigin + (elementHeight * (array.length + 1)));

  //display min and max score values
  var minimumScore = minScore(array, elements);
  var maximumScore = maxScore(array, elements);

  //display color codes for min and max score index 
  var minIndex = minScoreIndex(array, elements, minimumScore);
  var maxIndex = maxScoreIndex(array, elements, maximumScore);

  //loop for board design with scores
  for (i = 0; i < elements; i++) {
    var y = yOrigin + i * elementHeight;

    //changes board colors for max and min score
    if (array[i] == minimumScore) {
      fill(MIN_SQUARE_COLOR);
    } else if (array[i] == maximumScore) {
      fill(MAX_SQUARE_COLOR);
    } else {
      fill(ELEMENT_SQUARE_COLOR);
    }

    //draw the leaderboard with scores
    rect(xOrigin, y, elementWidth, elementHeight);
    //display array index
    fill(ELEMENT_OUTLINE_COLOR);
    text(i, xOrigin - elementWidth / 4, y + elementHeight / 1.5);
    //display scores
    text(array[i], xOrigin + elementWidth / 2, y + elementHeight / 1.5);

  }

}


// computes the average of all 'elements' scores in 'array'
// and returns that as a whole number
function avgScore(array, elements) {

  var totalScore = 0;
  var average = 0;

  //calculate total score
  for (i = 0; i < elements; i++) {
    var totalScore = totalScore + array[i];
  }

  //calculate average
  var average = round(totalScore / elements);
  return average;
}


// returns the lowest score in 'array'
// 'array' has 'elements' in it
function minScore(array, elements) {
  // add this code body

  var minimumScore = MAX_SCORE;

  //checks if score is lower than current max score to calculate min score
  for (i = 0; i < elements; i++) {
    if (array[i] < minimumScore) {
      minimumScore = array[i];
    }
  }
  return minimumScore;
}

// returns the index of the lowest score in 'array' 
// 'array' has 'elements' in it
function minScoreIndex(array, elements, minimumScore) {
  // add this code body
  var minimumIndex;

  for (i = 0; i < elements; i++) {
    if (array[i] == minimumScore) {
      minimumIndex = i;
    }
  }
  return minimumIndex;
}


// returns the highest score in 'array'
// 'array' has 'elements' in it
function maxScore(array, elements) {
  // add this code body
  maximumScore = MIN_SCORE;

  for (i = 0; i < elements; i++) {
    if (array[i] > maximumScore) {
      maximumScore = array[i];
    }
  }
  return maximumScore;
}


// returns the index of the highest score in 'array' 
// 'array' has 'elements' in it
function maxScoreIndex(array, elements, maximumScore) {
  // add this code body
  var maximumIndex;

  for (i = 0; i < elements; i++) {
    if (array[i] == maximumScore) {
      maximumIndex = i;
    }
  }
  return maximumIndex;
}