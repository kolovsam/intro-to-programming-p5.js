/* HCDE 598 Assignment 6 -Leader Board
by Chun-Fang Yang
*/

// the size of the overall canvas
const canvasWidth = 1000;
const canvasHeight = 600;

// the uppper left corner of the progress bar
const xOrigin = 100;
const yOrigin = 100;

// some colors
const bgColor = ("#FFFFFB");
const barColor = "white";

// parameters for each box
const segmentSize = 50;
const borderWidth = 1;
const barSegments = 10;


//var highScore = 0;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  background(bgColor);

  drawRandomAry()
}

function drawRandomAry() {
  background(bgColor);
  
  var ary = [];
  var i, new_number;
  var max = 0;
  var min = 100;
  // variables to accumulate running totals while traversing the array
  var totalScores = 0;
  var numGrades = 0;

  // draw the required number in the board

  for (i = 0; i < barSegments; i++) {
    //new_number = +random(maximunValue).toFixed(0);
    new_number = Math.round(random(100));
    ary.push(new_number);
    if (new_number >= max) {
      max = new_number;
    }
    if (new_number <= min) {
      min = new_number;
    }

    // total scores
    totalScores = totalScores + ary[i];
  }

  for (i = 0; i < barSegments; i++) {

    // first calculate the x coordinate of this segment
    var xCorner = xOrigin + i * segmentSize;

    // draw the board
    rect(xCorner, yOrigin, segmentSize, segmentSize);
    textSize(25);
    textAlign(CENTER, CENTER);
    strokeWeight(1);
    text(ary[i], xCorner + segmentSize / 2, yOrigin + segmentSize / 2);

    if (max === ary[i]) {
      fill("#81C7D4")
    } else if (min === ary[i]) {
      fill("#FBE251")
    } else {
      fill(barColor);
    }

    strokeWeight(borderWidth);
    rect(xOrigin + i * segmentSize, yOrigin, segmentSize, segmentSize);

    // put the numbers in the boxes
    textSize(20);
    textAlign(CENTER, CENTER);
    fill('black');
    strokeWeight(1);
    text(ary[i], xCorner + segmentSize / 2, yOrigin + segmentSize / 2);

    // print the array index
    textSize(20);
    textAlign(CENTER, CENTER);
    fill('black');
    strokeWeight(1);
    text("Leader Board", canvasWidth / 3, canvasHeight / 8);
    text([i], xCorner + segmentSize / 2, yOrigin + segmentSize * 1.5);

  }
  var averageScore = totalScores / barSegments;
  print("average = ", averageScore.toFixed(0));

  textSize(20);
  textAlign(CENTER, CENTER);
  fill('grey');
  strokeWeight(5);
  text(averageScore.toFixed(0), canvasWidth / 3 + 350, yOrigin + 25);
  text("Average", canvasWidth / 3 + 350, canvasHeight / 8);

}

function mouseClicked() {
  var new_number = Math.round(random(100));
  drawRandomAry();
}

function draw() {

}