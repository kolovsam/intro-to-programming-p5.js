/*	interactive story 2
    Lavallee, 10/2017
    
    this is a revised implementation of a skeleton for a multi-page interactive story,
    with optimizations to improve modularity.
    
*/

// some colors we use throughout the program
var bgColor = 'white';
var txtColor = 'black';
var buttonColor = 'gray';

// some text strings we use throughout the program
var StartMsg = "Is my halloween costume be culturally offensive?";
var Q1 = "Are you part of the culture your costume depicts?";
//pg1
var Q2 = "Do you understand the significance of what you are wearing?";
//pg2
var Q3 = "Are you attempting to spread awareness and empower the culture?";
//pg3
var Q4 = "Does it say, sexy, traditional, tribal or urban on the package?";
//pg4
var resultmore = "Do more research before wearing."
//pg5
var resultyes = "Go ahead"
//pg6
var resultno = "Just don’t, please don’t."
//pg7
var buttonyes = "yes";
var buttonno = "no";
var buttonStart = "Start";


// coordinates of the where the title of the screen will be drawn
var titleX = 100;
var titleY = 200;

// coordinates of the where the continue message will be drawn
// these are calutated in setup(), after the canvas has been defined
var continueX;
var continueY;

// coordinates of where the first box will be drawn
// these are calutated in setup(), after the canvas has been defined
var box1X;
var box1Y;

// font sizes for various kinds of text
var titleTextSize = 16;
var promptTextSize = 16;
var buttonTextSize = 14;

// this tracks which page we are currently showing
var pageNum = 0;

// this tracks the answer to a level number question that the user answers
var levelNum = 0;

// when the mouse is clicked, the function named mouseClicked() updates these variables
var MouseClickedAtX;
var MouseClickedAtY;

// var mouseMovedAtX;
// var mouseMovedAtY;
//This was my attempt at adding a hover state, it did not work out and I wanted to go to bed


// all the things done only once
function setup() {

    // anyone know why I chose this particular size ?
    createCanvas(809, 500);

    // always offset the messages and buttons from the right side and the bottom of the canvas
    continueX = width / 2;
    continueY = height - 100;
    box1X = continueX;
    box1Y = continueY;
}


// control the animation of the screen
function draw() {

    // erase the canvas every time through the draw routine
    background(bgColor);

    // just for debugging, write the page number near the top left
    textSize(10);
    strokeWeight(1);
    fill(txtColor);
    text(pageNum, 100, 100);

    // now, depending on which page we are on, we draw different stuff on it

    if (pageNum == 0) {
        drawPage0();
    
    } else if (pageNum == 1) {
        drawPage1();

    } else if (pageNum == 2) {
        drawPage2();

    } else if (pageNum == 3) {
        drawPage3();

    } else if (pageNum == 4) {
        drawPage4();

    } else if (pageNum == 5) {
        drawPage5();

    } else if (pageNum == 6) {
        drawPage6();
      
    } else if (pageNum == 7) {
        drawPage7();
    }
}

// draw page 0 ----------------------------------------------------------0-------
function drawPage0() {

    // write level message
    textSize(titleTextSize);
  	background(bgColor);
    fill(txtColor);
    text(StartMsg, titleX, titleY);

    // draw 3 boxes, with rounded corners (radius 20)
    // spaced horizontally on the page, offset from each other
    fill(bgColor);
    stroke(buttonColor);
    strokeWeight(2);
    rect(box1X - 20, box1Y - 50, 80, 60, 5);//yes

    // write the level number text inside each box
    textSize(buttonTextSize);
    strokeWeight(1);
    fill(buttonColor);
    text("Start", box1X, box1Y);

    // wait for the user to click in one and use that to track which level they have selected

  
    if (isWithin(MouseClickedAtX, MouseClickedAtY,
						box1X, box1X + textWidth(buttonyes) + 10,
            box1Y - 50, box1Y - 50 + 75)) {
        pageNum = 2; //yes
    } else if (isWithin(MouseClickedAtX, MouseClickedAtY,
          box1X + 80, box1X + 80 + textWidth(buttonno) + 10,
            box1Y - 50, box1Y - 50 + 75)) {
        pageNum = 3; //no
    }
    MouseClickedAtX = 0;
    mouseClickedAtY = 0;
  
  // this did not give me a hover state
  //     if (isWithin(mouseMovedAtX, mouseMovedAtY,
  // box1X, box1X + textWidth(buttonyes) + 10,
  //           box1Y - 50, box1Y - 50 + 75)) {
  //       pageNum = 2; //yes
  //   } else if (isWithin(mouseMovedAtX, mouseMovedAtY,
  //         box1X + 80, box1X + 80 + textWidth(buttonno) + 10,
  //           box1Y - 50, box1Y - 50 + 75)) {
  //       pageNum = 3; //no
  //   }
  //   mouseMovedAtX = 0;
  //   mouseMovedAtY = 0;
    
}

// draw page 1 ----------------------------------------------------------1-------
function drawPage1() {

    // write level message
    textSize(titleTextSize);
  	background(bgColor);
    fill(txtColor);
    text(Q1, titleX, titleY);

    // draw 3 boxes, with rounded corners (radius 20)
    // spaced horizontally on the page, offset from each other
    fill(bgColor);
    stroke(buttonColor);
    strokeWeight(2);
    rect(box1X - 20, box1Y - 50, 80, 60, 5);//yes
    rect(box1X - 20 + 100, box1Y - 50, 80, 60, 5); //no
  
    // write the level number text inside each box
    textSize(buttonTextSize);
    strokeWeight(1);
    fill(buttonColor);
    text("Yes", box1X, box1Y);
    text("No", box1X + 100, box1Y);

    // wait for the user to click in one and use that to track which level they have selected

  
    if (isWithin(MouseClickedAtX, MouseClickedAtY,
						box1X, box1X + textWidth(buttonyes) + 10,
            box1Y - 50, box1Y - 50 + 75)) {
        pageNum = 2; //yes
    } else if (isWithin(MouseClickedAtX, MouseClickedAtY,
          box1X + 80, box1X + 80 + textWidth(buttonno) + 10,
            box1Y - 50, box1Y - 50 + 75)) {
        pageNum = 3; //no
    }
    MouseClickedAtX = 0;
    mouseClickedAtY = 0;
  
  // this did not give me a hover state
  //     if (isWithin(mouseMovedAtX, mouseMovedAtY,
  // box1X, box1X + textWidth(buttonyes) + 10,
  //           box1Y - 50, box1Y - 50 + 75)) {
  //       pageNum = 2; //yes
  //   } else if (isWithin(mouseMovedAtX, mouseMovedAtY,
  //         box1X + 80, box1X + 80 + textWidth(buttonno) + 10,
  //           box1Y - 50, box1Y - 50 + 75)) {
  //       pageNum = 3; //no
  //   }
  //   mouseMovedAtX = 0;
  //   mouseMovedAtY = 0;
    
}

// draw page 2 ----------------------------------------------------------2-------
function drawPage2() {

    // write level message
    textSize(titleTextSize);
  	background(bgColor);
    fill(txtColor);
    text(Q2, titleX, titleY);

     // draw 3 boxes, with rounded corners (radius 20)
    // spaced horizontally on the page, offset from each other
    fill(bgColor);
    stroke(buttonColor);
    strokeWeight(2);
    rect(box1X - 20, box1Y - 50, 80, 60, 5);//yes
    rect(box1X - 20 + 100, box1Y - 50, 80, 60, 5); //no
  
    // write the level number text inside each box
    textSize(buttonTextSize);
    strokeWeight(1);
    fill(buttonColor);
    text("Yes", box1X, box1Y);
    text("No", box1X + 100, box1Y);

    // wait for the user to click in one and use that to track which level they have selected

    if (isWithin(MouseClickedAtX, MouseClickedAtY,
						box1X, box1X + textWidth(buttonyes) + 10,
            box1Y - 50, box1Y - 50 + 75)) {
        pageNum = 4; //yes
    } else if (isWithin(MouseClickedAtX, MouseClickedAtY,
          box1X + 80, box1X + 80 + textWidth(buttonno) + 10,
            box1Y - 50, box1Y - 50 + 75)) {
        pageNum = 5; //no
    }
    MouseClickedAtX = 0;
    mouseClickedAtY = 0;
}

// draw page 3 ----------------------------------------------------------3-------
function drawPage3() {

    // write level message
    textSize(titleTextSize);
  	background(bgColor);
    fill(txtColor);
    text(Q3, titleX, titleY);

    // draw 3 boxes, with rounded corners (radius 20)
    // spaced horizontally on the page, offset from each other
    fill(bgColor);
    stroke(buttonColor);
    strokeWeight(2);
    rect(box1X - 20, box1Y - 50, 80, 60, 5);//yes
    rect(box1X - 20 + 100, box1Y - 50, 80, 60, 5); //no
  
    // write the level number text inside each box
    textSize(buttonTextSize);
    strokeWeight(1);
    fill(buttonColor);
    text("Yes", box1X, box1Y);
    text("No", box1X + 100, box1Y);

    // wait for the user to click in one and use that to track which level they have selected

    if (isWithin(MouseClickedAtX, MouseClickedAtY,
						box1X, box1X + textWidth(buttonyes) + 10,
            box1Y - 50, box1Y - 50 + 75)) {
        pageNum = 6; //yes
    } else if (isWithin(MouseClickedAtX, MouseClickedAtY,
          box1X + 80, box1X + 80 + textWidth(buttonno) + 10,
            box1Y - 50, box1Y - 50 + 75)) {
        pageNum = 7; //no
    }
    MouseClickedAtX = 0;
    mouseClickedAtY = 0;
}

// draw page 4 ----------------------------------------------------------4-------
function drawPage4() {

    // write level message
    textSize(titleTextSize);
  	background(bgColor);
    fill(txtColor);
    text(Q4, titleX, titleY);

     // draw 3 boxes, with rounded corners (radius 20)
    // spaced horizontally on the page, offset from each other
    fill(bgColor);
    stroke(buttonColor);
    strokeWeight(2);
    rect(box1X - 20, box1Y - 50, 80, 60, 5);//yes
    rect(box1X - 20 + 100, box1Y - 50, 80, 60, 5); //no
  
    // write the level number text inside each box
    textSize(buttonTextSize);
    strokeWeight(1);
    fill(buttonColor);
    text("Yes", box1X, box1Y);
    text("No", box1X + 100, box1Y);

    // wait for the user to click in one and use that to track which level they have selected

    if (isWithin(MouseClickedAtX, MouseClickedAtY,
						box1X, box1X + textWidth(buttonyes) + 10,
            box1Y - 50, box1Y - 50 + 75)) {
        pageNum = 7; //yes
    } else if (isWithin(MouseClickedAtX, MouseClickedAtY,
          box1X + 80, box1X + 80 + textWidth(buttonno) + 10,
            box1Y - 50, box1Y - 50 + 75)) {
        pageNum = 6; //no
    }
    MouseClickedAtX = 0;
    mouseClickedAtY = 0;
}

// draw page 5 ----------------------------------------------------------5-------
function drawPage5() {

    // write level message
    textSize(titleTextSize+10);
  	background(bgColor);
    fill(txtColor);
    text(resultmore, titleX, titleY);
}

// draw page 6 ----------------------------------------------------------6-------
function drawPage6() {

    // write level message
    textSize(titleTextSize+10);
  	background(bgColor);
    fill(txtColor);
    text(resultyes, titleX, titleY);
}

// draw page 7 ----------------------------------------------------------7-------
function drawPage7() {

    // write level message
    textSize(titleTextSize+10);
  	background(bgColor);
    fill(txtColor);
    text(resultno, titleX, titleY);
}

// function which returns true or false to indicate whether a point
// is within a given rectangle
// the point to test is (pointX, pointY)
// the rectangle is defined by the upper left corner (rectX1, rectY1)
// and the lower right corner (rectX2, rectY2)
function isWithin(pointX, pointY, rectX1, rectX2, rectY1, rectY2) {
    // if all 4 of these conditions are true, then it was inside,
    // otherwise it was outside
    if ((pointX > rectX1) &&	// to the right of the left edge
        (pointX < rectX2) &&	// to the left of the right edge
        (pointY > rectY1) &&	// below the top edge
        (pointY < rectY2)) {	// above the bottom edge
        return true;
    } else {
        return false;
    }
}

// this function harnesses the built-in detector for any key press on the
// keyboard to simply step through the sucessive pages of the story
// keyPressed() is a predefined p5.js function -- we just fill in what
// happens when it is invoked by the system.
/*function keyPressed() {
    // but we only want to do this on the first page, since the subsequent
    // ones require a mouse click to choose and advance
    if (pageNum <= 1) {
        pageNum = pageNum + 1;
    }
}*/


// this function harnesses the built-in detector for any mouse click
// and simply saves the location of the mouse when it was clicked
// mouseClicked() is a predefined p5.js function -- we just fill in what
// happens when it is invoked by the system.
function mouseClicked() {
    MouseClickedAtX = mouseX;
    MouseClickedAtY = mouseY;
}


// function mouseMoved() {
//   mouseMovedAtX = mouseX;
//   mouseMovedatY = mouseY;
//   }