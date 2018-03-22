//background colors 
var bgColor = 'aqua';
var txtColor = 'red';
var buttonColor = 'orange';
// some text strings we use throughout the program
var surpriseMsg = "Do you like surprises?";
var answerMsg = "Select yes or no below...";
var yesbuttonText = "Yes";
var nobuttonText = "No";
var noMsg = "Brace yourself for balloons!";
var continueMSG = "Feel prepared? Press any key to continue";
// coordinates of the where the title of the screen will be drawn
var titleX = 100;
var titleY = 200;
// coordinates of the where the continue message will be drawn
var continueX;
var continueY;

var box1X;
var box1Y;
var box2X;
var box2Y;
// font sizes for various kinds of text
var titleTextSize = 48;
var promptTextSize = 24;
var buttonTextSize = 36;
// this tracks which page we are currently showing
var pageNum = 0;

var MouseClickedAtX;
var mouseClickedAtY;
//balloons
var theRad = 100;
var xCoord = 100;
var yCoord = 400;
var xballoon = xCoord;
var yballoon = yCoord;
var xline = xCoord;
var yline = yCoord;

function setup() {

  createCanvas(809, 500);
  continueX = width / 2;
  continueY = height - 200;
  box1X = continueX;
  box1Y = continueY + 100;
  box2X = continueX + 200;
  box2Y = continueY + 100;
}

function draw() {
  background(bgColor);
  textSize(18);
  strokeWeight(1);
  fill(txtColor);
  text(pageNum, 100, 100);
  if (pageNum == 1) {
    drawPage1();
  } else if (pageNum == 2) {
    drawPage2();
  } else if (pageNum == 3) {
    drawPage3();
  } else {}
}
// draw page 1
function drawPage1() {
  // write welcome message
  textSize(titleTextSize);
  fill(txtColor);
  text(surpriseMsg, titleX, titleY);
  // issue prompt to continue
  textSize(promptTextSize);
  fill(txtColor);
  text(answerMsg, continueX, continueY);

  fill(bgColor);
  stroke(buttonColor);
  strokeWeight(5);

  // yes and no boxes
  rect(box1X - 30, box1Y - 50, textWidth(yesbuttonText) + 90, 80, 190);
  rect(box2X - 40, box2Y - 50, textWidth(nobuttonText) + 90, 80, 190);

  // write the yes text inside it
  textSize(buttonTextSize);
  strokeWeight(1);
  fill(buttonColor);
  text(yesbuttonText, box1X, box1Y);

  // write the no text inside it
  textSize(buttonTextSize);
  strokeWeight(1);
  fill(buttonColor);
  text(nobuttonText, box2X, box2Y);
  if (isWithin(MouseClickedAtX, MouseClickedAtY,
      box1X, box1X + textWidth(yesbuttonText) + 10,
      box1Y - 50, box1Y - 50 + 75)) {
    pageNum = pageNum + 2;
  } else if (isWithin(MouseClickedAtX + 100, MouseClickedAtY,
      box2X, box2X + textWidth(nobuttonText) + 100,
      box2Y - 40, box2Y - 50 + 75)) {
    // go to the next screen
    pageNum = pageNum + 1;
  }
  // reset these for the next time through draw()
  MouseClickedAtX = 0;
  mouseClickedAtY = 0;
}
// draw page 2
function drawPage2() {
  // write ready message
  textSize(titleTextSize);
  fill(txtColor);
  text(noMsg, titleX, titleY);
  // issue prompt to continue
  textSize(promptTextSize);
  fill(txtColor);
  text(continueMSG, continueX - 100, continueY);
  // the keyPressed() function below controls advancing to the next page
}
// draw page 3
function drawPage3() 

  // balloons
 {
  //orange balloon
  fill(246, 144, 11);
stroke (1)
  ellipse(xballoon, yballoon, theRad);
  line(xline, yline + 50, xline, yline + 100);


  //purple balloon
  fill(116, 4, 202);
  ellipse(xballoon + 150, yballoon, theRad);
  line(xline + 150, yline + 50, xline + 150, yline + 100);

  //pink balloon
  fill(251, 51, 153);
  ellipse(xballoon + 300, yballoon, theRad);
  line(xline + 300, yline + 50, xline + 300, yline + 100);

  //green balloon
  fill(6, 131, 18);
  ellipse(xballoon + 450, yballoon, theRad);
  line(xline + 450, yline + 50, xline + 450, yline + 100);

  //red balloon
  fill(251, 51, 51);
  ellipse(xballoon + 600, yballoon, theRad);
  line(xline + 600, yline + 50, xline + 600, yline + 100);

  //ballooons floating away
  yballoon = yballoon - 1;
  yline = yline - 1;
}

function isWithin(pointX, pointY, rectX1, rectX2, rectY1, rectY2) {

  if ((pointX > rectX1) &&
    (pointX < rectX2) &&
    (pointY > rectY1) &&
    (pointY < rectY2)) {
    return true;
  } else {
    return false;
  }
}

function keyPressed() {

  if (pageNum <= 0) {
    pageNum = pageNum + 1;
  } else if (pageNum = 2)
    pageNum = pageNum + 1;
}

function mouseClicked() {
  MouseClickedAtX = mouseX;
  MouseClickedAtY = mouseY;
}