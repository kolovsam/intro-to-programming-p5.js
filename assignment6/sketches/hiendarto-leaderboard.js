/* 

Assignment 6 - Leaderboard
Press t to show test leaderboard
Press r to show leaderboard with random numbers

*/

// the size of the overall canvas
const canvasWidth = 500;
const canvasHeight = 1000;

// the uppper left corner of the progress bar
const xOrigin = 100;
const yOrigin = 100;

// some colors
const bgColor = 'white';
const barColor = 'beige';
const borderColor = 'black';

// parameters for each box in the progress bar
const segmentWidth = 100;
const segmentSize = 50;
const borderWidth = 2;

// how many segments to draw in the progress bar
const barSegments = 15;


const tableRow = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
var gradesHome = [44, 2, 33, 0, 50, 33, 100, 91, 92, 86, 100, 40, 95, 77, 99];
var gradesTest = [10, 88, 75, 80, 0, 2, 100, 92, 20, 68, 100, 14, 59, 77, 99];
var gradesRandom = [];


function setup() {

  // create the canvas
  createCanvas(canvasWidth, canvasHeight);
  background(bgColor);

  // variables to accumulate running totals while traversing the array
  var totalScoresHome = 0;
  var numGradesHome = 0;
  
  textSize(18);
  fill('black');
  strokeWeight(0);
  text('LEADERBOARD', xOrigin + 30, yOrigin - 20);

  // draw the required number of bar segments
  for (i = 0; i < barSegments; i++) {

    fill(barColor);
    stroke(borderColor);
    strokeWeight(borderWidth);

    // first calculate the x coordinate of this segment
    var yCorner = yOrigin + i * segmentSize;
    // then draw one bar segment

    rect(xOrigin + 100, yCorner, segmentWidth, segmentSize);
    print(gradesHome[i + 1]);

    // keep a total of the number of grades recorded
    // and the running total of the scores
    numGradesHome = numGradesHome + 1;
    totalScoresHome = totalScoresHome + gradesHome[i];

    print("gradesHome: ", numGradesHome, " total = ", totalScoresHome);

    // now put the grades in the boxes
    textSize(18);
    textAlign(CENTER, CENTER);
    fill('black');
    strokeWeight(0);

    text(tableRow[i], xOrigin + 50, yCorner + segmentSize / 2);
    text(gradesHome[i], xOrigin + 150, yCorner + segmentSize / 2);

  }

  var averageScoreHome = totalScoresHome / numGradesHome;
  print("averageHome = ", averageScoreHome);

  textSize(50);
  textAlign(CENTER, CENTER);
  fill('yellow');
  strokeWeight(5);
  text(round(averageScoreHome), xOrigin + 150, yOrigin + 800);

}

function draw() {}


// instead we use key presses to trigger different actions
function keyTyped() {

  if (key === 't') {
    drawBoardTest(); // show leaderboard with test numbers
  } else if (key === 'r') {
    drawBoardRandom(); // show leaderboard with random numbers
  } 


}

// if t is pressed, show leaderboard with test numbers

function drawBoardTest() {

  createCanvas(canvasWidth, canvasHeight);
  background(bgColor);

  // variables to accumulate running totals while traversing the array
  var totalScoresTest = 0;
  var numGradesTest = 0;
  
  textSize(18);
  fill('black');
  strokeWeight(0);
  text('LEADERBOARD TEST', xOrigin + 30, yOrigin - 20);

  // draw the required number of bar segments
  for (i = 0; i < barSegments; i++) {

    fill(barColor);
    stroke(borderColor);
    strokeWeight(borderWidth);

    // first calculate the x coordinate of this segment
    var yCorner = yOrigin + i * segmentSize;
    // then draw one bar segment

    rect(xOrigin + 100, yCorner, segmentWidth, segmentSize);
    print(gradesTest[i + 1]);

    // keep a total of the number of grades recorded
    // and the running total of the scores
    numGradesTest = numGradesTest + 1;
    totalScoresTest = totalScoresTest + gradesTest[i];

    print("gradesTest: ", numGradesTest, " total = ", totalScoresTest);

    // now put the grades in the boxes
    textSize(18);
    textAlign(CENTER, CENTER);
    fill('black');
    strokeWeight(0);

    text(tableRow[i], xOrigin + 50, yCorner + segmentSize / 2);
    text(gradesTest[i], xOrigin + 150, yCorner + segmentSize / 2);

  }

  var averageScoreTest = totalScoresTest / numGradesTest;
  print("averageTest = ", averageScoreTest);

  textSize(50);
  textAlign(CENTER, CENTER);
  fill('yellow');
  strokeWeight(5);
  text(round(averageScoreTest), xOrigin + 150, yOrigin + 800);
}


// if r is pressed, show leaderboard with random numbers

function drawBoardRandom() {

  createCanvas(canvasWidth, canvasHeight);
  background(bgColor);

  // variables to accumulate running totals while traversing the array
  var totalScoresRandom = 0;
  var numGradesRandom = 0;
  
  textSize(18);
  fill('black');
  strokeWeight(0);
  text('LEADERBOARD RANDOM', xOrigin + 30, yOrigin - 20);

  // draw the required number of bar segments
  for (i = 0; i < barSegments; i++) {

    fill(barColor);
    stroke(borderColor);
    strokeWeight(borderWidth);

    // first calculate the x coordinate of this segment
    var yCorner = yOrigin + i * segmentSize;
    
    // then draw one bar segment
    rect(xOrigin + 100, yCorner, segmentWidth, segmentSize);

    // randomize numbers
    gradesRandom[i] = random(0, 100);
        
    // keep a total of the number of grades recorded
    // and the running total of the scores
    numGradesRandom = numGradesRandom + 1;
    totalScoresRandom = totalScoresRandom + gradesRandom[i];

    print("gradesRandom: ", numGradesRandom, " total = ", totalScoresRandom);

    // now put the grades in the boxes
    textSize(18);
    textAlign(CENTER, CENTER);
    fill('black');
    strokeWeight(0);

    text(tableRow[i], xOrigin + 50, yCorner + segmentSize / 2);
    text(round(gradesRandom[i]), xOrigin + 150, yCorner + segmentSize / 2);

  }

  var averageScoreRandom = totalScoresRandom / numGradesRandom;
  print("averageRandom = ", averageScoreRandom);

  textSize(50);
  textAlign(CENTER, CENTER);
  fill('yellow');
  strokeWeight(5);
  text(round(averageScoreRandom), xOrigin + 150, yOrigin + 800);
}