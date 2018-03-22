//colors
var bgColor = 'black';
var txtColor = 'white';
var buttonColor = 'white';

//three main messages and buttons
var firstMessage = "Choose background color:";
var secondMessage = "Choose text color:";
var thirdMessage = "Choose button color:";
var button1txt;
var button2txt;

//text size for all text
var txtSize = 40;

//coord for main text and buttons
var mainX = 200;
var mainY = 200;
var button1X = 300;
var button1Y = 330;
var button2X = 500;
var button2Y = 330;

//mouse click coord
var clickX;
var clickY;

//track page number
var pageNum = 1;


function setup() {
  createCanvas(800, 500);
  background(bgColor);

}

function draw() {

    //page number top left
  textSize(txtSize);
  strokeWeight(1);
  fill(txtColor);
  text(pageNum, 25, 50);
  
  if (pageNum == 1) {
    drawPage1();

  } else if (pageNum == 2) {
    drawPage2();

  } else if (pageNum == 3) {
    drawPage3();

  }


}

function drawPage1() {

  //first option message
  text(firstMessage, mainX, mainY);

  //buttons appearance
  fill(bgColor);
  stroke(buttonColor);
  strokeWeight(5);

  //button 1
  button1txt = "Red";
  rect(button1X - 20, button1Y - 50, textWidth(button1txt) + 40, 75, 20);

  //text inside of box 1
  text(button1txt, button1X, button1Y);

  //button2
  button2txt = "Blue";
  rect(button2X - 20, button2Y - 50, textWidth(button2txt) + 40, 75, 20);

  //text inside of box 2
  text(button2txt, button2X, button2Y);


  //mouseClicked to change variables based on user input
  if (isWithin(clickX, clickY,
      button1X - 20, button1X + textWidth(button1txt) + 40,
      button1Y - 50, button1Y - 50 + 75)) {
    //change background to selected color
    bgColor = 'red';
    // and go to the next screen
    pageNum = pageNum + 1;
  } else if (isWithin(clickX, clickY,
      button2X - 20, button2X + textWidth(button2txt) + 40,
      button2Y - 50, button2Y - 50 + 75)) {
    //change background to selected color
    bgColor = 'blue';
    // go to the next screen
    pageNum = pageNum + 1;
  }

  // reset mouse clicks
  clickX = 0;
  clickY = 0;

}

function drawPage2() {

  //keep bgColor correct in each page
  background(bgColor);

  //second option
  text(secondMessage, mainX, mainY);

  //option buttons appearance 
  fill(bgColor);
  stroke(buttonColor);
  strokeWeight(5);

  //button 1
  rect(button1X - 20, button1Y - 50, textWidth(button1txt) + 40, 75, 20);

  //text inside of box 1
  button1txt = "Green";
  text(button1txt, button1X, button1Y);

  //button2
  rect(button2X - 20, button2Y - 50, textWidth(button2txt) + 40, 75, 20);

  //text inside of box 2
  button2txt = "Yellow";
  text(button2txt, button2X, button2Y);


  //mouseClicked to change variables based on user input
  if (isWithin(clickX, clickY,
      button1X - 20, button1X + textWidth(button1txt) + 40,
      button1Y - 50, button1Y - 50 + 75)) {
    // change variables accordingly
    txtColor = 'green';
    pageNum = pageNum + 1;
  } else if (isWithin(clickX, clickY,
      button2X - 20, button2X + textWidth(button2txt) + 40,
      button2Y - 50, button2Y - 50 + 75)) {
    // change variables accordingly
    txtColor = 'yellow';
    pageNum = pageNum + 1;
  }

  // reset mouse clicks
  clickX = 0;
  clickY = 0;

}


function drawPage3() {

  //keep bgColor correct in each page
  background(bgColor);

  //second option
  text(thirdMessage, mainX, mainY);

  //option buttons appearance 
  fill(bgColor);
  stroke(buttonColor);
  strokeWeight(5);

  //button 1
  rect(button1X - 20, button1Y - 50, textWidth(button1txt) + 40, 75, 20);

  //text inside of box 1
  button1txt = "black";
  text(button1txt, button1X, button1Y);

  //button2
  rect(button2X - 20, button2Y - 50, textWidth(button2txt) + 40, 75, 20);

  //text inside of box 2
  button2txt = "Orange";
  text(button2txt, button2X, button2Y);


  //mouseClicked to change variables based on user input
  if (isWithin(clickX, clickY,
      button1X - 20, button1X + textWidth(button1txt) + 40,
      button1Y - 50, button1Y - 50 + 75)) {
    // change variables accordingly
    buttonColor = 'black';
    //pageNum = pageNum + 1; no longer needed
  } else if (isWithin(clickX, clickY,
      button2X - 20, button2X + textWidth(button2txt) + 40,
      button2Y - 50, button2Y - 50 + 75)) {
    // change variables accordingly
    buttonColor = 'orange';
    //pageNum = pageNum + 1; no longer needed
  }

  // reset mouse clicks
  clickX = 0;
  clickY = 0;

}

//other functions

function isWithin(pointX, pointY, rectX1, rectX2, rectY1, rectY2) {
  // if all 4 of these conditions are true, then it was inside,
  // otherwise it was outside
  if ((pointX > rectX1) && // to the right of the left edge
    (pointX < rectX2) && // to the left of the right edge
    (pointY > rectY1) && // below the top edge
    (pointY < rectY2)) { // above the bottom edge
    return true;
  } else {
    return false;
  }

}

function mouseClicked() {
  clickX = mouseX;
  clickY = mouseY;
}