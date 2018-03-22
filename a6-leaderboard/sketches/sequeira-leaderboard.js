/* 
Assignment 6 - Leaderboard
Andrea Sequeira
*/

/* This program displays a leaderboard of score, highlighting the
lowest and highest scores, and also showing the average score. The user
can press any keyboard key to display a new random leaderboard, or
click the mouse to display the test leaderboard.
*/

// Define colors
const BG_COLOR = 'white';
const ELEMENT_OUTLINE_COLOR = 'black';
const ELEMENT_SQUARE_COLOR = 'white';
const MIN_SQUARE_COLOR = 'red';
const MAX_SQUARE_COLOR = 'green';

// Define canvas size
const CANVAS_WIDTH = 500
const CANVAS_HEIGHT = 1000;

// Define leaderboard settings
const NUM_ELEMENTS = 15;
const MIN_SCORE = 0;
const MAX_SCORE = 100;
const BOARD_X_ORIGIN = CANVAS_WIDTH / 4;
const BOARD_Y_ORIGIN = CANVAS_HEIGHT / 8;
const ELEMENT_WIDTH = CANVAS_WIDTH / 2;
const ELEMENT_HEIGHT = (CANVAS_HEIGHT / (NUM_ELEMENTS * 1.3));
const BORDER_WIDTH = 2;
const TEXT_STROKE = 1;
const TEXT_SIZE = ELEMENT_HEIGHT / 2;

// Define variables to be used in functions
var label = "TEST";
var totalScore = 0;
var average = 0;
var minScore = MAX_SCORE;
var maxScore = MIN_SCORE;


// Create and initialize array elements
const testBoard = [44, 2, 33, 0, 50, 33, 100, 91, 92, 86, 100, 40, 95, 77, 99];
var randomBoard = [];


function setup() {
  // Create canvas
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);

  // Draw leaderboard
  drawBoard(
    testBoard, NUM_ELEMENTS, label,
    BOARD_X_ORIGIN, BOARD_Y_ORIGIN,
    ELEMENT_WIDTH, ELEMENT_HEIGHT);
}


function draw() {}

// Function that draws complete leaderboard
function drawBoard(array, elements, label, xOrigin, yOrigin, 
                    elementWidth, elementHeight) {

  background(BG_COLOR); // Clear previous screen
  drawLabel(label); // Display leaderboard title
  
  findMinScore(array, elements); // Find the lowest score
  findMaxScore(array, elements); // Find the highest score
  
  for (i = 0; i < array.length; i++) {
    
    // Draw rectangles for each cell
    if (array[i] == minScore) {
      fill(MIN_SQUARE_COLOR); // Different color for lowest score
    } else if (array[i] == maxScore) {
      fill(MAX_SQUARE_COLOR); // Different color for highest score
    } else {
      fill(ELEMENT_SQUARE_COLOR);
    }
    rect(xOrigin, yOrigin + elementHeight * i, elementWidth,
      elementHeight);

    // Print row labels
    fill(ELEMENT_OUTLINE_COLOR);
    text(i, xOrigin - CANVAS_WIDTH / 8,
      yOrigin + elementHeight / 2 + elementHeight * i);

    // Print array contents vertically
    text(array[i], CANVAS_WIDTH / 2,
      yOrigin + elementHeight / 2 + elementHeight * i);
  }

  avgScore(array, elements); // Print the average score
  
  minScore = MAX_SCORE; // Re-initialize the lowest score
  maxScore = MIN_SCORE; // Re-initialize the highest score
}


// Use key presses to display a random array
function keyTyped() {

  for (i = 0; i < testBoard.length; i++) {
    randomBoard[i] = int(random(MIN_SCORE, MAX_SCORE));
  }

  label = "RANDOM"; // Rename the leaderboard

  // Update the leaderboard scores
  drawBoard(randomBoard, NUM_ELEMENTS, label,
    BOARD_X_ORIGIN, BOARD_Y_ORIGIN,
    ELEMENT_WIDTH, ELEMENT_HEIGHT);
}


// Use mouse click to display the test array
function mouseClicked() {
  label = "TEST";
  
  drawBoard(testBoard, NUM_ELEMENTS, label,
    BOARD_X_ORIGIN, BOARD_Y_ORIGIN,
    ELEMENT_WIDTH, ELEMENT_HEIGHT);
}


// Display board name at the top of the leaderboard
function drawLabel(label) {
  text(label, CANVAS_WIDTH / 2, CANVAS_HEIGHT / 15);
}


// Find the average score as an integer
function avgScore(array, elements) {
  for (i = 0; i < array.length; i++) {
    totalScore += array[i];
    average = int(totalScore / elements);
  }
  text("Average Score = " + average, BOARD_X_ORIGIN,
    CANVAS_HEIGHT - ELEMENT_HEIGHT);
  
  totalScore = 0; // Re-intialize the total score
  average = 0; // Re-intiialize the average score
}


// Find the lowest score in the array
function findMinScore(array, elements) {
  for (i = 0; i < elements; i++) {
    if (array[i] < minScore) {
      minScore = array[i];
    }
  }
}


// Find the highest score in the array
function findMaxScore(array, elements) {
  for (i = 0; i < elements; i++) {
    if (array[i] > maxScore) {
      maxScore = array[i];
    }
  }
}