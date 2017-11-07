function setup() {
  createCanvas(1000, 1000);
  frameRate(10);
  background(0);
  textSize(30);
}


function draw() {
  if (mouseIsPressed == true) {
    keyPressed();
  }
}

function drawMyChar(x, y, sc) {
  strokeWeight(2);
  stroke(0);
  fill(253, 245, 230);
  ellipse(x, y, sc / 2.5, sc);
  var magic = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
  var cfill = random(magic);
  fill(cfill);
  ellipse(x, y - sc * 0.55, sc, sc / 2);
  fill(255);
  strokeWeight(1);
  ellipse(x - sc * 0.2, y - sc * 0.5, sc * 0.1, sc * 0.1);
  ellipse(x - sc * 0.1, y - sc * 0.65, sc * 0.1, sc * 0.1);
  ellipse(x - sc * 0.23, y - sc * 0.70, sc * 0.1, sc * 0.1);
  ellipse(x + sc * 0.2, y - sc * 0.5, sc * 0.1, sc * 0.1);
  ellipse(x + sc * 0.10, y - sc * 0.65, sc * 0.1, sc * 0.1);
  ellipse(x + sc * 0.23, y - sc * 0.70, sc * 0.1, sc * 0.1);
  ellipse(x, y - sc * 0.5, sc * 0.1, sc * 0.1);
  ellipse(x - sc * 0.4, y - sc * 0.6, sc * 0.1, sc * 0.1);
  ellipse(x + sc * 0.4, y - sc * 0.6, sc * 0.1, sc * 0.1);
  strokeWeight(3);
  stroke(238, 223, 204);
  line(x, y - sc * 0.25, x, y + sc * 0.4);
  line(x - sc * 0.1, y - sc * 0.25, x, y + sc * 0.4);
  line(x+ sc * 0.1, y - sc * 0.25, x, y + sc * 0.4);
}

function keyPressed() {
  var sc = random(30, 200);
  drawMyChar(mouseX, mouseY, sc);
}