// some colors we use throughout the program
var bgColor = (236);
var txtColor = (74);
var typeColor1 = (236);
var typeColor2 = (236);
var typeColor3 = (236);
var faceColor = (74);
var mouthColor1 = (74);
var mouthColor2 = (236)

// some text strings we use throughout the program
var welcomeMsg = "MAKE ME HAPPY";
var continueMsg = "Press Any Key to Continue";
var typeMsg = "type in any letter";

// coordinates of the where the title of the screen will be drawn
var titleX = 85;
var titleY = 250;

// coordinates of the where the continue message will be drawn
// these are calutated in setup(), after the canvas has been defined
var continueX;
var continueY;

//xyCoord for typemessage
var typeX = 178
var typeY = 400

//lines for letters
var X1 = 230
var X2 = 270
var Y = 350

//letter
var letter1 = "A"
var letter2 = "B"
var letter3 = "C"



// coordinates of where the first box will be drawn
// these are calutated in setup(), after the canvas has been defined
var box1X;
var box1Y;

// font sizes for various kinds of text
var titleTextSize = 40;
var letterTextSize = 40;
var promptTextSize = 26;

// this tracks which page we are currently showing
var pageNum = 0;

// this tracks the answer to a level number question that the user answers
//var levelNum = 0;



// all the things done only once
function setup() {

  // anyone know why I chose this particular size ?
  createCanvas(500, 500);

  // always offset the messages and buttons from the right side and the bottom of the canvas
  continueX = width - 405;
  continueY = height - 100;
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
  text(pageNum, 480, 490);
  textSize(titleTextSize);
  text(welcomeMsg, titleX, titleY);

  //face
  drawFace();
  /*strokeWeight(3);
  stroke(txtColor);
  noFill();
  ellipse(250, 150, 100);
  ellipse(230, 140, 10, 15);
  ellipse(230 + 40, 140, 10, 15);
  //arc(250, 170, 40, 20, 0, PI);
  line(235, 170, 265, 170);*/

  // now, depending on which page we are on, we draw different stuff on it

  if (pageNum == 1) {

    // write welcome message
    drawPage1();
    /*noStroke();
    textSize(titleTextSize);
    fill(txtColor);
    text(welcomeMsg, titleX, titleY);

    // issue prompt to continue
    textSize(promptTextSize);
    fill(txtColor);
    text(continueMsg, continueX, continueY);
    //txtColor=txtColor +5
    //if(txtColor > 250){
    //   fill(txtColor2=txtColor2 -5)
    // }*/


    // the keyPressed() function below controls advancing to the next page

  } else if (pageNum == 2) {

    // move makemehappy
    drawPage2();
    /*noStroke();
    textSize(titleTextSize);
    fill(txtColor);
    text(welcomeMsg, titleX, titleY);
    titleY = titleY + 3;
    titleX = titleX - 2;
    titleTextSize--;
    if (titleY > 490) {
      titleY = 490
    }
    if (titleX < 10) {
      titleX = 10
    }
    if (titleTextSize < 20) {
      titleTextSize = 20
    }
    textSize(titleTextSize);
    fill(txtColor);
    text(typeMsg, typeX, typeY);
    //draw 3 lines
    stroke(txtColor);
    strokeWeight(3);
    line(X1, Y, X2, Y);
    line(X1 + 50, Y, X2 + 50, Y)
    line(X1 - 50, Y, X2 - 50, Y)
    //face
    noFill();
    ellipse(250, 150, 100);
    ellipse(230, 140, 10, 15);
    ellipse(230 + 40, 140, 10, 15);
    stroke(mouthColor1)
    line(235, 170, 265, 170);
    stroke(mouthColor2)
    arc(250, 170, 40, 20, 0, PI);

    //A
    noStroke();
    textSize(letterTextSize);
    fill(typeColor1);
    text(letter1, X1 - 45, Y - 5);
    //B
    textSize(letterTextSize);
    fill(typeColor2);
    text(letter2, X1 + 5, Y - 5);
    //C
    textSize(letterTextSize);
    fill(typeColor3);
    text(letter3, X1 + 55, Y - 5);*/

  }
}


function drawFace() {
  //translate(x,y)
  strokeWeight(3);
  stroke(txtColor);
  noFill();
  ellipse(250, 150, 100);
  ellipse(230, 140, 10, 15);
  ellipse(230 + 40, 140, 10, 15);
  stroke(mouthColor1);
  line(235, 170, 265, 170);
  stroke(mouthColor2)
  arc(250, 170, 40, 20, 0, PI);
}

function drawPage1() {
  noStroke();
  textSize(titleTextSize);
  fill(txtColor);
  text(welcomeMsg, titleX, titleY);

  // issue prompt to continue
  textSize(promptTextSize);
  fill(txtColor);
  text(continueMsg, continueX, continueY);
}

function drawPage2() {
  noStroke();
  textSize(titleTextSize);
  fill(txtColor);
  text(welcomeMsg, titleX, titleY);
  titleY = titleY + 3;
  titleX = titleX - 2;
  titleTextSize--;
  if (titleY > 490) {
    titleY = 490
  }
  if (titleX < 10) {
    titleX = 10
  }
  if (titleTextSize < 20) {
    titleTextSize = 20
  }
  textSize(titleTextSize);
  fill(txtColor);
  text(typeMsg, typeX, typeY);
  //draw 3 lines
  stroke(txtColor);
  strokeWeight(3);
  line(X1, Y, X2, Y);
  line(X1 + 50, Y, X2 + 50, Y)
  line(X1 - 50, Y, X2 - 50, Y)
  //face
  drawFace();
  /*noFill();
  ellipse(250, 150, 100);
  ellipse(230, 140, 10, 15);
  ellipse(230 + 40, 140, 10, 15);
  stroke(mouthColor1)
  line(235, 170, 265, 170);
  stroke(mouthColor2)
  arc(250, 170, 40, 20, 0, PI);*/

  //A
  noStroke();
  textSize(letterTextSize);
  fill(typeColor1);
  text(letter1, X1 - 45, Y - 5);
  //B
  textSize(letterTextSize);
  fill(typeColor2);
  text(letter2, X1 + 5, Y - 5);
  //C
  textSize(letterTextSize);
  fill(typeColor3);
  text(letter3, X1 + 55, Y - 5);
}

//letters
function keyTyped() {
  if (key === 'a') {
    fill(txtColor);
    //text(letter1, 50, 50);
    typeColor1 = 74;
    mouthColor1 = 236;
    mouthColor2 = 74;
  } else if (key == 'b') {
    typeColor2 = 74;
    mouthColor1 = 236;
    mouthColor2 = 74;
  } else if (key === 'c') {
    typeColor3 = 74;
    mouthColor1 = 236;
    mouthColor2 = 74;
    // }else if (key === 'd') {
    //mouthColor1 = 74;
    //mouthColor2 = 236;

  } else {
    mouthColor1 = 74;
    mouthColor2 = 236;
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
  }
}