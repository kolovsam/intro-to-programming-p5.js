function setup() {
  createCanvas(500, 500);
  frameRate(200);
}


// stop movement of objects at center
//   if(blueX > 250){};

// coordinates as variables
var blueX = 5;
var blueY = 5;
var blueX2 = 5;
var blueY2 = 15;
var blueX3 = 5;
var blueY3 = 25;
var redX = 465;
var redY = 5;
var redX2 = 465;
var redY2 = 15;
var redX3 = 465;
var redY3 = 25;
var amberX = 465;
var amberY = 465;
var amberX2 = 465
var amberY2 = 475;
var amberX3 = 465;
var amberY3 = 485;
var greenX = 5;
var greenY = 465;
var greenX2 = 5;
var greenY2 = 475;
var greenX3 = 5;
var greenY3 = 485;

// color palette
var Magenta = '#ad1457';
var yellowLT = '#fff9c4';
var blueLT = '#e1f5fe';
var blueLT2 = '#e0f7fa';
var cyan = '#4dd0e1';
var cyanLT = '#88ffff';
var cyanDK = '#009faf';
var amber = '#ffa000';
var amberLT = '#ffd149';
var amberDK = '#c67100';
var amber2 = '#ffb300';
var greeen = '#aed581';
var greenLT = '#e1ffb1';
var greenDK = '#7da453';
var redd = '#e53935';
var redLT = '#ff6f60';
var reddDK = '#ab000d';
var bgcolor = '(22, 28,31)';
var b1 = 21;
var b2 = 28;
var b3 = 31;



function draw() {

  noStroke();
  background(b1,b2,b3);
  // fill('#37474f');
  // rect(0, 230, 500, 270);
  fill('#102027');
  rect(0, 250, 500, 250);


  //   blue
  fill(cyanLT);
  rect(blueX, blueY, 30, 10);
  fill(cyan);
  rect(blueX2, blueY2, 30, 10);
  fill(cyanDK);
  rect(blueX3, blueY3, 30, 10);

  //   red
  fill(redLT);
  rect(redX, redY, 30, 10);
  fill(redd);
  rect(redX2, redY2, 30, 10);
  fill(reddDK);
  rect(redX3, redY3, 30, 10);

  //   amber
  fill(amberLT);
  rect(amberX, amberY, 30, 10);
  fill(amber);
  rect(amberX2, amberY2, 30, 10);
  fill(amberDK);
  rect(amberX3, amberY3, 30, 10);


  //   green
  fill(greenLT);
  rect(greenX, greenY, 30, 10);
  fill(greeen);
  rect(greenX2, greenY2, 30, 10);
  fill(greenDK);
  rect(greenX3, greenY3, 30, 10);


  // conditionals!

  if (blueX, blueX2, blueX3 > 235) {
    blueX = 235;
    blueX2 = 235;
    blueX3 = 235;
    blueY = blueY + 1;
    blueY2 = blueY2 + 1;
    blueY3 = blueY3 + 1;
  }

  if (blueY > 235) {
    blueY = 235;
    blueY2 = 245;
    blueY3 = 255;
  };

  // green

  if (greenX, greenX2, greenX3 > 205) {
    greenX = 205;
    greenX2 = 205;
    greenX3 = 205;
    greenY = greenY - 1;
    greenY2 = greenY2 - 1;
    greenY3 = greenY3 - 1;
  }

  if (greenY < 235) {
    greenY = 235;
    greenY2 = 245;
    greenY3 = 255;
  };

  // amber 

  if (amberX, amberX2, amberX3 < 265) {
    amberX = 265;
    amberX2 = 265;
    amberX3 = 265;
    amberY = amberY - 1;
    amberY2 = amberY2 - 1;
    amberY3 = amberY3 - 1;
  }

  if (amberY < 235) {
    amberY = 235;
    amberY2 = 245;
    amberY3 = 255;
  }

  // red

  if (redX, redX2, redX3 < 295) {
    redX = 295;
    redX2 = 295;
    redX3 = 295;
    redY = redY + 1;
    redY2 = redY2 + 1;
    redY3 = redY3 + 1;
  }

  if (redY > 235) {
    redY = 235;
    redY2 = 245;
    redY3 = 255;
  }

  // move over and down/up
  blueX = blueX + 1;
  blueX2 = blueX2 + 1;
  blueX3 = blueX3 + 1;

  greenX = greenX + 1;
  greenX2 = greenX2 + 1;
  greenX3 = greenX3 + 1;

  amberX = amberX - 1;
  amberX2 = amberX2 - 1;
  amberX3 = amberX3 - 1;


  redX = redX - 1;
  redX2 = redX2 - 1;
  redX3 = redX3 - 1;
b1 = b1 + 1;
b2 = b2 + 1;
b3 = b3 +1;
  // if (b1, b2, b3 > 220){
  // b1 = b1/110;
  // b2 = b2/110;
  // b3 = b3/120;
  // }

}