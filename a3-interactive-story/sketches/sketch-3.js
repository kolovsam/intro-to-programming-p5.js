// Width & height
var width = 800;
var height = 600;

// Page Number
var pageNum = 1;

// Colors
var bgColor = 'purple';
var textColor = 255;
var col1;
var col2;
var col3;
var col4;
var colorSelected;

// Messages to be displayed
var page1Msg = "Ready to play the color game?";
var page2Ready = "Press any key to continue!";
var page1Go = "Yes";
var page3Select = "Click to select a color!"
var page4Color = "Your selected color value is :"
var page4GoBack = "Click anywhere to go back!"


// Title location
var titleX = width / 2 - 300;
var titleY = 200;

// Boxes on first page
var box1X;
var box1Y;
var goX;
var goY;
var page1NoX = width / 2 - 100;
var page1NoY = goY + 100;

//Color Boxes on page 3
var colorBoxX = width / 8;
var colorBoxY = height / 8;
var colorBoxMargin = 80;
var colorBoxPadding = 70;

// Font Sizes 
var titleSize = 48;
var buttonSize = 36;
var hintTextSize = 20;

// Mouse Click location
var mouseClickX;
var mouseClickY;


function setup() {
  createCanvas(800, 600);
  col1 = color(random(255), random(255), random(255));
  col2 = color(random(255), random(255), random(255));
  col3 = color(random(255), random(255), random(255));
  col4 = color(random(255), random(255), random(255));
  goX = width / 2 - 50;
  goY = titleY + 100;
  box1X = goX;
  box1Y = goY;

}

function draw() {
  background(bgColor);
  if (pageNum == 1) {
    drawPage1();
  } else if (pageNum == 2) {
    drawPage2();
  } else if (pageNum == 3) {
    drawPage3();
  } else {

  }

}

function drawPage1() {
  textSize(titleSize);
  fill(textColor);
  text(page1Msg, titleX, titleY);

  fill(0);
  noStroke();
  rect(box1X - 20, box1Y - 50, textWidth(page1Go) + 26, 75, 20);
  textSize(buttonSize);

  fill(255);
  text(page1Go, goX, goY);

  if (withIn(mouseClickX, mouseClickY, box1X, box1X + textWidth(page1Go) + 26, box1Y - 50, box1Y - 50 + 75)) {
    pageNum = pageNum + 1;
  }
}

function drawPage2() {
  textSize(titleSize);
  fill(textColor);
  text(page2Ready, titleX, titleY);

}



function drawPage3() {

  background(40);
  textSize(titleSize);
  fill(textColor);
  text(page3Select, titleX, titleY)
  // Color Box1

  fill(col1);
  stroke(240);
  rect(colorBoxMargin, 300, colorBoxX, colorBoxY);

  // Color Box2

  fill(col2);
  rect(colorBoxMargin + colorBoxX + colorBoxPadding, 300, colorBoxX, colorBoxY);

  // Color Box3

  fill(col3);
  rect(colorBoxMargin + 2 * colorBoxPadding + 2 * colorBoxX, 300, colorBoxX, colorBoxY);

  // Color Box4

  fill(col4);
  rect(colorBoxMargin + 3 * colorBoxPadding + 3 * colorBoxX, 300, colorBoxX, colorBoxY);

  if (withIn(mouseClickX, mouseClickY, colorBoxMargin, colorBoxMargin + colorBoxX, 300, 300 + colorBoxY)) {
    background(col1);
    colorValueSelected = col1;
    drawPage4();
  } else if (withIn(mouseClickX, mouseClickY, colorBoxMargin + colorBoxX + colorBoxPadding, colorBoxMargin + 2 * colorBoxX + colorBoxPadding, 300, 300 + colorBoxY)) {
    background(col2);
    colorValueSelected = col2;
    drawPage4();
  } else if (withIn(mouseClickX, mouseClickY, colorBoxMargin + 2 * colorBoxPadding + 2 * colorBoxX, colorBoxMargin + 2 * colorBoxPadding + 3 * colorBoxX, 300, 300 + colorBoxY)) {
    background(col3);
    colorValueSelected = col3;
    drawPage4();
  } else if (withIn(mouseClickX, mouseClickY, colorBoxMargin + 3 * colorBoxPadding + 3 * colorBoxX, colorBoxMargin + 3 * colorBoxPadding + 4 * colorBoxX, 300, 300 + colorBoxY)) {
    background(col4);
    colorValueSelected = col4;
    drawPage4();
  }

}

function drawPage4() {
  textSize(titleSize);
  fill(textColor);
  text(page4Color, titleX, titleY);
  text(colorValueSelected, titleX, titleY + 100);
  textSize(hintTextSize);
  text(page4GoBack, titleX, titleY + 200);
}

function withIn(pointX, pointY, rectX1, rectX2, rectY1, rectY2) {
  if ((pointX > rectX1) &&
    (pointX < rectX2) &&
    (pointY > rectY1) &&
    (pointY < rectY2)) {
    return true
  } else {
    return false;
  }
}

function mouseClicked() {
  mouseClickX = mouseX;
  mouseClickY = mouseY;
}

function keyPressed() {
  if (pageNum == 2) {
    pageNum++;
  }
}