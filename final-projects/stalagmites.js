//HCDE 598 Final Project
//Dec 4, 2017
//Yi Tang

// some colors 
var bgColor = (236);
var obstacleColor = 'light blue';
var txtColor = (74);
var charaColor = (236)
var charaColor = 'pink';

// some text 
var titleMsg = "Game";
var continueMsg = "Press Any Key to Start";
var instMsg = "Move Up = Up Arrow";
var restartMsg = "Press R to Restart";
var deadMsg = "Game Over!";

// coordinates of the where the title of the screen will be drawn
var titleX = 85;
var titleY = 250;

// coordinates of the where the continue message will be drawn
var continueX;
var continueY;

// font sizes for various kinds of text
var titleTextSize = 40;
var promptTextSize = 26;
var instTextSize = 15;

// this tracks which page is currently showing
var pageNum = 0;

// character details
var charaX = 250;
var charaY = 150;
var charaSize = 100;
var charaSize2 = 50;

// obstacle details
var obstacleNumber = 100;
var xOrigin = 400;
var yOrigin = 0;
var obstacleWidth = 50;
var obstacleGap = obstacleWidth * 2.2;
var obstacleHeight = new Array(obstacleNumber);

function setup() {
  createCanvas(500, 500);
  // offset the messages
  continueX = width / 2;
  continueY = height - 200;
  for (i = 0; i < obstacleNumber; i++) {
    var randomHeight = random(50, 450);
    obstacleHeight[i] = randomHeight;
  }
}

function draw() {
  // erase the canvas every time through the draw routine
  background(bgColor);
  textSize(18);
  strokeWeight(1);
  fill(txtColor);
  text(pageNum, 480, 490);
  // title
  textAlign(CENTER, CENTER);
  textSize(titleTextSize);
  text(titleMsg, continueX, continueY);
  // continue instruction
  textAlign(CENTER, CENTER);
  textSize(promptTextSize);
  text(continueMsg, continueX, continueY + 50);
  // play instruction
  textAlign(CENTER, CENTER);
  textSize(instTextSize);
  text(instMsg, continueX, continueY + 100);

  //draw character
  drawChara(charaColor, charaX, charaY, charaSize);

  if (pageNum == 1) {
    drawPage1();

  } else if (pageNum == 2) {
    drawPage2();
  }
  //noLoop();
}


function drawPage1() {
  background(bgColor);
  drawChara(charaColor, charaX, charaY, charaSize2);
  charaY = charaY + 10;
  //press up arrow to move the character
  if (keyIsDown(UP_ARROW)) {
    charaY = charaY - 20;
  }
  //draw obstacles
  frameRate(20);
  for (i = 0; i < obstacleNumber; i++) {
    drawObstacle(xOrigin, yOrigin, obstacleWidth, obstacleHeight[i],
      obstacleGap, obstacleNumber, obstacleColor);
  }
  xOrigin = xOrigin - 8;
}

function drawPage2() {
  // erase the canvas every time through the draw routine
  background(bgColor);

  // just for debugging, write the page number near the top left
  textSize(18);
  strokeWeight(1);
  fill(txtColor);
  text(pageNum, 480, 490);
  //title
  textAlign(CENTER, CENTER);
  textSize(titleTextSize);
  text(deadMsg, continueX, continueY);
  //continue instruction
  textAlign(CENTER, CENTER);
  textSize(promptTextSize);
  text(restartMsg, continueX, continueY + 50);
  //show score
  textAlign(CENTER, CENTER);
  textSize(instTextSize);
  text(instMsg, continueX, continueY + 100);
  //draw character
  drawChara(charaColor, charaX, 150, charaSize);
}

//draw the circle
function drawChara(charaColor, x, y, size) {
  noStroke();
  fill(charaColor);
  ellipse(x, y, size);
}

function drawObstacle(x, y, oWidth, oHeight, gap, number, oColor) {
  noStroke();
  fill(oColor);
  var xCorner = x + i * gap
  rect(xCorner, y, oWidth, oHeight);
//detect collision
  if ((xCorner <= charaX + 0.5 * charaSize2) &&
    (charaX - 0.5 * charaSize2 <= xCorner + obstacleWidth) &&
    (charaY - 0.5 * charaSize2 <= oHeight)/* &&
    (500 <= charaY + 0.5 * charaSize2)*/) {
    pageNum = pageNum + 1;
    print(" game over ");
  }
}

// press any key to start
function keyPressed() {
  if (pageNum < 1) {
    pageNum = pageNum + 1;
  }
}
//press r to go to page 1  
  function keyTyped() {
  if (key === 'r') {
       pageNum = pageNum - 1;
  }
}