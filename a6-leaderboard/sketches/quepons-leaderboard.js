/*
Elizabeth Quepons
HCDE 598A
Assignment 6: Scoreboard*/


//Colors used
const BG_COLOR = "Lightblue";
const BOX_COLOR = "white";
const TEXT_COLOR = "black";

//Border Color
const BORDER_COLOR = "black"

//Canvas size
const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 1000;

//Leader Board Rows
const BOARD_ELEMENTS = 15;

//Display settings
const X_COORD = CANVAS_WIDTH / 3.5;
const Y_COORD = 75;
const BOX_WIDTH = 125;
const BOX_HEIGHT = 50;
const BORDER_WIDTH = 2;
const TEXT_SIZE = BOX_HEIGHT / 2;

//Arrays for scores
const TEST_BOARD = [100, 100, 90, 90, 80, 80, 75, 88, 66, 77,
  88, 99, 22, 33, 44
];

//Board Names
var names = ['Jane', 'Patricia', 'Stephanie', 'Yvette', 'Rebecca',
  'Rory', 'Nancy', 'Bernard', 'Emily', 'Jack', 'David',
  'Mark', 'Audrey', 'Elizabeth', 'Rose'
];

var displayBoard = [];

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  background(BG_COLOR);
  drawLeaderBoard(
    TEST_BOARD, BOARD_ELEMENTS, drawLabel(),
    X_COORD, Y_COORD,
    BOX_WIDTH, BOX_HEIGHT);
}

//NOT USED FOR ASSIGNMENT
function draw() {}

//Switching score type with keys
function keyTyped() {

  //Reset background color to avoid text overlap
  background(BG_COLOR);


  var boardLabel = drawLabel();

  // Name of Board

  if (key == 'x') {
    drawLeaderBoard(
      displayBoard, BOARD_ELEMENTS, boardLabel,
      X_COORD, Y_COORD, BOX_WIDTH, BOX_HEIGHT);

  } else if (key == 'y') {
    drawLeaderBoard(
      TEST_BOARD, BOARD_ELEMENTS, boardLabel,
      X_COORD, Y_COORD, BOX_WIDTH, BOX_HEIGHT);
  }
}
//Function that shows title of Leader Board
function drawLabel(label) {


  //Default text
  noStroke();
  fill(BG_COLOR);
  rect(X_COORD - 50, Y_COORD, BOX_WIDTH + 100, BOX_HEIGHT);
  fill(TEXT_COLOR);
  textSize(25);
  textAlign(CENTER, CENTER);
  text("Leader Board", X_COORD + BOX_WIDTH / 2, 50);

  //Board Title
  if (key == 'x') {
    noStroke();
    fill(BG_COLOR);
    rect(X_COORD - 50, Y_COORD - 50, BOX_WIDTH + 100, BOX_HEIGHT);
    fill(TEXT_COLOR);
    textSize(TEXT_SIZE);
    textAlign(CENTER, CENTER);
    text("RANDOM", X_COORD + BOX_WIDTH / 2, 50);

  } else if (key == 'y') {
    noStroke();
    fill(BG_COLOR);
    rect(X_COORD - 50, Y_COORD - 50, BOX_WIDTH + 100, BOX_HEIGHT);
    fill(TEXT_COLOR);
    textSize(TEXT_SIZE);
    textAlign(CENTER, CENTER);
    text("TEST", X_COORD + BOX_WIDTH / 2, 50);
  }
}


//Function to draw a table for the scores
function drawLeaderBoard(array, elements, label,
  xOrigin, yOrigin, BOX_WIDTH, BOX_HEIGHT) {

  //loop to create rows
  for (i = 0; i < BOARD_ELEMENTS; i++) {

    //Random Score
    displayBoard[i] = round(random(0, 100));

    //Table boxes
    fill(BOX_COLOR);
    stroke(BORDER_COLOR);
    strokeWeight(BORDER_WIDTH);

    //Table Rows
    var makeRows = Y_COORD + i * BOX_HEIGHT;
    rect(X_COORD, makeRows, BOX_WIDTH, BOX_HEIGHT);

    //Scores in boxes
    textSize(TEXT_SIZE);
    textAlign(CENTER, CENTER);
    fill(TEXT_COLOR);
    noStroke();
    text(array[i], X_COORD + BOX_WIDTH / 2, makeRows + BOX_HEIGHT / 2);

    //Text for names
    textSize(15);
    noStroke();
    fill(TEXT_COLOR);
    text(names[i], CANVAS_WIDTH / 5, makeRows + BOX_HEIGHT / 2);

  }

  //function to display average
  avgScore(array, elements);

}

//Function for average
function avgScore(array, elements) {
  var totalScore = 0;


  //loop to calculate total score
  for (i = 0; i < array.length; i++) {
    totalScore += array[i];
  }

  //Average score formula
  var average = totalScore / BOARD_ELEMENTS;

  //Background rest
  fill(BG_COLOR);
  noStroke();
  rect(CANVAS_WIDTH / 5, CANVAS_HEIGHT - 115, BOX_WIDTH, BOX_HEIGHT);

  //Average Score text
  noStroke();
  fill('White');
  textSize(20);
  text("AVERAGE", CANVAS_WIDTH / 6, CANVAS_HEIGHT - 120);
  textSize(25);
  textAlign(CENTER, CENTER)
  text(round(average), CANVAS_WIDTH / 2.5, CANVAS_HEIGHT - 120);


}