// colors
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
const ELEMENT_WIDTH = 150;
const ELEMENT_HEIGHT = 50;
const BORDER_WIDTH = 2;
const TEXT_STROKE = 1;
const TEXT_SIZE = ELEMENT_HEIGHT / 2;

// arrays for the various board data
const testBoard = // an initialized constant array of test data
  [44, 2, 33, 0, 50, 33, 100, 91, 92, 86, 100, 40, 95, 77, 99];
var displayBoard = []; // the array of scores to be displayed on screen


function setup() {
  // create the canvas
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  background(BACKGROUND_COLOR);

  // start off with the test data
  drawBoard(
    testBoard, BOARD_ELEMENTS, "Leaderboard",
    BOARD_X_ORIGIN, BOARD_Y_ORIGIN,
    ELEMENT_WIDTH, ELEMENT_HEIGHT);
}


// this function is not used in this application
function draw() {}


// instead we use key presses to trigger different actions
function keyTyped() {

  // this function is called by the system whenever a key is typed
  // so figure out which one was hit
  var theKey = key;
  print("key = ", theKey, " was typed");

  var boardTitle; // for the name of the board being displayed

  if (theKey == "r") {

    background(BACKGROUND_COLOR);

    for (i = 0; i < testBoard.length; i++) {
      displayBoard[i] = round(random(100));
    }

    drawBoard(displayBoard, BOARD_ELEMENTS, "Random", BOARD_X_ORIGIN, BOARD_Y_ORIGIN, ELEMENT_WIDTH, ELEMENT_HEIGHT);
  } else {

  }
}


// writes the name of the board ('title') at the top of the 
// leader board display
function drawTitle(title, xOrigin, yOrigin, elementWidth, elementHeight) {

  // name of title 
  text(title, xOrigin + ELEMENT_WIDTH / 2, yOrigin - ELEMENT_HEIGHT / 2);

}

function drawBoard(array, elements, title,
  xOrigin, yOrigin, elementWidth, elementHeight) {

  // Format
  textSize(TEXT_SIZE);
  textAlign(CENTER, CENTER);

  // title
  drawTitle(title, xOrigin, yOrigin, elementWidth, elementHeight);

  //AVG
  var average = avgScore(array);
  text('AVG', xOrigin - ELEMENT_WIDTH / 2, yOrigin + BOARD_ELEMENTS * ELEMENT_HEIGHT + ELEMENT_HEIGHT / 2);
  text(average, xOrigin + ELEMENT_WIDTH / 2, yOrigin + BOARD_ELEMENTS * ELEMENT_HEIGHT + ELEMENT_HEIGHT / 2);

  // min and index
  var miniScore = minScore(array);
  var minIndex = minScoreIndex(array, miniScore);

  // max and index
  var maxiScore = maxScore(array);
  var maxIndex = maxScoreIndex(array, maxiScore);


  // Draw elements box
  for (i = 0; i < BOARD_ELEMENTS; i++) {

    // y coord of elements
    var yCorner = yOrigin + i * ELEMENT_HEIGHT;


    // min and max color difference
    if (array[i] == miniScore) {
      fill(MIN_SQUARE_COLOR);
    } else if (array[i] == maxiScore) {
      fill(MAX_SQUARE_COLOR);
    } else {
      fill(ELEMENT_SQUARE_COLOR);
    }

    // Draw one box
    rect(xOrigin, yCorner, ELEMENT_WIDTH, ELEMENT_HEIGHT);

    // Score in Box
    fill(ELEMENT_OUTLINE_COLOR);
    text(array[i], xOrigin + ELEMENT_WIDTH / 2, yCorner + ELEMENT_HEIGHT / 2);

    // Index
    text(i + 1, xOrigin - ELEMENT_WIDTH / 2, yCorner + ELEMENT_HEIGHT / 2);

  }

}


// AVG function
function avgScore(array) {

  //total and num of score
  var totalScore = 0;
  var numScore = array.length;

  // Calculate total score
  for (i = 0; i < array.length; i++) {
    totalScore = totalScore + array[i];
  }

  // Calculate AVG
  var average = round(totalScore / numScore);
  return average;
}


// returns the lowest score in 'array'
function minScore(array) {
  var miniScore = MAX_SCORE;

  // score lower than max score
  for (i = 0; i < array.length; i++) {
    if (array[i] < miniScore) {
      miniScore = array[i];
    }
  }
  return miniScore;
}


// returns the index of the lowest score in 'array' 
function minScoreIndex(array, miniScore) {

  var miniIndex;

  for (i = 0; i < array.lenth; i++) {
    if (array[i] == miniScore) {
      miniIndex = i;
    }
  }
  return miniIndex;
}

// returns the highest score in 'array'
function maxScore(array) {

  // score higher than min score
  maxiScore = MIN_SCORE;

  for (i = 0; i < array.length; i++) {
    if (array[i] > maxiScore) {
      maxiScore = array[i];
    }
  }
  return maxiScore;
}

// returns the index of the highest score in 'array' 
function maxScoreIndex(array, maxiScore) {
  var maxiIndex;

  for (i = 0; i < array.length; i++) {
    if (array[i] == maxiScore) {
      maxiIndex = i;
    }
  }
  return maxiIndex;
}