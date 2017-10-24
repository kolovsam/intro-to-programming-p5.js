function setup() {
  createCanvas(800, 800);

  // frameRate(10), film 24 frames/ sec
  frameRate(8);
}


var xCoord = 0
var yCoord = 0
var theRad = 50

var xCoord2 = 800
var yCoord2 = 0
var theRad2 = 50

var xCoord3 = 0
var yCoord3 = 800
var theRad3 = 50

var xCoord4 = 800
var yCoord4 = 800
var theRad4 = 50


function draw() {
  //reset the background each time the frame updates
  background('purple');

  noStroke();
  fill('black');
  ellipse(xCoord, yCoord, theRad);

  // change stuff for the next time it draws
  xCoord = xCoord + 20; //move to the right
  yCoord = yCoord + 20; //move down


  //make sure the circle doesn't travel completely off the screen
  if (xCoord > 400) {
      xCoord = 400;
  }
  
  if (yCoord > height/2) {
      yCoord = height/2;
  }

  
  //shape 2

  noStroke();
  fill('white');
  ellipse(xCoord2, yCoord2, theRad2);

  // change stuff for the next time it draws
  xCoord2 = xCoord2 - 20; //move to the left
  yCoord2 = yCoord2 + 20; //move down

 //make sure the circle doesn't travel completely off the screen
  if (xCoord2 < 300) {
      xCoord2 = 300;
  }
  
  if (yCoord2 > height/2) {
      yCoord2 = height/2;
  }
 
 //shape 3

  noStroke();
  fill('yellow');
  ellipse(xCoord3, yCoord3, theRad3);

  // change stuff for the next time it draws
  xCoord3 = xCoord3 + 20; //move to the right
  yCoord3 = yCoord3 - 15; //move up

 //make sure the circle doesn't travel completely off the screen
  if (xCoord3 > 500) {
      xCoord3 = 500;
  }
  
  if (yCoord3 < height/2) {
      yCoord3 = height/2;
  }
  
  
  //shape 4

  noStroke();
  fill('red');
  ellipse(xCoord4, yCoord4, theRad4);

  // change stuff for the next time it draws
  xCoord4 = xCoord4 -15; //move to the left
  yCoord4 = yCoord4 -10; //move up

 //make sure the circle doesn't travel completely off the screen
  if (xCoord4 < 200) {
      xCoord4 = 200;
  }
  
  if (yCoord4 < height/2) {
      yCoord4 = height/2;
  }
  
  
}