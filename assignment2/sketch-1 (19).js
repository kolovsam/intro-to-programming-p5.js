function setup() {
    // create the empty canvas
    createCanvas(500, 400);
		background('black')
    //  frameRate(30);
}

// declare and initialize useful variables
var myColor = 0;
var xCoord = 100;
var yCoord = 100;
var theRad = 10;

function draw() {
    // reset the background each time the frame updates
    background('black');

    // draw a circle
    strokeWeight(10);
    stroke('yellow');
    fill(myColor); // gray scale only
    ellipse(xCoord, yCoord, theRad);

    // change stuff for the next time it draws
    myColor = myColor + 1; // cycles up through grey and stays white
    xCoord = xCoord + 1; // move to the right
    yCoord = yCoord + 2; // move down
    theRad = theRad + 1; // make it bigger

  	theRad++; //JS 的用法
  
  	// 讓圓不會跑出去
  if (xCoord > width) {
    	xCoord = width;
  }
  if (yCoord > height) {
    	yCoord = height;
  }
}