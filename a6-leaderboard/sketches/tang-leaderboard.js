/* leader board
Yi Tang, 11/2017

HCDE 598 "Intro to Programming" assignment 6

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
var displayBoard = [];


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

// random the displayboard numbers
function keyTyped() {
  var theKey = key;
  print("key = ", theKey, " was typed");

  var boardLabel; // for the name of the board being displayed
  
// the array of scores to be displayed on screen
  var a = int(random(0, 100));
  var b = int(random(0, 100));
  var c = int(random(0, 100));
  var d = int(random(0, 100));
  var e = int(random(0, 100));
  var f = int(random(0, 100));
  var g = int(random(0, 100));
  var h = int(random(0, 100));
  var i = int(random(0, 100));
  var j = int(random(0, 100));
  var k = int(random(0, 100));
  var l = int(random(0, 100));
  var m = int(random(0, 100));
  var n = int(random(0, 100));
  var o = int(random(0, 100));
  var displayBoard = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o];
 
//draw testboard
  drawBoard(
    displayBoard, BOARD_ELEMENTS, boardLabel,
    BOARD_X_ORIGIN, BOARD_Y_ORIGIN,
    ELEMENT_WIDTH, ELEMENT_HEIGHT);
}


// writes the name of the board ('label') at the top of the 
// leader board display
function drawLabel(label) {
  // print the name of the leader board at the top of the discplay
  textSize(TEXT_SIZE);
  stroke(TEXT_STROKE);
  fill('black');
  text(label, BOARD_X_ORIGIN + (ELEMENT_WIDTH / 2),
    BOARD_Y_ORIGIN - (ELEMENT_HEIGHT / 2));
}


function drawBoard(array, elements, label,
  xOrigin, yOrigin, elementWidth, elementHeight) {
  for (i = 0; i < elements; i++) {
    fill(ELEMENT_SQUARE_COLOR);
    stroke(ELEMENT_OUTLINE_COLOR);
    strokeWeight(BORDER_WIDTH);    
    // first calculate the x coordinate of the square
    var yCorner = yOrigin + i * elementHeight;    
    // then draw one square segment
    rect(xOrigin, yCorner, elementWidth, elementHeight);    
    // textboard
    textSize(TEXT_SIZE);
    stroke(TEXT_STROKE);
    textAlign(CENTER, CENTER);
    fill('black');
    text(array[i], xOrigin + elementWidth / 2, yCorner + elementHeight / 2);
    // displayboard  
    text(i, xOrigin - elementWidth / 2, yCorner + elementHeight / 2)
  }
  
  drawLabel(label);
  avgScore(array, BOARD_ELEMENTS);
  minScore(array, BOARD_ELEMENTS);
  maxScore(array, BOARD_ELEMENTS);
}


// computes the average of all 'elements' scores in 'array'
// and returns that as a whole number

function avgScore(array, elements) {
  var totalScores = 0;
  for (i = 0; i < elements; i++) {
    totalScores = totalScores + array[i];
    print(array[i]);
    print(" total = ", totalScores);
  }
  var avgScore = totalScores / elements;
  print("average = ", avgScore);
  textSize(TEXT_SIZE);
  textAlign(CENTER, CENTER);
  fill('black');
  stroke(TEXT_STROKE);
  text(int(avgScore), BOARD_X_ORIGIN + (ELEMENT_WIDTH / 2),
    BOARD_Y_ORIGIN + (i + 1) * ELEMENT_HEIGHT);
}


// returns the lowest score in 'array'
function minScore(array, elements) {
  // add this code body
  var minScore = 100;
  var minIndex = 0;
  for (i = 0; i < elements; i++) {
    if (array[i] < minScore) {
      minScore = array[i];
      minIndex = i;
    }
    print(minScore);
  }
  var yCorner = BOARD_Y_ORIGIN + minIndex * ELEMENT_HEIGHT;

  fill(MIN_SQUARE_COLOR);
  rect(BOARD_X_ORIGIN, yCorner, ELEMENT_WIDTH, ELEMENT_HEIGHT);
  fill(ELEMENT_OUTLINE_COLOR);
  textSize(TEXT_SIZE);
  stroke(TEXT_STROKE);
  textAlign(CENTER, CENTER);
  text(minScore, BOARD_X_ORIGIN + ELEMENT_WIDTH / 2,
    yCorner + ELEMENT_HEIGHT / 2);

}

// returns the highest score in 'array'
// 'array' has 'elements' in it
function maxScore(array, elements) {
  var maxScore = 100;
  var maxScoreIndex = 0;
  for (i = 0; i < elements; i++) {
    if (array[i] < minScore) {
      maxScore = array[i];
      maxScoreIndex = i;
    }
    print(maxScore);
  }
  var yCorner = BOARD_Y_ORIGIN + maxScoreIndex * ELEMENT_HEIGHT;

  fill(MAX_SQUARE_COLOR);
  rect(BOARD_X_ORIGIN, yCorner, ELEMENT_WIDTH, ELEMENT_HEIGHT);
  fill(ELEMENT_OUTLINE_COLOR);
  textSize(TEXT_SIZE);
  stroke(TEXT_STROKE);
  textAlign(CENTER, CENTER);
  text(maxScore, BOARD_X_ORIGIN + ELEMENT_WIDTH / 2,
    yCorner + ELEMENT_HEIGHT / 2);
}