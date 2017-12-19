/* leader board
ahdavidson and J Newth, 11/2017

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

const BOARD_LABEL = "Scores!";
const averageLabel = "Avg";

//variables to accumulate running totals while traversing the array
var totalScores = 0;
var numScores = 0;

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

  avgScore(testBoard, BOARD_ELEMENTS);
}


// this function is not used in this application
function draw() {}


// instead we use key presses to trigger different actions
function keyTyped() {

  // this function is called by the system whenever a key is typed
  // so figure out which one was hit
  var theKey = key;
  print("key = ", theKey, " was typed");

  if (theKey == "r") {

    background(BACKGROUND_COLOR);

    for (i = 0; i < testBoard.length; i++) {
      displayBoard[i] = round(random(100));
    }

    drawBoard(displayBoard, BOARD_ELEMENTS, BOARD_LABEL, BOARD_X_ORIGIN, BOARD_Y_ORIGIN, ELEMENT_WIDTH, ELEMENT_HEIGHT);
  }

  avgScore(testBoard, BOARD_ELEMENTS);
}


// writes the name of the board ('label') at the top of the 
// leader board display
function drawLabel(label) {
  // print the name of the leader board at the top of the display
  /*textSize(TEXT_SIZE);
  textAlign(CENTER, CENTER);
  fill('black');
  strokeWeight(TEXT_STROKE);
  text("Scores!", BOARD_X_ORIGIN, BOARD_Y_ORIGIN - 50);*/
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

  //determine lowest score
  var miniScore = minScore(array);

  //determine highest score
  var maxiScore = maxScore(array);

  // draw the required number of bar segments
  for (var i = 0, sum = 0; i < elements; sum += array[i++]) {

    // keep a total of the number of scores recorded
    // and the running total of the scores...
    totalScores = totalScores + array[i];
    numScores++;

    fill(ELEMENT_SQUARE_COLOR);
    stroke(ELEMENT_OUTLINE_COLOR);
    strokeWeight(BORDER_WIDTH);

    // first calculate the x coordinate of this segment
    var yCorner = yOrigin + i * elementHeight;

    //determine if high/low score here
    if (array[i] == miniScore) {
      fill(MIN_SQUARE_COLOR);
    } else if (array[i] == maxiScore) {
      fill(MAX_SQUARE_COLOR);
    } else {
      fill(ELEMENT_SQUARE_COLOR);
    }

    //draw bar segment
    rect(xOrigin, yCorner, elementWidth, elementHeight);

    //print(array[i]);

    // now put the scores in the boxes
    textSize(TEXT_SIZE);
    textAlign(CENTER, CENTER);
    fill('black');
    strokeWeight(TEXT_STROKE);
    text(array[i], xOrigin + elementWidth / 2, yCorner + elementHeight / 2);

    //show array index on canvas
    text(i, xOrigin - 50, yCorner + 25);

    //show label
    text(label, xOrigin, yOrigin - 50);

  }

  //text(totalScores, 50, 50);
  //text(numScores, 50, 100);

}


// computes the average of all 'elements' scores in 'array'
// and returns that as a whole number
function avgScore(array, elements) {
  // add this code body
  var averageScore = round(totalScores / numScores);

  text(averageLabel, BOARD_X_ORIGIN - 50, BOARD_Y_ORIGIN + (elements * ELEMENT_HEIGHT) + 35);
  text(averageScore, BOARD_X_ORIGIN + (ELEMENT_WIDTH / 2), BOARD_Y_ORIGIN + (elements * ELEMENT_HEIGHT) + 35);

}


// returns the lowest score in 'array'
// 'array' has 'elements' in it
function minScore(array, elements) {
  // add this code body
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
// 'array' has 'elements' in it
function minScoreIndex(array, elements) {
  // add this code body
}


// returns the highest score in 'array'
// 'array' has 'elements' in it
function maxScore(array, elements) {
  // add this code body

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
// 'array' has 'elements' in it
function maxScoreIndex(array, elements) {
  // add this code body
}