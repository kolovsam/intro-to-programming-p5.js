// fixed colors and drawing settings
var bgColor = 'white';
var lineColor = 'black';
var lineWeight = 5;


// just establish the canvas and fill it with a color
function setup() {
  createCanvas(800, 800);
  background(bgColor);
}


// in this program, nothing is done in the draw function;
// everything is triggered by pressing a key on the keyboard
function draw() {}


// draws a simple teddy bear centered at (x, y)
// with a size of bearSize pixels. the websize is
// the size of the teddy bear's face.
function drawBear(x, y, bearSize) {

  // then draw the bear at various sizes within and around the
  // boundaries of the bear's face
  noStroke();
  fill('#e9991d');
  ellipse(x + bearSize * 0.7, y - bearSize * 0.7, bearSize * 0.75); //right ear
  ellipse(x - bearSize * 0.7, y - bearSize * 0.7, bearSize * 0.75); //left ear
  fill('#885a13');
  ellipse(x + bearSize * 0.7, y - bearSize * 0.7, bearSize * 0.5); //right ear inside
  ellipse(x - bearSize * 0.7, y - bearSize * 0.7, bearSize * 0.5); //left ear inside
  fill('#e9991d');
  ellipse(x, y, bearSize * 2.0); //the face
  fill('black');
  ellipse(x + bearSize * 0.35, y - bearSize * 0.1, bearSize * 0.15, bearSize * 0.2); //right eye
  ellipse(x - bearSize * 0.35, y - bearSize * 0.1, bearSize * 0.15, bearSize * 0.2); //left eye
  ellipse(x, y + bearSize * 0.2, bearSize * 0.3, bearSize * 0.2); //nose
  stroke(lineColor);
  strokeWeight(lineWeight);
  line(x, y + bearSize * 0.2, x, y + bearSize * 0.6); //mouth down
  line(x, y + bearSize * 0.6, x + bearSize * 0.25, y + bearSize * 0.5); //mouth right
  line(x, y + bearSize * 0.6, x - bearSize * 0.25, y + bearSize * 0.5); //mouth left
}

// whenever a key is pressed on the keyboard,
// draw a teddy bear centered on the current position
// of the mouse with a random size teddy bear each time
function keyPressed() {
  var size = random(25, width / 5);
  drawBear(mouseX, mouseY, size);
}