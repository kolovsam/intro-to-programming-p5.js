/*Joel Sytsma
	Scaled Drawing
  2/11/2018
  
  hit the mouse to activate the random drawing
*/


function setup() {

  createCanvas(400, 400);
  background(254);

}

function mouseClicked() {
   var scaler = random(10, 100);
   frank(mouseX, mouseY, scaler);
}

function frank(x, y, variable) {
  //red triangle (middle point, lower right point, upper right point)
  fill('red');
  triangle(x, y, x + variable, y + variable, x + variable + (variable / 2), y);
  //blue triangle (middle point, lower right, upper right)
  fill('orange');
  triangle(x, y, x + variable + (variable / 2), y, x + variable, y - variable);
  //yellow triangle (middle, upper right, upper left)
  fill('yellow');
  triangle(x, y, x + variable, y - variable, x, y - variable - (variable / 2));
  //green triangle (middle, upper right, upper left)
  fill('green');
  triangle(x, y, x, y - variable - (variable / 2), x - variable, y - variable);
  //blue triangle (middle, upper right, lower left)
  fill('blue');
  triangle(x, y, x - variable, y - variable, x - variable - (variable / 2), y);
  //purple triangle (middle, upper right, lower left)
  fill('indigo');
  triangle(x, y, x - variable - (variable / 2), y, x - variable, y + variable);
  //violet (middle, lower left, lower right)
  fill('violet');
  triangle(x, y, x - variable, y + variable, x, y + variable + (variable / 2));
  // lavender
  noFill();
  triangle(x, y + variable + (variable / 2), x + variable, y + variable);
}