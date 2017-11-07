/*  interactive story 3
    Inspired by Class template
*/

// some colors we use throughout the program
var bgColor = '#67cdfd';
var txtColor = 'black';
var buttonColor = 'black';

// some text strings we use throughout the program
var welcomeMsg = "             You got a Mario";
var welcomeMsg1 = "             You got a Fez";

var continueMsg = "";
var readyMsg = "Ready to play ?";
var levelMsg = "Which character do you want?";
var Msg = "Press key to exist";
var OKButtonText = "OK ?";

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
var titleTextSize = 48;
var promptTextSize = 24;
var buttonTextSize = 36;

// this tracks which page we are currently showing
var pageNum = 0;

// this tracks the answer to a level number question that the user answers
var levelNum = 0;

// when the mouse is clicked, the function named mouseClicked() updates these variables
var MouseClickedAtX;
var mouseClickedAtY;


// drawing a Mario
var interval;
var grid = 20;
var posX;
var posY;
var w = 15;
var h = 15;
var colors = {
    1: '#ffffff',
    2: '#fd0002',
    3: '#974806',
    4: '#fac090',
    5: '#000000',
    6: '#0071c4',
    7: '#feff01',
    8: '#000000',
    9: '#e27b68'
  };
var pixelArt = [
0,0,0,2,2,2,2,2,2,0,0,0,0,
0,0,2,2,2,2,2,2,2,2,2,2,0,
0,0,3,3,3,4,4,4,5,4,0,0,0,
0,3,4,3,4,4,4,4,5,4,4,4,0,
0,3,4,3,3,4,4,4,4,5,4,4,4,
0,3,3,4,4,4,4,4,5,5,5,5,0,
0,0,0,4,4,4,4,4,4,4,4,0,0,
0,0,2,2,6,2,2,2,2,0,0,0,0,
0,2,2,2,6,2,2,6,2,2,2,0,0,
2,2,2,2,6,6,6,6,2,2,2,2,0,
4,4,2,6,7,6,6,7,6,2,4,4,0,
4,4,4,6,6,6,6,6,6,4,4,4,0,
4,4,6,6,6,6,6,6,6,6,4,4,0,
0,0,6,6,6,0,0,6,6,6,0,0,0,
0,3,3,3,0,0,0,0,3,3,3,0,0,
3,3,3,3,0,0,0,0,3,3,3,3,0];

// drawing a FEZ
var colorsFez = {
    1: '#ffffff',
    2: '#e3ecda',
    3: '#b9c7a5',
    4: '#db0006',
    5: '#a70007',
    6: '#feb325',
    7: '#01000a',
    8: '#000000',
    9: '#e27b68'
  };
var pixelArtFez = [
0,0,0,6,4,4,0,0,0,0,0,0,0,
0,0,6,5,4,4,0,0,0,0,0,0,0,
0,0,0,5,4,4,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,
0,3,2,1,1,1,1,1,1,1,1,1,0,
3,2,2,1,1,1,1,1,1,1,1,1,1,
3,2,1,7,1,1,1,1,1,1,1,7,1,
3,2,1,1,1,1,8,8,8,8,1,1,1,
3,2,1,1,1,1,9,9,8,8,1,1,1,
3,2,2,1,1,1,1,1,8,1,1,1,1,
0,3,3,2,1,1,1,1,1,1,1,1,0,
0,0,0,0,3,3,2,1,2,0,0,0,0,
0,3,1,1,2,1,1,1,1,3,3,0,0,
0,0,3,1,1,1,1,1,1,3,0,0,0,
0,0,0,3,1,1,1,1,1,0,0,0,0,
0,0,0,3,2,1,1,1,1,0,0,0,0,
0,0,0,3,2,1,1,1,1,0,0,0,0,
0,0,0,3,2,3,3,2,3,0,0,0,0,
0,0,3,2,0,0,2,3,0,0,0,0,0];

// perlin noise
var izzms = [],
        sizer = 13;


// all the things done only once
function setup() {

    // anyone know why I chose this particular size ?
    createCanvas(809, 500);

    // always offset the messages and buttons from the right side and the bottom of the canvas
    continueX = width / 2;
    continueY = height - 100;
    box1X = continueX;
    box1Y = continueY;

    // interval console
    interval = setInterval(function(){
    console.log(grid);
    if(grid > 13) {
      grid--;
    } else {
      stopInterval();
    }
  }, 10);
  
    var prox = 20,
        row = ceil(width / prox) + 1,
        column = ceil(height / prox) + 1;

  for (var j = 0; j < column; j++) {
    for (var i = 0; i < row; i++) {
      izzms.push(new p5.Vector(prox * i, prox * j));
    }
  }

}



function stopInterval() {
    clearInterval(interval);
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
        
    if (pageNum == 1) {
        drawPage1();

    } else if (pageNum == 2) {
        drawPage2();

    } else if (pageNum == 3) {
        drawPage3();

    } else if (pageNum == 4){
        drawPage4(); 
    } else if (pageNum == 5) {
        drawPage5();
    } else {
        //
    }

}


function calcVec(x, y) {
  return new p5.Vector(y - x, -x - y);
}


// draw page 1
function drawPage1() {

    // write ready message
    textSize(titleTextSize);
    fill(txtColor);
    text(readyMsg, titleX, titleY);

    // draw OK? box, with rounded corners (radius = 20)
    fill(bgColor);
    stroke(buttonColor);
    strokeWeight(5);
    // the box coordinates make it surround the text with some space
    rect(box1X - 20, box1Y - 50, textWidth(OKButtonText) + 10, 75, 20);

    // write the OK? text inside it
    textSize(buttonTextSize);
    strokeWeight(1);
    fill(buttonColor);
    text(OKButtonText, box1X, box1Y);

    // see if the mouse was clicked inside the OK box
    // the mouseClicked() function below will update the 2 variables when the mouse is clicked

    if (isWithin(MouseClickedAtX, MouseClickedAtY,
            box1X, box1X + textWidth(OKButtonText) + 10,
            box1Y - 50, box1Y - 50 + 75)) {
        // go to the next screen
        pageNum = pageNum + 1;
    }

    // reset these for the next time through draw()
    MouseClickedAtX = 0;
    mouseClickedAtY = 0;

}

// draw page 2
function drawPage2() {

    // write level message
    textSize(titleTextSize);
    fill(txtColor);
    text(levelMsg, titleX, titleY);
    text(Msg, titleX, titleY + 40);

    // draw 3 boxes, with rounded corners (radius 20)
    // spaced horizontally on the page, offset from each other
    fill(bgColor);
    stroke(buttonColor);
    strokeWeight(5);
    rect(box1X - 20, box1Y - 50, 60, 75, 20);
    rect(box1X - 20 + 100, box1Y - 50, 60, 75, 20);
    rect(box1X - 20 + 200, box1Y - 50, 60, 75, 20);

    // write the level number text inside each box
    textSize(buttonTextSize);
    strokeWeight(1);
    fill(buttonColor);
    text("?", box1X, box1Y);
    text("M", box1X + 100, box1Y);
    text("F", box1X + 200, box1Y);

    // wait for the user to click in one and use that to track which level they have selected
    // levelNum = 0;
    if (isWithin(MouseClickedAtX, MouseClickedAtY,
            box1X, box1X + 60,
            box1Y - 50, box1Y - 50 + 75)) {
        pageNum = 5;
    } else if (isWithin(MouseClickedAtX, MouseClickedAtY,
            box1X + 100, box1X + 100 + 60,
            box1Y - 50, box1Y - 50 + 75)) {
        pageNum = 3;
    } else if (isWithin(MouseClickedAtX, MouseClickedAtY,
            box1X + 200, box1X + 200 + 60,
            box1Y - 50, box1Y - 50 + 75)) {
        pageNum = 4;
    }

    // show which level was selected on the page 
    textSize(buttonTextSize);
    fill(txtColor);
    text(levelNum, titleX, box1Y);

}


// draw page 3
function drawPage3() {

    // write welcome message
    textSize(titleTextSize);
    fill(txtColor);
    text(welcomeMsg, titleX, titleY);
    //text("Press a key to return");

    // issue prompt to continue
    textSize(promptTextSize);
    fill(txtColor);
    text(continueMsg, continueX, continueY);

    // the keyPressed() function below controls advancing to the next page
    posX = 100;
    posY = 100;

    for ( var i=0; i <= pixelArt.length; i++ ) {
          
          posX = posX + w;
          
          if( i % grid === 0 ) {
            posX = 50;
            posY = posY + h;
          }
          
          if( pixelArt[i] > 0 ){
            fill( colors[pixelArt[i]] );
            rect(posX, posY, w, h);
          }
    }
      // see if the mouse was clicked inside the OK box
    // the mouseClicked() function below will update the 2 variables when the mouse is clicked

    if (isWithin(MouseClickedAtX, MouseClickedAtY,
            box1X, box1X + textWidth(OKButtonText) + 10,
            box1Y - 50, box1Y - 50 + 75)) {
        // go to the next screen
        pageNum = 1;
    }

    // reset these for the next time through draw()
    MouseClickedAtX = 0;
    mouseClickedAtY = 0;

}

// draw page 4
function drawPage4() {

    // write welcome message
    textSize(titleTextSize);
    fill(txtColor);
    text(welcomeMsg1, titleX, titleY);

    // issue prompt to continue
    textSize(promptTextSize);
    fill(txtColor);
    text(continueMsg, continueX, continueY);

    // the keyPressed() function below controls advancing to the next page
    posX = 100;
    posY = 100;

    for ( var i=0; i <= pixelArtFez.length; i++ ) {
          
          posX = posX + w;
          
          if( i % grid === 0 ) {
            posX = 50;
            posY = posY + h;
          }
          
          if( pixelArtFez[i] > 0 ){
            fill( colorsFez[pixelArtFez[i]] );
            rect(posX, posY, w, h);
          }
    }
      // see if the mouse was clicked inside the OK box
    // the mouseClicked() function below will update the 2 variables when the mouse is clicked

    if (isWithin(MouseClickedAtX, MouseClickedAtY,
            box1X, box1X + textWidth(OKButtonText) + 10,
            box1Y - 50, box1Y - 50 + 75)) {
        // go to the next screen
        pageNum = 1;
    }

    // reset these for the next time through draw()
    MouseClickedAtX = 0;
    mouseClickedAtY = 0;
}


// draw page 5
function drawPage5() {
    
    strokeWeight(17);
    for (var i = izzms.length - 1; i >= 0; i--) {
    var h = calcVec(izzms[i].x - mouseX, izzms[i].y - mouseY);
    line(
      izzms[i].x,
      izzms[i].y,
      izzms[i].x + sizer * cos(h.heading()),
      izzms[i].y + sizer * sin(h.heading()));
  }

}

// function which returns true or false to indicate whether a point
// is within a given rectangle
// the point to test is (pointX, pointY)
// the rectangle is defined by the upper left corner (rectX1, rectY1)
// and the lower right corner (rectX2, rectY2)
function isWithin(pointX, pointY, rectX1, rectX2, rectY1, rectY2) {
    // if all 4 of these conditions are true, then it was inside,
    // otherwise it was outside
    if ((pointX > rectX1) &&    // to the right of the left edge
        (pointX < rectX2) &&    // to the left of the right edge
        (pointY > rectY1) &&    // below the top edge
        (pointY < rectY2)) {    // above the bottom edge
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
    if (pageNum <= 1) {
        pageNum = pageNum + 1;
    } else if (pageNum >= 3) {
                pageNum = 1;
    }
}


// this function harnesses the built-in detector for any mouse click
// and simply saves the location of the mouse when it was clicked
// mouseClicked() is a predefined p5.js function -- we just fill in what
// happens when it is invoked by the system.
function mouseClicked() {
    MouseClickedAtX = mouseX;
    MouseClickedAtY = mouseY;
}
