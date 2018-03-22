/* 

Jenny Thai Nguyen
HCDE 495 - Intro to Programming
Leaderboard

*/

//colors used in this program
const BACKGROUND_COLOR = 'lightgrey';
const ELEMENT_OUTLINE_COLOR = 'black';
const ELEMENT_SQUARE_COLOR = 'cornsilk';
const MIN_SQUARE_COLOR = 'pink';
const MAX_SQUARE_COLOR = 'aqua';

//the overall canvas
const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 1000;

//leader board configuration
const BOARD_ELEMENTS = 15;
const MIN_SCORE = 0;
const MAX_SCORE = 100;

//display settings
const BOARD_X_ORIGIN = CANVAS_WIDTH / 2.5;
const BOARD_Y_ORIGIN = 100;
const ELEMENT_WIDTH = 100;
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
  drawBoard(testBoard, BOARD_ELEMENTS, "TEST",
        BOARD_X_ORIGIN, BOARD_Y_ORIGIN,
        ELEMENT_WIDTH, ELEMENT_HEIGHT);

}

// this function is not used in this application
function draw() {}

// instead we use key presses to trigger different actions
function keyTyped() {
    var keyButton = key;
    //lets the user know what key is pressed on the console
  	print("key = ", keyButton, " was typed");
		//whenever r or R is typed, the program will load displayBoard
     if ((key == 'r') || (key == 'R')) {
        //reset background
        background(BACKGROUND_COLOR);
				//using for loop to draw board with provided data
        for (i = 0; i < testBoard.length; i++) {
            displayBoard[i] = round(random(100));
        }
      //update display with with new leader board scores
       drawBoard(displayBoard, BOARD_ELEMENTS, "RESULTS",
            BOARD_X_ORIGIN, BOARD_Y_ORIGIN,
            ELEMENT_WIDTH, ELEMENT_HEIGHT);
      //whenever t or T is typed, the program will load testBoard
      } else if ((key == 't') || (key == 'T')) {
				//reset background
        background(BACKGROUND_COLOR);
        drawBoard(testBoard, BOARD_ELEMENTS, "TEST",
            BOARD_X_ORIGIN, BOARD_Y_ORIGIN,
            ELEMENT_WIDTH, ELEMENT_HEIGHT);
    }


}


// writes the name of the board ('label') at the top of the 
// leader board display
function drawLabel(label, xOrigin, yOrigin, elementWidth, elementHeight) {
    // print the name of the leader board at the top of the display
    text(label, xOrigin + elementWidth / 2, yOrigin - elementHeight / 2);
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

    //format text
    textSize(TEXT_SIZE);
    textAlign(CENTER);

    //label board
    drawLabel(label, xOrigin, yOrigin, elementWidth, elementHeight);

    //calculate and display average
    var average = avgScore(array);
    text("AVG", xOrigin - ELEMENT_HEIGHT, yOrigin + (elementHeight * (array.length + 1)));
    text(average, xOrigin + elementWidth / 2, yOrigin + (elementHeight * (array.length + 1)));

  //calculate and display min score and index
    var minimumScore = minScore(array);
    var minIndex = minScoreIndex(array, minimumScore);
  
  //calculate and display max score and index
  var maximumScore = maxScore(array);
  var maxIndex = maxScoreIndex(array, maximumScore);

		//for loop to repeat boxes 15 times
    for (i = 0; i < array.length; i++) {
        var y = yOrigin + i * elementHeight;
      
      //changes board colors depending on the max or min score
      if (array[i] == minimumScore) {
        fill(MIN_SQUARE_COLOR);
      } else if (array[i] == maximumScore) {
        fill(MAX_SQUARE_COLOR);
      } else {
        fill(ELEMENT_SQUARE_COLOR);
      }
      
        //draws board
        rect(xOrigin, y, elementWidth, elementHeight);
        //display array index
        fill(ELEMENT_OUTLINE_COLOR);
        text(i, xOrigin - 50, y + elementHeight / 1.5);
        //display scores
        text(array[i], xOrigin + elementWidth / 2, y + elementHeight / 1.5);

    }
}


// computes the average of all 'elements' scores in 'array'
// and returns that as a whole number
function avgScore(array) {
  
  //set variables for total score and number of scores
    var totalScore = 0;
    var numScores = array.length;
    
//calculate total score
    for (i = 0; i < array.length; i++) {
        totalScore = totalScore + array[i];
    }

  //calculate average
    var average = round(totalScore / numScores);
    return average;
}


// returns the lowest score in 'array'
// 'array' has 'elements' in it
function minScore(array) {
    var minimumScore = MAX_SCORE;
  
  
//checks if score is lower than current max score to calculate min score
    for (i = 0; i < array.length; i++) {
        if (array[i] < minimumScore) {
            minimumScore = array[i];
        }
    }
  
    return minimumScore;
}


// returns the index of the lowest score in 'array' 
// 'array' has 'elements' in it
function minScoreIndex(array, minimumScore) {
    // add this code body
  var minimumIndex;

    for (i = 0; i < array.length; i++) {
        if (array[i] == minimumScore) {
            minimumIndex = i;
        }
    }
  
    return minimumIndex;
  
}

// returns the highest score in 'array'
// 'array' has 'elements' in it
function maxScore(array) {
    // add this code body
  maximumScore = MIN_SCORE;

    for (i = 0; i < array.length; i++) {
        if (array[i] > maximumScore) {
            maximumScore = array[i];
        }
    }
  
    return maximumScore;
}


// returns the index of the highest score in 'array' 
// 'array' has 'elements' in it
function maxScoreIndex(array,maximumScore) {
    // add this code body
  var maximumIndex;
  
      for (i = 0; i < array.length; i++) {
        if (array[i] == maximumScore) {
            maximumIndex = i;
        }
    }
  
    return maximumIndex;
  
}