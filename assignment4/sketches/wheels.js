var bgColor = 'white';
var col = {
  r: 50,
  g: 0,
  b: 0
}
var strokethickness = 3;


function setup() {
  createCanvas(1000, 1000);
  background(bgColor);
}


function draw() {}

function drawwheel(x, y, wheelsize) {

  strokeWeight(strokethickness);
  noFill();

  stroke(col.r, col.g, col.b);
  rect(x, y, wheelsize, wheelsize);

  stroke(col.r * 2, col.g, col.b);
  rect(x, y, wheelsize, -wheelsize);

  stroke(col.r * 3, col.g, col.b);
  rect(x, y, -wheelsize, -wheelsize);

  stroke(col.r * 4, col.g, col.b);
  rect(x, y, -wheelsize, wheelsize);

  stroke(col.r * 2, col.g, col.b + 50, 200);
  quad(x, y, x, y - wheelsize * 2, x + wheelsize, y - wheelsize * 3, x + wheelsize, y - wheelsize);
  quad(x, y, x, y + wheelsize * 2, x - wheelsize, y + wheelsize * 3, x - wheelsize, y + wheelsize);
  quad(x, y, x + wheelsize * 2, y, x + wheelsize * 3, y + wheelsize, x + wheelsize, y + wheelsize);
  quad(x, y, x - wheelsize * 2, y, x - wheelsize * 3, y - wheelsize, x - wheelsize, y - wheelsize);

}


function keyPressed() {
  var size = random(width/100, width/10);
  col.g = random(0, 5);
  col.b = random(0, 100);

  drawwheel(mouseX, mouseY, size);
}