function setup() {
  createCanvas(600, 600);
}

var brown = [139, 69, 19];
var eyeBlue = [135, 206, 250];
var patrickpink = [213, 100, 70];
var squidblue = [175, 238, 238];
var xsponge = 20;
var ysponge = 20;
var xstar = 50;
var ystar = 550;
var squidx = 540;
var squidy = 540;
var x1 = 530;
var y1 = 20;
var x2 = 490;
var y2 = 100;
var x3 = 570;
var y3 = 100;

function draw() {
  background('white');
  
  //Spongebob
  fill('yellow');
  rect(xsponge, ysponge, 60, 80);
  fill(brown);
  rect(20, 80, 60, 30);
  fill('white');
  ellipse(41, 40, 20);
  ellipse(59, 40, 20);
  fill(eyeBlue);
  ellipse(41, 40, 10);
  ellipse(59, 40, 10);
  fill('black');
  ellipse(41, 40, 5);
  ellipse(59, 40, 5);
  noFill();
  bezier(47, 55, 75, 53, 75, 62, 47, 60);
  bezier(30, 63, 45, 68, 55, 68, 70, 63);
  fill('white');
  rect(43, 67, 6, 6);
  rect(52, 67, 6, 6);
  xsponge = xsponge + 1;
  ysponge = ysponge + 1;
  if (xsponge > 200) {
    xsponge = 200;
  }
  if (ysponge > 200) {
    ysponge = 200;
  }

  //Patrick
  function star(x, y, radius1, radius2, npoints) {
    var angle = TWO_PI / npoints;
    var halfAngle = angle / 2.0;
    beginShape();
    for (var a = 0; a < TWO_PI; a += angle) {
      var sx = x + cos(a) * radius2;
      var sy = y + sin(a) * radius2;
      vertex(sx, sy);
      sx = x + cos(a + halfAngle) * radius1;
      sy = y + sin(a + halfAngle) * radius1;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }
  fill(patrickpink);
  star(xstar, ystar, 30, 50, 5);
  xstar = xstar + 1;
  ystar = ystar - 1;
  if (xstar > 225) {
    xstar = 225;
  }
  if (ystar < 350) {
    ystar = 350;
  }

  //Squidward
  fill(squidblue);
  ellipse(squidx, squidy, 85, 65);
  squidx = squidx - 1;
  squidy = squidy - 1;
  if (squidx < 335) {
    squidx = 335;
  }
  if (squidy < 350) {
    squidy = 350;
  }

  // Mr. Krabs
  fill('red')
  triangle(x1,y1,x2,y2,x3,y3);
  x1 = x1 - 1;
  y1 = y1 + 1;
  x2 = x2 - 1;
  y2 = y2 + 1;
  x3 = x3 - 1;
  y3 = y3 + 1;
  if (x1 < 335) {
    x1 = 335;
    x2 = 295;
    x3 = 375;
  }
  if (y1 > 200) {
    y1 = 200;
    y2 = 280;
    y3 = 280;
  }
  
}