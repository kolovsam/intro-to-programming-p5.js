/* 
Hi,
Below is my code for Assignment 6 
"Leaderboard" for the course 598A.
-Kartika Rathee */

// the size of the overall canvas
const canvasWidth = 700;
const canvasHeight = 700;

// the uppper left corner of the board
const xOrigin = 50;
const yOrigin = 50;

//colors used in the leaderboard
const bgColor = 'orange';
const barColor = 'cornsilk';
const borderColor = 'black';

//size of the board
const segmentWidth = 100;
const segmentHeight = 55;
const borderWidth = 1;

//original leaderboard
const originalGrades = [80, 99, 50, 75, 43, 50, 40, 63, 94, 34];

function setup() {

  // create the canvas
  createCanvas(canvasWidth, canvasHeight);
  background(bgColor);

  //display instructions 
  strokeWeight(1);
  textSize(50);
  textAlign(CENTER, CENTER);
  stroke('black');
  text("Press 'O' for Original  ", canvasWidth / 1.9, canvasHeight / 3);
  text("Press 'R' for Random  ", canvasWidth / 1.9, canvasHeight / 2);


}

/* Function to draw leaderboard
array_name: name of the array (random or original)
numRows: number of rows in leaderboard
numCol: number of columns in leaderboard
xOrigin & yOrigin: starting point of the leaderboard */

function drawBoard(array_name, numRows, numCol, xOrigin, yOrigin) {
  for (var j = 0; j < numRows; j++) {

    var yCorner = yOrigin + j * segmentHeight;

    for (var i = 0; i < numCol; i++) {

      var xCorner = xOrigin + i * segmentWidth;
      rect(xCorner, yCorner, segmentWidth, segmentHeight);
    }

    strokeWeight(1);
    textSize(25);
    textAlign(CENTER, CENTER);
    stroke('black');
    //Display the array values on canvas
    text(array_name[j], xOrigin + segmentWidth / 0.7, yCorner + segmentHeight / 2);
    //Display the array index value on canvas
    text(j, xOrigin + segmentWidth / 2, yCorner + segmentHeight / 2);

  }
}

//Calculate Score using leaderboard values

function calculateScore(array_name, numRows) {
  var highScore = 0;
  var lowScore = 400;
  var averageScore = 0;
  var totalScores = 0;

  for (var j = 0; j < numRows; j++) 
  {

    totalScores = totalScores + array_name[j];

    if (array_name[j] > highScore) 
    {
      highScore = array_name[j];
    }

    if (array_name[j] < lowScore)
    {
      lowScore = array_name[j];
    }

    averageScore = totalScores / numRows;
    averageScore = Math.round(averageScore);
  }
  displayScore(averageScore, highScore, lowScore);
}

//Display the calculated score
function displayScore(averageScore, highScore, lowScore) {

  textSize(25);
  textAlign(CENTER, CENTER);
  strokeWeight(1);

  text("Average Score:  ", canvasWidth / 1.8, canvasHeight / 8);
  text(averageScore, canvasWidth / 1.3, canvasHeight / 8);

  text("High Score:  ", canvasWidth / 1.8, canvasHeight / 5);
  text(highScore, canvasWidth / 1.3, canvasHeight / 5);

  text("Low Score:  ", canvasWidth / 1.8, canvasHeight / 3.6);
  text(lowScore, canvasWidth / 1.3, canvasHeight / 3.6);

}

function keyTyped()

{
  strokeWeight(1);

  var theKey = key;

  //if key R is pressed, generate a random leaderboard 
  if (theKey === 'r') {

    var randomGrades = Array.from({
      length: 10
    }, () => Math.floor(Math.random() * 200));

  background(bgColor);

    drawBoard(randomGrades, 10, 2, 50, 50);
    calculateScore(randomGrades, 10);

  textSize(40);
  textAlign(CENTER, CENTER);
  strokeWeight(1);
  text("Random Board ", canvasWidth / 1.6, canvasHeight / 2.3);
  textSize(18);
  text("Press 'O' for Original  ", canvasWidth / 1.6, canvasHeight / 2);
  text("Press 'R' for Random  ", canvasWidth / 1.6, canvasHeight / 1.8);


  }
  
  //if key O is pressed display original leaderboard
  else if (key === 'o') {

  background(bgColor);
    drawBoard(originalGrades, 10, 2, 50, 50);
    calculateScore(originalGrades, 10);

 textSize(40);
  textAlign(CENTER, CENTER);
  strokeWeight(1);
  text("Original Board ", canvasWidth / 1.6, canvasHeight / 2.3);
  textSize(18);
  text("Press 'O' for Original  ", canvasWidth / 1.6, canvasHeight / 2);
  text("Press 'R' for Random  ", canvasWidth / 1.6, canvasHeight / 1.8);
  }

}

function draw() {}