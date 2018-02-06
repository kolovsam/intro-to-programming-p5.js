//Samuel Shen, HCDE598A, THE REAL Assignment 2

var positionX = 30;
var positionY = 30;
var position2X = 500;
var position2Y = 30;
var position3X = 30;
var position3Y = 400;
var position4X = 500;
var position4Y = 400;
var shapewidth = 80;
var shapeheight = 40;

function setup() {
  createCanvas(600, 500);
}

function draw() {
  background("#000");
  //Upper left shapes
  fill("#55508d");
  noStroke();
  rect(positionX, positionY, shapewidth, shapeheight);
  fill("#726da8");
  rect(positionX, positionY + 40, shapewidth, shapeheight);
  fill("#FFFFFF");
  ellipse(positionX + 20, positionY + 50, 10, 10);
  ellipse(positionX + 60, positionY + 50, 10, 10);
  stroke("#FFFFFF");
  strokeWeight(3);
  line(positionX + 20, positionY + 70, positionX + 60, positionY + 70);
  //Upper right shapes
  noStroke();
  fill("#a0d2db");
  rect(position2X, position2Y, shapewidth, shapeheight);
  fill("#bee7e8");
  rect(position2X, position2Y + 40, shapewidth, shapeheight);
  fill("#FFFFFF");
  ellipse(position2X + 20, position2Y + 50, 10, 10);
  ellipse(position2X + 60, position2Y + 50, 10, 10);
  stroke("#FFFFFF");
  strokeWeight(3);
  line(position2X + 20, position2Y + 70, position2X + 60, position2Y + 70);

  //Bottom left shapes
  noStroke();
  fill("#7d8cc4");
  rect(position3X, position3Y, shapewidth, shapeheight);
  fill("#a0d2db");
  rect(position3X, position3Y + 40, shapewidth, shapeheight);
  fill("#FFFFFF");
  ellipse(position3X + 20, position3Y + 50, 10, 10);
  ellipse(position3X + 60, position3Y + 50, 10, 10);
  stroke("#FFFFFF");
  strokeWeight(3);
  line(position3X + 20, position3Y + 70, position3X + 60, position3Y + 70);


  //Bottom right shapes
  noStroke();
  fill("#f99d7f");
  rect(position4X, position4Y, shapewidth, shapeheight);
  fill("#fd6404");
  rect(position4X, position4Y + 40, shapewidth, shapeheight);
  fill("#FFFFFF");
  ellipse(position4X + 20, position4Y + 50, 10, 10);
  ellipse(position4X + 60, position4Y + 50, 10, 10);
  stroke("#FFFFFF");
  strokeWeight(3);
  line(position4X + 20, position4Y + 70, position4X + 60, position4Y + 70);

  //All vertical moves
  if (positionX < 200) {
    positionX = positionX + 1;
  }
  if (position3X < 100) {
    position3X = position3X + 1;
  }

  if (position2X > 440) {
    position2X = position2X - 1;
  }
  if (position4X > 340) {
    position4X = position4X - 1;
  }

  //All horizontal moves
	if (positionY <250) {
  	positionY = positionY+1;
  }
  if (position2Y <250) {
  	position2Y = position2Y+1;	
  }
  if (position3Y >250){
  	position3Y = position3Y-1;
  }
  if (position4Y >250) {
  	position4Y = position4Y-1;
  }
}