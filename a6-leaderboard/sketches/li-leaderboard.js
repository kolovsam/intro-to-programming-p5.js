/* leader board
dong li, 11/2017
*/

// some colors to use in this program
const BACKGROUND_COLOR = 'white';
const ELEMENT_OUTLINE_COLOR = 'white';
const ELEMENT_SQUARE_COLOR = 'WhiteSmoke';
const MIN_SQUARE_COLOR = 'pink';
const MAX_SQUARE_COLOR = 'SkyBlue';
const TEXT_COLOR = "grey";

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
var displayBoard = []; // the array of scores to be displayed on screen
var indexArray = [];

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

function draw() {
  //create and draw index
  for (i = 0; i < testBoard.length; i++) {
    indexArray[i] = i + 1;
  }
  drawIndex(
    indexArray,
    BOARD_X_ORIGIN, BOARD_Y_ORIGIN,
    ELEMENT_WIDTH, ELEMENT_HEIGHT);
}


// instead we use key presses to trigger different actions
function keyTyped() {
  background(BACKGROUND_COLOR);

  var boardLabel = "SCORE"; // for the name of the board being displayed

  // generate random scores for the leader board
  for (i = 0; i < BOARD_ELEMENTS; i++) {
    displayBoard[i] = random(0, 100)
  }

  // update the display with the new leader board scores
  drawBoard(
    displayBoard, BOARD_ELEMENTS, boardLabel,
    BOARD_X_ORIGIN, BOARD_Y_ORIGIN,
    ELEMENT_WIDTH, ELEMENT_HEIGHT,
    minScoreIndex(displayBoard), maxScoreIndex(displayBoard));

  // display the average score
  avgScore(displayBoard);

}


// draws the leaderboard, the board label, and the table
function drawBoard(array, elements, boardlabel,
  xOrigin, yOrigin, elementWidth, elementHeight,
  minScoreIndex, maxScoreIndex) {

  for (i = 0; i < array.length; i++) {
    //color the squares for min/max scores
    if (i == minScoreIndex) {
      fill(MIN_SQUARE_COLOR);
    } else if (i == maxScoreIndex) {
      fill(MAX_SQUARE_COLOR);
      //color the squares for other scores
    } else {
      fill(ELEMENT_SQUARE_COLOR);
    }

    //draw the shape of the squares
    stroke(ELEMENT_OUTLINE_COLOR);
    strokeWeight(BORDER_WIDTH);
    rect(xOrigin, yOrigin + elementHeight * i, elementWidth, elementHeight)

    //draw the scores
    strokeWeight(0);
    fill(TEXT_COLOR);
    textSize(TEXT_SIZE);
    stroke(TEXT_STROKE);
    textAlign(CENTER, CENTER);
    text(array[i].toFixed(0), xOrigin + elementWidth / 2, yOrigin + elementHeight * (i + 0.5))
  }

  //draw the label
  text(boardlabel, xOrigin + elementWidth / 2, yOrigin - elementHeight / 2);
}

//draw the index
function drawIndex(array, xOrigin, yOrigin,
  elementWidth, elementHeight) {
  for (i = 0; i < array.length; i++) {
    strokeWeight(0);
    fill(TEXT_COLOR);
    textSize(TEXT_SIZE);
    stroke(TEXT_STROKE);
    textAlign(CENTER, CENTER);
    text(array[i], xOrigin - elementWidth * 0.5, yOrigin + elementHeight * (i + 0.5))
  }

}
// computes the average of all 'elements' scores in 'array'
// and returns that as a whole number
function avgScore(array) {
  var sum = 0;
  for (i = 0; i < array.length; i++) {
    sum += array[i];
  }

  text((sum / array.length).toFixed(1),
    BOARD_X_ORIGIN + ELEMENT_WIDTH / 2,
    BOARD_Y_ORIGIN + ELEMENT_HEIGHT * (array.length + 0.5));
}

//find and return the index for the lowest score
function minScoreIndex(array) {
  var minScore = 100;
  var minScoreIndex = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i] < minScore) {
      minScore = array[i];
      minScoreIndex = i;
    }
  }
  return minScoreIndex;
}


//find and return the index for the highest score
function maxScoreIndex(array) {
  // add this code body
  var maxScore = 0;
  var maxScoreIndex = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i] > maxScore) {
      maxScore = array[i];
      maxScoreIndex = i;
    }
  }
  return maxScoreIndex;
}