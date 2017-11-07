// fixed colors and drawing settings
var bgColor = 'purple';
var lineColor = 'color';
var textColor = 'white';
var circleWeight = 4;
var lineWeight = 2;
var hint = "Press any key to draw the Design at the cursor point.";


function setup() {
  createCanvas(1000, 1000);
  col1 = color(random(255), random(255), random(255));
  col2 = color(random(255), random(255), random(255));
  col3 = color(random(255), random(255), random(255));
  col4 = color(random(255), random(255), random(255));
  background(bgColor);

  fill(textColor);
  strokeWeight(0);
  textSize(width / 30);
  text(hint, 0.1 * width, 0.1 * height);
}

function draw() {}


// draws an abstract centered at (x, y)
// with a size of webSize pixels. the websize is
// the half the radiius of the circles.
function drawWeb(x, y, webSize) {

  background(bgColor);

  // Drawing the 4 circles of the design           

  noFill();
  stroke(lineColor);
  strokeWeight(circleWeight);
  ellipse(x + webSize, y, 2 * webSize);
  ellipse(x - webSize, y, 2 * webSize);
  ellipse(x, y + webSize, 2 * webSize);
  ellipse(x, y - webSize, 2 * webSize);

  // Drawing the horizontal and vertical line that runs through the center
  strokeWeight(lineWeight);
  line(x - webSize * 3, y, x + webSize * 3, y);
  line(x, y - webSize * 3, x, y + webSize * 3);

  // Drawing the 4 angled lines
  line(x - webSize * 3, y, x, y + webSize * 3);
  line(x - webSize * 3, y, x, y - webSize * 3);
  line(x, y - webSize * 3, x + webSize * 3, y);
  line(x, y + webSize * 3, x + webSize * 3, y);

  // Drawing the 4 angled lines
  line(x - webSize * 1.2, y, x, y + webSize * 1.2);
  line(x - webSize * 1.2, y, x, y - webSize * 1.2);
  line(x, y - webSize * 1.2, x + webSize * 1.2, y);
  line(x, y + webSize * 1.2, x + webSize * 1.2, y);
}

// whenever a key is pressed on the keyboard,
// draws an abstract design centered on the current position
// of the mouse with a random size design each time
function keyPressed() {
  var size = random(0, width / 5);
  drawWeb(mouseX, mouseY, size);
}