function setup() {
  createCanvas(500, 500);
  frameRate(60);
}

var x = 0;
var y = 0;

var x2 = 500;
var y2 = 0;

var x3 = 500;
var y3 = 500;

var x4 = 0;
var y4 = 500;

var d = 90;
var h = 90;

function draw() {

  y = y + 1;
  x = x + 1;

  y2 = y2 + 1;
  x2 = x2 - 1;

  y3 = y3 - 1;
  x3 = x3 - 1;

  y4 = y4 - 1;
  x4 = x4 + 1;

  background(204);
  fill(0);


  //PINK KIRBY//
  fill(224, 0, 91);
  //feet//
  ellipse(x - 20, y + 40, d - 50, h - 50);
  ellipse(x + 20, y + 40, d - 50, h - 50);
  //hands//
  fill(243, 165, 170);
  ellipse(x - 35, y, d - 50, h - 50);
  ellipse(x + 35, y, d - 50, h - 50);
  //body//
  ellipse(x, y, d, h);
  //eyes//
  fill("black");
  ellipse(x - 15, y - 10, d - 70, h - 60);
  ellipse(x + 15, y - 10, d - 70, h - 60);
  fill("white");
  ellipse(x - 15, y - 15, d - 70, h - 70);
  ellipse(x + 15, y - 15, d - 70, h - 70);
  //mouth//
  fill("black");
  ellipse(x, y+20, d-60, h-80);

  //BlUE KIRBY//
  fill(224, 0, 91);
  //feet//
  ellipse(x2 - 20, y2 + 40, d - 50, h - 50);
  ellipse(x2 + 20, y2 + 40, d - 50, h - 50);
  //hands//
  fill("blue");
  ellipse(x2 - 35, y2, d - 50, h - 50);
  ellipse(x2 + 35, y2, d - 50, h - 50);
  //body//
  ellipse(x2, y2, d, h);
  //eyes//
  fill("black");
  ellipse(x2 - 15, y2 - 10, d - 70, h - 60);
  ellipse(x2 + 15, y2 - 10, d - 70, h - 60);
  fill("white");
  ellipse(x2 - 15, y2 - 15, d - 70, h - 70);
  ellipse(x2 + 15, y2 - 15, d - 70, h - 70);
  //mouth//
  fill("black");
  ellipse(x2, y2+20, d-60, h-80);

  //GREEN KIRBY//
  fill(224, 0, 91);
  //feet//
  ellipse(x3 - 20, y3 + 40, d - 50, h - 50);
  ellipse(x3 + 20, y3 + 40, d - 50, h - 50);
  //hands//
  fill("green");
  ellipse(x3 - 35, y3, d - 50, h - 50);
  ellipse(x3 + 35, y3, d - 50, h - 50);
  //body//
  ellipse(x3, y3, d, h);
  //eyes//
  fill("black");
  ellipse(x3 - 15, y3 - 10, d - 70, h - 60);
  ellipse(x3 + 15, y3 - 10, d - 70, h - 60);
  fill("white");
  ellipse(x3 - 15, y3 - 15, d - 70, h - 70);
  ellipse(x3 + 15, y3 - 15, d - 70, h - 70);
  //mouth//
  fill("black");
  ellipse(x3, y3+20, d-60, h-80);

  //YELLOW KIRBY//
  fill(224, 0, 91);
  //feet//
  ellipse(x4 - 20, y4 + 40, d - 50, h - 50);
  ellipse(x4 + 20, y4 + 40, d - 50, h - 50);
  //hands//
  fill("yellow");
  ellipse(x4 - 35, y4, d - 50, h - 50);
  ellipse(x4 + 35, y4, d - 50, h - 50);
  //body//
  ellipse(x4, y4, d, h);
  //eyes//
  fill(0);
  ellipse(x4 - 15, y4 - 10, d - 70, h - 60);
  ellipse(x4 + 15, y4 - 10, d - 70, h - 60);
  fill("white");
  ellipse(x4 - 15, y4 - 15, d - 70, h - 70);
  ellipse(x4 + 15, y4 - 15, d - 70, h - 70);
  //mouth//
  fill("black");
  ellipse(x4, y4+20, d-60, h-80);

  if (x > 250, y > 250) {
    x = 100;
    y = 250;
  }

  if (x2 < 250, y2 > 250) {
    x2 = 200;
    y2 = 250;
  }

  if (x3 < 250, y3 < 250) {
    x3 = 300;
    y3 = 250;
  }

  if (x4 > 250, y4 < 250) {
    x4 = 400;
    y4 = 250;
  }
}