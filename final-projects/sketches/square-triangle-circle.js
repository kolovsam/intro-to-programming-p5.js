/* HCDE 598 Assignment - Final Project
by Chun-Fang Yang
*/


var track = 10;
var ary_x = [];
var ary_y = [];
var ary_shape = [];
var pageNumber = 1;
var hasStarted = false;

function setup() {
  frameRate(10)
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  ellipseMode(CENTER);
  colorMode(HSL);
  noStroke();

//page number
  textSize(18);
  strokeWeight(1);
  fill("white");
  text(pageNumber, 30, 40);

//set up for the ary
  for (var i = 0; i < track; i++) {
    ary_x[i] = 0;
    ary_y[i] = 0;
    ary_shape[i] = 0;
  }
}


function draw() {

  if (pageNumber === 1) {
    background("#eefbf8");
    drawPage1();
  }
  if (hasStarted && pageNumber === 2) {
    background("white");
    drawShape();
  }
}

// mouse click to page 2
function mouseClicked() {
  if (hasStarted === false && (0 <= mouseX) && (0 <= mouseY) && pageNumber < 2) {
    hasStarted = true;
    pageNumber = pageNumber + 1;
  }
}

// draw page 1
function drawPage1() {
  var buttonColor = ("#0EC5DF")

  if (hasStarted === false) {
    //start button
    strokeWeight(0);
    fill(buttonColor);
    rect(windowWidth / 2 - 30, windowHeight / 2 - 30, 150, 50, 10);

    textSize(20);
    strokeWeight(1);
    fill('white');
    text('S T A R T', windowWidth / 2, windowHeight / 2);
  }
}

//draw different shapes randomly on page 2 with mouse track
function drawShape() {
  var shape = Math.round(random(1, 3))
  console.log(shape)

  for (var i = track - 1; i > 0; i--) {
    ary_x[i] = ary_x[i - 1];
    ary_y[i] = ary_y[i - 1];
    ary_shape[i] = ary_shape[i - 1];
  }

  ary_x[0] = mouseX;
  ary_y[0] = mouseY;
  ary_shape[0] = shape

  for (i = 0; i < track; i++) {
    if (ary_shape[i] === 1) {
      drawCircle(ary_x[i], ary_y[i])
    }

    if (ary_shape[i] === 2) {
      drawTriangle(ary_x[i], ary_y[i])
    }

    if (ary_shape[i] === 3) {
      drawRect(ary_x[i], ary_y[i])
    }
  }
}


//draw circles on page 2
function drawCircle(x, y) {

  var radius = random(30, 100);
  var center_radius = random(30, sqrt(width * width + height * height) / 2);
  var angle = (frameCount) % 360;

  fill(angle + random(-15, 15), 100, 50, 0.1);
  ellipse(x, y, radius, radius);
}


//draw triangles on page 2
function drawTriangle(x, y) {

  var triLength = random(30, 100);
  var angle = (frameCount) % 360;

  fill(angle + random(-15, 15), 100, 50, 0.1);
  triangle(x - triLength / 2, y + 0.7 * triLength / 2, x, y - 0.7 * triLength / 2, x + triLength / 2, y + 0.7 * triLength / 2);
}


//draw rectangles on page 2
function drawRect(x, y) {

  var rectLength = random(30, 100);
  var angle = (frameCount) % 360;

  fill(angle + random(-15, 15), 100, 50, 0.1);
  rect(x - rectLength / 2, y - rectLength / 2, rectLength, rectLength);
}