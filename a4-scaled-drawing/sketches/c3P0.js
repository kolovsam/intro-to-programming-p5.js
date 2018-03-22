var headColor = 'gold';
var eyeColor = 'yellow';
var mouthColor = 'black';
var pupilColor = 'orange';

function setup() {
  createCanvas(700, 700);
  background('black');
}

function draw() {}

function draw3PO(x, y, circleSize) {
  strokeWeight(2);
  fill(headColor);
  ellipse(x, y, circleSize);
  fill(eyeColor);
  ellipse(x - (circleSize * 0.2), y - (circleSize * 0.125), circleSize * 0.375);
  ellipse(x + (circleSize * 0.2), y - (circleSize * 0.125), circleSize * 0.375);
  fill(pupilColor);
  ellipse(x - (circleSize * 0.2), y - (circleSize * 0.125), circleSize * 0.1);
  ellipse(x + (circleSize * 0.2), y - (circleSize * 0.125), circleSize * 0.1);
  fill(mouthColor);
  rect(x - (circleSize * 0.08), y + (circleSize * 0.3), circleSize * 0.15, circleSize * 0.05);

}

function mouseClicked() {
  var size = random(10, 250);
  draw3PO(mouseX, mouseY, size);
}