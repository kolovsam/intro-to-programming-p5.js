function setup() {
  createCanvas(400, 400);
}

var y = 100
var z = 100

function draw() {
  background(220);

  //lettuce
  beginShape();
  stroke('#a0cf52');
  strokeWeight(10);
  noFill();
  vertex(100, y - 130);
  vertex(150, y - 140);
  vertex(200, y - 130);
  vertex(250, y - 140);
  vertex(300, y - 130);
  endShape();

  //bun
  stroke('#ecb573');
  strokeWeight(40);
  line(100, y, 300, y);

  //tomato
  stroke('#cc4b37');
  strokeWeight(10);
  line(100, y - 120, 300, y - 120)

  //burger
  stroke('#72482f');
  strokeWeight(30);
  line(100, y - 100, 300, y - 100);

  //bun
  stroke('#ecb573');
  strokeWeight(40);
  line(100, z - 200, 300, z - 200);

  if (y < 300) {
    y = y + 5
  } //speed

  if (z < 300) {
    z = z + 1
  } //speed

}