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
var displayBoard = []; // the array of scores to be displayed on screen

// display times;
var times = 0;

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
function draw() {
}


// instead we use key presses to trigger different actions
// Type any key and then refresh the leader board
function keyTyped() {

   // this function is called by the system whenever a key is typed
   // so figure out which one was hit
   var theKey = key;
   print("key = ", theKey, " was typed");

   var boardLabel = "Typed Display"; // for the name of the board being displayed

  displayBoard =  ArrayGenerate();
  
   // here is where you reload the 'displayBoard' array based on the
   // particular keys pressed. you must at least be able to 
   // 1) regenerate the board with a set of randomly generated scores
   // 2) reload the constant test data array into the board
   // any other fun things you want to do are optional

   // update the display with the new leader board scores
   drawBoard(
      displayBoard, BOARD_ELEMENTS, boardLabel,
      BOARD_X_ORIGIN, BOARD_Y_ORIGIN,
      ELEMENT_WIDTH, ELEMENT_HEIGHT);
   
}


// Mouse Click and then refresh th leader board

function mouseClicked() {
     var boardLabel = "Clicked Display"; // for the name of the board being displayed

  displayBoard =  ArrayGenerate();
  
   // here is where you reload the 'displayBoard' array based on the
   // particular keys pressed. you must at least be able to 
   // 1) regenerate the board with a set of randomly generated scores
   // 2) reload the constant test data array into the board
   // any other fun things you want to do are optional

   // update the display with the new leader board scores
   drawBoard(
      displayBoard, BOARD_ELEMENTS, boardLabel,
      BOARD_X_ORIGIN, BOARD_Y_ORIGIN,
      ELEMENT_WIDTH, ELEMENT_HEIGHT);
   
}


// writes the name of the board ('label') at the top of the 
// leader board display
function drawLabel(label) {
   // print the name of the leader board at the top of the discplay
    var botX =  BOARD_X_ORIGIN;
    var botY =  BOARD_Y_ORIGIN;
    textSize(25);
    textAlign(CENTER, CENTER);
    fill('black');
    strokeWeight(1);
    text(label, botX + ELEMENT_WIDTH / 2, botY - ELEMENT_HEIGHT / 2);
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
  
  // refresh canvas;
  background(BACKGROUND_COLOR);
  
  // display label
  drawLabel(label)
  
  // this is the guts of this program !!
     for (i = 0; i < elements; i++) {
      if (array[i] == minScore(array, elements)) {
        fill(MIN_SQUARE_COLOR);
      } else if (array[i] == maxScore(array, elements)) {
        fill(MAX_SQUARE_COLOR);
      } else {
        fill(ELEMENT_SQUARE_COLOR);
      }
      stroke(ELEMENT_OUTLINE_COLOR);
      strokeWeight(BORDER_WIDTH);

      // first calculate the x coordinate of this segment
      var yCorner = yOrigin + i * elementHeight;
      // then draw one bar segment
      rect(xOrigin, yCorner, elementWidth, elementHeight);

      print(array[i]);

      // now put the grades in the boixes
      textSize(25);
      textAlign(CENTER, CENTER);
      fill('black');
      strokeWeight(1);
      text(i, xOrigin - elementWidth / 2, yCorner + elementHeight / 2);
      text(array[i], xOrigin + elementWidth / 2, yCorner + elementHeight / 2);
      botY = yCorner;
   }
   text("AVG", xOrigin - elementWidth / 2, botY + elementHeight *2);
   text(avgScore(array, elements), xOrigin + elementWidth / 2, botY + elementHeight *2);
}


// computes the average of all 'elements' scores in 'array'
// and returns that as a whole number
function avgScore(array, elements) {
   // add this code body
  return round(array.reduce(function (p, c) {
    return p + c;
  }) / elements);
  
}


// returns the lowest score in 'array'
// 'array' has 'elements' in it
function minScore(array, elements) {
   // add this code body
  return Math.min.apply(null, array);
}


// returns the index of the lowest score in 'array' 
// 'array' has 'elements' in it
function minScoreIndex(array, elements) {
   // add this code body
   return array.indexOf(minScore(array, elements));
}


// returns the highest score in 'array'
// 'array' has 'elements' in it
function maxScore(array, elements) {
   // add this code body
   return Math.max.apply(null, array);
}


// returns the index of the highest score in 'array' 
// 'array' has 'elements' in it
function maxScoreIndex(array, elements) {
   // add this code body
   return array.indexOf(maxScore(array, elements));
}

// random Array
function ArrayGenerate() {
    return Array.apply(null, Array(BOARD_ELEMENTS)).map(function() {
        return Math.round(Math.random() * MAX_SCORE);
    });
}

