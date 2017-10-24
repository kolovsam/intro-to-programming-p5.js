function setup() {
  createCanvas(500, 500);
}

// Intiialize face size
var faceSize = 50;

// Intiialize variables for character 1
var char1FaceX = 25;
var char1FaceY = 25;
var eyes1X = 40;
var eyes1Y = 45;
var mouth1X = 50;
var mouth1Y = 60;

// Intiialize variables for character 2
var char2FaceX = 25;
var char2FaceY = 425;
var eyes2X = 40;
var eyes2Y = 445;
var mouth2X = 45;
var mouth2Y = 460;

// Intiialize variables for character 3
var char3FaceX = 425;
var char3FaceY = 25;
var eyes3X = 440;
var eyes3Y = 45;
var mouth3X = 445;
var mouth3Y = 65;

// Intiialize variables for character 4
var char4FaceX = 425;
var char4FaceY = 425;
var eyes4X = 440;
var eyes4Y = 445;
var mouth4X = 446;
var mouth4Y = 459;

function draw() {
  background('beige'); // Set background to beige

  // Draw character 1
  strokeWeight(2); // Draw face
  stroke('black');
  fill('lightblue');
  rect(char1FaceX, char1FaceY, faceSize, faceSize);

  strokeWeight(15);
  point(eyes1X, eyes1Y); // Draw right eye outline
  point(eyes1X + 20, eyes1Y); // Draw left eye
  strokeWeight(10);
  stroke('white');
  point(eyes1X, eyes1Y); // Draw right eye white fill
  point(eyes1X + 20, eyes1Y); // Draw left eye white fill
  strokeWeight(5);
  stroke('black');
  point(eyes1X, eyes1Y); // Draw right eye white fill
  point(eyes1X + 20, eyes1Y); // Draw left eye white fill

  ellipse(mouth1X, mouth1Y, 5); // Draw mouth

  // Draw character 2
  strokeWeight(2); // Draw face
  stroke('black');
  fill('lightpink');
  rect(char2FaceX, char2FaceY, faceSize, faceSize);

  strokeWeight(15);
  point(eyes2X, eyes2Y); // Draw right eye outline
  point(eyes2X + 20, eyes2Y); // Draw left eye
  strokeWeight(10);
  stroke('white');
  point(eyes2X, eyes2Y); // Draw right eye white fill
  point(eyes2X + 20, eyes2Y); // Draw left eye white fill
  strokeWeight(5);
  stroke('black');
  point(eyes2X, eyes2Y); // Draw right eye white fill
  point(eyes2X + 20, eyes2Y); // Draw left eye white fill

  line(mouth2X, mouth2Y, mouth2X + 10, mouth2Y); // Draw mouth

  // Draw character 3
  strokeWeight(2); // Draw face
  stroke('black');
  fill('lightgreen');
  rect(char3FaceX, char3FaceY, faceSize, faceSize);

  strokeWeight(15);
  point(eyes3X, eyes3Y); // Draw right eye outline
  point(eyes3X + 20, eyes3Y); // Draw left eye
  strokeWeight(10);
  stroke('white');
  point(eyes3X, eyes3Y); // Draw right eye white fill
  point(eyes3X + 20, eyes3Y); // Draw left eye white fill
  strokeWeight(5);
  stroke('black');
  point(eyes3X, eyes3Y); // Draw right eye white fill
  point(eyes3X + 20, eyes3Y); // Draw left eye white fill

  fill('black');
  strokeWeight(3);
  textSize(13);
  text("U", mouth3X, mouth3Y); // Draw mouth

  // Draw character 4
  strokeWeight(2); // Draw face
  stroke('black');
  fill('lavender');
  rect(char4FaceX, char4FaceY, faceSize, faceSize);

  strokeWeight(15);
  point(eyes4X, eyes4Y); // Draw right eye outline
  point(eyes4X + 20, eyes4Y); // Draw left eye
  strokeWeight(10);
  stroke('white');
  point(eyes4X, eyes4Y); // Draw right eye white fill
  point(eyes4X + 20, eyes4Y); // Draw left eye white fill
  strokeWeight(5);
  stroke('black');
  point(eyes4X, eyes4Y); // Draw right eye white fill
  point(eyes4X + 20, eyes4Y); // Draw left eye white fill

  rect(mouth4X, mouth4Y, 7, 5);

  // Create changes for the next re-draw for character #1
  if (char1FaceX < 135) {
    char1FaceX++;
    eyes1X++;
    mouth1X++;
  } else {
    char1FaceX = 135;
    eyes1X = 150;
    mouth1X = 160;
  }
  if (char1FaceY < 238) {
    char1FaceY++;
    eyes1Y++;
    mouth1Y++;
  } else {
    char1FaceY = 238;
    eyes1Y = 258;
    mouth1Y = 273;
  }

  // Create changes for the next re-draw for character #2
  if (char2FaceX < 195) {
    char2FaceX++;
    eyes2X++;
    mouth2X++;
  } else {
    char2FaceX = 195;
    eyes2X = 210;
    mouth2X = 215;
  }
  if (char2FaceY > 238) {
    char2FaceY--;
    eyes2Y--;
    mouth2Y--;
  } else {
    char2FaceY = 238;
    eyes2Y = 258;
    mouth2Y = 273;
  }

  // Create changes for the next re-draw for character #3
  if (char3FaceX > 255) {
    char3FaceX--;
    eyes3X--;
    mouth3X--;
  } else {
    char3FaceX = 255;
    eyes3X = 270;
    mouth3X = 275;
  }
  if (char3FaceY < 238) {
    char3FaceY++;
    eyes3Y++;
    mouth3Y++;
  } else {
    char3FaceY = 238;
    eyes3Y = 258;
    mouth3Y = 278;
  }

  // Create changes for the next re-draw for character #4
  if (char4FaceX > 315) {
    char4FaceX--;
    eyes4X--;
    mouth4X--;
  } else {
    char4FaceX = 315;
    eyes4X = 330;
    mouth4X = 336;
  }
  if (char4FaceY > 238) {
    char4FaceY--;
    eyes4Y--;
    mouth4Y--;
  } else {
    char4FaceY = 238;
    eyes4Y = 258;
    mouth4Y = 272;
  }

  // Add text box for when characters line up
  if (eyes1Y == 258 && eyes2Y == 258 && eyes3Y == 258 &&
    eyes4Y == 258) {
    strokeWeight(2);
    fill('white');
    rect(145, 155, 195, 50, 20)
    noStroke();
    fill('black');
    textSize(28);
    textStyle('bold');
    text("We're home!", 160, 190);
  }
}