function setup() {
  createCanvas(500, 500);
  background(220);
  //  frameRate(0);
}

var xCoord = 0;
var yCoord = 0;

var xCoord2 = 0;
var yCoord2 = 500;

var xCoord3 = 500;
var yCoord3 = 0;

var xCoord4 = 500;
var yCoord4 = 500;

function draw() {
  background(220);
  noStroke();

  // gryffindor
  fill('gold');
  rect(xCoord, yCoord, 25, 25);
  fill('red');
  rect(xCoord, yCoord + 25, 25, 50);

  xCoord = xCoord + 1.5; // move right
  yCoord = yCoord + 2; // move down

  // slytherin
  fill('silver');
  rect(xCoord2, yCoord2, 25, 25);
  fill('green');
  rect(xCoord2, yCoord2 + 25, 25, 60);
  xCoord2 = xCoord2 + 2; // move right
  yCoord2 = yCoord2 - 3; // move up

  // ravenclaw
  fill('silver');
  rect(xCoord3, yCoord3, 20, 20);
  fill('blue');
  rect(xCoord3, yCoord3 + 20, 20, 55);
  xCoord3 = xCoord3 - 2.4; // move left
  yCoord3 = yCoord3 + 2; // move down

  // hufflepuff
  fill('black');
  rect(xCoord4, yCoord4, 20, 20);
  fill('gold');
  rect(xCoord4, yCoord4 + 20, 20, 40);
  xCoord4 = xCoord4 - 2; // move left
  yCoord4 = yCoord4 - 2.75; // move up

  if (xCoord > 200) {
    xCoord = 200;
    noLoop();
  }

  if (xCoord2 > 205) {
    xCoord2 = 205;
    noLoop();
  }

}