// Toni Saylor
// HCDE 598A
// Assignment 1
// Portrait

function setup() {
  createCanvas(400, 400);
  background(240, 248, 255);
}

function draw() {
  noStroke();

  // pot
  fill(64, 64, 64);
  quad(125, 400, 275, 400, 300, 300, 100, 300);

  // trunk
  fill(139, 69, 19);
  // bottom left, bottom right, top right, top left
  quad(175, 300, 225, 300, 220, 185, 180, 185)

  // leaves
  fill(0, 100, 0);
  beginShape();
  vertex(350, 340);
  bezierVertex(260, 180, 260, 255, 210, 255);
  bezierVertex(230, 260, 240, 205, 350, 340);
  endShape();
}