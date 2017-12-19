/* 
Mike Harwell
Leaderboard
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
   drawLabel("Leaderboard", BOARD_X_ORIGIN, BOARD_Y_ORIGIN);
  
   drawBoard(
      testBoard, BOARD_ELEMENTS, "TEST",
      BOARD_X_ORIGIN, BOARD_Y_ORIGIN,
      ELEMENT_WIDTH, ELEMENT_HEIGHT);
  
 	 //text(avgScore(testBoard, BOARD_ELEMENTS), BOARD_X_ORIGIN + BOARD_X_ORIGIN/3, BOARD_Y_ORIGIN * 9);
}


// this function is not used in this application
function draw() {}


// instead we use key presses to trigger different actions
function keyTyped() {

    // this function is called by the system whenever a key is typed
    // so figure out which one was hit
    var theKey = key;
    print("key = ", theKey, " was typed");

    // for the name of the board being displayed


    // here is where you reload the 'displayBoard' array based on the
    // particular keys pressed. you must at least be able to 
    // 1) regenerate the board with a set of randomly generated scores
    // 2) reload the constant test data array into the board
    // any other fun things you want to do are optional
    // update the display with the new leader board scores
    if (theKey == "r") {

        //label board "RANDOM"
        var boardLabel = "RANDOM";
      
     	  //reset background
        background(BACKGROUND_COLOR);

        //loop to draw board with displayBoard data
        for (i = 0; i < testBoard.length; i++) {
            displayBoard[i] = round(random(100));
        }
        drawBoard(
            displayBoard, BOARD_ELEMENTS, boardLabel,
            BOARD_X_ORIGIN, BOARD_Y_ORIGIN,
            ELEMENT_WIDTH, ELEMENT_HEIGHT);
    } else if (theKey == "t") {

        background(BACKGROUND_COLOR);

        drawBoard(
            testBoard, BOARD_ELEMENTS, "TEST",
            BOARD_X_ORIGIN, BOARD_Y_ORIGIN,
            ELEMENT_WIDTH, ELEMENT_HEIGHT);
    }

}


// writes the name of the board ('label') at the top of the 
// leader board display
function drawLabel(label, xOrigin, yOrigin) {
   // print the name of the leader board at the top of the display
    textSize(TEXT_SIZE);
		text(label, xOrigin, yOrigin/2);
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
  
  drawLabel("Leaderboard", BOARD_X_ORIGIN, BOARD_Y_ORIGIN);
  
  //calculate and display average
    var average = avgScore(array);
    text(average, xOrigin + elementWidth / 2, yOrigin + (elementHeight * (array.length + 1)));
  
  for(i = 0; i < array.length; i++) {
    
    //Leaderboard Containers
    rect(xOrigin, yOrigin + (elementHeight * i), elementWidth, elementHeight);
    
    //Scores
    text(array[i], xOrigin + xOrigin /3, (yOrigin + (elementHeight * i)) + yOrigin/3);
    
    //Element List
    text(i, xOrigin/2, (yOrigin + (elementHeight * i)) + yOrigin/3);
    
    //Average Score
    text("Average Score:", xOrigin/3, yOrigin * 9);
  
  }
  
}


// computes the average of all 'elements' scores in 'array'
// and returns that as a whole number
function avgScore(array, elements) {
   // add this code body

  var totalScore = 0;
  var numScores = array.length;
  
  for(i = 0; i < array.length; i++) {
    totalScore = totalScore + array[i];
  }
  
  var average = round(totalScore/numScores);
  
  return average;
}


// returns the lowest score in 'array'
// 'array' has 'elements' in it
function minScore(array, elements) {
   // add this code body
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
}


// returns the index of the highest score in 'array' 
// 'array' has 'elements' in it
function maxScoreIndex(array, elements) {
   // add this code body
}