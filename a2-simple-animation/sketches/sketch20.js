function setup() {
  createCanvas(600, 600);
}

var myColor = 0;
var theRad = 100;
var xCoord = 75;
var yCoord = 100;
var xOrange = xCoord;
var yOrange = yCoord;
var xPurple = xCoord + 450;
var yPurple = yCoord;
var xBlack = xCoord;
var yBlack = yCoord + 400;
var xGreen = xCoord + 450;
var yGreen = yCoord + 400;

function draw() {
  background(70, 62, 62);
  frameRate(60);

  //orange circle 
  fill(246, 144, 11);
  ellipse(xOrange, yOrange, theRad);

  //purple circle
  fill(116, 4, 202);
  ellipse(xPurple, yPurple, theRad);

  //black circle
  fill(myColor);
  ellipse(xBlack, yBlack, theRad);

  //green circle
  fill(6, 131, 18);
  ellipse(xGreen, yGreen, theRad);


  //orange circle moves to center 
  xOrange = xOrange + 1;
  yOrange = yOrange + 1;
  if (xOrange > 220) {
    xOrange = 220
    if (yOrange > 300) {
      yOrange = 300
//eyes
      fill(myColor);
      triangle(200, 265, 190, 290, 210, 290);
      fill(myColor);
      triangle(250, 265, 240, 290, 260, 290);

      //nose
      fill(myColor);
      triangle(220, 290, 230, 305, 210, 305);

      //mouth
      arc(215, 315, 40, 40, QUARTER_PI, PI + QUARTER_PI);
    }

  }

  //black circle moves to center
  yBlack = yBlack - 1;
  if (yBlack < 300) {
    yBlack = 300;
    //face appears on black circle
    //eyes
fill(255, 255, 255)
    ellipse(100, 285, 15, 15);
    ellipse(50, 285, 15, 15);

    //mouth
    ellipse(75, 320, 25, 30);


  }

  //purple circle moves to center
  xPurple = xPurple - 1;
  yPurple = yPurple + 1;
  if (xPurple > 300) {
    xPurple = 380
    if (yPurple > 300) {
      yPurple = 300;
      //faces appears on purple circle

      //eyes
      fill(255, 255, 255)
      ellipse(360, 300, 15, 15);
      ellipse(400, 300, 15, 15);

      //mouth
      fill(255, 255, 255)
      triangle(375, 325, 370, 315, 380, 315);
      triangle(385, 325, 380, 315, 390, 315);
    }

  }

  //green circle moves to center
  yGreen = yGreen - 1;
  if (yGreen < 300) {
    yGreen = 300;
//face appears on green circle
//eyes
    fill(myColor)
    rect(497, 285, 15, 15);
    rect(540, 285, 15, 15);

    //mouth
    triangle(525, 340, 510, 310, 540, 310);
  }

}