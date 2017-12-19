/*
Elizabeth Quepons
HCDE 598A
Final Project: Puck Game 
*/

//Puck Coordinates
var xCoord = 100;
var yCoord = 0;

//Puck Speeds
var xSpeed = 3
var ySpeed = 3;

//Puck Size
var x = 30;
var y = 30;
var length = 55;


// Color of Puck
var r = 0;
var g = 0;
var b = 0;

//Score
var score = 0;

var colorBg = 200;

var textScore = "Current Score ";

function setup() {    
  createCanvas(500, 500);

}

function draw() {    
  background(colorBg);     
  noStroke(); 

  //Drawing the puck         
  fill(r, g, b);   
  ellipse(xCoord, yCoord, x, y);   

  //Puck Movement      
  puckMove();   

  //Score tracker
  scoreTracker();     

  //"Paddle" movement and color   
  paddleMove();

}

function scoreTracker() {

  fill('white');  
  textSize(20);  
  text(textScore + " = " + score, 300, 50); 

}

function paddleMove() {

  fill('black');  
  rect(mouseX, height - 10, length, 10);

}

function puckMove() {

  xCoord = xCoord + xSpeed;    
  yCoord = yCoord + ySpeed;      
  if (xCoord >= width - x || xCoord <= x) {        
    xSpeed = xSpeed * (-1); //puck changing direction

            
  } else if (yCoord <= 0) {        
    ySpeed = ySpeed * (-1); //puck changing direction
            
  } else if (yCoord >= height + y) {  // puck moving       
    xSpeed = 0;        
    ySpeed = 0;    
    //Game Over
    xCoord = -10;    
    yCoord = -10;      
    colorBg = 0;    
    textScore = "Final Score";  
  }      
  else if (yCoord >= (height - (y * 1)) && xCoord >= mouseX && xCoord <= (mouseX + length)) {     
    score = score + 1; // ball touching "paddle"

//Changing the color of the puck when it hits the "paddle"
    r = random(0, 255);    
    g = random(0, 255);    
    b = random(0, 255);
    ellipse(xCoord, yCoord, x, y);   

    ySpeed = ySpeed * (-1);    
    xSpeed = xSpeed * (-1);

  }
}