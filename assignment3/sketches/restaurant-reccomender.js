/* 
Andrea's Assignment 3
Oct 29, 2017
*/

// Initialize variables for text strings
var titlePg1 = "Where should you eat dinner tonight?";
var instrPg1 = "Press any key to begin.";
var titlePg2 = "Are you vegetarian or vegan?";
var instrPg2 = "Press Y/N";
var titlePg3 = "Try out In the Bowl, at 1554 E Olive Way";
var instrPg3 = "Click anywhere if you want another recommendation";
var titlePg4 = "Try out Cask & Trotter, at 711 Westlake Ave N";
var instrPg4 = "Click anywhere if you want another recommendation";
var titlePg5 = "Try out Soi, at 1400 10th Ave";
var titlePg6 = "Try out Cure, at 1641 Nagle Pl";

// Initialize variables for colors
var bgClr = 'white';

// Initialize variable for font style
var font = 'roboto';

// Initialize variable for page number
var pageNum = 1;

function setup() {
  createCanvas(650, 500);

  // Initialize variables for page title location
  titleX = width / 2;
  titleY = height / 2;
}

function draw() {
  // "Erase" screen after each frame
  background(bgClr);

  // Draw page
  drawPage(pageNum);
}

function keyPressed() {
  if (pageNum <= 1) {
    pageNum++;
    return false;
  }
}

function keyTyped() {
  if (pageNum == 2) {
    if (key === 'y') {
      pageNum = 3;
    } else if (key === 'n') {
      pageNum = 4;
    }
    return false;
  }
}

function mousePressed() {
  if (pageNum == 3) {
    pageNum = 5;
  } else if (pageNum == 4) {
    pageNum = 6;
  }
}

function drawPage(pageNum) {
  if (pageNum == 1) {
    // Display title
    textFont(font);
    textSize(24);
    textAlign(CENTER);
    text(titlePg1, titleX, titleY);

    // Display instructions text
    textSize(32);
    text(instrPg1, titleX, titleY + 50);

  } else if (pageNum == 2) {
    // Display title
    textSize(24);
    text(titlePg2, titleX, titleY);

    // Display instructions text
    textSize(32);
    text(instrPg2, titleX, titleY + 50);

  } else if (pageNum == 3) {
    // Display title
    textSize(32);
    text(titlePg3, titleX, titleY);

    // Display instructions text
    textSize(24);
    text(instrPg3, titleX, titleY + 80);
    
  } else if (pageNum == 4) {
    // Display title
    textSize(28);
    text(titlePg4, titleX, titleY);

    // Display instructions text
    textSize(24);
    text(instrPg4, titleX, titleY + 80);
    
  } else if (pageNum == 5) {

    // Display title
    textSize(32);
    text(titlePg5, titleX, titleY);
    
  } else if (pageNum == 6) {
    // Display title
    textSize(32);
    text(titlePg6, titleX, titleY);
  }
}