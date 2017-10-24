function setup() {
    // create the empty canvas
    createCanvas(700, 500);
    //  frameRate(10);
}

// Variable Declaration
var wingColor = 'white';
var bodyColor = 'gray';

var xCoordBodyTL = 50
var yCoordBodyTL = 50
var xCoordLeftWingTL = 22;
var yCoordLeftWingTL = 40;
var xCoordRightWingTL = 78;
var yCoordRightWingTL = 40;

var xCoordBodyTR = 650
var yCoordBodyTR = 50
var xCoordLeftWingTR = 622;
var yCoordLeftWingTR = 40;
var xCoordRightWingTR = 678;
var yCoordRightWingTR = 40;

var xCoordBodyBL = 50
var yCoordBodyBL = 450
var xCoordLeftWingBL = 22;
var yCoordLeftWingBL = 440;
var xCoordRightWingBL = 78;
var yCoordRightWingBL = 440;

var xCoordBodyBR = 650
var yCoordBodyBR = 450
var xCoordLeftWingBR = 622;
var yCoordLeftWingBR = 440;
var xCoordRightWingBR = 678;
var yCoordRightWingBR = 440;




function draw() { 

  background('white');
  
  //Cake
  fill('#f7f1ca');
  rect(300, 200, 100, 100);
  fill('#fcd1c2');
  rect(300, 200, 100, 20);
  fill('#fcd1c2');
  rect(300, 240, 100, 20);
  fill('#fcd1c2');
  rect(300, 280, 100, 20);
  
  stroke('black');
  strokeWeight(5);
  
  // Top-Left Corner
  fill(wingColor);
  ellipse(xCoordLeftWingTL, yCoordLeftWingTL, 25, 40);
  ellipse(xCoordRightWingTL, yCoordRightWingTL, 25, 40);
  fill(bodyColor);
  ellipse(xCoordBodyTL, yCoordBodyTL, 50, 50);
  
  //Top-Right Corner
  fill(wingColor);
  ellipse(xCoordLeftWingTR, yCoordLeftWingTR, 25, 40);
  ellipse(xCoordRightWingTR, yCoordRightWingTR, 25, 40);
  fill(bodyColor);
  ellipse(xCoordBodyTR, yCoordBodyTR, 50, 50);
  
  //Bottom-Left Corner
  fill(wingColor);
  ellipse(xCoordLeftWingBL, yCoordLeftWingBL, 25, 40);
  ellipse(xCoordRightWingBL, yCoordRightWingBL, 25, 40);
  fill(bodyColor);
  ellipse(xCoordBodyBL, yCoordBodyBL, 50, 50);
  
  //Bottom-Right Corner
  fill(wingColor);
  ellipse(xCoordLeftWingBR, yCoordLeftWingBR, 25, 40);
  ellipse(xCoordRightWingBR, yCoordRightWingBR, 25, 40);
  fill(bodyColor);
  ellipse(xCoordBodyBR, yCoordBodyBR, 50, 50);
  
  // Top-Left Animation
  xCoordBodyTL = xCoordBodyTL + 1.5;
  yCoordBodyTL = yCoordBodyTL + 1;
  xCoordLeftWingTL = xCoordLeftWingTL + 1.5;
  yCoordLeftWingTL = yCoordLeftWingTL + 1;
  xCoordRightWingTL = xCoordRightWingTL + 1.5;
  yCoordRightWingTL = yCoordRightWingTL + 1;
  
  //Top-Right Animation
  xCoordBodyTR = xCoordBodyTR - 1.5;
  yCoordBodyTR = yCoordBodyTR + 1;
  xCoordLeftWingTR = xCoordLeftWingTR - 1.5;
  yCoordLeftWingTR = yCoordLeftWingTR + 1;
  xCoordRightWingTR = xCoordRightWingTR - 1.5;
  yCoordRightWingTR = yCoordRightWingTR + 1;
  
  //Bottom-Left Animation
  xCoordBodyBL = xCoordBodyBL + 1.5;
	yCoordBodyBL = yCoordBodyBL - 1;
	xCoordLeftWingBL = xCoordLeftWingBL + 1.5;
	yCoordLeftWingBL = yCoordLeftWingBL - 1;
	xCoordRightWingBL = xCoordRightWingBL + 1.5;
	yCoordRightWingBL = yCoordRightWingBL - 1;
  
  //Bottom-Right Animation
  xCoordBodyBR = xCoordBodyBR - 1.5;
	yCoordBodyBR = yCoordBodyBR - 1;
	xCoordLeftWingBR = xCoordLeftWingBR - 1.5;
	yCoordLeftWingBR = yCoordLeftWingBR - 1;
	xCoordRightWingBR = xCoordRightWingBR - 1.5;
	yCoordRightWingBR = yCoordRightWingBR - 1;
  
  //Stop the loop
  if(xCoordBodyTL >= 300) {
    noLoop();
  }
  
}