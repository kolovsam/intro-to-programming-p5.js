var snowColor = 'white';
var branchWeight = 5;

function setup() {
  createCanvas(1000, 1000);
  background(153, 198, 233);
}

function draw() {}

function drawSnow(x, y, snowSize) {

  stroke(snowColor);
  strokeWeight(branchWeight);
  line(x, y, x, y + snowSize);

  line(x, y, x, y - snowSize);

  line(x, y, x + snowSize * 1.0, y + snowSize * 0.7);

  line(x, y, x + snowSize * 1.0, y - snowSize * 0.7);

  line(x, y, x - snowSize * 1.0, y + snowSize * 0.7);

  line(x, y, x - snowSize * 1.0, y - snowSize * 0.7);


}

function mouseClicked() {
  var size = random(0, width / 20);
  drawSnow(mouseX, mouseY, size);

}