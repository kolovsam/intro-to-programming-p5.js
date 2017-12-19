/*
Hannah Nursalim
Leader Board HW
HCDE 598
*/

//Constants for colors
const BG_COLOR = "LightCyan";
const BOX_COLOR = "PapayaWhip";
const LOWEST_SCORE_COLOR = "LightCoral";
const HIGHEST_SCORE_COLOR = "Aquamarine";
const TEXT_COLOR = "black";

//Constants for borders
const BORDER_COLOR = "grey"
const BORDER_THICKNESS = 2;

//Canvas size
const CANVAS_WIDTH = 500;
const CANVAS_HEIGHT = 950;

//Leader Board configurations
const BOARD_ELEMENTS = 15;

//Display settings for table
const BOARD_X_START = CANVAS_WIDTH / 3.5;
const BOARD_Y_START = 75;
const ELEMENT_WIDTH = 200;
const ELEMENT_HEIGHT = 50;
const BORDER_WIDTH = 2;
const TEXT_STROKE = 1;
const TEXT_SIZE = ELEMENT_HEIGHT / 2;

//Arrays for scores
const TEST_BOARD = [44, 2, 33, 0, 50, 33, 100, 91, 92, 86, 100, 40, 95, 77, 99];
var displayBoard = [];

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  background(BG_COLOR);
  drawLeaderBoard(
    TEST_BOARD, BOARD_ELEMENTS, drawLabel(),
    BOARD_X_START, BOARD_Y_START,
    ELEMENT_WIDTH, ELEMENT_HEIGHT);
}

//Not using this function
function draw() {}

//Function to control which scores appear on Leader Board
function keyTyped() {

  //Reset background color to avoid text overlap
  background(BG_COLOR);

  //Debugging purposes
  var theKey = key;
  print("key = ", theKey, " was typed");

  var boardLabel = drawLabel(); // for the name of the board being displayed

  //if/else if statement to determine which array is shown in table
  if (key == 'r') {
    drawLeaderBoard(
      displayBoard, BOARD_ELEMENTS, boardLabel,
      BOARD_X_START, BOARD_Y_START,
      ELEMENT_WIDTH, ELEMENT_HEIGHT);
  } else if (key == 't') {
    drawLeaderBoard(
      TEST_BOARD, BOARD_ELEMENTS, boardLabel,
      BOARD_X_START, BOARD_Y_START,
      ELEMENT_WIDTH, ELEMENT_HEIGHT);
  }
}


//Function that shows title of Leader Board
function drawLabel(label) {

  //Avoiding text overlap by resetting background using a box
  noStroke();
  fill(BG_COLOR);
  rect(BOARD_X_START, BOARD_Y_START - 50, ELEMENT_WIDTH, ELEMENT_HEIGHT);

  //Text when code is first run
  fill(TEXT_COLOR);
  textSize(25);
  textAlign(CENTER, CENTER);
  text("TEST", BOARD_X_START + ELEMENT_WIDTH / 2.1, 50);

  //if/else if statement to determind board title
  if (key == 'r') {
    noStroke();
    fill(BG_COLOR);
    rect(BOARD_X_START, BOARD_Y_START - 50, ELEMENT_WIDTH, ELEMENT_HEIGHT);
    fill(TEXT_COLOR);
    textSize(TEXT_SIZE);
    textAlign(CENTER, CENTER);
    text("RANDOM", BOARD_X_START + ELEMENT_WIDTH / 2.1, 50);
  } else if (key == 't') {
    noStroke();
    fill(BG_COLOR);
    rect(BOARD_X_START, BOARD_Y_START - 50, ELEMENT_WIDTH, ELEMENT_HEIGHT);
    fill(TEXT_COLOR);
    textSize(TEXT_SIZE);
    textAlign(CENTER, CENTER);
    text("TEST", BOARD_X_START + ELEMENT_WIDTH / 2.1, 50);
  }
}

//Function to draw a table for the scores
function drawLeaderBoard(array, elements, label,
  xOrigin, yOrigin, elementWidth, elementHeight) {

  //for loop to create rows
  for (i = 0; i < BOARD_ELEMENTS; i++) {

    //To get randomized scores for displayBoard array
    displayBoard[i] = round(random(0, 100));

    //Boxes for elements
    fill(BOX_COLOR);
    stroke(BORDER_COLOR);
    strokeWeight(BORDER_THICKNESS);

    //Create rows for elements
    var makeRows = BOARD_Y_START + i * ELEMENT_HEIGHT;
    rect(BOARD_X_START, makeRows, ELEMENT_WIDTH, ELEMENT_HEIGHT);

    //To enter scores in boxes
    textSize(TEXT_SIZE);
    textAlign(CENTER, CENTER);
    fill(TEXT_COLOR);
    strokeWeight(TEXT_STROKE);
    text(array[i], BOARD_X_START + ELEMENT_WIDTH / 2, makeRows + ELEMENT_HEIGHT / 2);

    //Text for indices number
    textSize(15);
    fill(TEXT_COLOR);
    text(i, CANVAS_WIDTH / 4, makeRows + ELEMENT_HEIGHT / 2);

    print("Array: ", array);
  }

  //calling functions to display with drawLeaderBoard()
  avgScore(array, elements);
  minScore(array, elements);
  minScoreIndex(array, elements);
  maxScore(array, elements);
  maxScoreIndex(array, elements);
}

//Function that computes the average of scores in array
function avgScore(array, elements) {
  var totalScore = 0; //variable used to calculate total score of array

  //for loop to calculate total score of array
  for (i = 0; i < array.length; i++) {
    totalScore += array[i];
  }

  //math calculation to get average
  var average = totalScore / BOARD_ELEMENTS;

  //Reset background to avoid text overlap using a box
  fill(BG_COLOR);
  noStroke();
  rect(CANVAS_WIDTH / 5, CANVAS_HEIGHT - 115, ELEMENT_WIDTH + 100, ELEMENT_HEIGHT);

  //Text for average score
  stroke(TEXT_STROKE);
  fill(TEXT_COLOR);
  textSize(15);
  text("AVG", CANVAS_WIDTH / 4.25, CANVAS_HEIGHT - 100);
  textSize(TEXT_SIZE);
  textAlign(CENTER, CENTER)
  text(round(average), CANVAS_WIDTH / 2.05, CANVAS_HEIGHT - 100);

  //Debugging purposes
  print("Average: ", round(average));
}

//Function that returns the lowest score in array
function minScore(array, elements) {
  for (i = 0; i < array.length; i++) {

    //Reset background to avoid text overlap using a box
    fill(BG_COLOR);
    noStroke();
    rect(CANVAS_WIDTH / 5, CANVAS_HEIGHT - 90, ELEMENT_WIDTH + 100, ELEMENT_HEIGHT);

    //Text for lowest score
    stroke(TEXT_STROKE);
    fill(TEXT_COLOR);
    textSize(15);
    text("MIN:", CANVAS_WIDTH / 4.25, CANVAS_HEIGHT - 75);
    textSize(TEXT_SIZE);
    textAlign(CENTER, CENTER)

    //Using min() to get lowest score in array
    text(round(min(array)), CANVAS_WIDTH / 2.05, CANVAS_HEIGHT - 75);
  }

  //debugging purposes
  print("Min score: ", min(array));
}


//Function that returns index of the lowest score in array 
function minScoreIndex(array, elements) {
  var lowestScore = min(array); //variable set equal to whatever min score in array is
  var minIndex = 0;

  //for loop to go through array to find index of lowest score in array
  for (i = 0; i < array.length; i++) {
    if (array[i] <= lowestScore) {
      minIndex = i;
      lowestScore = array[i];
    }
  }

  //Index of lowest score shown in console
  print("Min score index: ", minIndex);
}


//Function that returns the highest score in array
function maxScore(array, elements) {
  for (i = 0; i < array.length; i++) {

    //Reset background to avoid text overlap using a box
    fill(BG_COLOR);
    noStroke();
    rect(CANVAS_WIDTH / 5, CANVAS_HEIGHT - 65, ELEMENT_WIDTH + 100, ELEMENT_HEIGHT);

    //Text for highest score
    stroke(TEXT_STROKE);
    fill(TEXT_COLOR);
    textSize(15);
    text("MAX:", CANVAS_WIDTH / 4.25, CANVAS_HEIGHT - 50);
    textSize(TEXT_SIZE);
    textAlign(CENTER, CENTER)
    
    //Using max() to obtain highest score in array
    text(round(max(array)), CANVAS_WIDTH / 2.05, CANVAS_HEIGHT - 50);
  }

  //debugging purposes
  print("Max score: ", max(array));
}


//Function that returns index of the highest score in array
function maxScoreIndex(array, elements) {
  var highestScore = max(array); //variable set equal to whatever max score in array is
  var maxIndex;

  //for loop to go through array to find index of highest score in array
  for (i = 0; i < array.length; i++) {
    if (array[i] >= highestScore) {
      maxIndex = i;
      highestScore = array[i];
    }
  }

  //Index of highest score shown in console
  print("Max score index: ", maxIndex);
}