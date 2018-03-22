//Elizabeth Quepons
//HCDE 598A
//Assignment 4

// Draw settings
var bgColor = 'lightblue';
var lineColor = 'white';
var lineWeight = 3;

function setup() {
  createCanvas(500, 500);
  background(bgColor);

}

function draw() {}

function drawCharacter(x, y, sqrSize) {

  //Drawing settings
  stroke(lineColor);
  strokeWeight(lineWeight);
  noFill();

  //Drawing
  rect(x - sqrSize, y - sqrSize, sqrSize * 2, sqrSize * 2);
  ellipse(x, y, sqrSize * 2.9, sqrSize * 2.9);
  line(x, y, x + sqrSize, y);
  line(x, y, x - sqrSize, y);
  line(x, y, x, y + sqrSize);
  line(x, y, x, y - sqrSize);
  line(x - sqrSize, y - sqrSize, x + sqrSize * 1,
    y + sqrSize * 1);
  line(x + sqrSize, y - sqrSize, x - sqrSize * 1,
    y + sqrSize * 1);


}

function keyPressed() {
  var size = random(0, width / 10);
  drawCharacter(mouseX, mouseY, size);
}