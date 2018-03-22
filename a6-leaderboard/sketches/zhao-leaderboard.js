/*
Can Zhao
Assignment 6 RESUBMIT
*/

const BACKGROUND_COLOR = 'lightgrey';
const ELEMENT_OUTLINE_COLOR = 'black';
const ELEMENT_SQUARE_COLOR = 'cornsilk';
const MIN_SQUARE_COLOR = 'pink';
const MAX_SQUARE_COLOR = 'aqua';
const TEXT_COLOR = 'black';

// the overall canvas
const CANVAS_WIDTH = 600
const CANVAS_HEIGHT = 1000;

// leader board configuration
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
      testBoard, testBoard.length, "TEST",
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

   var boardLabel; // for the name of the board being displayed

   // here is where you reload the 'displayBoard' array based on the
   // particular keys pressed. you must at least be able to 
   // 1) regenerate the board with a set of randomly generated scores
   // 2) reload the constant test data array into the board
   // any other fun things you want to do are optional

   // update the display with the new leader board scores
 	background(BACKGROUND_COLOR);

  for(i=0;i<15;i++){
    displayBoard[i] = Math.round(random(100));
  }
  if (key == "t"){
      drawBoard(
      testBoard, testBoard.length, "TEST",
      BOARD_X_ORIGIN, BOARD_Y_ORIGIN,
      ELEMENT_WIDTH, ELEMENT_HEIGHT);
  }else{
    drawBoard(
      displayBoard, displayBoard.length, "RANDOM",
      BOARD_X_ORIGIN, BOARD_Y_ORIGIN,
      ELEMENT_WIDTH, ELEMENT_HEIGHT);
      }

   
}

function displayBoard(array, elements, label,
   xOrigin, yOrigin, elementWidth, elementHeight) {
  for (i = 0; i<array.length; i++){ 
      var yCorner = yOrigin + i * elementHeight;
    	//draw each square
      fill(ELEMENT_SQUARE_COLOR);
      stroke(ELEMENT_OUTLINE_COLOR);
	  	rect(xOrigin, yCorner, elementWidth, elementHeight);
      fill(TEXT_COLOR);
      textSize(TEXT_SIZE);
      textAlign(CENTER,CENTER);
      stroke(TEXT_STROKE);
      //display index
      text(i,xOrigin - elementWidth/3, yCorner + elementHeight/2);
      //display the numbers in testBoard
      text(array[i], xOrigin + elementWidth / 2,  yCorner + elementHeight/2);
 			
    }
  	//draw the label
  	drawLabel(label);
  
}

// writes the name of the board ('label') at the top of the 
// leader board display
function drawLabel(label) {
   // print the name of the leader board at the top of the discplay
  text(label,BOARD_X_ORIGIN+ELEMENT_WIDTH/2, BOARD_Y_ORIGIN-ELEMENT_HEIGHT/2);
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
  	for (i = 0; i<array.length; i++){ 
      var yCorner = yOrigin + i * elementHeight;
    	//draw each square
      fill(ELEMENT_SQUARE_COLOR);
      stroke(ELEMENT_OUTLINE_COLOR);
	  	rect(xOrigin, yCorner, elementWidth, elementHeight);
      fill(TEXT_COLOR);
      textSize(TEXT_SIZE);
      textAlign(CENTER,CENTER);
      stroke(TEXT_STROKE);
      //display index
      text(i,xOrigin - elementWidth/3, yCorner + elementHeight/2);
      //display the numbers in testBoard
      text(array[i], xOrigin + elementWidth / 2,  yCorner + elementHeight/2);
 			
    }
  	//draw the label
  	drawLabel(label);
  //call the calculating average function
  	text(avgScore(array), BOARD_X_ORIGIN + ELEMENT_WIDTH / 2, BOARD_Y_ORIGIN + (array.length-1) *  ELEMENT_HEIGHT + ELEMENT_HEIGHT*2);
}


// computes the average of all 'elements' scores in 'array'
// and returns that as a whole number
function avgScore(array, elements) {
   //calculate the sum of all numbers in testBoard
  	var total = 0;
  	for (i = 0; i<array.length; i++){ 
			total += array[i];
    }
    	var average = 0;
    //calculate the average
  	average = Math.round(total/array.length);
  	//display the average
  	text("AVG", BOARD_X_ORIGIN - ELEMENT_WIDTH/3, BOARD_Y_ORIGIN + (array.length-1) * ELEMENT_HEIGHT + ELEMENT_HEIGHT*2);
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
