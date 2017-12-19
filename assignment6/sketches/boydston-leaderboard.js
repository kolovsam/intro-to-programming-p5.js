/* 
leader board
Edits/Implmentationby Andrew Boydston 11/2017

Original Skeleton by:
ahdavidson, 11/2017

program to display and manipulate a "leader board" of scores, using arrays.
a solution to HCDE 598 "Intro to Programming" assignment 6
*/

// colors
const BACKGROUND_COLOR = 'lightgrey';

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
  var boardLabel = "RANDOM"; // for the name of the board being displayed
  
  // PRESS 'r' key to get a random array/update board
  if (theKey == 'r') {
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT); // to reset canvas
    background(BACKGROUND_COLOR);
    displayBoard = fillArray(displayBoard, BOARD_ELEMENTS); // fill in array with random elements
    drawBoard(
      displayBoard, BOARD_ELEMENTS, boardLabel,
      BOARD_X_ORIGIN, BOARD_Y_ORIGIN,
      ELEMENT_WIDTH, ELEMENT_HEIGHT);
  // PRESS any other key to get the test board
  } else {
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT); // to reset canvas
    background(BACKGROUND_COLOR);
    drawBoard(
      testBoard, BOARD_ELEMENTS, "TEST",
      BOARD_X_ORIGIN, BOARD_Y_ORIGIN,
      ELEMENT_WIDTH, ELEMENT_HEIGHT);
  }
}

// Fills an array with random elements
function fillArray(array, elements) {
  for (i = 0; i < elements; i++) {
    array[i] = ceil(random(MIN_SCORE, MAX_SCORE)) // random score between 0-100 and rounds to the nearest whole num
  }
  return array;
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
  textAlign(CENTER, CENTER);
  textSize(TEXT_SIZE);
  strokeWeight(TEXT_STROKE);
  
  // writes the name of the board ('label') at the top of the 
  // leader board display
  text(label, xOrigin + elementWidth / 2, yOrigin - elementHeight / 2);
  var total = 0; // used to find average later
  // draws the board
  for (i = 0; i < elements; i++) {
    // boxes around the array elements
    rect(xOrigin, yOrigin + elementHeight * i, elementWidth, elementHeight);
    // Array Indices
    text(i, xOrigin - elementWidth / 2, yOrigin + elementHeight * i + elementHeight / 2);
    // Array Contents
    text(array[i], xOrigin + elementWidth / 2, yOrigin + elementHeight * i + elementHeight / 2);
    total = total + array[i]; // running total
  }
  // display "AVG" text
  text("AVG", xOrigin - elementWidth / 2, yOrigin + elementHeight * elements + elementHeight / 2);
  // Calculate Average
  var average = total / elements;
  // round up to nearest whole num
  average = ceil(average);
  // display average number
  text(average, xOrigin + elementWidth / 2, yOrigin + elementHeight * elements + elementHeight / 2);
}