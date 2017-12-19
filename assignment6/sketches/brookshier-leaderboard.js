/* Leaderboard
Brookshier, 11/2017
Program to dispay a leaderboard of scores, using arrays.
*/

// some colors to use in this program
const BACKGROUND_COLOR = 'skyblue';
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

// people
var peeps = ['Kat', 'Robert', 'Veronika', 'Ariel', 'Trang', 'Jennifer', 'Macauley', 'Michael', 'Dmitry', 'Rachael', 'Derek', 'Aimee', 'Laurie', 'Lisa', 'Sarah'];

// arrays for the various board data
const testBoard = // an initialized constant array of test data
  [44, 2, 33, 2, 50, 33, 22, 91, 92, 86, 69, 40, 99, 77, 98];
var displayBoard = []; // the array of scores to be displayed on screen

// Create the initial canvas
function setup() {
  // create the canvas
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  background(BACKGROUND_COLOR);

  // start off with the test data
  drawBoard(
    displayBoard, BOARD_ELEMENTS, '',
    BOARD_X_ORIGIN, BOARD_Y_ORIGIN,
    ELEMENT_WIDTH, ELEMENT_HEIGHT);
}

// Umse key presses to trigger different actions
function keyTyped() {

  // this function is called by the system whenever a key is typed
  // so figure out which one was hit
  var theKey = key;
  print("key = ", theKey, " was typed");

  var boardLabel = "Scores"; // for the name of the board being displayed

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
  textSize(32);
  textAlign(CENTER, CENTER);
  text(label, BOARD_X_ORIGIN, ELEMENT_HEIGHT, ELEMENT_WIDTH, ELEMENT_HEIGHT);
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

  if (displayBoard.length >= elements) {
    displayBoard = [];
  }
  displayBoard = genArray(elements);

  // Calculate average score
  avg = avgScore(displayBoard, elements);
  append(displayBoard, int(avg));
  if (displayBoard.length > peeps.length) {
    append(peeps, 'Average');
    // print(displayBoard.length);
    // print(peeps.length);
  }


  // Find highest and lowest scores for color coding
  low = minScoreIndex(displayBoard, BOARD_ELEMENTS);
  high = maxScoreIndex(displayBoard, BOARD_ELEMENTS);

  // Draw label
  drawLabel(label);

  // Draw people
  for (i = 0; i < displayBoard.length; i++) {
    // squares
    fill(ELEMENT_SQUARE_COLOR);
    rect(xOrigin / 3, yOrigin + elementHeight * i, elementWidth, elementHeight);
    // text
    fill('black');
    textSize(32);
    textAlign(LEFT, CENTER);
    text(peeps[i], xOrigin / 3, yOrigin + elementHeight * i, elementWidth, elementHeight)
  }

  // Draw scores
  for (i = 0; i < displayBoard.length; i++) {
    if (i == low) {
      fill(MIN_SQUARE_COLOR);
    } else if (i == high) {
      fill(MAX_SQUARE_COLOR);
    } else {
      fill(ELEMENT_SQUARE_COLOR);
    }
    rect(xOrigin, yOrigin + elementHeight * i, elementWidth, elementHeight);
    // text
    fill('black');
    textSize(32);
    textAlign(CENTER, CENTER);
    text(displayBoard[i], xOrigin, yOrigin + elementHeight * i, elementWidth, elementHeight)
  }
}

// generate random numbers for scores
function genArray(elements) {
  for (i = 0; i < elements; i++) {
    var r = int(random(0, 100));
    append(displayBoard, r)
  }
  return displayBoard;
}


// computes the average of all 'elements' scores in 'array'
// and returns that as a whole number
function avgScore(array, elements) {
  score = 0
  for (i = 0; i < array.length; i++) {
    score += array[i];
  }
  avg = score / elements;
  return avg;
}


// returns the lowest score in 'array'
// 'array' has 'elements' in it
function minScore(array, elements) {
  lowScore = 100
  for (i = 0; i < array.length; i++) {
    if (array[i] < lowScore) {
      lowScore = array[i]
    }
  }
  return lowScore;
}


// returns the index of the lowest score in 'array' 
// 'array' has 'elements' in it
function minScoreIndex(array, elements) {
  index = 0
  lowScore = 100
  for (i = 0; i < array.length; i++) {
    if (array[i] < lowScore) {
      lowScore = array[i]
      index = i
    }
  }
  return index;
}


// returns the highest score in 'array'
// 'array' has 'elements' in it
function maxScore(array, elements) {
  highScore = 0
  for (i = 0; i < array.length; i++) {
    if (array[i] > highScore) {
      highScore = array[i]
    }
  }
  return highScore;
}


// returns the index of the highest score in 'array' 
// 'array' has 'elements' in it
function maxScoreIndex(array, elements) {
  index = 0
  highScore = 0
  for (i = 0; i < array.length; i++) {
    if (array[i] > highScore) {
      highScore = array[i]
      index = i
    }
  }
  return index;
}

// this function is not used in this application
function draw() {}