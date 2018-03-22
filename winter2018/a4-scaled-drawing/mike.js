// Sonam Samel-A4-Scaled Drawing

function setup() {
  createCanvas(400, 400);
  background('lavenderblush');
}

//This function draws the character at an arbitrary location on the canvas, and at an arbitrary scale.
function mousePressed() {
  var size = random(0.1, 0.4);
  mike(mouseX, mouseY, size);
}

//This function draws the character Mike
function mike(x, y, size) {
  translate(x - 200 * size, y - 200 * size);
  scale(size);
  strokeWeight(0);
  fill('#838580');
  rect(47, 45, 40, 40, 5);
  rect(180, 45, 40, 40, 5);
	fill('#8ec63f');
  ellipse(134, 134, 200, 200);
  fill('white');
  ellipse(135, 110, 110, 110);
  fill('#2b7bd5');
  ellipse(135, 110, 50, 50);
  fill('black');
  ellipse(135, 110, 20, 20);
  fill('#404042');
  ellipse(135, 200, 60, 40);
}