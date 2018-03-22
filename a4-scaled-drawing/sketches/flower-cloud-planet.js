function setup() {
  createCanvas(500, 500);
  background(255);

  //make the background a 3-color gradience
  colorMode(RGB);

  from = color(255, 254, 226);
  to = color(92, 100, 142);
  inter = lerpColor(from, to, 0.5);
  noStroke();
  fill(from);
  rect(0, 300, 500, 200);
  fill(inter);
  rect(0, 150, 500, 150);
  fill(to);
  rect(0, 0, 500, 150);
}

function draw() {}

//draw the images at the mouse's location
function mouseClicked() {
  if (mouseY < 150) {
    var size1 = random(0, 2);
    planet(mouseX, mouseY, size1);
  } else if (mouseY > 150 && mouseY < 300) {
    var size2 = random(0.5, 3);
    cloud(mouseX, mouseY, size2);
  } else if (mouseY > 300) {
    var size3 = random(0, 1.5);
    flower(mouseX, mouseY, size3);
  }
}

//images as functions
function flower(x, y, scale) {
  stroke(237, 116, 140);
  strokeWeight(4 * scale);
  noFill();
  curve(x + 10 * scale, y + 10 * scale, x, y, x + 10 * scale, y + 30 * scale, x + 50 * scale, y + 30 * scale);
  fill(255, 206, 207);
  curve(x + 130 * scale, y - 30 * scale, x - 5 * scale, y - 5 * scale, x, y, x + 60 * scale, y - 130 * scale);
  curve(x + 130 * scale, y + 30 * scale, x - 5 * scale, y - 5 * scale, x, y - 10 * scale, x + 60 * scale, y + 130 * scale);
  curve(x - 60 * scale, y + 130 * scale, x, y - 10 * scale, x + 5 * scale, y - 5 * scale, x - 130 * scale, y + 30 * scale);
  curve(x - 130 * scale, y - 30 * scale, x + 5 * scale, y - 5 * scale, x, y, x - 60 * scale, y - 130 * scale);
  noFill();
  ellipse(x, y - 5 * scale, 10 * scale, 10 * scale);
}

function cloud(x, y, scale) {
  fill(240);
  noStroke();
  rect(x + 3 * scale, y - 5 * scale, 22 * scale, 5 * scale);
  stroke(79, 202, 239);
  strokeWeight(2 * scale);
  arc(x + 5 * scale, y, 10 * scale, 13 * scale, PI, PI + HALF_PI + QUARTER_PI);
  arc(x + 15 * scale, y, 20 * scale, 23 * scale, PI + QUARTER_PI, PI + HALF_PI + QUARTER_PI);
  arc(x + 25 * scale, y, 10 * scale, 13 * scale, PI + QUARTER_PI, TWO_PI);
  line(x, y, x + 30 * scale, y);
}

function planet(x, y, scale) {
  fill(200, 194, 237);
  stroke(185, 142, 242);
  strokeWeight(4 * scale);
  ellipse(x, y, 30 * scale, 30 * scale);
  stroke(138, 242, 237);
  noFill();
  curve(x + 200 * scale, y - 50 * scale, x - 20 * scale, y - 3 * scale, x + 20 * scale, y + 2 * scale, x - 180 * scale, y - 100 * scale);
  stroke(255, 240, 114);
  strokeWeight(3 * scale);
  line(x - 20 * scale, y + 15 * scale, x - 20 * scale, y + 20 * scale);
  line(x - 22 * scale, y + 17 * scale, x - 18 * scale, y + 17 * scale);
  line(x + 25 * scale, y - 20 * scale, x + 25 * scale, y - 12 * scale);
  line(x + 22 * scale, y - 16 * scale, x + 28 * scale, y - 16 * scale);
}