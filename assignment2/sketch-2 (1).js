// canvas variables
var w = 30;
var h = 200;
var vel = 5;

// setup
function setup() {
  createCanvas(1200, 900);
}

// objects
function Cigarette(x, y) {
  this.x = x;
  this.y = y;
}

var c1 = new Cigarette(100, 100);
var c2 = new Cigarette(100, 600);
var c3 = new Cigarette(1200 - w - 100, 600);
var c4 = new Cigarette(1200 - w - 100, 100);
var boxY = -800;

// make everything move
function draw() {
  background('hotpink');
  noStroke();

  // cigarettes
  fill('white')
  rect(c1.x, c1.y, w, h)
  rect(c2.x, c2.y, w, h)
  rect(c3.x, c3.y, w, h)
  rect(c4.x, c4.y, w, h)

  fill('gold')
  rect(c1.x, c1.y, w, h / 3)
  rect(c2.x, c2.y, w, h / 3)
  rect(c3.x, c3.y, w, h / 3)
  rect(c4.x, c4.y, w, h / 3)

  fill('firebrick')
  rect(c1.x, c1.y + h, w, h / 20)
  rect(c2.x, c2.y + h, w, h / 20)
  rect(c3.x, c3.y + h, w, h / 20)
  rect(c4.x, c4.y + h, w, h / 20)

  // package
  fill('cornsilk');
  rect(width / 2 - w * 4, height / 2, w * 9, w * 11);
  fill('firebrick')
  triangle(width / 2 - w * 4, height / 2, width / 2 - w * 4, height / 2 + 100, width / 2 + w / 2, height / 2);
  triangle(width / 2 + w * 5, height / 2, width / 2 + w * 5, height / 2 + 100, width / 2 + w / 2, height / 2);
  rect(width / 2 - w * 4, height / 2 + 300, w * 9, 10);

  // top of package
  rect(width / 2 - w * 4, boxY, w * 9, w * 3);

  // text
  fill('black');
  textSize(37);
  textFont('CourierNew');
  text("Smoking kills", width / 2 - w * 3, height / 2 + 275);

  // movement logic
  if (boxY < height / 2 - 100) {
    boxY += vel / 2
  } else {
    noLoop()
  }

  if (c1.y == 100 && c1.x < width / 2 - w) {
    c1.x += vel
  } else if (c1.x == width / 2 - w && c1.y < height / 2 - 100) {
    c1.y += vel
  } else {
    c1.y = height / 2 - 100
  }

  if (c2.y > 100 && c2.x <= 100) {
    c2.y -= vel
  } else if (c2.y == 100 && c2.x < width / 2 - 3 * w) {
    c2.x += vel
  } else if (c2.x == width / 2 - 3 * w && c2.y < height / 2 - 100) {
    c2.y += vel
  } else {
    c2.y = height / 2 - 100
  }

  if (c3.y > 100 && c3.x >= width - 200) {
    c3.y -= vel
  } else if (c3.y == 100 && c3.x > width / 2 + 3 * w) {
    c3.x -= vel
  } else if (c3.x == width / 2 + 3 * w && c3.y < height / 2 - 100) {
    c3.y += vel
  } else {
    c3.y = height / 2 - 100
  }

  if (c4.y == 100 && c4.x > width / 2 + w) {
    c4.x -= vel
  } else if (c4.x == width / 2 + w && c4.y < height / 2 - 100) {
    c4.y += vel
  } else {
    c4.y = height / 2 - 100
  }
}