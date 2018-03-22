function setup() {
  createCanvas(1000, 1000);
	background(220);
}

function draw() {
  textSize(30);
text("Click to see cute cats!", 20, 30);
}


function mousePressed() {
  var size = random(0.1, 1.0);
  cat(mouseX, mouseY, size);
}

function cat(x, y, size) {
	translate(x-200*size, y-200*size);
  scale(size);
  stroke(89, 18, 0);
  strokeWeight(20);
  fill(207, 200, 171);
  ellipse(256, 256, 350, 300);
  triangle(48, 74, 137, 128, 76, 230);
  triangle(462, 74, 374, 128, 436, 230)

  fill(255, 231, 109);
  ellipse(163, 233, 87, 87);
  line(163, 218, 163, 248);

  ellipse(348, 233, 87, 87);
  line(348, 218, 348, 248);

  strokeWeight(5);
  fill(255, 201, 194);
  triangle(240, 298, 270, 298, 255, 320);
  line(255, 320, 255, 350)
  line(255, 350, 245, 360);
  line(255, 350, 265, 360);
}
