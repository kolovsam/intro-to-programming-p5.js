/* leader board
Sally Tsang, 11/26/2017

program to display and manipulate a "leader board" of scores, using arrays.
a solution to HCDE 598 "Intro to Programming" assignment 6
Please click onto the grey area with mouse to trigger random numbers.
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
const ELEMENT_WIDTH = 200;
const ELEMENT_HEIGHT = 50;
const BORDER_WIDTH = 2;
const TEXT_STROKE = 1;
const TEXT_SIZE = ELEMENT_HEIGHT / 2;


// arrays for the various board data
const testBoard = // an initialized constant array of test data
  [44, 2, 33, 0, 50, 33, 100, 91, 92, 86, 100, 40, 95, 77, 99];
var displayBoard = []; // the array of scores to be displayed on screen
var titleIndex = 1;



function setup() {

  // create the canvas
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  background(BACKGROUND_COLOR);

  // start off with the test data
  drawBoard(testBoard, BOARD_ELEMENTS,
    BOARD_X_ORIGIN, BOARD_Y_ORIGIN,
    ELEMENT_WIDTH, ELEMENT_HEIGHT);

  // start with the initial title 
  drawLabel('Initial');
}

// this function is not used in this application
function draw() {}

// clicking mouse to trigger random numbers
function mousePressed() {

  // generate a new title 
  background(BACKGROUND_COLOR);
  drawLabel(titleIndex);
  titleIndex = titleIndex + 1;

  for (i = 0; i < BOARD_ELEMENTS; i++) {
    print(displayBoard[i]);
    displayBoard[i] = Math.round(random(1,100))
   
  }


  // update the display with the new leader board scores
  drawBoard(displayBoard, BOARD_ELEMENTS,
    BOARD_X_ORIGIN, BOARD_Y_ORIGIN,
    ELEMENT_WIDTH, ELEMENT_HEIGHT);
}


// leader board title
function drawLabel(label) {
  textSize(TEXT_SIZE);
  textAlign(CENTER, CENTER);
  fill('black');
  strokeWeight(TEXT_STROKE);

  // print the name of the leader board at the top of the discplay
  text('Set ', BOARD_X_ORIGIN + ELEMENT_WIDTH / 2, BOARD_Y_ORIGIN - 30);
  text(label, (BOARD_X_ORIGIN + ELEMENT_WIDTH / 2) + 50, BOARD_Y_ORIGIN - 30);

}


function drawBoard(array, elements, label,
  xOrigin, yOrigin, elementWidth, elementHeight) {

  // print the text 'average' at the bottom of discplay
  textSize(TEXT_SIZE);
  textAlign(CENTER, CENTER);
  fill('black');
  strokeWeight(TEXT_STROKE);
  text('AVG', BOARD_X_ORIGIN - 80, CANVAS_HEIGHT - 100);

  // variables to accumulate running totals while traversing the array
  var totalScores = 0;


  for (i = 0; i < BOARD_ELEMENTS; i++) {
    fill(ELEMENT_SQUARE_COLOR);
    stroke(ELEMENT_OUTLINE_COLOR);
    strokeWeight(BORDER_WIDTH);

    // calculate the y coordinate of each box
    var yCorner = BOARD_Y_ORIGIN + i * ELEMENT_HEIGHT;
    rect(BOARD_X_ORIGIN, yCorner, ELEMENT_WIDTH, ELEMENT_HEIGHT);

    // index number left of box
    textSize(TEXT_SIZE);
    textAlign(CENTER, CENTER);
    fill('black');
    strokeWeight(TEXT_STROKE);
    text(i, BOARD_X_ORIGIN - 80, yCorner + ELEMENT_HEIGHT / 2);

    // put the grades in the boxes
    text(array[i], BOARD_X_ORIGIN + ELEMENT_WIDTH / 2, yCorner + ELEMENT_HEIGHT / 2);

    // keep the running total of the scores recorded
    totalScores += array[i];

  }

  // calculate average scores
  print("total score = ", totalScores);

  var averageScore = Math.round(totalScores / BOARD_ELEMENTS);
  print("average = ", averageScore);

  textSize(50);
  textAlign(CENTER, CENTER);
  fill('yellow');
  strokeWeight(5);
  text(averageScore, BOARD_X_ORIGIN + ELEMENT_WIDTH / 2, CANVAS_HEIGHT - 100);

}