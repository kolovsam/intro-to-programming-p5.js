/* leader board
Tucker Standlee, 11/2017

program to display and manipulate a "leader board" of scores, using arrays.
a solution to HCDE 598 "Intro to Programming" assignment 6

*/

// some colors to use in this program
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
const ELEMENT_WIDTH = 300;
const ELEMENT_HEIGHT = 50;
const BORDER_WIDTH = 2;
const TEXT_STROKE = 1;
const TEXT_SIZE = ELEMENT_HEIGHT / 2;
const BOARD_LABEL = "2017 Test Scores";
const AVG_LABEL = "AVG";

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
    testBoard, BOARD_ELEMENTS, "TEST",
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
  // pressing "r" randomizes the test scores
  if (key == "r") {
    displayBoard = [];
    for (i = 0; i < BOARD_ELEMENTS; i++) {
      var randomNum = random(MIN_SCORE, MAX_SCORE);
      var roundedRandom = round(randomNum);
      displayBoard.push(roundedRandom);
    }
    // pressing "t" returns to default
  } else if (key == "t") {
    displayBoard = testBoard;
  } else {
    if (displayBoard.length == 0) {
      displayBoard = testBoard;
    }
  }

  drawBoard(
    displayBoard, BOARD_ELEMENTS,
    BOARD_X_ORIGIN, BOARD_Y_ORIGIN,
    ELEMENT_WIDTH, ELEMENT_HEIGHT);
}


// draws the complete leaderboard found in 'array' on the canvas.
function drawBoard(array, elements, label,
  xOrigin, yOrigin, elementWidth, elementHeight) {
  background(BACKGROUND_COLOR);

  var minIndex = minScoreIndex(array, elements);
  var maxIndex = maxScoreIndex(array, elements);
  for (i = 0; i < BOARD_ELEMENTS; i++) {
    if (i == maxIndex) {
      fill(MAX_SQUARE_COLOR);
    } else if (i == minIndex) {
      fill(MIN_SQUARE_COLOR);
    } else {
      fill(ELEMENT_SQUARE_COLOR);
    }

    var yCorner = BOARD_Y_ORIGIN + i * ELEMENT_HEIGHT;
    rect(BOARD_X_ORIGIN, yCorner, ELEMENT_WIDTH, ELEMENT_HEIGHT);

    //print(testBoard[i]);

    textSize(TEXT_SIZE);
    textAlign(CENTER, CENTER);
    strokeWeight(1);
    fill(ELEMENT_OUTLINE_COLOR);
    text(array[i], BOARD_X_ORIGIN + ELEMENT_WIDTH / 2, yCorner + ELEMENT_HEIGHT / 2);
    text(i, BOARD_X_ORIGIN / 2, yCorner + ELEMENT_HEIGHT / 2);
  }
  text(BOARD_LABEL, BOARD_X_ORIGIN + ELEMENT_WIDTH / 2, (yCorner + ELEMENT_HEIGHT) / BOARD_ELEMENTS);

  text(avgScore(array, elements), BOARD_X_ORIGIN + ELEMENT_WIDTH / 2, (yCorner + ELEMENT_HEIGHT / 2) + ELEMENT_HEIGHT);
  text(AVG_LABEL, BOARD_X_ORIGIN / 2, (yCorner + ELEMENT_HEIGHT / 2) + ELEMENT_HEIGHT);

  minScore(array, elements);
  maxScore(array, elements);
  maxScoreIndex(array, elements);
  minScoreIndex(array, elements);
}
// computes the average of all 'elements' scores in 'array'
// and returns that as a whole number
function avgScore(array, elements) {

  var totalScores = 0;

  for (i = 0; i < BOARD_ELEMENTS; i++) {
    totalScores = totalScores + array[i];;
  }

  var averageScore = totalScores / BOARD_ELEMENTS;
  print("average = ", averageScore);

  textSize(TEXT_SIZE);
  textAlign(CENTER, CENTER);
  return round(averageScore);
}

// returns the lowest score in 'array'
// 'array' has 'elements' in it
function minScore(array, elements) {

  var minimumScore = 1000;
  for (i = 0; i < BOARD_ELEMENTS; i++) {
    // add this code body
    if (array[i] < minimumScore) {
      minimumScore = array[i];

    }
  }
  return minimumScore
}


// returns the index of the lowest score in 'array' 
// 'array' has 'elements' in it
function minScoreIndex(array, elements) {
  var minimumScoreIndex = minScore(array, elements);
  for (i = 0; i < BOARD_ELEMENTS; i++) {
    if (array[i] == minimumScoreIndex) {
      return i;
    }
  }

}


// returns the highest score in 'array'
// 'array' has 'elements' in it
function maxScore(array, elements) {
  var maximumScore = 0;
  for (i = 0; i < BOARD_ELEMENTS; i++) {
    if (array[i] > maximumScore) {
      maximumScore = array[i];
    }
  }
  return maximumScore;
}



// returns the index of the highest score in 'array' 
// 'array' has 'elements' in it
function maxScoreIndex(array, elements) {
  var maxScoreValue = maxScore(array, elements);
  for (i = 0; i < BOARD_ELEMENTS; i++) {
    // add this code body
    if (array[i] == maxScoreValue) {
      return i;
    }
  }
}