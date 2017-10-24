//Elizabeth Quepons
//HCDE 598A
//Assignment 2: Variables & Data
//Mickey & Friends

function setup() {
  createCanvas(515, 500);

}

var xCoord = 35;
var xCoord1 = 470;
var xCoord2 = 14;
var xCoord3 = 54;
var xCoord4 = 450;
var xCoord5 = 490;
var xCoord6 = 30;
var xCoord7 = 10;
var xCoord8 = 50;
var xCoord9 = 480;
var xCoord10 = 497;
var xCoord11 = 463;
var yCoord = 35;
var yCoord1 = 470;
var yCoord2 = 18;
var yCoord3 = 453;
rad = 33
rad1 = 22
frameRate(10);

function draw() {
  background('gray');
  fill('black')
  noStroke();


  //Character 1 : Mickey
  ellipse(xCoord, yCoord, rad, rad);
  fill(242,5,5);
  ellipse(xCoord2, yCoord2, rad1, rad1);
  fill(249,215,11);
  ellipse(xCoord3, yCoord2, rad1, rad1);

  //Character 2: Minnie
  fill ('black');
  ellipse(xCoord1, yCoord, rad, rad);
  fill (252,2,15);
  ellipse(xCoord4, yCoord2, rad1, rad1);
  fill ('white');
  ellipse(xCoord5, yCoord2, rad1, rad1);

  //Character 3: Donald
  fill ('white');
  ellipse(xCoord6, yCoord1, rad, rad);
  fill ('royalblue');
  ellipse(xCoord7, yCoord3, rad1, rad1);
  fill ('orange');
  ellipse(xCoord8, yCoord3, rad1, rad1);

  //Character 4: Pluto
  fill (255, 186, 20);
  ellipse(xCoord9, yCoord1, rad, rad);
  fill (124, 168, 89);
  ellipse(xCoord10, yCoord3, rad1, rad1);
  fill (124, 168, 89);
  ellipse(xCoord11, yCoord3, rad1, rad1);
  
  //Character Movement

  xCoord = xCoord + 1;
  if (xCoord > 100) {
    xCoord = 100;
  }

  xCoord1 = xCoord1 - 1;
  if (xCoord1 < 400) {
    xCoord1 = 400;
  }

  xCoord2 = xCoord2 + 1;
  if (xCoord2 > 80) {
    xCoord2 = 80;
  }

  xCoord3 = xCoord3 + 1;
  if (xCoord3 > 120) {
    xCoord3 = 120;
  }

  xCoord4 = xCoord4 - 1;
  if (xCoord4 < 380) {
    xCoord4 = 380;
  }

  xCoord5 = xCoord5 - 1;
  if (xCoord5 < 421) {
    xCoord5 = 421;
  }

  xCoord6 = xCoord6 + 1;
  if (xCoord6 > 185) {
    xCoord6 = 185;
  }

  xCoord7 = xCoord7 + 1;
  if (xCoord7 > 165) {
    xCoord7 = 165;
  }

  xCoord8 = xCoord8 + 1;
  if (xCoord8 > 205) {
    xCoord8 = 205;
  }

  xCoord9 = xCoord9 - 1;
  if (xCoord9 < 300) {
    xCoord9 = 300;
  }

  xCoord10 = xCoord10 - 1;
  if (xCoord10 < 320) {
    xCoord10 = 320;
  }

  xCoord11 = xCoord11 - 1;
  if (xCoord11 < 280) {
    xCoord11 = 280;
  }

  yCoord = yCoord + 1
  if (yCoord > 250) {
    yCoord = 250;
  }

  yCoord1 = yCoord1 - 1;
  if (yCoord1 < 250) {

    yCoord1 = 250;
  }

  yCoord2 = yCoord2 + 1;
  if (yCoord2 > 235) {
    yCoord2 = 235;
  }

  yCoord3 = yCoord3 - 1;
  if (yCoord3 < 235) {
    yCoord3 = 235;
  }


}