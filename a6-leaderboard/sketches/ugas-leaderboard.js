/* 

Leader Board - Anthony Ugas - 11/2017

Press 't' for test scores 
Press any other key for random scores

*/

// some colors used in this program
const BACKGROUND_COLOR = 'lightgrey';
const ELEMENT_OUTLINE_COLOR = 'black';
const ELEMENT_SQUARE_COLOR = 'skyblue';
const MIN_SQUARE_COLOR = 'pink';
const MAX_SQUARE_COLOR = 'aqua';
const FONT_COLOR = 'black';

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
var displayBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]; // the array of scores to be displayed on screen


function setup() {
    // create the canvas

    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);


}


// this function is not used in this application
function draw() {}


// instead we use key presses to trigger different actions
function keyTyped() {

    // press 't' key for test scores
    //press any other key for random scores
    var theKey = key;
    print("key = ", theKey, " was typed");

    if (key === 't') {

        clear();
        drawBoard(
            testBoard, BOARD_ELEMENTS, "TEST",
            BOARD_X_ORIGIN, BOARD_Y_ORIGIN,
            ELEMENT_WIDTH, ELEMENT_HEIGHT);
    } else {

        clear();
        shuffle(displayBoard, true);
        drawBoard(
            displayBoard, BOARD_ELEMENTS, "RANDOM",
            BOARD_X_ORIGIN, BOARD_Y_ORIGIN,
            ELEMENT_WIDTH, ELEMENT_HEIGHT);


    }

}


// writes the name of the board ('label') at the top of the 
// leader board display
function drawLabel(label) {
    // print the name of the leader board at the top of the discplay

    fill(BACKGROUND_COLOR);
    noStroke();
    rect(BOARD_X_ORIGIN, BOARD_Y_ORIGIN - ELEMENT_HEIGHT, ELEMENT_WIDTH, ELEMENT_HEIGHT);

    textSize(25);
    fill(FONT_COLOR);
    textAlign(CENTER, CENTER);
    text(label, BOARD_X_ORIGIN + ELEMENT_WIDTH / 2, BOARD_Y_ORIGIN - ELEMENT_HEIGHT / 2);
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

    background(BACKGROUND_COLOR);

    avgScore(array, elements);
    drawLabel(label);

    for (i = 0; i < BOARD_ELEMENTS; i++) {
        fill(ELEMENT_SQUARE_COLOR);
        stroke(ELEMENT_OUTLINE_COLOR);

        //calculates the y coordinate of the leaderboard elements
        var yCorner = BOARD_Y_ORIGIN + i * ELEMENT_HEIGHT;
        // then draw one element 
        rect(BOARD_X_ORIGIN, yCorner, ELEMENT_WIDTH, ELEMENT_HEIGHT);

        // inputs 'array' in elements
        textSize(25);
        textAlign(CENTER, CENTER);
        fill(FONT_COLOR);
        strokeWeight(1);
        text(array[i], BOARD_X_ORIGIN + ELEMENT_WIDTH / 2, yCorner + ELEMENT_HEIGHT / 2);

        //number for each element
        text([i + 1], BOARD_X_ORIGIN - ELEMENT_WIDTH / 4, yCorner + ELEMENT_HEIGHT / 2);

    }
}


// computes the average of all 'elements' scores in 'array'
// and returns that as a whole number
function avgScore(array, elements) {
    // add this code body
    var total = 0;
    for (var i = 0; i < BOARD_ELEMENTS; i++) {
        total = total + array[i];
    }

    var aver = Math.floor(total / BOARD_ELEMENTS);


    textSize(25);
    fill(FONT_COLOR);
    textAlign(CENTER, CENTER);
    //text(label, BOARD_X_ORIGIN + ELEMENT_WIDTH / 2, BOARD_Y_ORIGIN - ELEMENT_HEIGHT / 2);
    text("Average Score =  ", ELEMENT_WIDTH * 1.65, ELEMENT_HEIGHT * 18);
    text(aver, ELEMENT_WIDTH * 2.2, ELEMENT_HEIGHT * 18);
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