/* HCDE 598 LeaderBoard Assignment #6 by 
Helen Enguerra */


// variables for where the top left corner of first rect will be
var xOrigin = 100
var yOrigin = 100

//configuration for drawBoard function
const RECT_WIDTH = 200
const RECT_HEIGHT = 50
const COL_ELEMENTS = 7

//arrays for leaderboard 
var displayBoard = [] //inputs random numbers for second leaderboard 
const TEST_BOARD = [96, 74, 54, 100, 44, 80, 0] //test array for first leaderboard


function setup() {
  createCanvas(800, 800);
  background(220);

  //draws test leaderboard data 
  drawBoard(TEST_BOARD, xOrigin, yOrigin, "TEST");

}

function draw() {}

//when key is typed RANDOM leaderboard will be drawn
function keyTyped() {

  //for loop that inserts random numbers into drawBoard function
  for (var i = 0; i < COL_ELEMENTS; i++) {

    displayBoard[i] = round(random(0, 100))

  }

  //draws the RANDOM leaderboard using displayBoard array
  drawBoard(displayBoard, xOrigin, yOrigin, "RANDOM"); 

}

//function for drawing a title over the leaderboard rects
function drawLabel(label) {
  //size of text
  textSize(50);
  //centering text above first rect of leaderboard
  textAlign(CENTER, CENTER);
  //makes text black
  fill('black');
  //sets thickness of text
  stroke(20);
  //drawing 'TEST' at (200, 70) right above first rect of leaderboard
  text(label, xOrigin + 100, yOrigin - 40);
}

//function for drawing the leaderboard, 
function drawBoard(array, x, y, label) {
  background(220);
  push();
  translate(x, y);
  //calling function drawLabel so that title will be included when board is drawn
  drawLabel(label);
  //variables to help determine average for numbers. Must be used outside of forloop
  var totalScore = 0
  var numTests = 0

  //for loop for drawing the 7 rects and the data in the array
  for (var i = 0; i < COL_ELEMENTS; i++) {

    //prints the index 0 - 6 on the side of the leaderboard
    textSize(25); //size of numbers
    textAlign(CENTER, CENTER); //centers numbers
    fill('black'); //number color
    stroke(3); //text thickness
    //prints the index on the left side of leaderboard
    text(i, xOrigin - RECT_WIDTH / 3, yOrigin + RECT_HEIGHT / 2 + i * RECT_HEIGHT);

    //color of rects
    fill('cornsilk');
    //color of rects outline
    stroke('red');
    //thickness of rects outline
    strokeWeight(3);
    //where to draw the rects 
    rect(xOrigin, yOrigin + i * RECT_HEIGHT, RECT_WIDTH, RECT_HEIGHT);
    //prints the data in array on the console
    print(array[i]);
    //sets the text size
    textSize(25);
    //aligns the text on the center of the rects
    textAlign(CENTER, CENTER);
    // makes the lettering black
    fill('black');
    //sets the thickness of the lettering
    stroke(25);
    //loop runs through this code to insert the data into the rects  
    text(array[i], xOrigin + RECT_WIDTH / 2, yOrigin + RECT_HEIGHT / 2 + i * RECT_HEIGHT);

    //determines the average for the test data and random data
    numTests++
    totalScore = totalScore + array[i];
    var average = round(totalScore / numTests);

  }

  //prints total score and average in console
  print(totalScore);
  print(average);

  //draws 'AVG' at bottom of index left side of leaderboard
  textSize(35);
  textAlign(CENTER, CENTER);
  fill('black');
  stroke(5);
  text('AVG', xOrigin - 70, yOrigin + 380);

  //draws the average number at the bottom of leaderboard
  textSize(50);
  textAlign(CENTER, CENTER);
  fill('yellow');
  strokeWeight(5);
  text(average, xOrigin + 100, yOrigin + 380);
  //works with push() and translate () functions to move entire leaderboard
  pop();
}


//for some reason if i comment this function out my program won't run. not sure why 
//because there is no longer an INDEX array. 
//this was originally used to draw the index numbs. now no longer used. 
function elements(list) {

  for (j = 0; j < COL_ELEMENTS; j++) {
    // draws index of the array
    textSize(25);
    textAlign(CENTER, CENTER);
    fill('black');
    stroke(3);
    text(INDEX[j], xOrigin - RECT_WIDTH / 3, yOrigin + RECT_HEIGHT / 2 + j * RECT_HEIGHT);

  }

  textSize(35);
  textAlign(CENTER, CENTER);
  fill('black');
  stroke(5);
  text('AVG', xOrigin - 70, yOrigin + 380);

}