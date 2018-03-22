/* David Molinero
 * Title: The Astronaut
 * Assignment 4
 */

function setup() {
  createCanvas(500, 500);
  rectMode(CENTER);
  noStroke();
  renderSpace();
  fill('#fff');
  textAlign(CENTER);
  textSize(24);
  text('PRESS ANY KEY TO DRAW AN', 250, 180);
  text('ASTRONAUT IN SPACE', 250, 220);
  textSize(12);
  text('( Make sure to click on the canvas first. )', 250, 300);
}

// Not needed for this assignment
function draw() {}

/* Draws an astronaut at the provided coordinates and scale
 * This is the single function for rendering the character
 */
function renderAstronaut(x, y, size) {
  fill('#fff');
  rect(x, y + (6 * size), 60 * size, 100 * size); // Body
  rect(x - (17 * size), y + (56 * size), 26 * size, 100 * size, 12 * size); // Left leg
  rect(x + (17 * size), y + (56 * size), 26 * size, 100 * size, 12 * size); // Right le
  rect(x + (30 * size), y, 100 * size, 26 * size, 12 * size); // Left arm
  rect(x - (30 * size), y, 100 * size, 26 * size, 12 * size); // Left arm
  ellipse(x, y - (58 * size), 100 * size, 100 * size); // Helmet
  fill('#0c0751');
  ellipse(x, y - (50 * size), 75 * size, 60 * size); // Visor
  fill('#898989');
  rect(x, y + (35 * size), 60 * size, 10 * size); // Belt
  fill('#000');
  rect(x, y, 15 * size, 15 * size); // Controls?
  fill('#39b54a');
  ellipse(x + (15 * size), y, 10 * size, 10 * size); // Status light?
  renderInstructions();
}

/* Render the great void of space with some stars
 * This is just a static background for the character to move around in
 */
function renderSpace() {
  fill('#030228');
  rect(250, 250, 500, 500);
  fill('#fff200');
  ellipse(60, 96, 8, 8);
  ellipse(166, 121, 12, 12);
  ellipse(367, 44, 10, 10);
  ellipse(58, 275, 10, 10);
  ellipse(421, 234, 10, 10);
  ellipse(398, 380, 12, 12);
  fill('#1c75bc');
  ellipse(250, 500, 560, 130);
}

/* When a key is pressed,
 * random coordinates and scale will be rendered
 * drawing a new astronaut at those coordinates and scale
 */
function keyPressed() {
  x = random(100, 400);
  y = random(100, 400);
  size = random(0.1, 2);
  renderSpace();
  renderAstronaut(x, y, size);
}

function renderInstructions() {
  fill('#1c75bc');
  rect(250, 476, 340, 20);
  fill('#fff');
  textSize(12);
  text('PRESS ANY KEY TO RANDOMLY MOVE THE ASTRONAUT', 250, 480);
}

