/*	Tran, Thomas	– interactive story
		10/30/17
*/

var bgColor = 'gray';
var txtColor = 'white';
var txtColor2 = 'red';
var txtColor3 = 'cyan';
var buttonColor1 = 'green';
var buttonColor2 = 'orange';
var buttonColor3 = 'cyan';

var intro = "An excerpt from 'Tubes' by Donald Hall";
var continueMsg = "Press 'y' to continue or 'n' to stop...";
var NoCont = "Thanks for playing!";
var part1 = "When I was nineteen\n\I told a thirty-\n\year-old man what a\n\ fool I had been when\n\I was seventeen.";
var part2 = "‘We were always,' he\n\said glancing down, ‘a\n\ fool two years ago.'";
var ContButtonText = "Continue?";
var DiscontButtonText = "Discontinue?";
var FinishButton = "Click here if you agree";
var Ending = "Thanks for being human!";
var End = "Thanks for sharing your time with me :))"

var titleX = 100;
var titleY = 150;

var continueX;
var continueY;

// location of drawn boxes
var box1X;
var box1Y;

// font sizes for various kinds of text
var titleTextSize = 30;
var promptTextSize = 24;
var buttonTextSize = 36;

// this tracks which page we are currently showing
var pageNum = 1;

// when the mouse is clicked, the function named mouseClicked() updates these variables
var MouseClickedAtX;
var mouseClickedAtY;


function setup() {
  createCanvas(709, 500);

  // messages and buttons location adjustment
  continueX = width / 2;
  continueY = height - 100;
  box1X = continueX;
  box1Y = continueY;
}


function draw() {

  // reset canvas every draw
  background(bgColor);

  textSize(18);
  strokeWeight(1);
  fill(txtColor);
  text(pageNum, 100, 100);

  // Controlling page movement

  if (pageNum == 1) {
    drawPage1();

  } else if (pageNum == 2) {
    drawPage2();

  } else if (pageNum == 3) {
    drawPage3();

  } else if (pageNum == 4) {
    drawPage4();

  } else if (pageNum == 5) {
    drawPage5();
  }


}


// draw page 1
function drawPage1() {

  textSize(titleTextSize);
  fill(txtColor);
  text(intro, titleX, titleY);

  textSize(promptTextSize);
  fill(txtColor2);
  text(continueMsg, continueX - 40, continueY);

}


// draw page 2
function drawPage2() {

  textSize(titleTextSize);
  fill(txtColor);
  text(part1, titleX, titleY);

  fill(bgColor);
  stroke(buttonColor1);
  strokeWeight(5);
  rect(box1X - 20, box1Y - 50, textWidth(ContButtonText) + 65, 75, 15);

  fill(bgColor)
  stroke(buttonColor3);
  strokeWeight(5);
  rect(box1X - 270, box1Y - 50, textWidth(DiscontButtonText) + 65, 75, 15);

  // write the Discontinue?//Continue? text inside it
  textSize(buttonTextSize);
  strokeWeight(1);
  fill(buttonColor1);
  text(ContButtonText, box1X, box1Y);

  textSize(buttonTextSize);
  strokeWeight(1);
  fill(buttonColor3);
  text(DiscontButtonText, box1X - 250, box1Y);

  // Continue Button click
  if (isWithin(MouseClickedAtX, MouseClickedAtY,
      box1X - 20, box1X + textWidth(ContButtonText) + 65,
      box1Y - 50, box1Y - 50 + 75)) {
    // go to the next screen
    pageNum = pageNum + 1;
  }

  //Discountinue Button Click
  if (isWithin(MouseClickedAtX, MouseClickedAtY,
      box1X - 270, box1X + textWidth(DiscontButtonText) - 240,
      box1Y - 50, box1Y - 50 + 75)) {
    // go to the next screen
    pageNum = pageNum + 3;
  }

  MouseClickedAtX = 0;
  mouseClickedAtY = 0;

}


// draw page 3
function drawPage3() {

  // write part2 of poem 
  textSize(titleTextSize);
  fill(txtColor);
  text(part2, titleX, titleY);

  // draw FinishButton box, with rounded corners (radius = 20)
  fill(bgColor);
  stroke(buttonColor2);
  strokeWeight(5);

  // the box coordinates make it surround the text with some space
  rect(box1X - 110, box1Y - 50, textWidth(FinishButton) + 85, 75, 20);

  // write the Agree? text inside it
  textSize(buttonTextSize);
  strokeWeight(1);
  fill(buttonColor2);
  text(FinishButton, box1X - 100, box1Y);

  if (isWithin(MouseClickedAtX, MouseClickedAtY,
      box1X - 110, box1X + 85 + textWidth(ContButtonText) + 65,
      box1Y - 50, box1Y - 50 + 75)) {
    // go to the next screen
    pageNum = pageNum + 1;
  }

  // reset these for the next time through draw()
  MouseClickedAtX = 0;
  mouseClickedAtY = 0;

}

// draw page 4
function drawPage4() {

  // write Ending line
  textSize(titleTextSize);
  fill(txtColor);
  text(Ending, titleX, titleY);

}

// draw page 5
function drawPage5() {

  // write End line if opt out
  textSize(titleTextSize);
  fill(txtColor);
  text(End, titleX, titleY);

}

function isWithin(pointX, pointY, rectX1, rectX2, rectY1, rectY2) {

  if ((pointX > rectX1) && // to the right of the left edge
    (pointX < rectX2) && // to the left of the right edge
    (pointY > rectY1) && // below the top edge
    (pointY < rectY2)) { // above the bottom edge
    return true;
  } else {
    return false;
  }

}


function keyTyped() {
  if (key === 'y') {
    pageNum = pageNum + 1;
  } else if (key === 'n') {
    pageNum = pageNum + 4;
  }
}


function mouseClicked() {
  MouseClickedAtX = mouseX;
  MouseClickedAtY = mouseY;
}