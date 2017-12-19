/* leader board
Meng Wang, 11/2017

program to display and manipulate a "leader board" of scores, using arrays.
a solution to HCDE 598 "Intro to Programming" assignment 6

*/

function setup() {
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    background(BACKGROUND_COLOR);
    createArray(arr);
    drawBoard(lowest, highest, displayArray);
}


//set up global variables
const CANVAS_WIDTH = 600
const CANVAS_HEIGHT = 1000;
const arr = [44, 2, 33, 0, 50, 33, 100, 91, 92, 86, 100, 40, 95, 77, 99];
const BOARD_X_ORIGIN = CANVAS_WIDTH / 2;
const BOARD_Y_ORIGIN = 100;
const ELEMENT_WIDTH = 140;
const ELEMENT_HEIGHT = 40;
const ELEMENT_SQUARE_COLOR = 'cornsilk';
const BACKGROUND_COLOR = 'lightgrey';
const RECT_STROKE = 'black';
const TOPIC_COLOR = 'black';
const TOPIC_TEXT = 'TEST';
const TOPIC_SIZE = 10;
const MIN_SQUARE_COLOR = 'pink';
const MAX_SQUARE_COLOR = 'aqua';
var lowest;
var highest;
var avg;
var finalAvg;
var displayArray = [];

//Below is the fuction for label on top, why does it not show up...?
function drawLabel() {
    fill(TOPIC_COLOR);
    noStroke();
    textSize(TOPIC_SIZE);
    textAlign(CENTER);
  	text(TOPIC_TEXT, 10,20);
    text(TOPIC_TEXT, BOARD_X_ORIGIN, BOARD_Y_ORIGIN - ELEMENT_HEIGHT);
}

//generate random array
function createArray(arr) {
    for (i = 0; i < arr.length; i++) {
        displayArray[i] = round(random(0, 100));
    }
}

//draw leader board
function drawBoard(lowScore, highScore, arr) {
    var min = minScore(displayArray);
    var max = maxScore(displayArray);
    for (i = 0; i < arr.length; i++) {
        //this is the guts of this program !!
        if (i == min) {
            fill(MAX_SQUARE_COLOR);
        } else if (i == max) {
            fill(MIN_SQUARE_COLOR);
        } else {
            fill(ELEMENT_SQUARE_COLOR);
        }

        stroke(RECT_STROKE);
        rectMode(CENTER);
        rect(BOARD_X_ORIGIN, BOARD_Y_ORIGIN + i * ELEMENT_HEIGHT, ELEMENT_WIDTH, ELEMENT_HEIGHT);
        fill(TOPIC_COLOR);
        textAlign(CENTER);
        text(arr[i], BOARD_X_ORIGIN, BOARD_Y_ORIGIN + i * ELEMENT_HEIGHT+ELEMENT_HEIGHT*1/10);
        //index on the left(I made a littel adjustment on the height so that the index and array values appear in the middle of each rect)
        text(i, BOARD_X_ORIGIN - ELEMENT_WIDTH, BOARD_Y_ORIGIN + i * ELEMENT_HEIGHT+ELEMENT_HEIGHT*1/10);
    }

    //index of 'AVG' and display the average value 
    text('AVG', BOARD_X_ORIGIN - ELEMENT_WIDTH, BOARD_Y_ORIGIN + (arr.length) * ELEMENT_HEIGHT);
    var finalAvg = round(avgScore(arr));
    text(finalAvg, BOARD_X_ORIGIN, BOARD_Y_ORIGIN + (arr.length) * ELEMENT_HEIGHT+ELEMENT_HEIGHT*1/10);
}

//calculate the average score of the array
function avgScore(arr) {
    var sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

//returns the lowest score in 'array'
function minScore(arr) {
    var minValue = arr[0];
    var minIndex = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] < minValue) {
            minValue = arr[i];
            minIndex = i;
        }
    }
    return minIndex;
}

//returns the highest score in 'array'
function maxScore(arr) {
    var maxValue = arr[0];
    var maxIndex = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > maxValue) {
            maxValue = arr[i];
            maxIndex = i;
        }
    }
    return maxIndex;
}

//Click the mouse to create a new randow array 
function mouseClicked() {
    setup();
}