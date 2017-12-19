/* leader board
Yaonan Huang, 11/2017

HCDE 598 assignment 6

*/

// some colors to use in this programz
const BACKGROUND_COLOR = 'white';
const ELEMENT_OUTLINE_COLOR = 'black';
const ELEMENT_SQUARE_COLOR = '#ececec';
const MIN_SQUARE_COLOR = '#FFE362';
const MAX_SQUARE_COLOR = '#28FFCB';

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

   // this function is called by the system whenever a key is typed
   // so figure out which one was hit
   var theKey = key;
   print("key = ", theKey, " was typed");

   var boardLabel = "RANDOM" ; // for the name of the board being displayed
   
  
   //15 random numbers from 0 to 100 in array displayBoard
   var a = int (random (0,100));
   var b = int (random (0,100));
   var c = int (random (0,100)); 
   var d = int (random (0,100));
   var e = int (random (0,100));
   var f = int (random (0,100));
   var g = int (random (0,100));
   var h = int (random (0,100));
   var i = int (random (0,100));
   var j = int (random (0,100));
   var k = int (random (0,100));
   var l = int (random (0,100));
   var m = int (random (0,100));
   var n = int (random (0,100));
   var o = int (random (0,100));
   
   var displayBoard = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o];

      

   // update the display with the new leader board scores
   drawBoard(
      displayBoard, BOARD_ELEMENTS, boardLabel,
      BOARD_X_ORIGIN, BOARD_Y_ORIGIN,
      ELEMENT_WIDTH, ELEMENT_HEIGHT);
}


// writes the name of the board ('label') at the top of the 
// leader board display
function drawLabel(label) {
  fill( BACKGROUND_COLOR );
  noStroke();
  rect( BOARD_X_ORIGIN, BOARD_Y_ORIGIN - ELEMENT_HEIGHT, ELEMENT_WIDTH, ELEMENT_HEIGHT);
  fill( ELEMENT_OUTLINE_COLOR );
  textSize(TEXT_SIZE);
  stroke (TEXT_STROKE);
 
  
   // print the name of the leader board at the top of the discplay
  text(label, BOARD_X_ORIGIN + ELEMENT_WIDTH / 2 ,BOARD_Y_ORIGIN - 30);
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
   
  
   for (i = 0; i < elements; i ++ ) {
   var yCorner = yOrigin + i * elementHeight;
   fill(ELEMENT_SQUARE_COLOR);  
   rect( xOrigin,  yCorner , elementWidth, elementHeight);
   fill(ELEMENT_OUTLINE_COLOR);
   textSize(TEXT_SIZE);
   stroke (TEXT_STROKE);
   textAlign (CENTER, CENTER); 
   text( i, xOrigin - elementWidth/4 ,  yCorner + elementHeight / 2);
   text( array[i], xOrigin + elementWidth / 2, yCorner + elementHeight / 2 ); 
   drawLabel(label);
   }
   
   //putting average score at the bottom of the table
   avgScore(array, elements);
   
   //hightlight the min score
   minScore(array, elements);
    
   //hightlight the max score;
   maxScore(array, elements);
}


// computes the average of all 'elements' scores in 'array'
// and returns that as a whole number
function avgScore(array, elements) {
    var totalScores = 0;
  	for (i = 0; i < elements; i ++ ) {
    fill( ELEMENT_OUTLINE_COLOR );
    stroke(TEXT_STROKE);
    textSize(TEXT_SIZE);
    text ("AVG", BOARD_X_ORIGIN - ELEMENT_WIDTH/4, BOARD_Y_ORIGIN + ELEMENT_HEIGHT * elements + ELEMENT_HEIGHT / 2);
    totalScores = totalScores + array[i]; }
    var averageScore = totalScores / elements;
    
  //draw a rectangle that cover the old average number
    fill( BACKGROUND_COLOR );
    noStroke();
    rect( BOARD_X_ORIGIN, BOARD_Y_ORIGIN + ELEMENT_HEIGHT * elements + 3, ELEMENT_WIDTH, ELEMENT_HEIGHT);
    fill( ELEMENT_OUTLINE_COLOR );
    stroke( TEXT_STROKE );
    text ( int(averageScore), BOARD_X_ORIGIN + ELEMENT_WIDTH / 2, BOARD_Y_ORIGIN + ELEMENT_HEIGHT * elements + ELEMENT_HEIGHT / 2);
}


// find and highlight the min score
function minScore(array, elements) {
  var min = 100;
  var minIndex = 0;
  for ( i = 0; i < elements; i++){
   if ( array[i] < min){ 
   min = array [i];
   minIndex = i;
      } 
  print (min);

  }
  
  //draw a highlight box with min score in it
  var yCorner = BOARD_Y_ORIGIN + minIndex * ELEMENT_HEIGHT; 
  
  fill (MIN_SQUARE_COLOR);
  rect( BOARD_X_ORIGIN, yCorner , ELEMENT_WIDTH, ELEMENT_HEIGHT);
  fill(ELEMENT_OUTLINE_COLOR);
  textSize(TEXT_SIZE);
  stroke (TEXT_STROKE);
  textAlign (CENTER, CENTER);
  text (min, BOARD_X_ORIGIN + ELEMENT_WIDTH / 2, yCorner + ELEMENT_HEIGHT / 2 ); 
		
  }



// find and highlight the max score
function maxScore(array, elements) {
	var max = 0;
  var maxIndex = 0;
  for ( i = 0; i < elements; i++){
   if ( array[i] > max){ 
   max = array [i];
   maxIndex = i;
      }
    
  print (max);
  }
  
  //draw a highlight box with max score in it
  var yCorner = BOARD_Y_ORIGIN + maxIndex * ELEMENT_HEIGHT; 
  
  fill (MAX_SQUARE_COLOR);
  rect( BOARD_X_ORIGIN, yCorner , ELEMENT_WIDTH, ELEMENT_HEIGHT);
  fill(ELEMENT_OUTLINE_COLOR);
   textSize(TEXT_SIZE);
   stroke (TEXT_STROKE);
   textAlign (CENTER, CENTER);
  text (max, BOARD_X_ORIGIN + ELEMENT_WIDTH / 2, yCorner + ELEMENT_HEIGHT / 2 );
}

