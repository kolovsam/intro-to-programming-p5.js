/*
	Jenna James
	Assignment 4 - Scaled Drawing (Repeating Cacti with Flower)
  2/11/18
*/

//this sets the colors for the cacti, pot, and flower
var potfill = ('lightsalmon');
var potstroke = ('salmon');


var cacti = ('olivedrab');
var cactistroke = ('darkolivegreen');
var catistroke2 = ('darkseagreen');

var flowerfill = ('pink');

//this sets the background color
function setup() {
  createCanvas(650, 650);
  background('mistyrose');
}

function draw() {}

function drawMyChar(x, y, scale) {
  // drawing commands
  //set x & y to cactus shape (331, 230)
  // setting scale of cactus 165

  //this draws the cactus
  strokeWeight(5);
  fill(cacti);
  stroke(cactistroke);
  ellipse(x, y, scale * 0.5629, scale);

  //this draws the needles
  stroke('darkseagreen');
  line(x - (scale * 0.0060), y - (scale * 0.243), x - (scale * 0.0060), y - (scale * 0.3));
  line(x - (scale * 0.096), y - (scale * 0.12), x - (scale * 0.096), y - (scale * 0.060));
  line(x + (scale * 0.084), y - (scale * 0.12), x + (scale * 0.084), y - (scale * 0.060));
  line(x - (scale * 0.0060), y - (scale * 0.12), x - (scale * 0.0060), y - (scale * 0.060));
  line(x - (scale * 0.1878), y + (scale * 0.060), x - (scale * 0.1878), y + (scale * 0.1212));
  line(x - (scale * 0.0060), y + (scale * 0.060), x - (scale * 0.0060), y + (scale * 0.1212));
  line(x + (scale * 0.1757), y + (scale * 0.060), x + (scale * 0.1757), y + (scale * 0.1212));

  //this draws the flower
  fill(flowerfill);
  stroke('salmon');
  line(x + (scale * 0.006), y - (scale * 0.606), x + (scale * 0.006), y - (scale * 0.666));
  line(x - (scale * 0.024), y - (scale * 0.5939), x - (scale * 0.0363), y - (scale * 0.654));
  line(x + (scale * 0.058), y - (scale * 0.66), x + (scale * 0.04), y - (scale * 0.606));
  ellipse(x + (scale * 0.01), y - (scale * 0.5454), scale * 0.1515, scale * 0.1515);

  //this draws the pot
  strokeWeight(10);
  stroke(potstroke);
  fill(potfill);
  rect(x - (scale * 0.097), y + (scale * 0.424), scale * 0.189, scale * 0.3);
  rect(x - (scale * 0.26732), y + (scale * 0.2), scale * 0.53, scale * 0.48);

}

//interactivity function on click and random sizes
function mouseClicked() {
  var size = random(20, 300);
  drawMyChar(mouseX, mouseY, size);
}