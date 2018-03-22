var cx = 70;
var cy = 70;
var cspeed;
var lx = 550;
var ly = 300;
var lxs = 550;
var lys = 380;
var sx = 500;
var sy = 35;
var tx = 70;
var ty = 335;
var angle = 0;

function setup() {
  createCanvas(600, 400);
  frameRate(30);
}

function draw() {
  background(240);
  //circle
  cspeed = millis() / 500;
  mycircle(cx, cy);
  if (cx < 200 && frameCount > 30) {
    cx = cx + cspeed;
    cy = cy + cspeed;
  }
  //line
  myline(lx, ly, lxs, lys);
  if (ly > 160 && frameCount > 10) {
    lx = lx - 3;
    ly = ly - 3;
  }
  if (ly <= 160 && lys > 240) {
    lxs = lxs - 4;
    lys = lys - 4;
  }
  //sqaure
  mysquare(sx, sy);
  if (sy < 165 && frameCount < 50) {
    sx = sx - 1;
    sy = sy + 2 / 3;
  }
  if (sy < 165 && frameCount > 50) {
    sx = sx - 3;
    sy = sy + 2;
  }
  //triangle
  if (ty > 200) {
    tx = tx + 3;
    ty = ty - 2;
  }
  push();
  translate(tx, ty);
  if (ty > 200) {
    rotate(radians(frameCount * 5.3 % 360));
  }
  mytriangle(0, -35);
  pop();
}

function mycircle(x, y) {
  strokeWeight(4);
  stroke(209, 38, 23);
  fill(244, 114, 102);
  ellipse(x, y, 80, 80);
  fill(255);
  stroke(50);
  ellipse(x - 10, y - 5, 12, 20);
  ellipse(x + 10, y - 5, 12, 20);
  fill(50);
  ellipse(x - 8, y - 5, 3, 8);
  ellipse(x + 12, y - 5, 3, 8);
}

function myline(x, y, xs, ys) {
  stroke(91, 43, 6);
  line(x, y, xs, ys);
  fill(255);
  stroke(50);
  ellipse(x - 12, y + 20, 12, 20);
  ellipse(x + 12, y + 20, 12, 20);
  fill(50);
  ellipse(x - 12, y + 20, 3, 7);
  ellipse(x + 12, y + 20, 3, 7);
}

function mysquare(x, y) {
  stroke(9, 102, 39);
  fill(141, 232, 171);
  rect(x, y, 70, 70);
  fill(255);
  stroke(50);
  ellipse(x + 23, y + 25, 12, 20);
  ellipse(x + 45, y + 25, 12, 20);
  fill(50);
  ellipse(x + 21, y + 25, 3, 7);
  ellipse(x + 43, y + 25, 3, 7);
  noFill();
  stroke(141, 232, 171);
  strokeWeight(11);
  line(x + 15, y + 18, x + 50, y + 18);
}

function mytriangle(x, y) {
  strokeWeight(4);
  stroke(131, 12, 142);
  fill(242, 167, 249);
  triangle(x, y, x - 40, y + 70, x + 40, y + 70);
  stroke(50);
  noFill();
  curve(x - 5, y - 70, x - 23, y + 30, x - 9, y + 30, x - 25, y - 70);
  curve(x + 20, y - 70, x + 7, y + 30, x + 21, y + 30, x, y - 70);
}