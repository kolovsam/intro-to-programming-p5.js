// colors for grade leaderboard
const BACKGROUND_COLOR = 'gold';
const ELEMENT_OUTLINE_COLOR = 'black';
const ELEMENT_SQUARE_COLOR = 'plum';


// width and height of canvas
const CANVAS_WIDTH = 600
const CANVAS_HEIGHT = 500;

// how the leaderboard is set-up
const BOARD_ELEMENTS = 5;
const MIN_SCORE = 67;
const MAX_SCORE = 100;

// how components within the leaderboard are set-up
const BOARD_X_ORIGIN = CANVAS_WIDTH / 2.5;
const BOARD_Y_ORIGIN = 100;
const ELEMENT_WIDTH = 150;
const ELEMENT_HEIGHT = 50;
const BORDER_WIDTH = 2;
const TEXT_STROKE = 1;
const TEXT_SIZE = ELEMENT_HEIGHT / 2;

// arrays for the grade data
const GRADES = [96, 79, 100, 67, 83];
var displayBoard = []; 

function setup() {
  // create the canvas
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  background(BACKGROUND_COLOR);

  // start with set grade data
  drawBoard(
    GRADES, BOARD_ELEMENTS, "Class grades",
    BOARD_X_ORIGIN, BOARD_Y_ORIGIN,
    ELEMENT_WIDTH, ELEMENT_HEIGHT);
}

// use key type function to show grades
function keyTyped() {

  var theKey = key;
  print("key = ", theKey, " was typed");

  var boardLabel; // name of the leaderboard currently displayed

  // r key creates random grades
  switch (theKey) {
    case 'r':
      print("load random data");
      boardLabel = "Random";
      // creates random grades
      for (i = 0; i < BOARD_ELEMENTS; i++) {
        
        // add to score to create random grades without going over 100
        displayBoard[i] = round(random(MIN_SCORE, MAX_SCORE + 0.3));
      }
      break;
    case 'g':
      print("load grade data");
      boardLabel = "Class grades";
      // resets leaderboard with set constant grade data
      for (i = 0; i < BOARD_ELEMENTS; i++) {
        displayBoard[i] = GRADES[i];
      }

        {
      }
      break;
    default:
      print("???");
      break;
  }

  // update with new grades
  drawBoard(
    displayBoard, BOARD_ELEMENTS, boardLabel,
    BOARD_X_ORIGIN, BOARD_Y_ORIGIN,
    ELEMENT_WIDTH, ELEMENT_HEIGHT);
}


// writes the leaderboard label at top
function drawLabel(label) {

  // erase previous label
  fill(BACKGROUND_COLOR);
  strokeWeight(0);
  rect(BOARD_X_ORIGIN, BOARD_Y_ORIGIN - ELEMENT_HEIGHT,
    ELEMENT_WIDTH, ELEMENT_HEIGHT);

  // and draw this one above the array elements
  textSize(TEXT_SIZE);
  textAlign(CENTER, CENTER);
  fill(ELEMENT_OUTLINE_COLOR);
  strokeWeight(TEXT_STROKE);
  text(label,
    BOARD_X_ORIGIN + ELEMENT_WIDTH / 2,
    BOARD_Y_ORIGIN - ELEMENT_HEIGHT / 2);
}

// draws the complete leaderboard found in 'array' on the canvas.
function drawBoard(array, elements, label,
  xOrigin, yOrigin, elementWidth, elementHeight) {

  // first put the name of the board at the top
  drawLabel(label);

  // assigns color to grade boxes (elements)
  for (i = 0; i < elements; i++) {

    // figure out the y-coordinate of grade box
    var yCoord = yOrigin + (i * elementHeight);
  
    // draws the box
    fill(ELEMENT_SQUARE_COLOR);
    stroke(ELEMENT_OUTLINE_COLOR);
    strokeWeight(BORDER_WIDTH);
    rect(xOrigin, yCoord, elementWidth, elementHeight);

    // then the index # and the score value
    textSize(TEXT_SIZE);
    textAlign(CENTER, CENTER);
    fill(ELEMENT_OUTLINE_COLOR);
    strokeWeight(TEXT_STROKE);

    // shows index to the left outside of the box
    text(i, xOrigin - elementWidth / 2, yCoord + elementHeight / 2); // offset from the box
    // grades in boxes 
    text(array[i], xOrigin + elementWidth / 2, yCoord + elementHeight / 2); // center inside the box

  }

  // displays grade average below leaderbox
  var yCoord2 = yOrigin + (elements + 1) * elementHeight;

  // erases the previous average
  fill(BACKGROUND_COLOR);
  strokeWeight(0);
  rect(xOrigin, yCoord2 - elementHeight / 2, elementWidth, elementHeight);

  // write the text value
  textSize(TEXT_SIZE);
  textAlign(CENTER, CENTER);
  fill(ELEMENT_OUTLINE_COLOR);
  strokeWeight(TEXT_STROKE);
  text("Grade Average", xOrigin - elementWidth / 2, yCoord2); // offset a bit from the box
  text(avgScore(array, BOARD_ELEMENTS), xOrigin + elementWidth / 2, yCoord2); // insert inside the box

  // shows average
  print("average of ", BOARD_ELEMENTS, " scores = ",
    avgScore(array, BOARD_ELEMENTS));

}

// equation for average grade score
function avgScore(array, elements) {
  var totScores = 0;
  // add them all up
  for (i = 0; i < elements; i++) {
    totScores += array[i];
  }
  // divide by number of grades & return that
  return round(totScores / elements);
}