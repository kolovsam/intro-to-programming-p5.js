// width & height

var width = 800;
var height = 800;

// colors

var colR;
var colG;
var colB;
var textColor = 255;
var col1;
var col2;
var col3;
var col4;

// Messages

var page1Msg = "Are you ready to play?";
var page2Ready = "Click to continue";
var page1Yes = "Go";
var page2Ok = "OK";

// Title location
var titleX = width/2 - 250;
var titleY = 200;

// Text for message box

var goX;
var goY;
var page1NoX = width/2 - 100;
var page1NoY = goY + 100;

// Boxes on first page

var box1X;
var box1Y;
var box2X;
var box2Y;

// font size

var titleSize = 48;
var buttonSize = 36;

// Mouse Click location

var mouseClickX;
var mouseClickY;

// Page Number

var pageNum = 1;

function setup() {
    createCanvas(800,800);
    colR = random(255);
    colG = random(255);
    colB = random(255);
    col1 = color(random(255), random(255), random(255));
    col2 = color(random(255), random(255), random(255));
    col3 = color(random(255), random(255), random(255));
    col4 = color(random(255), random(255), random(255));
    goX = width/2 - 50;
    goY = height - 500;
    box1X = goX;
    box1Y = goY;
    
}

function draw() {
    background(colR, colG, colB);
    
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
    rect(box1X - 20, box1Y - 50, textWidth(page1Yes) + 23, 75,20);
    textSize(buttonSize);
    
    fill(255);
    text(page1Yes, goX, goY);
    
    if (withIn(mouseClickX, mouseClickY, box1X, box1X + textWidth(page1Yes) +23, box1Y - 50, box1Y - 50 + 75)) {
        pageNum = pageNum + 1;
    }
}

function drawPage2() {
    textSize(titleSize);
    fill(textColor);
    text(page2Ready, titleX, titleY);
    
}

function drawPage3() {
    
    // Color Box1
    
    fill(col1);
    noStroke();
    rect(0,0,100,100);
    
    // Color Box2
    
    fill(col2);
    rect(700,0, 800,100);
    
    // Color Box3
    
    fill(col3);
    rect(0,700,100,800);
    
    // Color Box4
    
    fill(col4);
    rect(700,700,800,800);
    
    if (withIn(mouseClickX, mouseClickY, 0,100,0,100)) {
        background(col1);
    } else if (withIn(mouseClickX, mouseClickY, 700,800,0,100)) {
        background(col2);
    } else if (withIn(mouseClickX, mouseClickY, 0,100,700,800)) {
        background(col3);
    } else if (withIn(mouseClickX, mouseClickY, 700,800,700,800)) {
        background(col4);
    }
    
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
    
    if (pageNum == 2 )  {
      pageNum = pageNum + 1;
    } 
}