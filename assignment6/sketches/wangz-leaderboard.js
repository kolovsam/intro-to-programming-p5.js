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
   background(BACKGROUND_COLOR);
   // this function is called by the system whenever a key is typed
   // so figure out which one was hit

   var theKey = key;
   print("key = ", theKey, " was typed");

   var boardLabel; // for the name of the board being displayed

   // here is where you reload the 'displayBoard' array based on the
   // particular keys pressed. you must at least be able to
   // 1) regenerate the board with a set of randomly generated scores
   // 2) reload the constant test data array into the board
   // any other fun things you want to do are optional
   var boardRandom = [];
   for(i = 0; i < BOARD_ELEMENTS; i++){
     crt = round(random(MIN_SCORE, MAX_SCORE));
     boardRandom[i] = crt;
   }

   // update the display with the new leader board scores
   drawBoard(
      boardRandom, BOARD_ELEMENTS, boardLabel,
      BOARD_X_ORIGIN, BOARD_Y_ORIGIN,
      ELEMENT_WIDTH, ELEMENT_HEIGHT);
}


// writes the name of the board ('label') at the top of the
// leader board display
function drawLabel(label) {
   // print the name of the leader board at the top of the discplay
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
   minIndex = minScoreIndex(array, array.length);
   maxIndex = maxScoreIndex(array, array.length);
   sum = 0;
   print(minIndex);
   print(maxIndex);
   for(i = 0; i < array.length; i++){
     color_to_fill = ELEMENT_SQUARE_COLOR;
     if(i == minIndex){
       color_to_fill = MIN_SQUARE_COLOR;
     }else if(i == maxIndex){
       color_to_fill = MAX_SQUARE_COLOR;
     }else{
       color_to_fill = ELEMENT_SQUARE_COLOR;
     }
     num = array[i];
     sum += num;
     stroke(ELEMENT_OUTLINE_COLOR);
     fill(color_to_fill);
     rect(xOrigin, yOrigin, elementWidth, elementHeight);
     fill('black');
     text(num, xOrigin + elementWidth / 2, yOrigin + elementHeight / 2);
     text(i,xOrigin - elementWidth / 2, yOrigin + elementHeight / 2)
     yOrigin += elementHeight;
   }
   avg = sum / array.length;
   fill('black');
   text(avg, xOrigin + elementWidth / 2, yOrigin + elementHeight / 2);
   text('AVG',xOrigin - elementWidth / 2, yOrigin + elementHeight / 2)
}


// computes the average of all 'elements' scores in 'array'
// and returns that as a whole number
function avgScore(array, elements) {
   sum = 0;
   for(i = 0; i < array.length; i++){
     crt = array[i];
     sum += crt;
   }
   return sum / (array.length);
}


// returns the lowest score in 'array'
// 'array' has 'elements' in it
function minScore(array, elements) {
   return array[minScoreIndex(array, elements)];
}


// returns the index of the lowest score in 'array'
// 'array' has 'elements' in it
function minScoreIndex(array, elements) {
  index = -1;
  min = MAX_SCORE;
  for(i = 0; i < array.length; i++){
    crt = array[i];
    if(crt < min){
      index = i;
      min = crt;
    }
  }
  return index;
}


// returns the highest score in 'array'
// 'array' has 'elements' in it
function maxScore(array, elements) {
   return array[maxScoreIndex(array, elements)];
}


// returns the index of the highest score in 'array'
// 'array' has 'elements' in it
function maxScoreIndex(array, elements) {
  index = -1;
  max = MIN_SCORE;
  for(i = 0; i < array.length; i++){
    crt = array[i];
    if(crt > max){
      index = i;
      max = crt;
    }
  }
  return index;
}
