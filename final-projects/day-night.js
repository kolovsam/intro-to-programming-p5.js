/*Jenny Thai Nguyen
HCDE 598 - Intro to Programming
Final Project

This project features a day version and a night version of the same scene. 
When a key is pressed, the night version appears with a rain animation and
an appearance of stars. 

Overall, the graphic includes either the moon/star, clouds, a tree, a hill, 
a rock, and a flower. 

I used both var and const variables, parameters, for loops and if/else
statements for this program. I explored different shapes such as ellipses, 
arcs, vertexes, and rectangles. I also tried using translate and rotation 
effects as well as some math to figure out how to put together the stars.  

*/

//canvas dimensions;
var xSize = 600;
var ySize = 500;

//different colors used throughout the program
const DAY_COLOR = 'LightSkyBlue';
const NIGHT_COLOR = 'MidnightBlue';
const SUN = 'LightGoldenRodYellow';
const MOON = 'Moccasin';
const STEM = 'green';
const FLOWER = 'IndianRed';
const CLOUDS = 'white';
const DRAWING_LOGS = 'SaddleBrown';
const TREES = 'DarkOliveGreen';
const ROCK = 'DarkGrey';
const RAINDROP = 'DarkCyan';
const STARS = 'Cornsilk';
const HILLS = 'RosyBrown';

//animation variables for raindrops falling
var xCoord = 100;
var yCoord = 100;
var rainSize = 10;

//variables for stars
var xStar = 2;
var yStar = 20;

//variables for clouds
var cloudSize = 55;


//star(75, 140, 2, 20, 3);

function setup() { 
  createCanvas(xSize, ySize);
	
} 

function draw() { 
  //calling out primary functions that calls out other functions
  nightDay();

//this function draws the sun
function drawSun() {
  background(DAY_COLOR);
  noStroke();
  fill(SUN);
  ellipse(90, 80, 100, 100);
  
}
  
//this function determines whether the day or night image is shown 
function nightDay() {
  if (keyIsPressed == true) {
  nightImage();
  } else {
  dayImage();
  
  }

}

function dayImage() {
  //calls out all functions for day background
  drawSun();
  drawClouds();
  drawRock();
  drawTree();
  drawFlower();    

	}
  
function nightImage() {
  //calls out all functions for night background
  drawMoon();
  drawStars();
  drawClouds();
  drawRock();
  drawTree();
  raindrops();
  drawFlower();
  
  }
  
function raindrops() {
  //rain animation
  fill(RAINDROP); 
	ellipse(xCoord+90, yCoord+70, rainSize, rainSize, rainSize);
 	ellipse(xCoord+200, yCoord+20, rainSize, rainSize, rainSize);
  ellipse(xCoord+250, yCoord+30, rainSize, rainSize, rainSize);
  ellipse(xCoord+400, yCoord+30, rainSize, rainSize, rainSize);
  ellipse(xCoord+370, yCoord+50, rainSize, rainSize, rainSize);
  ellipse(xCoord+425, yCoord+80, rainSize, rainSize, rainSize);
  ellipse(xCoord-10, yCoord+135, rainSize, rainSize, rainSize);
  ellipse(xCoord-40, yCoord+150, rainSize, rainSize, rainSize);
  //to control rain moving down starting from the clouds
  if (xCoord < 210) {
    yCoord = yCoord + 2.1; // move down
     
    }
}
  
function drawMoon() {
  background(NIGHT_COLOR);
  //drawing the moon
  fill(MOON);
	beginShape();
  stroke(2);
	vertex(30, 20);
	bezierVertex(100, 0, 80, 75, 30, 75);
	bezierVertex(50, 80, 60, 25, 30, 20);
	endShape();

}
  
function drawStars() {
  //drawing stars
  fill(STARS); //star color
  star(75, 140, xStar, yStar, xStar + 1);
  star(60, 100, xStar, yStar, xStar + 1); 
  star(130, 30, xStar, yStar, xStar + 1); 
  star(100, 60, xStar, yStar, xStar + 1); 
  star(200, 60, xStar, yStar, xStar + 1);
  star(240, 20, xStar, yStar, xStar + 1);
  star(400, 40, xStar, yStar, xStar + 1);
  star(420, 80, xStar, yStar, xStar + 1);
  star(450, 100, xStar, yStar, xStar + 1);  
  star(500, 170, xStar, yStar, xStar + 1);
  star(520, 200, xStar, yStar, xStar + 1);
}
  
function drawRock() {
  //drawing grey rock
	fill(ROCK); //grey
	arc(400, 500, 190, 130, PI, TWO_PI);
  //drawing brown hill
	fill(HILLS); //reddish brown
	arc(100, 500, 200, 130, PI, TWO_PI);

}
  
function drawClouds() {
	noStroke();
  fill(CLOUDS); //white
  
  //first cloud
  ellipse(300, 46, cloudSize, cloudSize);
  ellipse(340, 47, cloudSize, cloudSize);
  ellipse(330, 80, cloudSize, cloudSize);
  ellipse(370, 80, cloudSize, cloudSize);
  //second cloud
  ellipse(500, 120, cloudSize, cloudSize);
  ellipse(540, 100, cloudSize, cloudSize);
  ellipse(496, 80, cloudSize, cloudSize);
  ellipse(550, 130, cloudSize, cloudSize);
  //third cloud
  ellipse(200, 130, cloudSize + 15, cloudSize + 15);
  ellipse(250, 140, cloudSize + 15, cloudSize + 15);
  ellipse(210, 170, cloudSize + 15, cloudSize + 15);
	//fourth cloud
  ellipse(100, 235, cloudSize + 5, cloudSize + 5);
  ellipse(50, 230, cloudSize + 5, cloudSize + 5);
  ellipse(70, 190, cloudSize + 5, cloudSize + 5);
  //fifth cloud
  ellipse(440, 220, cloudSize, cloudSize);
  ellipse(420, 200, cloudSize, cloudSize);
  ellipse(400, 240, cloudSize, cloudSize);
  ellipse(380, 200, cloudSize, cloudSize);
  
		}
  
}

function drawFlower() {
  // A design for a flower
	//to move flower down and to the right  
  translate(400, 350);
  fill(STEM); // green color
  //drawing the stem
  rect(5, 20, 20, 150);
	fill(FLOWER); // red color
  //for loop to repeat petals of flowers
  for (var i = 0; i < 10; i ++) {
    ellipse(0, 50, 20, 79);
    rotate(PI/5);   
  }
 
}

function drawTree() {
  //draw log
  fill(DRAWING_LOGS); //brown color
	rect(170, 300, 50, 300);
  //draw leaves
  translate(4, 10);
  fill(TREES); //green color
  //leaves of the trees
  ellipse(230, 340, 100, 100);
  ellipse(160, 340, 70, 70);
  ellipse(150, 300, 100, 100);
  ellipse(230, 290, 100, 100);
	ellipse(230, 250, 80, 80);  
  ellipse(190, 250, 60, 60);
}
//drawing shape of the stars in the night background
function star(x, y, radius1, radius2, starPoints) {
  var angle = TWO_PI / starPoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
