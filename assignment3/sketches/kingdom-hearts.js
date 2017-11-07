/*	interactive story 2
    davidson, 10/2017
    
    this is a revised implementation of a skeleton for a multi-page interactive story,
    with optimizations to improve modularity.
    
*/

// some colors we use throughout the program
var bgColor = 'blue';
var txtColor = 'white';
var buttonColor = 'yellow';

// some text strings we use throughout the program
var welcomeMsg = "Kingdom Hearts 1";
var continueMsg = "Press any button to continue ...";
var newgame = "New Game";
var loadgame = "Load Game";
var readyMsg = "Are you ready? Choose well...";
var swordbtn = "Sword";
var sword1 = "The power of the warrior.";
var sword2 = "Invincible courage.";
var sword3 ="A sword of terrible destruction.";
var staffbtn = "Staff";
var staff1 = "The power of the mystic.";
var staff2 = "Inner strength.";
var staff3 = "A staff of wonder or ruin.";
var shieldbtn = "Shield";
var shield1 = "The power of the guardian.";
var shield2 = "Kindness to aid friends.";
var shield3 = "A shield to repel all.";
var levelMsg = "Which level do you want ?";
var OKButtonText = "OK ?";
var continuecancel ="Press a continue or b to go back";

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
var titleTextSize = 36;
var promptTextSize = 20;
var buttonTextSize = 24;

// this tracks which page we are currently showing
var pageNum = 0;

// this tracks the answer to a level number question that the user answers
var levelNum = 0;

// when the mouse is clicked, the function named mouseClicked() updates these variables
var MouseClickedAtX;
var mouseClickedAtY;


// all the things done only once
function setup() {

    // anyone know why I chose this particular size ?
    createCanvas(809, 500);

    // always offset the messages and buttons from the right side and the bottom of the canvas
    continueX = 100;
    continueY = 200;
    box1X = continueX;
    box1Y = continueY;
}


// control the animation of the screen
function draw() {

    // erase the canvas every time through the draw routine
    background(bgColor);

    // just for debugging, write the page number near the top left
    textSize(18);
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

      
    } else {
        // we haven't defined what happens for pages above 3 
    }

}


// draw page 0, welcome screen
function drawPage0() {

    // write welcome message
    textSize(titleTextSize);
    fill(txtColor);
    text(welcomeMsg, titleX, titleY);

    // issue prompt to continue
    textSize(promptTextSize);
    fill(txtColor);
    text(continueMsg, continueX + 300, continueY + 200);

    // the keyPressed() function below controls advancing to the next page

}

// draw page 1
function drawPage1() {

    // draw buttons, with rounded corners (radius = 20)
    fill(bgColor);
    stroke(buttonColor);
    strokeWeight(5)
  
    // the box coordinates make it surround the text with some space
    rect(box1X - 20, box1Y - 40, 175, 60, 20);
    rect(box1X - 20, box1Y + 40, 175, 60, 20);
  
    // button text
    textSize(buttonTextSize);
    strokeWeight(1);
    fill(buttonColor);
    text(newgame, box1X, box1Y);
    text(loadgame, box1X, box1Y + 80);

    // see if the mouse was clicked inside the Load Game box
    // the mouseClicked() function below will update the 2 variables when the mouse is clicked

    if (isWithin(MouseClickedAtX, MouseClickedAtY,
            box1X - 20, box1X + 175,
            box1Y - 40, box1Y - 40 + 60)) {
        pageNum = pageNum + 1;
    } else if (isWithin(MouseClickedAtX, MouseClickedAtY,
            box1X - 20, box1X + 175,
            box1Y + 40, box1Y + 40 + 60)) {
        pageNum = pageNum + 5;
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
    text(readyMsg, titleX, titleY);

    // draw buttons, with rounded corners (radius = 20)
    fill(bgColor);
    stroke(buttonColor);
    strokeWeight(5)
  
    // the box coordinates make it surround the text with some space
    rect(box1X - 20, box1Y + 40, 175, 60, 20);
    rect(box1X + 180, box1Y + 40, 175, 60, 20);
    rect(box1X + 380, box1Y + 40, 175, 60, 20);
  
    // button text
    textSize(buttonTextSize);
    strokeWeight(1);
    fill(buttonColor);
    text(swordbtn, box1X + 30, box1Y + 80);
    text(staffbtn, box1X + 240, box1Y + 80);
    text(shieldbtn, box1X + 430, box1Y + 80);

    // see if the mouse was clicked inside the Load Game box
    // the mouseClicked() function below will update the 2 variables when the mouse is clicked

    if (isWithin(MouseClickedAtX, MouseClickedAtY,
            box1X - 20, box1X + 175,
            box1Y + 40, box1Y + 40 + 60)) {
        pageNum = pageNum + 1;
    } else if (isWithin(MouseClickedAtX, MouseClickedAtY,
            box1X + 180, box1X + 175 + 180,
            box1Y + 40, box1Y + 40 + 60)) {
        pageNum = pageNum + 2;
    } else if (isWithin(MouseClickedAtX, MouseClickedAtY,
            box1X + 380, box1X + 175 + 380,
            box1Y + 40, box1Y + 40 + 60)) {
        pageNum = pageNum + 3;
    }

    // reset these for the next time through draw()
    MouseClickedAtX = 0;
    mouseClickedAtY = 0;

}


// draw page 3
function drawPage3() {

    // write level message
    textSize(titleTextSize);
    fill(txtColor);
    text(swordbtn, titleX, titleY);
  
    textSize(16);
    text(sword1, titleX, titleY+50);
    text(sword2, titleX, titleY+75);
    text(sword3, titleX, titleY+100);
  
    textSize(promptTextSize);
    text(continuecancel, continueX + 300, continueY + 200);
  
    // reset these for the next time through draw()
    MouseClickedAtX = 0;
    mouseClickedAtY = 0;

}


// draw page 4
function drawPage4() {

    // write level message
    textSize(titleTextSize);
    fill(txtColor);
    text(staffbtn, titleX, titleY);
  
    textSize(16);
    text(staff1, titleX, titleY+50);
    text(staff2, titleX, titleY+75);
    text(staff3, titleX, titleY+100);
  
    textSize(promptTextSize);
    text(continuecancel, continueX + 300, continueY + 200);
  
    // reset these for the next time through draw()
    MouseClickedAtX = 0;
    mouseClickedAtY = 0;

}

// draw page 5
function drawPage5() {

    // write level message
    textSize(titleTextSize);
    fill(txtColor);
    text(shieldbtn, titleX, titleY);
  
    textSize(16);
    text(shield1, titleX, titleY+50);
    text(shield2, titleX, titleY+75);
    text(shield3, titleX, titleY+100);
  
    textSize(promptTextSize);
    text(continuecancel, continueX + 300, continueY + 200);
  
    // reset these for the next time through draw()
    MouseClickedAtX = 0;
    mouseClickedAtY = 0;

}

// draw page 6
function drawPage6() {
  
    // write level message
    textSize(titleTextSize);
    fill(txtColor);
    text("loading game...", titleX, titleY);

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
function keyPressed() {
    // but we only want to do this on the first page, since the subsequent
    // ones require a mouse click to choose and advance
    if (pageNum == 0) {
        pageNum = pageNum + 1;
    } 
}

// continue with selection or return to selection page

function keyTyped() {
  if ((pageNum > 2) && (pageNum < 6) && (key === 'a')) {
        pageNum = 6;
  } else if ((pageNum > 2) && (pageNum < 6) && (key === 'b')) {
        pageNum = 2;
  }
  // uncomment to prevent any default behavior
  // return false;
}


// this function harnesses the built-in detector for any mouse click
// and simply saves the location of the mouse when it was clicked
// mouseClicked() is a predefined p5.js function -- we just fill in what
// happens when it is invoked by the system.
function mouseClicked() {
    MouseClickedAtX = mouseX;
    MouseClickedAtY = mouseY;
}