/*
Hannah Nursalim
Final Project
Interactive Art Canvas
HCDE 598
*/

//constants for main colors
const BG_COLOR = "LightGrey";
const TEXT_COLOR_START_PAGE = "#006699";

//constants for messages
const START_WELCOME = "GET CREATIVE!";
const TYPE_KEY_TEXT = "Key types:"
const TYPE_C = "C = Clears the page"
const TYPE_P = "P = Penguin"
const TYPE_M = "M = Mickey pair"
const TYPE_Q = "Q = Rectangle"
const TYPE_R = "R = Random color overlay"
const TYPE_L = "L = Legend"
const MOUSE_TEXT = "Click the mouse for more surprises"
const START_KEY_TEXT = "Press C to Start";

//constants for canvas size
const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 600;

//constant for startPage()
const START_PAGE_X = CANVAS_WIDTH / 2
const START_PAGE_Y = CANVAS_HEIGHT / 6

//var for color
var r, g, b;

var lineX = 0;
var lineY = 50;
var lineXEnd = 5;

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  startPage();
  frameRate(0);
}

//only using draw function for beginning animation
/*I wanted to have an animation occuring based on a key typed
but because I'm running the code through setup I was unable
to make an animation happen. I tried using a for loop but
instead of an animation it would return the overall end product
of the animation.
*/
function draw() {
  line(lineX, lineY, lineXEnd, lineY);
  lineX+=5;
  lineXEnd +=5;
  if(lineX==width && lineXEnd==width){
  noLoop();
  }
}

//function for initial page & message
function startPage() {
  background(BG_COLOR);

  //text info
  fill(TEXT_COLOR_START_PAGE);
  strokeWeight(1);
  stroke(TEXT_COLOR_START_PAGE);
  textSize(50);
  textAlign(CENTER, CENTER);
  text(START_WELCOME, START_PAGE_X, START_PAGE_Y);
  legend();
  textSize(25);
  text(START_KEY_TEXT, START_PAGE_X, START_PAGE_Y + 400);
}

function legend(){
  
  //variables to create box for legend
  var boxX = CANVAS_WIDTH/6
  var boxY = CANVAS_HEIGHT/4
  var boxWidth = CANVAS_WIDTH - 200
  var boxHeight = CANVAS_HEIGHT - 300
  
  //box for legend
  fill(20, 30, 50, 215);
  noStroke();
  rect(boxX, boxY, boxWidth, boxHeight);
  
  //legend text
  fill(TEXT_COLOR_START_PAGE);
  strokeWeight(1);
  stroke(TEXT_COLOR_START_PAGE);
  textAlign(CENTER, CENTER);
  textSize(20);
  text(TYPE_KEY_TEXT, START_PAGE_X, START_PAGE_Y + 75);
  text(TYPE_C, START_PAGE_X, START_PAGE_Y + 115);
  text(TYPE_P, START_PAGE_X, START_PAGE_Y + 140);
  text(TYPE_M, START_PAGE_X, START_PAGE_Y + 165);
  text(TYPE_Q, START_PAGE_X, START_PAGE_Y + 190);
  text(TYPE_R, START_PAGE_X, START_PAGE_Y + 215);
  text(TYPE_L, START_PAGE_X, START_PAGE_Y + 240);
  text(MOUSE_TEXT, START_PAGE_X, START_PAGE_Y + 300);
}

//draws penguin with varying x, y, size and colors
function penguin(x, y, scale, feetColor, mainBodyColor, innerBodyColor) {
  stroke(feetColor);
  fill(feetColor);
  rect(x - (scale * 0.25), y + (scale * 0.45), scale * 0.2, scale * 0.075, scale * 0.025); //left foot (150, 290, 40, 15, 5)
  rect(x + (scale * 0.05), y + (scale * 0.45), scale * 0.2, scale * 0.075, scale * 0.025); //right foot (210, 290, 40, 15, 5)
  stroke(mainBodyColor);
  fill(mainBodyColor);
  ellipse(x, y, scale * 0.75, scale); //main body (200, 200, 150, 200)
  stroke(innerBodyColor);
  fill(innerBodyColor);
  ellipse(x, y + (scale * 0.125), scale * 0.575); //inner body (200, 225, 115)
  ellipse(x - (scale * 0.1), y - (scale * 0.325), scale * 0.1, scale * 0.15); //eyes (180, 135, 20, 30)
  ellipse(x + (scale * 0.1), y - (scale * 0.325), scale * 0.1, scale * 0.15); //eyes (220, 135, 20, 30)
  stroke(mainBodyColor);
  fill(mainBodyColor);
  ellipse(x - (scale * 0.085), y - (scale * 0.3), scale * 0.05, scale * 0.075); //pupil (183, 140, 10, 15)
  ellipse(x + (scale * 0.085), y - (scale * 0.3), scale * 0.05, scale * 0.075); //pupil (217, 140, 10, 15)
  stroke(mainBodyColor);
  fill(feetColor);
  triangle(x - (scale * 0.1), y - (scale * 0.175), x, y - (scale * 0.125), x + (scale * 0.1), y - (scale * 0.175)); //beak (180, 165; 200, 175; 220, 165)
}

//draws 2 Mickeys using for loop & array
function drawMickey() {
  
  //array to store Mickey variables
  var Mickey = [mouseX, mouseY, mouseX-15, mouseY-20, mouseX+15];
  
  //for loop to get 2 Mickeys
  for (i = 0; i < 600; i+=2) {
    noStroke();
    fill("#990000");
    ellipse(Mickey[0], Mickey[1], 35);
    ellipse(Mickey[2], Mickey[3], 15);
    ellipse(Mickey[4], Mickey[3], 15);
    Mickey[i]+=50
  }
}

//function to get a random color
function randomColor() {
  r = random(255);
  g = random(255);
  b = random(255);
}

//when mouse is moving, ellipse will travel with the mouse
function mouseMoved(){
  stroke(r, g, b, 120);
  strokeWeight(5);
  fill(r, g, b, 100);
  ellipse(mouseX, mouseY, 10);
}

//when mouse pressed draws random lines and ellipse
function mousePressed() {
  stroke(r, g, b, 120);
  strokeWeight(10);
  ellipse(mouseX, mouseY, 25, 25);
  randomColor();
  line(r, g, random(0, 600), random(0, 600));
}

//various keys will create some type of event
function keyTyped() {
  if (key == "q") {		//q = rectangle
    angleMode(DEGREES);
    rotate(random(180, 360));
    fill(r, g, b, 50);
    rect(mouseX, mouseY, random(50, 200), random(50, 150));
  } else if (key == "c") {		//c = clear canvas to original background color
    background(BG_COLOR);
  } else if (key == "p") {		//p = penguin
    
    //storing colors in array will then use random function
    //to select the color for each variable
    var feetColor = ["orange", "yellow", "red", "magenta"];
    var mainBodyColor = ["black", "blue", "green", "BlueViolet", "LightSlateGrey"];
    var innerBodyColor = ["white", "lavender", "honeydew", "LightCyan"];
    
    //variable to randomize size each time key typed
    var size = random(100, 200);
    penguin(mouseX, mouseY, size, random(feetColor),
      random(mainBodyColor), random(innerBodyColor));
    
  } else if (key == "m") {		//m = Mickey pair
    drawMickey();
  } else if (key == "r"){			//r = random background color
    background(r, g, b, 50);
  } else if (key == "l"){			//l = legend (what keys do)
    legend();
  }
}