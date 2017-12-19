// Chess Board Program - Mike Harwell
// 11/10/17

var canvasWidth = 500;
var canvasHeight = 500;
var bgColor = 'purple';
var barColor = 'white';
var yOrigin = 50;
var xOrigin = 50;
var numRows = 8;
var segmentSize = 50;
var segmentHeight = 50;
var barSegments = 8;

function setup() {

  //Background environment
  createCanvas(canvasWidth, canvasHeight);
  background(bgColor);

  //Set drawing parameters for the bar segments
  for (j = 0; j < numRows; j++) {

    var y = yOrigin + (j * segmentHeight);

    for (i = 0; i < barSegments; i++) {

      print("i: ", i, " j: ", j);

      //Determines which square is black or white
      if (isEven(i, j)) {
        barColor = 'white';
      } else {
        barColor = 'black';
      }

      fill(barColor);

      drawSquare();
    }
  }
}

//Function that draws each square
function drawSquare(x, y, size, color) {

  rect(xOrigin + (i * segmentSize), yOrigin + (j * segmentHeight), segmentSize, segmentHeight);

}

//Check if number is even, then returns true or false
function isEven(n1, n2) {

  return (n1 + n2) % 2 == 0;

}

function draw() {}