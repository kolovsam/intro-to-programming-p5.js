var LtBlue = '#42A5F5';
var Blue = '#1E88E5';
var Yello = '#FFEE58';
var fucshia = '#c51162';

function setup() {

}

function draw() {

}

function drawBird(x, size) {
  createCanvas(500, 500);
  background(fucshia);
  scale(size);
  noStroke();
  fill(Yello);
  beginShape();
  vertex(x, x);
  vertex(x + 10, x - 10);
  vertex(x + 40, x - 10);
  vertex(x + 40, x + 40);
  vertex(x, x + 80);
  vertex(x, x);
  endShape(CLOSE);
  fill(LtBlue);
  // beak
  triangle(x - 20, x + 20, x, x, x, x + 20);
  // body
  quad(x, x + 80, x + 40, x + 40, x + 100, x + 40, x + 60, x + 80);
  // wing
  fill(Blue);

  triangle(x + 40, x + 40, x + 100, x + 40, x + 70, x + 70);
  // // feet
  // // right
  triangle(x + 10, x + 80, x + 30, x + 80, x + 20, x + 90);
  // // left
  triangle(x + 40, x + 80, x + 60, x + 80, x + 50, x + 90);
  // // eye
  ellipse(x + 15, x + 5, 10, 10);

  // feather details
  strokeWeight(2);
  stroke('#ffffff');
  line(x + 50, x + 40, x + 65, x + 55);
  line(x + 60, x + 40, x + 70, x + 50);


}

function mousePressed() {
  drawBird(random(10, width * 1.5), random(0, 1.5));
}