/* How this program works - 

The canvas is divided equally into 4 quadrants.
Four different colored arcs are positioned at the four corners of the canvas.

1. The four arcs move to the center of the canvas to form a circle.
2. When they touch, multiple ripples are created outwards from the resulting center.
3. Finally the resulting circle keeps on rotating around the center. 

*/

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  frameRate(30);
}

var x1 = 575; // initial position of Arc in Q1 (yellow)
var y1 = 25;

var x2 = 25; // initial position of Arc in Q2 (blue)
var y2 = 25;

var x3 = 25; // (Q3 green)
var y3 = 575;

var x4 = 575; // (Q4 red)
var y4 = 575;

var start1 = 270; // start angle for Arc 1 in Q1
var end1 = 360; // finish angle for Arc 1 in Q1

var start2 = 180; // start angle for Arc 2 in Q2
var end2 = 270; // finish angle for Arc 2 in Q2

var start3 = 90;
var end3 = 180;

var start4 = 0;
var end4 = 90;

var r = 0;
var r1 = 250;

var Ripplex1 = 0; // used for Ripple effect
var Ripplex2 = 0;
var Ripplex3 = 0;
var Ripplex4 = 0;

var insidecolor = 0;

var yellow1 = '#FBBC05';
var blue1 = '#4285F4';
var green1 = '#34A853';
var red1 = '#EA4335';

function draw() {

  background(220);
  strokeWeight(20);
  noFill();

  // 1. DRAWING ARCS AND MOVING THEM TO CENTER

  // Quandrant 1 (Yellow)
  stroke(yellow1);
  arc(x1, y1, min(r, r1), min(r, r1), 270, 360);
  x1 = x1 - 5;
  y1 = y1 + 5;
  r = r + 1;

  if (x1 < width / 2) {
    x1 = width / 2;
  }

  if (y1 > height / 2) {
    y1 = height / 2;
  }

  // Quadrant 2 (Blue)
  stroke(blue1);
  arc(x2, y2, min(r, r1), min(r, r1), 180, 270);
  x2 = x2 + 5;
  y2 = y2 + 5;
  r = r + 1;

  if (x2 > width / 2) {
    x2 = width / 2;
  }

  if (y2 > height / 2) {
    y2 = height / 2;
  }

  // Quadrant 3 (Green)
  stroke(green1);
  arc(x3, y3, min(r, r1), min(r, r1), 90, 180);
  x3 = x3 + 5;
  y3 = y3 - 5;
  r = r + 1;

  if (x3 > width / 2) {
    x3 = width / 2;
  }

  if (y3 < height / 2) {
    y3 = height / 2;
  }

  // Quadrant 4 (Red)
  stroke(red1);
  arc(x4, y4, min(r, r1), min(r, r1), 0, 90);
  x4 = x4 - 5;
  y4 = y4 - 5;
  r = r + 1;

  if (x4 < width / 2) {
    x4 = width / 2;
  }

  if (y4 < height / 2) {
    y4 = height / 2;
  }

  // 2. CREATION OF RIPPLES

  if (r > r1) {

    strokeWeight(30); // Ripple 1
    stroke(yellow1);
    arc(width / 2, height / 2, min(Ripplex1, 250), min(Ripplex1, 250), 270, 360);
    stroke(blue1);
    arc(width / 2, height / 2, min(Ripplex1, 250), min(Ripplex1, 250), 180, 270);
    stroke(green1);
    arc(width / 2, height / 2, min(Ripplex1, 250), min(Ripplex1, 250), 90, 180);
    stroke(red1);
    arc(width / 2, height / 2, min(Ripplex1, 250), min(Ripplex1, 250), 0, 90);
    Ripplex1 = Ripplex1 + 3;

    strokeWeight(15); // Ripple 2
    stroke(yellow1);
    arc(width / 2, height / 2, min(Ripplex3, 250), min(Ripplex3, 250), 270, 360);
    stroke(blue1);
    arc(width / 2, height / 2, min(Ripplex3, 250), min(Ripplex3, 250), 180, 270);
    stroke(green1);
    arc(width / 2, height / 2, min(Ripplex3, 250), min(Ripplex3, 250), 90, 180);
    stroke(red1);
    arc(width / 2, height / 2, min(Ripplex3, 250), min(Ripplex3, 250), 0, 90);
    Ripplex3 = Ripplex3 + 5;


    strokeWeight(10); // Ripple 3
    stroke(yellow1);
    arc(width / 2, height / 2, min(Ripplex4, 250), min(Ripplex4, 250), 270, 360);
    stroke(blue1);
    arc(width / 2, height / 2, min(Ripplex4, 250), min(Ripplex4, 250), 180, 270);
    stroke(green1);
    arc(width / 2, height / 2, min(Ripplex4, 250), min(Ripplex4, 250), 90, 180);
    stroke(red1);
    arc(width / 2, height / 2, min(Ripplex4, 250), min(Ripplex4, 250), 0, 90);
    Ripplex4 = Ripplex4 + 20;

    strokeWeight(4); // Ripple 4
    stroke(yellow1);
    arc(width / 2, height / 2, min(Ripplex2, 250), min(Ripplex2, 250), 270, 360);
    stroke(blue1);
    arc(width / 2, height / 2, min(Ripplex2, 250), min(Ripplex2, 250), 180, 270);
    stroke(green1);
    arc(width / 2, height / 2, min(Ripplex2, 250), min(Ripplex2, 250), 90, 180);
    stroke(red1);
    arc(width / 2, height / 2, min(Ripplex2, 250), min(Ripplex2, 250), 0, 90);

    // 3. ALL ARCS ROTATING

    insidecolor = insidecolor + 10;
    if (insidecolor > 900) {  // used as a time function so that start of animation waits till ripples are completed

      // Quandrant 1
      stroke(yellow1);
      strokeWeight(30);
      arc(300, 300, min(r, r1), min(r, r1), start1, end1);
      start1 = start1 + 10;
      end1 = end1 + 10;

      // Quadrant 2
      stroke(blue1);
      arc(300, 300, min(r, r1), min(r, r1), start2, end2);
      start2 = start2 + 10;
      end2 = end2 + 10;

      // Quadrant 3
      stroke(green1);
      arc(x3, y3, min(r, r1), min(r, r1), start3, end3);
      start3 = start3 + 10;
      end3 = end3 + 10;

      // Quadrant 4
      stroke(red1);
      arc(x4, y4, min(r, r1), min(r, r1), start4, end4);
      start4 = start4 + 10;
      end4 = end4 + 10;
    }

  }

}