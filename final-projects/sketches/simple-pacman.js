/*
Kristen Demarjian
HCDE 598A
Final Project
Simple Pacman Style Game
12.4.17
*/

//declare and initialize useful variables

canvasX = 800;
canvasY = 800;

var rad = 20; //the radius

var xspeed1 = 6.8;
var yspeed1 = 5.2

var xdirection1 = 1;
var ydirection1 = 1;


function setup() {
  createCanvas(canvasX, canvasY);

  //for some reason it gave me an error if these variables were defined outside of set up

  //Pacman Variables
  circleX = 200;
  circleY = 200;
  startRadians = radians(30);
  endRadians = radians(335);
  xPosition = mouseX;
  yPosition = mouseY;


  //Dot variables
  dotX = 300;
  dotY = 300;
  
  //default score
  score = 0;
  
}

function draw() {

  background('navy');

  Score();

  Pacman(width / 2, height / 2);

  Dot();
  
  // Update the position of the Dot
  dotX = dotX + (xspeed1 * xdirection1);
  dotY = dotY + (yspeed1 * ydirection1);

  if (dotX > width - rad || dotX < rad) {
    xdirection1 *= -1;
  }
  if (dotY > height - rad || dotY < rad) {
    ydirection1 *= -1;
  }

  // check if pacman is touching dot
  var eat = dist(dotX, dotY, circleX, circleY);
  if (eat < 15) {
    // increase score by one
    score++;
  }

/*
//troubleshooting
print("dotX " + dotX);
print("dotY" + dotY);
print("circleX: " + circleX);
print("circleY: " + circleY);
*/
}


function Dot() {
  //Draw Dot
	stroke (random(200, 250), random(200, 250), random(200, 250));
  fill(200);
  strokeWeight(5);
  ellipse(dotX, dotY, rad, rad);
}


function Score() {
  // display score
  fill(255);
  noStroke();
  textSize(24);
  text("Score: " + score, 30, 50);
}



function Pacman(startX, startY) {

  fill(255, 255, 0);
  noStroke();
  arc(circleX, circleY, 100, 100, startRadians, endRadians, PIE);
  if (keyIsPressed) {
    if (keyCode == UP_ARROW) {
      circleY -= 7;
    } else if (keyCode == DOWN_ARROW) {
      circleY += 7;
    }
    if (keyCode == LEFT_ARROW) {
      circleX -= 7;
      fill(255, 255, 0);
      arc(circleX, circleY, 100, 100, startRadians, endRadians, PIE);
    } else if (keyCode == RIGHT_ARROW) {
      circleX += 7;
    }
  }
}