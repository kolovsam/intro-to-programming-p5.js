/*

Jenny Thai Nguyen
HCDE 598
Intro to Programming
Assignment 4 - Scaled Drawing

*/

//fixed colors and drawing settings
var backgroundColor = 'black';
var lineColor = 'white';
var shapeOne = 5;
var shapeTwo = 2;

function setup() { 
  createCanvas(700, 700);
  background(backgroundColor);
 
} 

function draw() {}

function drawImage(x, y, shapeSize) {
	stroke(lineColor);
  strokeWeight(shapeOne);
  noFill();
  point(x, y + 1, x, y);
  quad(x, y, x, y);
  ellipse(x, y, x + shapeSize, y);
  ellipse(x, y, x - shapeSize, y);
  quad(x, y, x, y + shapeSize);
  rect(x, y, x, y - shapeSize);
  line(x, y, x, y);
	rect(x, y, x, y);

}

function keyPressed() {
  var size = random(0, width / 2);
  drawImage(mouseX, mouseY, size);
  
}