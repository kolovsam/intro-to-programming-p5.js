//ForestQuest by Ben Galassi,December 2017
//A simple, interactive adventure game using P5.js
//Created for HCDE 598, Introduction to Programming
//Use left arrow, right arrow, and command to play


//SETUP FUNCTION
function setup() {
  createCanvas(1000, 700);
}



//THIS DEFINES THE PAGE NUMBER
var page = 1;

//THIS SECTION DEFINES IMPORTANT GLOBAL VARIABLES LIKE TREE AND ORB POSITION
var orbX1 = 700;
var orbWH1 = 50;
var orbX2 = 1000;
var orbWH2 = 50;
var scoreValue = 0;
var score = "Score: "
var lives = "Lives: "
var livesValue = 3;
var treeXPosition1 = 400;
var treeXPosition2 = 1000;
var spiritXPosition1 = 400;
var spiritXPosition2 = 1000;
var spiritWH1 = 10;
var spiritWH2 = 10;
var projectileX1 = 150;
var projectileX2 = 150;




//THIS SECTION CONTAINS THE CODE FOR PAGINATION CONTROL
//IT LOADS THE PROPER CHARACTER ONTO THE GAME SCREEN
function draw() {
  if (page == 1) {
    homeScreen();
  }
  if (page == 2) {
    gameScreen("wizard");
    
  }
  if (page == 3) {
    gameScreen("scientist");
  }
  if (page == 4) {
    gameScreen("cowboy");
  }
  //Loads the win or lose screens
  if (scoreValue == 15) {
    page = 1;
    scoreValue=0;
    winScreen();
  }
	  if (livesValue == 0) {
    page = 5;
    livesValue=3;
    scoreValue=0;
    loseScreen();
    }
}









//THIS SECTION CONTAINS THE CODE FOR THE HOME SCREEN AND CHARACTER SELECT
function homeScreen() {
  //Title text
  background(0);
  textSize(50);
  textAlign(CENTER);
  fill(255);
  text("Welcome to ForestQuest!", 500, 200)
  textSize(30);
  text("Please choose a character.", 500, 250)
  //Draws Wizard, Scientist, and Cowboy characters
  //Specifies scale (between 0 and 1)
  drawWizardHomeScreen(1);
  drawScientistHomeScreen(1, 0);
  drawCowboyHomeScreen(1, 0);
  fill(0);
  //Defines click boxes around characters to select
  if ((mouseX > 200) && (mouseX < 200 + 100) && (mouseY > 300) && (mouseY < 300 + 310) && (mouseIsPressed == true)) {
    page = 2;
  }
  if ((mouseX > 450) && (mouseX < 450 + 100) && (mouseY > 300) && (mouseY < 300 + 310) && (mouseIsPressed == true)) {
    page = 3;
  }
  if ((mouseX > 700) && (mouseX < 700 + 100) && (mouseY > 300) && (mouseY < 300 + 310) && (mouseIsPressed == true)) {
    page = 4;
  }
}

//THIS SECTION CONTAINS THE CODE FOR THE MAIN GAME SCREEN AND DYNAMIC INTERACTIONS
function gameScreen(character) {
  background(245);
  noStroke();
  rect(0,0,1000,325);
  stroke(0);
  strokeWeight(5);
  line(0, 325, 1000, 325);
  noStroke();
  //Calls all of the functions for drawing various game elements
  drawStars();
  drawTrees();
  drawOrbs();
  drawChar(character);
  drawSpirit();
  drawGrass();
  //Displays the lives and score
  strokeWeight(3);
  stroke(255);
  text(score,75,50);
  text(scoreValue,135,50);
	text(lives,75,100);
  text(livesValue,135,100);
  //Moves the background to make the character appear to be moving
  if (keyIsDown(RIGHT_ARROW)) {
    frameRate(60);
    treeXPosition1 -= 2;
    orbX1 -= 4;
  }
  if (keyIsDown(LEFT_ARROW)) {
    treeXPosition1 += 2;
    frameRate(60);
    orbX1 += 4;
  }
  //If key is down, create projectile and move towards ghost
	  if (keyIsDown(91)) {
		fill("blue");
    noStroke();
    ellipse(projectileX1,250,40,40);
      fill(0);
		projectileX1+=6;
      //If projectile hits ghost, set ghost back 2000 pixels
			if (projectileX1 > spiritXPosition1) {
				spiritXPosition1 = 2000;
				projectileX1 = projectileX2;
			}
  }
}


//THIS SECTION CONTAINS THE CODE FOR THE LOSE SCREEN
  function loseScreen() {
  background(0);
  textSize(50);
  textAlign(CENTER);
  fill(255);
  strokeWeight(1);
  text("YOU LOSE!", 500, 200)
  textSize(30);
  text("Please try again.", 500, 250)
}

  function winScreen() {
  background(0);
  textSize(50);
  textAlign(CENTER);
  fill(255);
  strokeWeight(1);
  text("YOU WIN!", 500, 200)
  textSize(30);
  text("Thanks for playing.", 500, 250)
}





  
//THIS SECTION DRAWS THE ORBS, STARS, GRASS, TREES, SPIRITS, AND CHARACTERS 

function drawOrbs() {
  fill("gold");
  strokeWeight(2);
  //Draws orbs that appear at equal intervals (1st at x=400, all following at x=1000)
  ellipse(orbX1,300,orbWH1,orbWH1);
  if (orbX1 == 160) {
      orbWH1 = 0;
      scoreValue++;
  ellipse(orbX2,300,orbWH2,orbWH2);
    orbX1 = orbX2
    orbWH1 = orbWH2
    }
}
          
function drawStars() {
  var starsX = [];
  var starsY = [];
  var starsW = [];
  var starsH = [];
  //Random seed randomizes star positions the first time, then prevents stars from redrawing with random values when draw() is called
  randomSeed(1);
  for (i=0;i<50;i++) {
    //Random position stars
    starsX[i] = random(0,1000);
    starsY[i] = random(0,325);
    starsW[i] = 3
    starsH[i] = 3
    fill(255);
    ellipse(starsX[i],starsY[i],starsW[i],starsH[i])
  }
}


function drawGrass() {
  fill(0);
  var grassX = 0
  randomSeed();
  for (i = 0; i < 1000; i++) {
    //Grass moves at 5 fps when character is still
    frameRate(5);
    grassX += 4
    strokeWeight(3);
    stroke("green");
    //Loads variable height grass across the screen
    var grassRandomHeight = random(0, 15);
    line(grassX, 325, grassX, 300 + grassRandomHeight)
  }
}

function drawTrees() {
  strokeWeight(2);
  fill(83,53,10);
  ////Draws trees that appear at equal intervals
  rect(treeXPosition1 + 25, 0, 50, 325);
  rect(treeXPosition1 + 100, 0, 50, 325);
  rect(treeXPosition1 + 350, 0, 50, 325);
  rect(treeXPosition1 + 500, 0, 50, 325);
  rect(treeXPosition1 + 750, 0, 50, 325);
  rect(treeXPosition1 + 900, 0, 50, 325);
  fill("green");
  stroke(0);
  strokeWeight(4);
  ellipse(treeXPosition1 + 50,20,270,200);
  ellipse(treeXPosition1 + 125,20,270,200);
  ellipse(treeXPosition1 + 375,20,270,200);
  ellipse(treeXPosition1 + 525,20,270,200);
  ellipse(treeXPosition1 + 775,20,270,200);
  ellipse(treeXPosition1 + 925,20,270,200);
  
  if (treeXPosition1 + 1500 < 0) {
  rect(treeXPosition2 + 0, 0, 50, 325);
  rect(treeXPosition2 + 100, 0, 50, 325);
  rect(treeXPosition2 + 300, 0, 50, 325);
  rect(treeXPosition2 + 500, 0, 50, 325);
  rect(treeXPosition2 + 700, 0, 50, 325);
  rect(treeXPosition2 + 900, 0, 50, 325);
  treeXPosition1 = treeXPosition2;
  }
}


function drawSpirit() {
  fill(255);
  strokeWeight(2);
  //Draws spirits that appear at equal intervals
  ellipse(spiritXPosition1,250,spiritWH1+30,spiritWH1+60);
  fill(0);
  ellipse(spiritXPosition1-10,240,spiritWH1,spiritWH1);
  ellipse(spiritXPosition1+10,240,spiritWH1,spiritWH1);
  ellipse(spiritXPosition1,260,spiritWH1+10,spiritWH1+7);
  spiritXPosition1-=16;
  if (spiritXPosition1 < 125) {
  spiritWH1 = 0;
  fill("red");
  rect(0,0,1000,325);
  ellipse(spiritXPosition2,250,spiritWH2+30,spiritWH2+60);
  fill(0);
  ellipse(spiritXPosition2-10,240,spiritWH2,spiritWH2);
  ellipse(spiritXPosition2+10,240,spiritWH2,spiritWH2);
  ellipse(spiritXPosition2,260,spiritWH2+10,spiritWH2+7);
  spiritXPosition1 = spiritXPosition2;
  spiritWH1 = spiritWH2;
	livesValue -= 1;
  }
}
  
//Simplifies pagination control by using character as a parameter
function drawChar(character) {
  if (character == "wizard") {
    drawWizardHomeScreen(0.5) 
  }
  if (character == "scientist") {
    drawScientistHomeScreen(0.5,125) 
  }
  if (character == "cowboy") {
    drawCowboyHomeScreen(0.5,250) 
  }
}












//THIS SECTION DRAWS ALL 3 CHARACTERS WITH SCALE AND XOFFSET PARAMETERS
function drawWizardHomeScreen(charScale) {
  //Select box
  noFill();
  noStroke();
  //rect(200 * charScale, 300 * charScale, 100 * charScale, 310 * charScale);
  //Body
  fill("indigo");
  ellipse(250 * charScale, 550 * charScale, 80 * charScale, 200 * charScale);
  //Face
  fill("tan");
  ellipse(250 * charScale, 470 * charScale, 100 * charScale, 100 * charScale);
  //Eyebrows
  strokeWeight(4);
  stroke("grey");
  line(220 * charScale, 455 * charScale, 240 * charScale, 455 * charScale);
  line(260 * charScale, 455 * charScale, 280 * charScale, 455 * charScale);
  strokeWeight(1);
  stroke(0);
  //Eyes
  fill("white");
  ellipse(230 * charScale, 470 * charScale, 20 * charScale, 20 * charScale);
  ellipse(270 * charScale, 470 * charScale, 20 * charScale, 20 * charScale);
  fill("black");
  ellipse(232 * charScale, 470 * charScale, 10 * charScale, 10 * charScale);
  ellipse(272 * charScale, 470 * charScale, 10 * charScale, 10 * charScale);
  //Hat
  fill("indigo");
  triangle(200 * charScale, 450 * charScale, 250 * charScale, 350 * charScale, 300 * charScale, 450 * charScale);
  stroke("yellow");
  strokeWeight(7);
  line(255 * charScale, 380 * charScale, 240 * charScale, 400 * charScale);
  line(240 * charScale, 400 * charScale, 255 * charScale, 420 * charScale);
  line(255 * charScale, 420 * charScale, 240 * charScale, 440 * charScale);
  //Beard
  strokeWeight(1);
  stroke(0);
  fill("grey");
  triangle(200 * charScale, 490 * charScale, 250 * charScale, 550 * charScale, 300 * charScale, 490 * charScale);
  //Mouth
  fill("black");
  ellipse(250 * charScale, 500 * charScale, 30 * charScale, 5 * charScale);
}

function drawScientistHomeScreen(charScale, xOffset) {
  //Select box
  noFill();
  strokeWeight(1);
  //rect(450 * charScale - xOffset, 300 * charScale, 100 * charScale, 310 * charScale);
  //Body
  fill("white");
  ellipse(500 * charScale - xOffset, 550 * charScale, 80 * charScale, 200 * charScale);
  //Face
  fill("tan");
  ellipse(500 * charScale - xOffset, 470 * charScale, 100 * charScale, 100 * charScale);
  //Eyes
  strokeWeight(1);
  fill("white");
  ellipse(480 * charScale - xOffset, 470 * charScale, 20 * charScale, 20 * charScale);
  ellipse(520 * charScale - xOffset, 470 * charScale, 20 * charScale, 20 * charScale);
  fill("black");
  ellipse(482 * charScale - xOffset, 470 * charScale, 10 * charScale, 10 * charScale);
  ellipse(522 * charScale - xOffset, 470 * charScale, 10 * charScale, 10 * charScale);
  //Glasses
  noFill();
  strokeWeight(2);
  ellipse(480 * charScale - xOffset, 470 * charScale, 30 * charScale, 30 * charScale);
  ellipse(520 * charScale - xOffset, 470 * charScale, 30 * charScale, 30 * charScale);
  line(495 * charScale - xOffset, 470 * charScale, 505 * charScale - xOffset, 470 * charScale);
  //Hair
  fill(200);
  strokeWeight(0);
  triangle(450 * charScale - xOffset, 450 * charScale, 475 * charScale - xOffset, 410 * charScale, 500 * charScale - xOffset, 450 * charScale);
  fill(200);
  triangle(500 * charScale - xOffset, 450 * charScale, 525 * charScale - xOffset, 415 * charScale, 550 * charScale - xOffset, 450 * charScale);
  fill(255);
  triangle(450 * charScale - xOffset, 450 * charScale, 500 * charScale - xOffset, 400 * charScale, 550 * charScale - xOffset, 450 * charScale);
  //Eyebrows
  strokeWeight(4);
  stroke(0);
  line(470 * charScale - xOffset, 450 * charScale, 490 * charScale - xOffset, 455 * charScale);
  line(510 * charScale - xOffset, 455 * charScale, 530 * charScale - xOffset, 450 * charScale);
  //Mouth
  fill(0);
  ellipse(500 * charScale - xOffset, 500 * charScale, 10 * charScale, 3 * charScale);
}

function drawCowboyHomeScreen(charScale, xOffset) {
  //Select box
  noFill();
  strokeWeight(1);
  //Body
  fill("red");
  ellipse(750 * charScale - xOffset, 550 * charScale, 80 * charScale, 200 * charScale);
  //Face
  fill("tan");
  ellipse(750 * charScale - xOffset, 470 * charScale, 100 * charScale, 100 * charScale);
  //Eyes
  strokeWeight(1);
  fill("white");
  ellipse(730 * charScale - xOffset, 470 * charScale, 20 * charScale, 20 * charScale);
  fill("black");
  ellipse(732 * charScale - xOffset, 470 * charScale, 10 * charScale, 10 * charScale);
  strokeWeight(2);
  line(760 * charScale - xOffset, 470 * charScale, 775 * charScale - xOffset, 470 * charScale);
  //Hat
  strokeWeight(0);
  fill(40, 26, 13);
  triangle(700 * charScale - xOffset, 425 * charScale, 725 * charScale - xOffset, 375 * charScale, 800 * charScale - xOffset, 425 * charScale);
  triangle(800 * charScale - xOffset, 425 * charScale, 780 * charScale - xOffset, 375 * charScale, 700 * charScale - xOffset, 425 * charScale);
  rect(680 * charScale - xOffset, 420 * charScale, 140 * charScale, 20 * charScale);
  //Star
  fill("gold");
  noStroke();
  triangle(730 * charScale - xOffset, 395 * charScale, 750 * charScale - xOffset, 415 * charScale, 770 * charScale - xOffset, 395 * charScale);
  triangle(730 * charScale - xOffset, 407 * charScale, 750 * charScale - xOffset, 385 * charScale, 770 * charScale - xOffset, 407 * charScale);
  //Eyebrows
  strokeWeight(4);
  stroke(40, 26, 13);
  line(720 * charScale - xOffset, 450 * charScale, 740 * charScale - xOffset, 450 * charScale);
  line(760 * charScale - xOffset, 455 * charScale, 780 * charScale - xOffset, 455 * charScale);
  //Mouth
  noFill();
  stroke(0);
  curve(730 * charScale - xOffset, 450 * charScale, 730 * charScale - xOffset, 500 * charScale, 760 * charScale - xOffset, 500 * charScale, 790 * charScale - xOffset, 450 * charScale);
  //Mustache
  stroke(40, 26, 13);
  ellipse(750 * charScale - xOffset, 490 * charScale, 50 * charScale, 3 * charScale);
  strokeWeight(4);
  line(725 * charScale - xOffset, 490 * charScale, 710 * charScale - xOffset, 505 * charScale);
  line(775 * charScale - xOffset, 490 * charScale, 790 * charScale - xOffset, 505 * charScale);
}